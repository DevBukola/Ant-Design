import React from "react";
import "./table.css";
import { Table } from "antd";
import Column from "antd/es/table/Column";

function AntTable() {
  const data = [
    {
      name: "Name 1",
      age: 16,
      address: "Address 1",
      key: "1",
    },
    {
      name: "Name 2",
      age: 18,
      address: "Address 2",
      key: "2",
    },
    {
      name: "Name 3",
      age: 22,
      address: "Address 3",
      key: "3",
    },
    {
      name: "Name 4",
      age: 24,
      address: "Address 4",
      key: "4",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Graduated?",
      key: "key",
      render: (payload) => {
        return <p>{payload.age > 20 ? "True" : "False"}</p>;
      },
    },
  ];

  return (
    <div id="table-wrapper">
      <h1>Table</h1>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
}

export default AntTable;
