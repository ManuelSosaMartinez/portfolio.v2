import { Button, Card, Divider, Image, List, Space } from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import patricianImg from "./../media/patrician.jpeg";
import miHogarImg from "./../media/miHogar.png";
import cooldelImg from "./../media/cooldel.png";
import lapMarketplaceImg from "./../media/lapMarketplace.png";

const Work = ({ projectRefs }) => {
  const projects = [
    {
      key: "miHogar",
      name: "Mi Hogar",
      description: (
        <Text>
          Mi Hogar is a software made for rental management - for both landlord
          and tenant - that runs in both web and mobile. The mobile application,
          built upon React Native, is used by the tenant to pay their bills,
          report relevant issues, receive messages from the landlord and similar
          events. The web application, built automatically with AdminBro,
          connects to a NestJS server to allow the landlord to upload bills for
          the tenant to pay, check and answer issues and so on. All this data is
          stored in a postgreSQL server, connected to the NestJS backend through
          TypeORM
        </Text>
      ),
      img: miHogarImg,
      ref: projectRefs.miHogarRef,
    },
    {
      key: "cooldel",
      name: "Cooldel",
      description: (
        <Space direction="vertical">
          <Text>
            Cooldel is a web application for grocery delivery in Canada. It
            features a web admin panel exclusive for shop owners, built with
            React, and a web for customers, built with both React and Shopify's
            Liquid. It also features a NestJS server, integrated with
            ElasticSearch for saving and manipulating products data, and TypeORM
            - mySQL for vendors data.
          </Text>
          <Button type="link" href="https://www.cooldel.com" target="_blank">
            Take a look!
          </Button>
        </Space>
      ),
      img: cooldelImg,
      ref: projectRefs.cooldelRef,
    },
    {
      key: "lapMarketplace",
      name: "Lap",
      description: (
        <Space direction="vertical">
          <Text>
            Lap Marketplace is a website made to easily connect South America
            vendors to global marketplaces like Amazon, Ebay or Walmart. Clients
            only have to upload their products once to the web, and Lap takes
            care of publishing, selling and shipping, while providing clients
            useful marketing data. The web is built on React, and the backend is
            a NestJS - TypeORM - mySQL stack.
          </Text>
          <Button
            type="link"
            href="https://www.lapmarketplace.com/"
            target="_blank"
          >
            Check Lap's homepage
          </Button>
        </Space>
      ),
      img: lapMarketplaceImg,
      ref: projectRefs.lapMarketplaceRef,
    },
    {
      key: "patrician",
      name: "Patrician",
      description: (
        <Text>
          Patrician is a personal project of mine. It's a multiplayer mobile
          game about taking control of a city via economic pressure. My
          objective with this game is to learn and have fun at the same time.
          I'm developing the app in React Native to try and reach the language's
          maximum potential; and building a GraphQL API in NestJS to settle my
          knowledge about GraphQL. Finally, I'm using MongoDB as the database
          just to alter the SQL standard.
        </Text>
      ),
      img: patricianImg,
      ref: projectRefs.patricianRef,
    },
  ];

  return (
    <>
      <div className="page">
        <Title>Check my latest work!</Title>
        <List
          style={{ margin: "0px 5vw" }}
          dataSource={projects}
          pagination={false}
          grid={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2, gutter: 24 }}
          renderItem={(item) => (
            <List.Item key={item.key}>
              <Image
                onClick={() => {
                  if (item.ref.current) {
                    item.ref.current.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                }}
                preview={{
                  visible: false,
                  mask: (
                    <Title
                      style={{
                        color: "white",
                        backgroundColor: "#00000086",
                        padding: 8,
                      }}
                    >
                      {item.name}
                    </Title>
                  ),
                }}
                src={item.img}
              ></Image>
            </List.Item>
          )}
        />
      </div>
      {projects.map((project) => (
        <div key={project.key} ref={project.ref}>
          <Divider />
          <Card
            style={{
              width: "90%",
              margin: "50px auto",
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
            cover={
              <Image
                style={{
                  width: "100%",
                }}
                preview={false}
                src={project.img}
              ></Image>
            }
          >
            <Divider style={{ borderTopColor: "black" }}>
              <Title style={{ margin: 0 }} level={2}>
                {project.name}
              </Title>
            </Divider>
            {project.description}
          </Card>
        </div>
      ))}
    </>
  );
};

export default Work;
