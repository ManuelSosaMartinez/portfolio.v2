import Title from "antd/lib/typography/Title";
import { LinkedinFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import { Space } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Contact = () => {
  const screens = useBreakpoint();

  const media = [
    {
      id: "linkedin",
      img: <LinkedinFilled style={{ fontSize: 60 }} />,
      label: "www.linkedin.com/in/manu-sm",
      href: "https://www.linkedin.com/in/manu-sm",
    },
    {
      id: "phone",
      img: <PhoneFilled style={{ fontSize: 60 }} />,
      label: "+54-9-351-2069604",
      href: "https://api.whatsapp.com/send?phone=+54%209%203512%2006-9604",
    },
    {
      id: "mail",
      img: <MailFilled style={{ fontSize: 60 }} />,
      label: "ManuelSosaMartinez99@gmail.com",
      href: "mailto:ManuelSosaMartinez99@gmail.com",
    },
  ];

  return (
    <div style={{ marginBottom: 150 }}>
      <Title style={{ paddingTop: 50, marginBottom: 50 }}>
        I'd love to talk with you!
      </Title>
      <Space direction={screens.xs ? "vertical" : "horizontal"} size={50}>
        {media.map((item) => (
          <div key={item.id}>
            <a href={item.href} target="_blank">
              {item.img}
            </a>
            <Title level={5}>{item.label}</Title>
          </div>
        ))}
      </Space>
    </div>
  );
};

export default Contact;
