import React from "react";
import "./select.css";
import { Select } from "antd";

function AntSelect() {
    const fruits = ['Banana', 'Apple', 'Mango', 'Orange', 'Cherry']
  return (
    <div id="select-wrapper">
          <h1 className="title">Select</h1>
          <div className="select">
              <p>Which is your favorite fruit?</p>
              <Select placeholder='Select fruit' style={{ width: '100%' }}>
                  {fruits.map((fruit, index) => {
                  return <Select.Option key={index} value={fruit}></Select.Option>
              })}
              </Select>
          </div>
          <div className="second-select">
              <p>Which are your favorite fruits?</p>
              <Select mode="multiple" maxTagCount={2} allowClear placeholder='Select fruits' style={{ width: '100%' }}>
                  {fruits.map((fruit, index) => {
                  return <Select.Option key={index} value={fruit}></Select.Option>
              })}
              </Select>
          </div>
    </div>
  );
}

export default AntSelect;
