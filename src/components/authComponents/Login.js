import React, { Fragment, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import "../../css/Form.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [id, setId] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { email, password };

    await axios
      .post("http://localhost:5000/auth/login", body)
      .then((result) => {
        if (result.data.isValid === true) {
          history.push("/UserHome");
          toast.success(result.data.message);
          localStorage.setItem("UserId", result.data.id);
          localStorage.setItem("UserToken", result.data.token);
        } else {
          toast.error(result.data.message);
        }
      })
      .catch((err) => {
        console.log("login error :", err);
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
                  <h5 className="card-title text-center">Login</h5>
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
                        alt="Enter Password"
                        placeholder="Password."
                      ></label>
                    </div>

                    <div className="d-flex flex-column">
                      <button
                        type="submit"
                        className="btn btn-lg btn-outline-success btn-block text-uppercase mb-3"
                      >
                        Login
                      </button>
                      <div className="text-right">
                        <Link to="/ForgotPassword">Forgot Password!</Link>
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
