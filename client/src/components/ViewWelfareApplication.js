import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const ViewWelfareApplication = ({ selectedData }) => {
  const welfareFormData = selectedData.welfare;
  const serviceFormData = selectedData.service;

  return (
    <div>
      <fieldset>
        <Container>
          <h3 className="border3">Welfare Form</h3>
        </Container>
        <Container className="border">
          {/* <div className="legend">Patient Profile</div> */}

          <Row>
            <Col sm className="text-left">
              <label>Token Number</label>
              <div>{welfareFormData.TokenNo}</div>
            </Col>
            <Col sm className="text-left">
              <label>Welfare Date</label>
              <div>{welfareFormData.WelfareDate}</div>
            </Col>
          </Row>
        </Container>
      </fieldset>

      {/* //================================Second Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Contact</div>
          <Row>
            <Col sm className="text-left">
              <label>Profession</label>
              <div>{welfareFormData.Profession}</div>
            </Col>
            <Col sm className="text-left">
              <label>Education</label>
              <div>{welfareFormData.Education}</div>
            </Col>
            <Col sm className="text-left">
              <label>Fiqa</label>
              <div>{welfareFormData.Fiqa}</div>
            </Col>
            <Col sm className="text-left">
              <label>Cast</label>
              <div>{welfareFormData.Cast}</div>
            </Col>
          </Row>
        </Container>
        {/* </Container> */}
      </fieldset>
      {/* //================================Third Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Requestor Info</div>
          <Row>
            <Col sm className="text-left">
              <label>Requester Name</label>
              <div>{welfareFormData.ReqName}</div>
            </Col>
            <Col sm className="text-left">
              <label>Relation With Patient</label>
              <div>{welfareFormData.ReqRelationWithPatient}</div>
            </Col>
            <Col sm className="text-left">
              <label>Male Kids</label>
              <div>{welfareFormData.MaleKids}</div>
            </Col>
            <Col sm className="text-left">
              <label>Female Kids</label>
              <div>{welfareFormData.FemaleKids}</div>
            </Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>Requester Phone</label>
              <div>{welfareFormData.ReqPhone}</div>
            </Col>
            <Col sm className="text-left">
              <label>Guardian</label>
              <div>{welfareFormData.Guardian}</div>
            </Col>
            <Col sm className="text-left">
              <label>Other Kids</label>
              <div>{welfareFormData.OtherKids}</div>
            </Col>
            <Col sm className="text-left">
              <label>Brothers</label>
              <div>{welfareFormData.Brothers}</div>
            </Col>
          </Row>
          {/* ----------------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>Monthly Income</label>
              <div>{welfareFormData.MonthlyIncome}</div>
            </Col>
            <Col sm className="text-left">
              <label>Other Info</label>
              <div>{welfareFormData.OtherInfo}</div>
            </Col>
            <Col sm className="text-left">
              <label>Sisters</label>
              <div>{welfareFormData.Sisters}</div>
            </Col>
            <Col sm className="text-left">
              <label>Total Family Members</label>
              <div>{welfareFormData.NoOFFamilyMembers}</div>
            </Col>
          </Row>
        </Container>
      </fieldset>
      {/* //================================Forth Portion=========================================  */}
      <fieldset>
        <Container className="border">
          <div className="legend">Staff Info</div>
          <Row>
            <Col sm className="text-left">
              <label>
                {welfareFormData.IsMarried ? (
                  <FaCheck fontSize={20} color="green" />
                ) : (
                  <ImCross fontSize={15} color="green" />
                )}{" "}
                Married
              </label>
            </Col>
            <Col sm className="text-left">
              <label>
                {welfareFormData.IsEarning ? (
                  <FaCheck fontSize={20} color="green" />
                ) : (
                  <ImCross fontSize={15} color="green" />
                )}{" "}
                Is Earning
              </label>
            </Col>
            <Col sm className="text-left">
              <label>
                {welfareFormData.HaveGold ? (
                  <FaCheck fontSize={20} color="green" />
                ) : (
                  <ImCross fontSize={15} color="green" />
                )}{" "}
                Have Gold
              </label>
            </Col>
            <Col sm className="text-left">
              <label>
                {welfareFormData.IsAbleToPay ? (
                  <FaCheck fontSize={20} color="green" />
                ) : (
                  <ImCross fontSize={15} color="green" />
                )}{" "}
                Is Able to Pay
              </label>
            </Col>
          </Row>
        </Container>
      </fieldset>
      <fieldset>
        <Container className="border">
          <div className="legend">Details</div>

          <Row>
            <Col sm className="text-left">
              <label>Name</label>
            </Col>
            <Col sm className="text-left">
              <label>Relation With Patient</label>
            </Col>
            <Col sm className="text-left">
              <label>Monthly Income</label>
            </Col>
          </Row>
          {welfareFormData.details?.map((detail, ind) => (
            <Row>
              <Col sm className="text-left">
                <div>{detail.MemberName}</div>
              </Col>
              <Col sm className="text-left">
                <div>{detail.RelationWithPatient}</div>
              </Col>
              <Col sm className="text-left">
                <div>{detail.MonthlyIncome}</div>
              </Col>
            </Row>
          ))}
        </Container>
      </fieldset>

      <fieldset>
        <Container>
          <h3 className="border3">Service Form</h3>
        </Container>
        <Container className="border">
          {/* <div className="legend">Patient Profile</div> */}

          <Row>
            <Col sm className="text-left">
              <label>Ward</label>
              <div>{serviceFormData?.Ward}</div>
            </Col>
            <Col sm className="text-left">
              <label>Bed #</label>
              <div>{serviceFormData?.Bed}</div>
            </Col>
          </Row>
        </Container>
      </fieldset>

      <fieldset>
        <Container className="border">
          <div className="legend">Test Details</div>

          <Row>
            <Col sm className="text-left">
              <label>Test Code</label>
            </Col>
            <Col sm className="text-left">
              <label>Test Description</label>
            </Col>
            <Col sm className="text-left">
              <label>Cost</label>
            </Col>
          </Row>
          {serviceFormData?.TestDetails.map((detail, ind) => (
            <Row>
              <Col sm className="text-left">
                <div>{detail.TestCode}</div>
              </Col>
              <Col sm className="text-left">
                <div>{detail.TestDescription}</div>
              </Col>
              <Col sm className="text-left">
                <div>{detail.Cost}</div>
              </Col>
            </Row>
          ))}
        </Container>
      </fieldset>
    </div>
  );
};

export default ViewWelfareApplication;
