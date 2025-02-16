import React, { useState } from "react";
import "antd/dist/reset.css";
import "./spin.css";
import { Spin, Button } from "antd";

function AntSpin() {
  const [loading, setLoading] = useState(false);
  return (
    <div id="spin-wrapper">
      <h1>Spin</h1>
      <div className="spin">
        <Spin spinning={loading}></Spin>
        <Button
          onClick={() => {
            setLoading((preValue) => !preValue);
          }}
        >
          Open Spinning
              </Button>
              <Spin spinning={loading}>
                  <p>Hello, how are you doing?</p>
                  <p>Well-done!</p>
              </Spin>
      </div>
    </div>
  );
}

export default AntSpin;
