import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div className="bg-image pt-5">
      <h1 className="title-text">Hospital Patient System</h1>
      <h2>
        This is a <b>Hospital Patient System</b> in which we would be able to
        achieve following feactures
        <br />
        <ol>
          <li>View the list of Total Patient</li>
          <li>Register New Patient</li>
          <li>Add Welfare for the Patient</li>
          <li>View previous Welfares</li>
          <li>Admin can Add , Edit , Delete or view the Patients Data</li>
        </ol>
      </h2>
      <h1>
        {" "}
        To Explore This Web Application{" "}
        <a href="#" class="fcolor" onClick={() => history.push("/login")}>Click here</a>
      </h1>
    </div>
  );
};

export default Home;
