import { Card, Image, List, Skeleton, Space } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import reactImg from "../media/react.png";
import HTML5Img from "../media/HTML5.png";
import CSS3Img from "../media/css3.svg";
import NestJsImg from "../media/nestjs.png";
import PostgreSQLImg from "../media/postgresql.png";
import MongoDBImg from "../media/mongodb.jpeg";

import NodejsImg from "../media/node.png";
import SassImg from "../media/sass.png";
import LessImg from "../media/less.png";
import GitImg from "../media/git.jpg";
import AntDesignImg from "../media/ant.png";
import AdminBroImg from "../media/adminbro.svg";
import CImg from "../media/c.png";
import JavaImg from "../media/java.png";
import ScalaImg from "../media/scala.png";
import PythonImg from "../media/python.png";

const Skills = () => {
  const mainTechs = [
    { name: "ReactJS", img: reactImg, time: "~1 year" },
    { name: "HTML5", img: HTML5Img, time: "~1 year" },
    { name: "CSS3", img: CSS3Img, time: "~1 year" },
    { name: "NestJs", img: NestJsImg, time: "~six months" },
    { name: "PostgreSQL", img: PostgreSQLImg, time: "~six months" },
    { name: "MongoDB", img: MongoDBImg, time: "~six months" },
  ];
  const secondaryTechs = [
    { name: "Nodejs", img: NodejsImg },
    { name: "Sass", img: SassImg },
    { name: "Less", img: LessImg },
    { name: "Git", img: GitImg },
    { name: "Ant Design", img: AntDesignImg },
    { name: "AdminBro", img: AdminBroImg },
    { name: "C/C++", img: CImg },
    { name: "Java", img: JavaImg },
    { name: "Scala", img: ScalaImg },
    { name: "Python", img: PythonImg },
  ];

  const screens = useBreakpoint();

  return (
    <div className="page">
      <Title>I mainly work with</Title>
      <List
        style={{ margin: "0px 5vw" }}
        dataSource={mainTechs}
        pagination={false}
        grid={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3, gutter: 16 }}
        renderItem={(item) => (
          <List.Item>
            <Card
              bodyStyle={{ padding: "8px 0px", height: 100 }}
              hoverable
              cover={
                <Image
                  preview={false}
                  style={{ maxWidth: 150, margin: "auto" }}
                  src={item.img}
                ></Image>
              }
            >
              <Title level={3}>{item.name}</Title>
              <Text type="secondary">{item.time + " work experience"}</Text>
            </Card>
          </List.Item>
        )}
      />
      <Space direction={"vertical"}>
        <Title style={{ marginBottom: 0 }} type="secondary" level={3}>
          And many other tools and languages!
        </Title>
        <List
          style={{ margin: 16 }}
          dataSource={secondaryTechs}
          pagination={false}
          grid={{ xs: 5, sm: 5, md: 5, lg: 10, xl: 10, xxl: 10, gutter: 8 }}
          renderItem={(item) => (
            <List.Item>
              <Image
                preview={false}
                style={{ maxWidth: 100, margin: "auto", borderRadius: 50 }}
                src={item.img}
              ></Image>
            </List.Item>
          )}
        />
      </Space>
    </div>
  );
};

export default Skills;
