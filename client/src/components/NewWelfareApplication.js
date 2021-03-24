import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NewWelfareApplication = ({
  welfareFormData,
  setwelfareFormData,
  NextStep,
  UpdateDetails,
  AddNewMember,
}) => {
  return (
    <>
      <fieldset>
        <Container>
          <h3 className="border3">Welfare Form</h3>
        </Container>
        <Container className="border">
          <Row>
            <Col sm className="text-left">
              <label>Token Number</label>
              <input
                type="Number"
                placeholder=""
                value={welfareFormData.TokenNo}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    TokenNo: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Welfare Date</label>
              <input
                type="Date"
                placeholder=""
                value={welfareFormData.WelfareDate}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    WelfareDate: e.target.value,
                  })
                }
              />
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
              <input
                type="text"
                placeholder=""
                value={welfareFormData.Profession}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Profession: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Education</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.Education}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Education: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Fiqa</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.Fiqa}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Fiqa: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Cast</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.Cast}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Cast: e.target.value,
                  })
                }
              />
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
              <input
                type="text"
                placeholder=""
                value={welfareFormData.ReqName}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    ReqName: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Relation With Patient</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.ReqRelationWithPatient}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    ReqRelationWithPatient: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Male Kids</label>
              <input
                type="Number"
                placeholder=""
                value={welfareFormData.MaleKids}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    MaleKids: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Female Kids</label>
              <input
                type="Number"
                placeholder=""
                value={welfareFormData.FemaleKids}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    FemaleKids: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>Requester Phone</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.ReqPhone}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    ReqPhone: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Guardian</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.Guardian}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Guardian: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Other Kids</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.OtherKids}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    OtherKids: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Brothers</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.Brothers}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Brothers: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
          {/* ----------------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>Monthly Income</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.MonthlyIncome}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    MonthlyIncome: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Other Info</label>
              <input
                type="text"
                placeholder=""
                value={welfareFormData.OtherInfo}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    OtherInfo: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Sisters</label>
              <input
                type="Number"
                placeholder=""
                value={welfareFormData.Sisters}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    Sisters: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Total Family Members</label>
              <input
                type="Number"
                placeholder=""
                value={welfareFormData.NoOFFamilyMembers}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    NoOFFamilyMembers: e.target.value,
                  })
                }
              />
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
              <input
                type="checkbox"
                checked={welfareFormData.IsMarried}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    IsMarried: e.target.checked,
                  })
                }
              />{" "}
              Married
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={welfareFormData.IsEarning}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    IsEarning: e.target.checked,
                  })
                }
              />{" "}
              Is Earning
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={welfareFormData.HaveGold}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    HaveGold: e.target.checked,
                  })
                }
              />{" "}
              Have Gold
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={welfareFormData.IsAbleToPay}
                onChange={(e) =>
                  setwelfareFormData({
                    ...welfareFormData,
                    IsAbleToPay: e.target.checked,
                  })
                }
              />{" "}
              Is Able to Pay
            </Col>
          </Row>
        </Container>
      </fieldset>
      <fieldset>
        <Container className="border">
          <div className="legend">Details</div>
          <Row>
            <Col>
              <Button
                className="fl-right btn-small"
                variant="dark"
                onClick={AddNewMember}
              >
                Add
              </Button>
            </Col>
          </Row>
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
          {welfareFormData.details.map((detail, ind) => (
            <Row>
              <Col sm className="text-left">
                <input
                  type="text"
                  placeholder=""
                  value={detail.MemberName}
                  onChange={(e) =>
                    UpdateDetails(ind, "MemberName", e.target.value)
                  }
                />
              </Col>
              <Col sm className="text-left">
                <input
                  type="text"
                  placeholder=""
                  value={detail.RelationWithPatient}
                  onChange={(e) =>
                    UpdateDetails(ind, "RelationWithPatient", e.target.value)
                  }
                />
              </Col>
              <Col sm className="text-left">
                <input
                  type="text"
                  placeholder=""
                  value={detail.MonthlyIncome}
                  onChange={(e) =>
                    UpdateDetails(ind, "MonthlyIncome", e.target.value)
                  }
                />
              </Col>
            </Row>
          ))}
        </Container>
      </fieldset>
      <div className="d-flex">
        <Button
          //onClick={handleSubmit}
          onClick={() => NextStep(2)}
          className="mx-auto mb-3"
          variant="success"
          type="submit"
          size="lg"
        >
          Proceed To Service Form
        </Button>
      </div>
    </>
  );
};

export default NewWelfareApplication;
