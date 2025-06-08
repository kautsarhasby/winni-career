import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn("google")} className="hover:cursor-pointer">
        Sign in
      </Button>
    </>
  );
}
