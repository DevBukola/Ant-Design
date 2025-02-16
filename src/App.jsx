import { useState } from "react";
import "antd/dist/reset.css";
import "./App.css";
import { ConfigProvider } from "antd";

import AntButton from "@/components/Button";
import AntInput from "@/components/Input";
import AntSelect from "@/components/Select";
import AntForm from "@/components/Form";
import AntTable from "@/components/Table";
import AntDatePicker from "@/components/DatePicker";
import AntSpin from "@/components/Spin";
import AntProgress from "@/components/Progress";
import AntSecondTable from "@/components/Table2";
import AntThirdTable from "@/components/Table3";
import AntTodo from "@/components/Todo";

function App() {
  return (
    <ConfigProvider>
      <div className="app">
        <AntTodo />
        <AntButton />
        <AntInput />
        <AntSelect />
        <AntForm />
        <AntTable />
        <AntDatePicker />
        <AntSpin />
        <AntProgress />
        <AntSecondTable />
        <AntThirdTable />
      </div>
    </ConfigProvider>
  );
}

export default App;
