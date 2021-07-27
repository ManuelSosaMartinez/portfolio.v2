import { Menu } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";

const MainNavigator = ({ refArray }) => {
  const [selected, setSelected] = useState(["0"]);

  const [isIntersecting, setIntersecting] = useState(refArray.map(() => false));

  const observers = refArray.map((ref, i) => {
    const observer = new IntersectionObserver(([entry]) => {
      const intersectingArray = isIntersecting;
      intersectingArray[i] = entry.isIntersecting;
      setIntersecting([...intersectingArray]);
    });
    return observer;
  });

  useEffect(() => {
    observers.forEach((observer, i) =>
      observer.observe(refArray[i].ref.current)
    );
    // Remove the observer as soon as the component is unmounted
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const key = isIntersecting.reduce(
      (prev, curr, i) => (curr && i > prev ? i : prev),
      0
    );

    setSelected([key.toString()]);
  }, [isIntersecting]);

  return (
    <div style={{ minWidth: 200 }}>
      <Title
        type="success"
        level={3}
        style={{ margin: 0, padding: 16, textAlign: "left" }}
      >
        Manuel
        <br /> Sosa
      </Title>
      <Menu
        selectedKeys={selected}
        // onSelect={(e) => setSelected(e.selectedKeys)}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
      >
        {refArray.map((ref, i) => (
          <Menu.Item
            onClick={() => {
              if (ref.ref.current) {
                ref.ref.current.scrollIntoView({ behavior: "smooth" });
              }
            }}
            key={i}
            icon={ref.icon}
          >
            {ref.title}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default MainNavigator;
