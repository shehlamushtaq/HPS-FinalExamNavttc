import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NewServiceForm = ({
  serviceFormData,
  setServiceFormData,
  handleSubmit,
  PrevStep,
  UpdateTestDetails,
  AddNewTest,
}) => {
  return (
    <>
      <fieldset>
        <Container>
          <h3 className="border3">Service Form</h3>
        </Container>
        <Container className="border">
          {/* <div className="legend">Patient Profile</div> */}

          <Row>
            <Col sm className="text-left">
              <label>Ward</label>
              <input
                type="text"
                placeholder=""
                value={serviceFormData.Ward}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    Ward: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Bed #</label>
              <input
                type="text"
                placeholder=""
                value={serviceFormData.Bed}
                onChange={(e) =>
                  setServiceFormData({
                    ...serviceFormData,
                    Bed: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Container>
      </fieldset>

      <fieldset>
        <Container className="border">
          <div className="legend">Test Details</div>
          <Row>
            <Col>
              <Button
                className="fl-right btn-small"
                variant="dark"
                onClick={AddNewTest}
              >
                Add
              </Button>
            </Col>
          </Row>
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
          {serviceFormData.TestDetails.map((detail, ind) => (
            <Row>
              <Col sm className="text-left">
                <input
                  type="text"
                  placeholder=""
                  value={detail.TestCode}
                  onChange={(e) =>
                    UpdateTestDetails(ind, "TestCode", e.target.value)
                  }
                />
              </Col>
              <Col sm className="text-left">
                <input
                  type="text"
                  placeholder=""
                  value={detail.TestDescription}
                  onChange={(e) =>
                    UpdateTestDetails(ind, "TestDescription", e.target.value)
                  }
                />
              </Col>
              <Col sm className="text-left">
                <input
                  type="text"
                  placeholder=""
                  value={detail.Cost}
                  onChange={(e) =>
                    UpdateTestDetails(ind, "Cost", e.target.value)
                  }
                />
              </Col>
            </Row>
          ))}
        </Container>
      </fieldset>
      <div className="d-flex">
        <Button
          onClick={() => PrevStep(1)}
          className="mx-auto mb-3"
          variant="success"
          size="lg"
        >
          Back To Welfare Form
        </Button>
        <Button
          onClick={handleSubmit}
          className="mx-auto mb-3"
          variant="success"
          type="submit"
          size="lg"
        >
          Save Patient Welfare Request
        </Button>
      </div>
    </>
  );
};

export default NewServiceForm;
