import "./App.css";
import React, { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

// Components.
import Dashboard from "./components/dashboard/Dashboard";
import UserRegister from "./components/authComponents/UserRegister";
import Login from "./components/authComponents/Login";
import ForgotPassword from "./components/authComponents/ForgotPassword";
import AboutUs from "./components/dashboard/AboutUs";
import Services from "./components/dashboard/Services";
import Fulfilment from "./components/dashboard/services/Fulfilment";
import Freight from "./components/dashboard/services/Freight";
import CrossBorder from "./components/dashboard/services/CrossBorder";
import E2e from "./components/dashboard/services/E2e";
import Partner from "./components/dashboard/Partner";
import LastMileAgent from "./components/dashboard/partner/LastMileAgent";
import DropAtStore from "./components/dashboard/partner/DropAtStore";
import Franchisee from "./components/dashboard/partner/Franchisee";
import Careers from "./components/dashboard/Careers";
import Support from "./components/dashboard/Support";
import ShipmentRelatedQueries from "./components/dashboard/support/ShipmentRelatedQueries";
import Complaints from "./components/dashboard/support/Complaints";
import ReturnRelatedQueries from "./components/dashboard/support/ReturnRelatedQueries";
import ShipWithUs from "./components/dashboard/support/ShipWithUs";
import Others from "./components/dashboard/support/Others";

toast.configure();

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/UserRegister">
            <UserRegister />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/ForgotPassword">
            <ForgotPassword />
          </Route>

          {/* About Us */}
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>

          {/* Service page. */}
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/Fulfilment">
            <Fulfilment />
          </Route>
          <Route exact path="/Freight">
            <Freight />
          </Route>
          <Route exact path="/CrossBorder">
            <CrossBorder />
          </Route>
          <Route exact path="/E2e">
            <E2e />
          </Route>

          {/* Partner Page. */}
          <Route exact path="/Partner">
            <Partner />
          </Route>
          <Route exact path="/LastMileAgent">
            <LastMileAgent />
          </Route>
          <Route exact path="/DropAtStore">
            <DropAtStore />
          </Route>
          <Route exact path="/Franchisee">
            <Franchisee />
          </Route>

          {/* Careers */}
          <Route exact path="/Careers">
            <Careers />
          </Route>

          {/* Support page. */}
          <Route exact path="/Support">
            <Support />
          </Route>
          <Route exact path="/ShipmentRelatedQueries">
            <ShipmentRelatedQueries />
          </Route>
          <Route exact path="/Complaints">
            <Complaints />
          </Route>
          <Route exact path="/ReturnRelatedQueries">
            <ReturnRelatedQueries />
          </Route>
          <Route exact path="/ShipWithUs">
            <ShipWithUs />
          </Route>
          <Route exact path="/Others">
            <Others />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
