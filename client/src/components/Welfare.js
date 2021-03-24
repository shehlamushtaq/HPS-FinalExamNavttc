
import React, { useState, useEffect } from "react";
import { API_BASE } from "../config";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import NewWelfareApplication from './NewWelfareApplication';
import OldWelfareApplicationsList from "./OldWelfareApplicationsList";
import NewServiceForm from "./NewServiceForm";

const Welfare = () => {

  const isLogin = useSelector((state) => state.isLogin);
  const history = useHistory();

  if (!isLogin) {
    history.push("/");
  }

  const detailsObj = {
    MemberName: "",
    RelationWithPatient: "",
    MonthlyIncome: "",
  };
  
  const detailsTestObj = {
    TestCode: "",
    TestDescription: "",
    Cost: 0,
  };

  const pageHeadingsList = ["Old Welfare Applications", "New Welfare Application"];

  const [currentPage, setCurrentPage] = useState(1);
  const [step, setStep] = useState(1); // State to store which form between welfare and service is to be displayed
  
  const blankWelfareObj = {
    MRNo: "recID",
    TokenNo: "",
    WelfareDate: new Date(),
    Profession: "",
    Fiqa: "",
    Education: "",
    Cast: "",
    MonthlyIncome: 0,
    Guardian: "",
    OtherInfo: "",
    MaleKids: 0,
    FemaleKids: 0,
    OtherKids: 0,
    Brothers: 0,
    Sisters: 0,
    NoOFFamilyMembers: 0,
    IsMarried: false,
    IsAbleToPay: false,
    IsEarning: false,
    IsZakat: false,
    IsDonation: false,
    HaveGold: false,
    ReqName: "",
    ReqPhone: "",
    ReqRelationWithPatient: "",
    CreateUser: "Admin",
    ModifyUser: "Admin",
    details: [detailsObj],
  };

  const blankServiceObj = {
    Ward: "",
    Bed: "",
    TestDetails: [detailsTestObj],
    TotalAmount: 0,
    PatientContribution: 0,
    Remarks: "",    
  };

  const [welfareFormData, setwelfareFormData] = useState(blankWelfareObj);

  const [serviceFormData, setServiceFormData] = useState(blankServiceObj);

  const { id } = useParams();

  const [patient, setPatient] = useState(null);
  const [oldWelfares, setOldWelfares] = useState([]);
  const [oldServices, setOldServices] = useState([]);
  

  const AddNewMember = () => {
    setwelfareFormData({...welfareFormData, details: [...welfareFormData.details, detailsObj]});
  }

  const UpdateDetails = (ind, key, newValue) => {

    const details = welfareFormData.details;

    details[ind][key] = newValue;

    // details.forEach ( (item, index) => {
    //   if (index === ind) {
    //     details[ind][key] = newValue;        
    //   }
    // });

    // console.log(details);
    
    setwelfareFormData({...welfareFormData, details: details});

  }

  const AddNewTest = () => {
    setServiceFormData({
      ...serviceFormData,
      TestDetails: [...serviceFormData.TestDetails, detailsTestObj],
    });
  };

  const UpdateTestDetails = (ind, key, newValue) => {
    const details = serviceFormData.TestDetails;

    details[ind][key] = newValue;

    // details.forEach((item, index) => {
    //   if (index === ind) {
    //     details[ind][key] = newValue;
    //   }
    // });

    //console.log(details);

    setServiceFormData({ ...serviceFormData, TestDetails: details });
  };

  useEffect(() => {
    axios
      .get(API_BASE + "/registration/user/" + id)
      .then((res) => {
        console.log(res);
        setPatient(res.data.patient);
        setwelfareFormData({
          ...welfareFormData,
          MRNo: res.data.patient.MRNo,
        });
        GetOldWelfareApplications(res.data.patient.MRNo);
      })
      .catch((err) => console.log(err));
  }, [id]);

  
  const GetOldWelfareApplications = (mrNo) => {

    axios.get(API_BASE + '/welfare/all/' + mrNo)
    .then(res => {
      //console.log(res);
      setOldWelfares(res.data.welfares);
      setOldServices(res.data.services);
    }).catch(err => console.log(err));
  }

  const handleSubmit = () => {
    // console.log(RegistrationFormData);
    axios
      .post(API_BASE + "/welfare/add", {welfare: welfareFormData, service: serviceFormData})
      .then((res) => {
        //console.log(res);
        setCurrentPage(0);
        GetOldWelfareApplications(patient.MRNo);
        setwelfareFormData(blankWelfareObj);
        setServiceFormData(blankServiceObj);

      })
      .catch((err) => console.log(err));
  };

  const ChangeScreen = (num) => {
    setCurrentPage(num);
  }

  return (
    <div className="pt-5">
      <fieldset>
        <Container className="pt-5">
          <h1 className="heading">
            {pageHeadingsList[currentPage]}
            <Button
              variant="dark"
              className="btn-small float-right mx-1 mt-3"
              onClick={() => {
                setStep(1);
                ChangeScreen(1);
              }}
            >
              Apply For New Welfare
            </Button>
            <Button
              variant="dark"
              className="btn-small float-right mx-1 mt-3"
              onClick={() => ChangeScreen(0)}
            >
              Old Welfare Applications
            </Button>
          </h1>
        </Container>
        <Container className="border">
          <div className="legend">Patient Profile</div>
          <Row className="mb-3 border2">
            <Col className="text-left">
              <strong>MR #:</strong> {patient?.MRNo}
            </Col>
            <Col className="text-left">
              <strong>Name:</strong> {patient?.Name}
            </Col>
            <Col className="text-left">
              <strong>Father/Husband Name:</strong> {patient?.FatherOrHusband}
            </Col>
          </Row>
        </Container>
      </fieldset>

      {currentPage === 0 ? (
        <OldWelfareApplicationsList
          oldWelfares={oldWelfares}
          oldServices={oldServices}
        />
      ) : step === 1 ? (
        <NewWelfareApplication
          welfareFormData={welfareFormData}
          setwelfareFormData={setwelfareFormData}
          NextStep={setStep}
          UpdateDetails={UpdateDetails}
          AddNewMember={AddNewMember}
        />
      ) : (
        <NewServiceForm
          serviceFormData={serviceFormData}
          setServiceFormData={setServiceFormData}
          handleSubmit={handleSubmit}
          PrevStep={setStep}
          UpdateTestDetails={UpdateTestDetails}
          AddNewTest={AddNewTest}
        />
      )}
    </div>
  );
};

export default Welfare;
