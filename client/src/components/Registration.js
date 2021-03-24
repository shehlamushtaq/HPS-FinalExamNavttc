import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { API_BASE } from "../config";
import { Col, Row, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { dateDiffInDays } from "../utilities";

const Registration = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  if (!isLogin) {
    history.push("/");
  }

  const [msg, setMsg] = useState("");

  const [RegistrationFormData, setRegistrationFormData] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    FatherOrHusband: "",
    DOB: new Date(),
    Age: "",
    Gender: "0",
    Religion: "0",
    HelpType: "0",
    District: "",
    City: "",
    Area: "",
    HousNo: "",
    Address: "",
    CNIC: "",
    Phone: "",
    OffPhone: "",
    Mobile: "",
    RefBy: "",
    Remarks: "",
    IsRejected: false,
    IsZakat: false,
    IsPAFEmp: false,
    MonthlyConsLimit: 0,
    ThumbImage: "",
    NOY: "",
    EmpID: "",
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    CreateDate: "",
    ModifyDate: "",
    welfares: [],
  });

  const handleSubmit = () => {
    // console.log(RegistrationFormData);
    axios
      .post(API_BASE + "/registration/add", RegistrationFormData)
      .then((res) => {
        console.log(res);
        setMsg(res.data.msg);
      })
      .catch((err) => console.log(err));
  };

  const CalculateAge = () => {
    console.log(dateDiffInDays(new Date(RegistrationFormData.DOB), new Date()));
  };;

  return (
    <div className="pt-5">
      <Container className="pt-5">
        <h1 className="heading">Registration</h1>
        <div>{msg !== "" ? <Alert variant="success">{msg}</Alert> : null}</div>
        <Row>
          <Col sm className="text-left">
            <label>MR #</label>
            <input
              type="Number"
              placeholder=""
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  MRNo: e.target.value,
                })
              }
            />
          </Col>
          <Col sm className="text-left">
            <label>Token No</label>
            <input
              type="Number"
              placeholder=""
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  TokenNo: e.target.value,
                })
              }
            />
          </Col>
          <Col sm className="text-left">
            <label>Registration Date</label>
            <input
              type="Date"
              placeholder=""
              value={RegistrationFormData.RegistrationDate}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  RegistrationDate: e.target.value,
                })
              }
            />
          </Col>
          <Col sm className="text-left">
            <label>Name</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
        </Row>

        {/* ---------------------------------------- */}

        <Row>
          <Col sm className="text-left">
            <label>Father Or Husband</label>
            <input
              type="text"
              placeholder=""
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  FatherOrHusband: e.target.value,
                })
              }
            />
          </Col>
          <Col sm className="text-left">
            <label>Date of Birth</label>
            <input
              type="Date"
              placeholder=""
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  DOB: e.target.value,
                })
              }
              onBlur={CalculateAge}
            />
          </Col>

          <Col>
            <label>CNIC</label>
            <input
              type="text"
              placeholder=""
              value={RegistrationFormData.CNIC}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  CNIC: e.target.value,
                })
              }
            />
          </Col>
          <Col sm className="text-left">
            <label>Gender</label>
            <select
              placeholder=""
              value={RegistrationFormData.Gender}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Gender: e.target.value,
                })
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </Col>
        </Row>

        {/* ----------------------------------------------- */}

        <Row>
          <Col sm className="text-left">
            <label>Religion</label>
            <select
              value={RegistrationFormData.Religion}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Religion: e.target.value,
                })
              }
            >
              <option value="Islam">Islam</option>
              <option value="Christian">Christian</option>
              <option value="Other">Other</option>
            </select>
          </Col>
          <Col sm className="text-left">
            <label>Help Type</label>
            <select
              value={RegistrationFormData.HelpType}
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  HelpType: e.target.value,
                })
              }
            >
              <option value="Donation">Donation</option>
              {RegistrationFormData.Religion === "Islam" ? (
                <option value="Zakat">Zakat</option>
              ) : null}
            </select>
          </Col>

          <Col></Col>
          <Col></Col>
        </Row>
        {/* ----------------------------------------------- */}
      </Container>
      {/* //================================Second Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Contact</div>
          <Row>
            <Col sm className="text-left">
              <label>House No</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    HousNo: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Address</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Address: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Area</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Area: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>City</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    City: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ---------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>District</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    District: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Phone</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Phone: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Office Phone</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    OffPhone: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Mobile</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Mobile: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>Monthly Consumption</label>
              <input
                type="Number"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    MonthlyConsLimit: e.target.value,
                  })
                }
              />
            </Col>

            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </fieldset>
      {/* //================================Third Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Referrer Info</div>
          <Row>
            <Col sm className="text-left">
              <label>Referred By</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    RefBy: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>Employee ID</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    EmpID: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm className="text-left">
              <label>No. of Years</label>
              <input
                type="Number"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    NOY: e.target.value,
                  })
                }
              />
            </Col>
            {/* <Col></Col> */}
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm className="text-left">
              <label>Remarks</label>
              <input
                type="text"
                placeholder=""
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Remarks: e.target.value,
                  })
                }
              />
            </Col>
            {/* <Col></Col>
            <Col></Col>
            <Col></Col> */}
          </Row>
        </Container>
      </fieldset>
      {/* //================================Forth Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Staff Info</div>
          <Row>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={RegistrationFormData.IsPAFEmp}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    IsPAFEmp: e.target.checked,
                  })
                }
              />{" "}
              Is PAF Employee
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={RegistrationFormData.IsStaff}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    IsStaff: e.target.checked,
                  })
                }
              />{" "}
              Is Staff
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={RegistrationFormData.IsRejected}
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    IsRejected: e.target.checked,
                  })
                }
              />{" "}
              Is Rejected
            </Col>
          </Row>
        </Container>
      </fieldset>
      <div className="d-flex">
        <Button
          onClick={handleSubmit}
          className="mx-auto mb-3"
          variant="success"
          type="submit"
          size="lg"
        >
          Save the Patient's Info
        </Button>
      </div>
    </div>
  );
};

export default Registration;
