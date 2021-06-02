import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import Countdown from "react-countdown";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function Otp() {
  const history = useHistory();

  const [time, setTime] = useState();
  const [otp, setOtp] = useState();
  const [id, setId] = useState();

  const getID = () => {
    setId(localStorage.getItem("otpID"));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { otp: otp };

    axios
      .post(`http://localhost:5000/auth/otp-verify/${id}`, body)
      .then((result) => {
        if (result.data.isValid === true) {
          toast.success(result.data.message);
          localStorage.removeItem("otpID");
          history.push("/Login");
        } else {
          toast.success(result.data.message);
        }
      });
  };

  const sendOTP = () => {
    setTime(false);
    setTimeout(() => {
      setTime(true);
    }, [60000]);
  };

  useEffect(() => {
    getID();
    setTimeout(() => {
      setTime(true);
    }, [60000]);
  }, []);

  return (
    <div className="form">
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">OTP</h5>
                <form onSubmit={(e) => onSubmitForm(e)}>
                  <div className="form-group">
                    <input
                      className="cssField"
                      type="number"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <label alt="Enter Name" placeholder="Name"></label>
                  </div>

                  <div className="d-flex flex-column">
                    {time ? (
                      <div className="text-right">
                        <p
                          className="btn btn-primary text-uppercase mb-3 p-2 rounded"
                          onClick={() => sendOTP()}
                        >
                          Send OTP
                        </p>
                      </div>
                    ) : (
                      <div className="text-right">
                        <p
                          className="btn btn-primary text-uppercase mb-3 p-2 rounded"
                          //   onClick={() => timeBtn()}
                        >
                          Time {":->"}
                          <Countdown date={Date.now() + 60000} />
                        </p>
                      </div>
                    )}
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
    </div>
  );
}
