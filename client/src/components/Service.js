import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

const Service = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  const [RegistrationFormData, setRegistrationFormData] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    FatherOrHusband: "",
    DOB: new Date(),
    Age: "",
    Gender: "",
    Religion: "",
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
  });
  if (!isLogin) {
    history.push("/");
  }
  return (
    <div>
      <h1>Service</h1>

      <Container>
        <Row>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
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
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
        </Row>

        {/* ----------------------------------------------- */}

        <Row>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col sm>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setRegistrationFormData({
                  ...RegistrationFormData,
                  Name: e.target.value,
                })
              }
            />
          </Col>
          <Col></Col>
        </Row>
        {/* ----------------------------------------------- */}
      </Container>
      {/* //================================Second Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Contact</div>
          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
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
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
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
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
                  })
                }
              />
            </Col>
            <Col></Col>
          </Row>

          {/* ----------------------------------------------- */}

          <Row>
            <Col sm>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setRegistrationFormData({
                    ...RegistrationFormData,
                    Name: e.target.value,
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
      {/* //================================Forth Portion========================================= */}
      <fieldset>
        <Container className="border">
          <div className="legend">Staff Info</div>
        </Container>
      </fieldset>
    </div>
  );
};

export default Service;
