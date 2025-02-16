import React from "react";
import "antd/dist/reset.css";
import "./datepicker.css";
import { DatePicker, TimePicker } from "antd";

function AntDatePicker() {
  return (
    <div id="datepicker-wrapper">
      <h1>Datepicker</h1>
      <div className="datepicker">
        <DatePicker picker="year"/>
        <DatePicker />
        <DatePicker.RangePicker />
        <TimePicker />
      </div>
    </div>
  );
}

export default AntDatePicker;
