import React from "react";
import "antd/dist/reset.css";
import "./input.css";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

function AntInput() {
  return (
    <div id="input-wrapper">
      <h1>Input</h1>
      <Input
        placeholder="Name"
        maxLength={15}
        prefix={<UserOutlined />}
        allowClear
      ></Input>
      <Input.Search placeholder="Search" maxLength={10} allowClear></Input.Search>
      <Input placeholder="Password" maxLength={10} type="password" allowClear></Input>
    </div>
  );
}

export default AntInput;
