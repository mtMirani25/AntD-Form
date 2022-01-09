import React from "react";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{
                color: "aqua",
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            />
            <DeleteOutlined
              onClick={() => {
                props.onDelete(record);
              }}
              style={{
                color: "red",
                marginLeft: "10px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={props.dataSource} />
    </>
  );
};

export default FormTable;
