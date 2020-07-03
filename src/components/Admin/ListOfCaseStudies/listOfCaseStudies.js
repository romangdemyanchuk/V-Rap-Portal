/* eslint-disable */
import React from "react";
import "./listOfCaseStudies.css";
import { Table } from "antd";

const ListOfResearchers = () => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "VR File",
      dataIndex: "vr_file",
      key: "vr_file",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Created at",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Location",
      key: "location",
      dataIndex: "location",
    },
    {
      title: "Age",
      key: "age",
      dataIndex: "age",
    },
    {
      title: "Average Income",
      key: "average",
      dataIndex: "average",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Participated",
      key: "participated",
      dataIndex: "participated",
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
      title: "Case Study 1",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "35-60",
      average: "All",
      status: "Pending",
      participated: "0/200",
      actions: "Edit/Delete",
    },
    {
      key: "2",
      title: "Case Study 2",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "21-30",
      average: "All",
      status: "In progress",
      participated: "15/100",
      actions: "Edit/Results",
    },
    {
      key: "3",
      title: "Case Study 3",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "18-21",
      average: ">35,000",
      status: "To be revised",
      participated: "0/50",
      actions: "Edit",
    },
    {
      key: "4",
      title: "Case Study 4",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "30-40",
      average: ">45,000",
      status: "Pending",
      participated: "0/50",
      actions: "Edit",
    },
    {
      key: "5",
      title: "Case Study 5",
      vr_file: "Download",
      created: "21th of June, 2020",
      location: "USA, Canada",
      age: "30-40",
      average: "30,000-90,000",
      status: "Completed",
      participated: "100/100",
      actions: "Edit",
    },
  ];
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="case-studies-wrapper">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  );
};
export default ListOfResearchers;
