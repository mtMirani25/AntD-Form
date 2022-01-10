import React, { useState } from "react";
import SignUp from "./components/Form/SignUp";
import FormTable from "./components/Table/FormTable";
import { Modal, Input } from "antd";

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const [dataSource, setDataSource] = useState([
    {
      id: "1",
      key: "1",
      username: "John Smith",
      email: "john@gmail.com",
      password: "12abcd21",
    },
  ]);

  // function for add new user
  const addUserHandler = () => {
    setDataSource((prevUser) => {
      const newUser = {
        id: parseInt(Math.random() * 10),
        key: parseInt(Math.random() * 10),
        username: "John Smith",
        email: "john@gmail.com",
        password: "12abcd21",
      };
      return [...prevUser, newUser];
    });
  };

  // function for Delete previous user
  const deleteUserHandler = (record) => {
    Modal.confirm({
      title: "Are you sure to delete this user?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((user) => user.id !== record.id);
        });
      },
    });
  };

  // function for edit he existing user
  const editUserHandler = (record) => {
    setIsEditing(true);
    setEditUser({ ...record });
  };

  // function for reset the user
  const resetUser = () => {
    setIsEditing(false);
    setEditUser(null);
  };

  // onChange for Edit existing users
  const editNameHandler = (event) => {
    setEditUser((prev) => {
      return { ...prev, username: event.target.value };
    });
  };

  // onChange for Edit existing users
  const editEmailHandler = (event) => {
    setEditUser((prev) => {
      return { ...prev, email: event.target.value };
    });
  };

  // onChange for Edit existing users
  const editPswHandler = (event) => {
    setEditUser((prev) => {
      return { ...prev, password: event.target.value };
    });
  };

  const updateUserData = () => {
    setDataSource((prev) => {
      return prev.map((user) => {
        if (user.id === editUser.id) {
          return editUser;
        } else {
          return user;
        }
      });
    });
  };
  return (
    <>
      <SignUp onAddUser={addUserHandler} />
      <section id="table">
        <FormTable
          dataSource={dataSource}
          onDelete={deleteUserHandler}
          onEdit={editUserHandler}
        />
      </section>

      <Modal
        title="Edit user"
        cancelText="No"
        okText="Save"
        visible={isEditing}
        onCancel={() => resetUser()}
        onOk={() => {
          updateUserData();
          resetUser();
        }}
      >
        <Input
          value={editUser?.username}
          onChange={editNameHandler}
          style={{ marginBottom: "10px" }}
        />
        <Input
          value={editUser?.email}
          onChange={editEmailHandler}
          style={{ marginBottom: "10px" }}
        />
        <Input value={editUser?.password} onChange={editPswHandler} />
      </Modal>
    </>
  );
};

export default App;
