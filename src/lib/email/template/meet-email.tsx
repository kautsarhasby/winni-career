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
  Link,
} from "@react-email/components";
import * as React from "react";

interface EmailCVPassedProps {
  fullname: string;
  meetingLink: string;
  scheduleDate: string; // format bebas: ex. "Senin, 10 Juli 2025"
  scheduleTime: string; // ex. "10.00 WIB"
}

export const EmailCVPassed = ({
  fullname,
  meetingLink,
  scheduleDate,
  scheduleTime,
}: EmailCVPassedProps) => {
  const textStyles = {
    fontFamily: "Helvetica",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  };

  const accentColor = "#2DAA9E";
  const borderAccent = "#AF289D";

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
      <Body style={{ margin: "0", padding: "0", backgroundColor: "#f9f9fb" }}>
        <Container
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "8px",
            maxWidth: "600px",
            margin: "20px auto",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <Section>
            <Column>
              <Text
                style={{
                  fontSize: "22px",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                <Img
                  src="https://winnicode.com/mazer/images/logo.png"
                  alt="Logo"
                  width="28"
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: 8,
                  }}
                />
                <span style={{ verticalAlign: "middle" }}>winnicareer.</span>
              </Text>
              <Hr style={{ borderColor: borderAccent, margin: "20px 0" }} />
            </Column>
          </Section>

          <Section>
            <Column>
              <Text
                style={{ ...textStyles, color: accentColor, fontWeight: 600 }}
              >
                Selamat {fullname}!
              </Text>
              <Text style={textStyles}>
                Kami dengan senang hati memberi tahu bahwa kamu telah{" "}
                <strong>lolos tahap screening CV</strong>.
              </Text>
              <Text style={textStyles}>
                Selanjutnya, kamu dijadwalkan untuk mengikuti sesi interview
                secara <strong>online</strong> melalui Google Meet.
              </Text>
              <Text style={textStyles}>
                Berikut detail jadwal interview kamu:
              </Text>

              <ul
                style={{
                  ...textStyles,
                  paddingLeft: "20px",
                  marginTop: "12px",
                  marginBottom: "20px",
                }}
              >
                <li>
                  <strong>Tanggal:</strong> {scheduleDate}
                </li>
                <li>
                  <strong>Waktu:</strong> {scheduleTime}
                </li>
                <li>
                  <strong>Link Meeting:</strong>{" "}
                  <Link
                    href={meetingLink}
                    target="_blank"
                    style={{ color: accentColor }}
                  >
                    {meetingLink}
                  </Link>
                </li>
              </ul>

              <Text style={textStyles}>
                Pastikan kamu hadir tepat waktu dan dalam kondisi siap untuk
                mengikuti interview.
              </Text>
            </Column>
          </Section>

          <Section>
            <Column>
              <Hr style={{ borderColor: borderAccent, margin: "24px 0" }} />
              <Text
                style={{
                  ...textStyles,
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#888",
                }}
              >
                © 2025 winnicareer • Email ini dikirim secara otomatis
              </Text>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
