import { Button, Col, Image, Row, Space } from "antd";
import Text from "antd/lib/typography/Text";
import profileImg from "./../media/me.png";
import cv from "./../media/CVen-es.pdf";

const Info = ({ ref }) => {
  return (
    <div ref={ref} className="page">
      <Row style={{ paddingTop: 80 }} align="middle" justify="center">
        <Col
          style={{ textAlign: "left", marginBottom: 50 }}
          xs={24}
          sm={24}
          md={24}
          lg={10}
          xl={10}
          xxl={10}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 24px",
            }}
          >
            <Text
              italic="true"
              strong
              style={{ fontSize: 20, marginBottom: -20 }}
            >
              Hello there! I'm
            </Text>
            <Text type="success" className="info-name">
              Manuel
            </Text>
            <Text
              type="success"
              style={{ marginTop: "-40px" }}
              className="info-name"
            >
              Sosa
            </Text>
            <Text style={{ fontSize: 20 }}>
              I'm a 21 year old software developer and student, currently in the
              4th year of my career in Computer Science.
            </Text>
            <div>
              <Text style={{ fontSize: 20 }}>
                {" "}
                For the last 6 months I've been working as a
              </Text>
              <Text strong type="success" style={{ fontSize: 20 }}>
                {" "}
                Fullstack Software Developer
              </Text>
              <Text style={{ fontSize: 20 }}>
                {" "}
                on different teams and proyects.
              </Text>
            </div>
            <Text style={{ fontSize: 20 }}>
              Be it academically or work-related, my goal is to keep on
              learning. Let's talk!
            </Text>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          xl={10}
          xxl={10}
          style={{ marginBottom: 50 }}
        >
          <Space direction="vertical">
            <Image style={{ maxWidth: 400 }} preview={false} src={profileImg} />
            <Button type="primary" size="large" onClick={() => window.open(cv)}>
              Get my CV!
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
