// import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login";
import List from "./components/List";
import Registration from "./components/Registration";
import Service from "./components/Service";
import Welfare from "./components/Welfare";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EditPatient from "./components/EditPatient";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <div className="fix-height">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/welfare/:id">
            <Welfare />
          </Route>
          <Route exact path="/edit-patient/:id">
            <EditPatient />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
