import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Column,
  Text,
  Hr,
  Font,
  Img,
  Button,
} from "@react-email/components";
import * as React from "react";

interface ResetPasswordEmailProps {
  fullname: string;
  resetLink: string;
}

export const ResetPasswordEmail = ({
  fullname,
  resetLink,
}: ResetPasswordEmailProps) => {
  const textStyles = {
    fontFamily: "Helvetica",
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#555",
  };

  const accentTextColor = "#2DAA9E";
  const accentBorderColor = "#AF289D";

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",
            format: "woff2",
          }}
        />
      </Head>
      <Body style={{ margin: "0", padding: "0", backgroundColor: "#f6f6ff" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <Section>
            <Column>
              <Text
                style={{
                  fontSize: "24px",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  textAlign: "left",
                  lineHeight: "1.2",
                  margin: "0",
                }}
              >
                <Img
                  src="https://winnicode.com/mazer/images/logo.png"
                  alt="Logo"
                  width="26"
                  style={{ verticalAlign: "middle", marginRight: "8px" }}
                />
                <span style={{ verticalAlign: "middle" }}>winnicareer.</span>
              </Text>
              <Hr
                style={{ borderColor: accentBorderColor, margin: "20px 0" }}
              />
            </Column>
          </Section>

          <Section>
            <Column>
              <Text
                style={{
                  ...textStyles,
                  textAlign: "center",
                  color: accentTextColor,
                  marginBottom: "10px",
                }}
              >
                Halo {fullname},
              </Text>
              <Text style={textStyles}>
                Kami menerima permintaan untuk mereset password akun Anda.
                Silakan klik tombol di bawah ini untuk membuat password baru:
              </Text>

              <Section style={{ textAlign: "center", margin: "20px 0" }}>
                <Button
                  href={resetLink}
                  style={{
                    backgroundColor: "#2DAA9E",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "6px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Reset Password
                </Button>
              </Section>

              <Text style={textStyles}>
                Link ini hanya berlaku selama 10 menit. Jika Anda tidak merasa
                meminta reset password, Anda bisa abaikan email ini.
              </Text>
            </Column>
          </Section>

          <Section>
            <Column>
              <Hr
                style={{ borderColor: accentBorderColor, margin: "20px 0" }}
              />
              <Text
                style={{
                  ...textStyles,
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#888",
                }}
              >
                &copy; 2025 winnicareer
              </Text>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
