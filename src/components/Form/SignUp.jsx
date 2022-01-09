import React, { useState } from "react";
import Card from "../UI/Card";
import { Form, Input, Button } from "antd";

import "./SignUp.css";

const SignUp = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const pswChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUser({ enteredName, enteredEmail, enteredPassword });
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPassword("");

    console.log(enteredName, enteredEmail, enteredPassword);
  };

  return (
    <>
      <div id="form">
        <Card>
          <h1 className="heading">Login Form</h1>
          <Form
            className="login-form"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <Form.Item label="Username">
              <Input
                placeholder="Username"
                value={enteredName}
                onChange={nameChangeHandler}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                placeholder="email"
                required
                value={enteredEmail}
                onChange={emailChangeHandler}
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                placeholder="password"
                value={enteredPassword}
                onChange={pswChangeHandler}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 5,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                onClick={submitHandler}
                disabled={!enteredName || !enteredEmail || !enteredPassword}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default SignUp;
