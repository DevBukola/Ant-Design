import React, { useState } from "react";
import "antd/dist/reset.css";
import "./progress.css";
import { Progress } from "antd";

function AntProgress() {
  return (
    <div id="progress-wrapper">
      <h1>Progress</h1>
      <div className="progress">
              <Progress percent={45} />
              <Progress percent={45} type="circle" />
              <Progress percent={45} type="line" strokeColor='purple' status="active" />
              <Progress percent={45} strokeColor='purple' strokeWidth={40} status="active" />
              <Progress percent={60} type="circle" status="success" />
              <Progress percent={45} type="circle" status="exception" />
              <Progress percent={45} type="line" status="exception"/>
              <Progress percent={60} type="line" status="success" />
              <Progress percent={45} type="line" steps={3}/>
      </div>
    </div>
  );
}

export default AntProgress;