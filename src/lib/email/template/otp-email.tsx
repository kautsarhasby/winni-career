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
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  fullname: string;
  otp: number;
}

export const EmailOTP = ({ fullname, otp }: EmailProps) => {
  const textStyles = {
    fontFamily: "Helvetica",
    fontSize: "12px",
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
            url: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
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
                  alt="Nama Icon"
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
                Halo saudara {fullname}.
              </Text>
              <Text style={textStyles}>
                Terimakasih sudah mendaftarkan akun kamu, untuk melanjutkan
                pendaftaran harap verifikasi emailmu terlebih dahulu menggunakan
                One-Time Password (OTP) berikut ini:
              </Text>
              <Text style={textStyles}>
                OTP ini hanya berlaku selama 5 menit harap digunakan sebaiknya.
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#333",
                  backgroundColor: "#eee",
                  padding: "10px 0",
                  borderRadius: "4px",
                  margin: "20px 0",
                }}
              >
                {otp}
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
                winnicareer@2025
              </Text>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
