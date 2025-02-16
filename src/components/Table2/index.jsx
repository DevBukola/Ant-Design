import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import "./table2.css";
import { Table } from "antd";

function AntSecondTable() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (firstrecord, secondrecord) => {
        return firstrecord.userId - secondrecord.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In progress"}</p>;
      },
      filters: [
        { text: "Complete", value: "true" },
        { text: "In progress", value: "false" },
      ],
      onFilter: (value, record) => {
        return record.completed === (value === "true");
      },
    },
  ];
  return (
    <div id="second-table-wrapper">
      <h1>Table Pagination, Sorting and Filters</h1>
      <div className="second-table">
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          //   pagination={true}
          pagination={{
            current: page,
            pageSize: pageSize,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            },
          }}
        ></Table>
      </div>
    </div>
  );
}

export default AntSecondTable;
