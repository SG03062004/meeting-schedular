import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.BASE_URL || ""; // Ensure baseUrl is properly defined

export const Email = ({
  userFirstName,
  duration,
  meetingTime,
  date,
  meetingUrl,
  businessName,
  loginIp, // ✅ Added missing prop
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Yelp recent login</Preview>
        <Container>

          <Section style={content}>

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {userFirstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Thank you for scheduling a meeting with {businessName}.
                </Heading>
                <Text style={paragraph}>
                  <b>Time: </b> {meetingTime}
                </Text>
                <Text style={paragraph}>
                  <b>Date: </b> {date}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Location: </b> <a href={meetingUrl}>{meetingUrl}</a>
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Duration: </b> {duration}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Please Join meeting on above details. {loginIp}
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={buttonContainer} colSpan={2}>
                <Button style={button}>Join Now</Button>
              </Column>
            </Row>
          </Section>


          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105, U.S.A. |
            <a href="https://www.yelp.com"> www.yelp.com</a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

// ✅ Styles
const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const buttonContainer = {
  display: "flex",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  margin: "0 auto",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
