import React, { useState } from "react";
import SignUp from "./components/Form/SignUp";

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
      const updatedUser = [...prevUser, newUser];
      return updatedUser;
    });
  };

  return (
    <>
      <SignUp onAddUser={addUserHandler} dataSource={dataSource} />
    </>
  );
};

export default App;
