import "./App.css";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Components.
import Dashboard from "./components/dashboard/Dashboard";
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

// Auth components.
import UserRegister from "./components/authComponents/UserRegister";
import Login from "./components/authComponents/Login";
import ForgotPassword from "./components/authComponents/ForgotPassword";
import Otp from "./components/authComponents/Otp";

// User.
import UserHome from "./components/User/UserHome";
import UserProfile from "./components/User/UserProfile";
import UserOrderList from "./components/User/UserOrderList";
import UserCurrentOrder from "./components/User/UserCurrentOrder";
import UserCompleteOrder from "./components/User/UserCompleteOrder";
import UserComplaints from "./components/User/UserComplaints";
import UserAddComplaints from "./components/User/UserAddComplaints";
import UserCheckComplaints from "./components/User/UserCheckComplaints";

// ex.
import OrderTrack from "./components/dashboard/OrderTrack";

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.UserToken },
      });

      const parseRes = await response.json();
      parseRes.message === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    isAuth();
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Router>
        <Switch>
          {/* OrderTrack */}
          <Route exact path="/OrderTrack">
            <OrderTrack />
          </Route>

          {/* User */}
          <Route
            exact
            path="/UserHome"
            render={(props) =>
              isAuthenticated ? (
                <UserHome {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserHome" />
              )
            }
          />
          <Route
            exact
            path="/UserProfile"
            render={(props) =>
              isAuthenticated ? (
                <UserProfile {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserProfile" />
              )
            }
          />
          <Route
            exact
            path="/UserOrderList"
            render={(props) =>
              isAuthenticated ? (
                <UserOrderList {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserOrderList" />
              )
            }
          />
          <Route
            exact
            path="/UserCurrentOrder"
            render={(props) =>
              isAuthenticated ? (
                <UserCurrentOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserCurrentOrder" />
              )
            }
          />
          <Route
            exact
            path="/UserCompleteOrder"
            render={(props) =>
              isAuthenticated ? (
                <UserCompleteOrder {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserCompleteOrder" />
              )
            }
          />
          <Route
            exact
            path="/UserComplaints"
            render={(props) =>
              isAuthenticated ? (
                <UserComplaints {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserComplaints" />
              )
            }
          />
          <Route
            exact
            path="/UserAddComplaints"
            render={(props) =>
              isAuthenticated ? (
                <UserAddComplaints {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserAddComplaints" />
              )
            }
          />
          <Route
            exact
            path="/UserCheckComplaints"
            render={(props) =>
              isAuthenticated ? (
                <UserCheckComplaints {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/UserCheckComplaints" />
              )
            }
          />

          {/* Auth. */}
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
          <Route exact path="/Otp">
            <Otp />
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
    </>
  );
}

export default App;
