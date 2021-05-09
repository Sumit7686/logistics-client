import React, { Fragment, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../css/Form.css";
import { toast } from "react-toastify";

export default function UserRegister() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const body = { name, email, pincode, contact, password };
    axios
      .post("http://localhost:5000/auth/registerUser", body)
      .then((result) => {
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          history.pushState("/Login");
        } else {
          toast.error(result.data.message);
          history.pushState("/UserRegister");
        }
      })
      .catch((err) => {
        console.log("User Register Error :", err);
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
                  <h5 className="card-title text-center">User Register</h5>
                  <form onSubmit={(e) => onSubmitForm(e)}>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label alt="Enter Name" placeholder="Name"></label>
                    </div>
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
                        type="text"
                        name="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                      <label alt="Enter Pincode" placeholder="Pincode."></label>
                    </div>
                    <div className="form-group">
                      <input
                        className="cssField"
                        type="text"
                        name="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                      />
                      <label alt="Enter Contact" placeholder="Contact."></label>
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
                        className="btn btn-lg btn-outline-success btn-block text-uppercase"
                      >
                        Register
                      </button>
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
