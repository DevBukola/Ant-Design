import React from "react";
import "./form.css";
import "antd/dist/reset.css";
import { Form, Input, Button, Checkbox } from "antd";
import { message } from "antd";

function AntForm() {
  const onFinish = (event) => {
    console.log("Form submitted:", event);
    console.log("Message component:", message);
    message.success("Login successful!");
  };
  return (
    <div id="form-wrapper">
      <h1 className="title">Form</h1>
      <div className="form">
        <Form onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="Username" required allowClear></Input>
          </Form.Item>
          <Form.Item label="User Password" name="password">
            <Input.Password
              placeholder="Password"
              required
              allowClear
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Checkbox required>Agree to terms and conditions?</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AntForm;
