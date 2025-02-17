import { useState } from "react";
import "antd/dist/reset.css";
import "./button.css";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

function AntButton() {
  const [loading, setLoading] = useState(false);
  const onButtonClick = (e) => {
    console.log("Button clicked!");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "https://www.google.com";
    }, 2000);
  };
  return (
    <div id="button">
      <h1 className="header">Ant-Design Practice</h1>
      <h1 className="title">Button</h1>
      <div className="header">
        <Button
          className="my-btn"
          type="primary"
          block
          loading={loading}
          icon={<PoweroffOutlined />}
          onClick={onButtonClick}
          // style={{width: '50%'}}
        >
          My First Button
        </Button>
      </div>
    </div>
  );
}

export default AntButton;