import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../config";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const List = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  if (!isLogin) {
    history.push("/");
  }

  const GetAllPatients = () => {
    axios
      .get(API_BASE + "/registration/all")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data.patients);
      })
      .catch((err) => console.log(err));
  };;

  useEffect(() => {
    GetAllPatients();
  }, []);

  const GoToWelfare = (id) => {
    history.push("/welfare/" + id);
  };

  const DeleteUser = (id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      axios
        .delete(API_BASE + "/registration/delete/" + id)
        .then((res) => {
          setMsg("Patient deleted successfully");
          GetAllPatients();
        })
        .catch((err) => {
          setMsg(err);
        });
    }
  };

  return (
    <div className="pt-5">
      <Container className="pt-5">
        <h1 className="heading">Patients List</h1>
      </Container>
      <Container>
        <div>{msg !== "" ? <Alert variant="success">{msg}</Alert> : null}</div>
        <Row className="row-border pb-2">
          <Col>
            <label>MR #</label>
          </Col>
          <Col>
            <label>Patient Name</label>
          </Col>
          <Col>
            <label>Father/Husband Name</label>
          </Col>
          <Col></Col>
        </Row>
        {users.map((user, ind) => (
          <Row key={ind} className="row-border py-2">
            <Col>{user.MRNo}</Col>
            <Col>{user.Name}</Col>
            <Col>{user.FatherOrHusband}</Col>
            <Col>
              <Button
                variant="success"
                className=" btn-small mx-1"
                onClick={() => history.push("/edit-patient/" + user._id)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className=" btn-small mx-1"
                onClick={() => DeleteUser(user._id)}
              >
                Delete
              </Button>
              <Button
                variant="dark"
                className=" btn-small mx-1"
                onClick={() => history.push("/welfare/" + user._id)}
              >
                Welfare
              </Button>
              <Button
                variant="dark"
                className=" btn-small mx-1"
                onClick={() => history.push("/welfare/" + user._id)}
              >
                View
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default List;
