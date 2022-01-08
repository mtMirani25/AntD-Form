import React from "react";
import { Table } from "antd";

const FormTable = (props) => {
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Username",
      dataIndex: "username",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Password",
      dataIndex: "password",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={props.dataSource} />
    </>
  );
};

export default FormTable;
