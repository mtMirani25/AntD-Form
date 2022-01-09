import React, { useState } from "react";
import SignUp from "./components/Form/SignUp";
import FormTable from "./components/Table/FormTable";

const App = () => {
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
    setDataSource((prev) => {
      return prev.filter((user) => user.id !== record.id);
    });
  };

  return (
    <>
      <SignUp onAddUser={addUserHandler} />
      <section id="table">
        <FormTable dataSource={dataSource} onDelete={deleteUserHandler} />
      </section>
    </>
  );
};

export default App;
