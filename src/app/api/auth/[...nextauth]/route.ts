import NextAuth, {
  DefaultSession,
  DefaultUser,
  NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      fullname: string;
      email: string | null;
      role?: string;
      account_type?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    fullname: string | null;
    email: string | null;
    role?: string;
    account_type?: string;
    access_token?: string;
  }
}

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/auth/sign_in", signOut: "/auth/sign_out" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_API_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    CredentialsProvider({
      name: "Log in",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "winnicareer@exam.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your Password",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );
        if (!res.ok) {
          return null;
        }

        const data = await res.json();

        return {
          id: data.id,
          fullname: data.fullname,
          email: data.email,
          role: data.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        console.log("ACCOUNT:", account);
        token.accessToken = account.access_token;
      }
      if (user) {
        token.id = user.id;
        token.fullname = user.fullname;
        token.email = user.email;
        token.role = user.role;
        token.account_type = user.account_type;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.fullname = token.fullname as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.account_type = token.account_type as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return `${baseUrl}`;
    },
  },
  session: { strategy: "jwt", maxAge: 60 * 60 },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export const GET = handler;
export const POST = handler;
