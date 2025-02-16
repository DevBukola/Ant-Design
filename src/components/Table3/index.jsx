import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import "./table3.css";
import { Table, Tag } from "antd";

function AntThirdTable() {
  const [initialSelectedRows, setInitialSelectedRows] = useState(["1", "3"]);
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "Blue"
          : "Red";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "Smith",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Esther",
      grade: "B",
    },
    {
      key: "3",
      id: 3,
      name: "Anthony",
      grade: "A+",
    },
    {
      key: "4",
      id: 4,
      name: "David",
      grade: "B",
    },
    {
      key: "5",
      id: 5,
      name: "Nath",
      grade: "C",
    },
    {
      key: "6",
      id: 6,
      name: "Aliu",
      grade: "E",
    },
  ];
  return (
    <div id="third-table-wrapper">
      <h1>Table: How to select rows and customize</h1>
      <div className="third-table">
        <Table
          columns={columns}
          dataSource={dataSource}
          //   rowSelection={true}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: initialSelectedRows,
            onChange: (keys) => {
              setInitialSelectedRows(keys);
            },
            onSelect: (record) => {
              console.log({ record });
            },
            getCheckboxProps: (record) => ({}),
          }}
        ></Table>
      </div>
    </div>
  );
}

export default AntThirdTable;
