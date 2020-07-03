
/* eslint-disable */
import React from "react";
import "./listOfResearchers.css";
import { Table } from "antd";

const ListOfResearchers = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "School/Institution Name",
      dataIndex: "school_name",
      key: "age",
    },
    {
      title: "Area of Research",
      dataIndex: "area",
      key: "address",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text) => <a>{text}</a>,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Ada Lovelace",
      school_name: "MIT",
      area: "Area Name",
      actions: "Edit/Delete",
    },
    {
      key: "2",
      name: "Grace Hopper",
      school_name: "MIT",
      area: "Area Name",
      actions: "Edit/Delete",
    },
    {
      key: "3",
      name: "Margaret Hamilton",
      school_name: "UofT",
      area: "Area Name",
      actions: "Edit/Delete",
    },
    {
      key: "4",
      name: "Joan Clarke",
      school_name: "UofT",
      area: "UofT",
      actions: "Edit/Delete",
    },
  ];
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default ListOfResearchers;
