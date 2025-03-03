import "./App.less";
import { Affix, Button, Divider, Space } from "antd";
import { Layout } from "antd";
import { useRef, useState } from "react";
import {
  ToolOutlined,
  ProjectOutlined,
  UserOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import Info from "./components/Info";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import MainNavigator from "./components/Navigator";
import { Grid } from "antd";
const { Content, Sider } = Layout;
const { useBreakpoint } = Grid;

function App() {
  const infoRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const backstageRef = useRef(null);
  const miHogarRef = useRef(null);
  const cooldelRef = useRef(null);
  const lapMarketplaceRef = useRef(null);
  const resumaRef = useRef(null);
  const patricianRef = useRef(null);

  const refArray = [
    { ref: infoRef, icon: <UserOutlined />, title: "About me" },
    { ref: skillsRef, icon: <ToolOutlined />, title: "Technologies" },
    {
      ref: workRef,
      icon: <ProjectOutlined />,
      title: "Projects",
    },
    { title: "Backstage", ref: backstageRef },
    { title: "MiHogar", ref: miHogarRef },
    { title: "Cooldel", ref: cooldelRef },
    { title: "Lap Marketplace", ref: lapMarketplaceRef },
    { title: "Resuma", ref: resumaRef },
    { title: "Patrician", ref: patricianRef },
    { ref: contactRef, icon: <ContactsOutlined />, title: "Contact" },
  ];

  const projectRefs = {
    backstageRef: backstageRef,
    miHogarRef: miHogarRef,
    cooldelRef: cooldelRef,
    lapMarketplaceRef: lapMarketplaceRef,
    patricianRef: patricianRef,
    resumaRef: resumaRef,
  };

  const [collapsed, setCollapsed] = useState(true);
  const screens = useBreakpoint();

  return (
    <div className="App">
      <Layout>
        <Affix
          style={{
            position: screens.xs ? "absolute" : "initial",
            zIndex: collapsed ? 1 : 100,
          }}
          offsetTop={1}
        >
          <Space>
            <Sider
              collapsed={screens.xs && collapsed}
              collapsedWidth={"0px"}
              trigger={null}
              style={{
                marginTop: -1,
                overflow: "auto",
                height: "100vh",
                left: 0,
              }}
            >
              <MainNavigator refArray={refArray} />
            </Sider>
            {screens.xs && (
              <Button
                type="primary"
                onClick={() => setCollapsed(!collapsed)}
                icon={
                  collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />
                }
              />
            )}
          </Space>
        </Affix>
        <Layout className="site-layout">
          <Content>
            <div ref={infoRef}>
              <Info />
            </div>
            <Divider />
            <div ref={skillsRef}>
              <Skills />
            </div>
            <Divider />
            <div ref={workRef}>
              <Work projectRefs={projectRefs} />
            </div>
            <Divider />

            <div ref={contactRef}>
              <Contact />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
