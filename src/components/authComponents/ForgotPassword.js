import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/Form.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = { email, password };
    axios
      .post("http://localhost:5000/auth/forgotPassword", body)
      .then((result) => {
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          history.push("/Login");
        } else {
          toast.error(result.data.message);
          history.push("/ForgotPassword");
        }
      })
      .catch((err) => {
        console.log("err forgot :", err);
        toast.error("Server Error.");
      });
  };

  return (
    <div className="form">
      <Navbar />
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-img-left d-none d-md-flex"></div>
                <div className="card-body">
                  <h5 className="card-title text-center">Forgot Password</h5>
                  <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label alt="Enter Email" placeholder="Email."></label>
                    </div>

                    <div className="form-group">
                      <input
                        className="cssField"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <label
                        alt="Enter New Password"
                        placeholder="New Password."
                      ></label>
                    </div>

                    <div className="d-flex flex-column">
                      <button
                        type="submit"
                        className="btn btn-lg btn-outline-success btn-block text-uppercase mb-3"
                      >
                        Save Password
                      </button>
                      <div className="text-right">
                        <Link to="/Login">Login</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
