import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { API_BASE } from "../config";
import { Col, Row, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { dateDiffInDays } from "../utilities";

const EditPatient = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  if (!isLogin) {
    history.push("/");
  }

  const { id } = useParams();

  const [patient, setPatient] = useState({});
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get(API_BASE + "/registration/user/" + id)
      .then((res) => {
        console.log(res);
        setPatient(res.data.patient);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //   const [patient, setPatient] = useState({
  //     MRNo: "",
  //     TokenNo: "",
  //     RegistrationDate: new Date(),
  //     Name: "",
  //     FatherOrHusband: "",
  //     DOB: new Date(),
  //     Age: "",
  //     Gender: "0",
  //     Religion: "0",
  //     HelpType: "0",
  //     District: "",
  //     City: "",
  //     Area: "",
  //     HousNo: "",
  //     Address: "",
  //     CNIC: "",
  //     Phone: "",
  //     OffPhone: "",
  //     Mobile: "",
  //     RefBy: "",
  //     Remarks: "",
  //     IsRejected: false,
  //     IsZakat: false,
  //     IsPAFEmp: false,
  //     MonthlyConsLimit: 0,
  //     ThumbImage: "",
  //     NOY: "",
  //     EmpID: "",
  //     IsStaff: false,
  //     CreateUser: "",
  //     ModifyUser: "",
  //     CreateDate: "",
  //     ModifyDate: "",
  //     welfares: [],
  //   });

  const handleSubmit = () => {
    // console.log(patient);
    axios
      .post(API_BASE + "/registration/edit", patient)
      .then((res) => {
        console.log(res);
        setMsg("Patient data changes successfully.");
      })
      .catch((err) => console.log(err));
  };

  const CalculateAge = () => {
    console.log(dateDiffInDays(new Date(patient.DOB), new Date()));
  };

  return (
    <div className="pt-5">
      <Container className="pt-5">
        <h1 className="heading">Registration</h1>
        <div>{msg !== "" ? <Alert variant="success">{msg}</Alert> : null}</div>
        <Row>
          <Col sm className="text-left">
            <label>MR #</label>
            <div>{patient.MRNo}</div>
          </Col>
          <Col sm className="text-left">
            <label>Token No</label>
            <input
              type="Number"
              placeholder=""
              value={patient.TokenNo}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              defaultValue={patient.RegistrationDate?.split("T")[0]}
              value={patient.RegistrationDate?.split("T")[0]}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              value={patient.Name}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              value={patient.FatherOrHusband}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              value={patient.DOB?.split("T")[0]}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              value={patient.CNIC}
              onChange={(e) =>
                setPatient({
                  ...patient,
                  CNIC: e.target.value,
                })
              }
            />
          </Col>
          <Col sm className="text-left">
            <label>Gender</label>
            <select
              placeholder=""
              value={patient.Gender}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              value={patient.Religion}
              onChange={(e) =>
                setPatient({
                  ...patient,
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
              value={patient.HelpType}
              onChange={(e) =>
                setPatient({
                  ...patient,
                  HelpType: e.target.value,
                })
              }
            >
              <option value="Donation">Donation</option>
              {patient.Religion === "Islam" ? (
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
                value={patient.HousNo}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.Address}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.Area}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.City}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.District}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.Phone}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.OffPhone}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.Mobile}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.MonthlyConsLimit}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.RefBy}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.EmpID}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.NOY}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                value={patient.Remarks}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
                checked={patient.IsPAFEmp}
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    IsPAFEmp: e.target.checked,
                  })
                }
              />{" "}
              Is PAF Employee
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={patient.IsStaff}
                onChange={(e) =>
                  setPatient({
                    ...patient,
                    IsStaff: e.target.checked,
                  })
                }
              />{" "}
              Is Staff
            </Col>
            <Col sm className="text-left">
              <input
                type="checkbox"
                checked={patient.IsRejected}
                onChange={(e) =>
                  setPatient({
                    ...patient,
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
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default EditPatient;
