import React, { useState, useEffect } from "react";
import { API_BASE } from "../config";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import axios from "axios";
import ViewWelfareApplication from "./ViewWelfareApplication";

const OldWelfareApplicationsList = ({ oldWelfares, oldServices }) => {
  const [selectedWelfare, setSelectedWelfare] = useState({});
  const [showModal, setShowModal] = useState(false);

  const InitViewWelfare = (welfare) => {
    const service = oldServices.filter(
      (service) => service.WelfareID === welfare._id
    )[0];

    setSelectedWelfare({ welfare, service });
    setShowModal(true);
  };

  return (
    <>
      <Container>
        {/* <h1 className="heading">List</h1> */}
        <Row className="row-border pb-2">
          <Col>
            <label>Welfare Application Date</label>
          </Col>
          <Col>
            <label>Token #</label>
          </Col>
          <Col>
            <label>Requester Name</label>
          </Col>
          <Col>
            <label>Requester Phone</label>
          </Col>

          <Col></Col>
        </Row>
        {oldWelfares.map((welfare, ind) => {
          return (
            <Row key={ind} className="row-border py-2">
              <Col>{welfare.WelfareDate.split("T")[0]}</Col>
              <Col>{welfare.TokenNo}</Col>
              <Col>{welfare.ReqName}</Col>
              <Col>{welfare.ReqPhone}</Col>
              <Col>
                <Button
                  variant="success"
                  className=" btn-small mx-1"
                  onClick={() => InitViewWelfare(welfare)}
                >
                  View
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="modal-size-xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Welfare Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewWelfareApplication selectedData={selectedWelfare} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OldWelfareApplicationsList;
