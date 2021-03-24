import React, { useState } from "react";
import { API_BASE } from "../config";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

const Login = () => {
  const isLogin = useSelector((state) => state.isLogin);

  console.log("isLogin:", isLogin);

  const dispatch = useDispatch();
  const history = useHistory();

  if (isLogin) {
    history.push("/list");
  }

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const DoLogin = () => {
    axios
      .post(API_BASE + "/admin/login", user)
      .then((res) => {
        if (res.data.st === 1) {
          dispatch({
            type: "ADMIN_LOGIN",
            payload: res.data.user,
          });
        } else {
          setMsg(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col xs={1} sm={2} md={3} xl={3}></Col>
        <Col xs={10} sm={8} md={6} xl={6} className="border">
          <Row>
            <Col className="heading2 p-2 text-center">Login</Col>
          </Row>
          <Row>
            <Col className="pb-3">
              <div>{msg}</div>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                />
                <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="success" block onClick={DoLogin}>
                Login
              </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={1} sm={2} md={3} xl={3}></Col>
      </Row>
    </Container>
  );
};

export default Login;
