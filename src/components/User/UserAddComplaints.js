import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import UserNavbar from "../navbar/UserNavbar";

export default function UserAddComplaints({ setAuth }) {
  const [subject, setSubject] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");

  const getId = async () => {
    setId(localStorage.getItem("UserId"));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { subject, description };

    axios
      .post(`http://localhost:5000/complaints/userComplaints/${id}`, body)
      .then((result) => {
        toast.success(result.data.message);
      });
  };

  useEffect(() => {
    getId();
  });

  return (
    <>
      <UserNavbar setAuth={setAuth} />

      <div
        className="container"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">User Complaints Box</h5>
                <form onSubmit={(e) => onSubmitForm(e)}>
                  <div className="form-group">
                    <input
                      className="cssField"
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                    <label alt="Enter Subject" placeholder="Subject"></label>
                  </div>
                  <div className="form-group">
                    <input
                      className="cssField"
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <label
                      alt="Enter Description"
                      placeholder="Description."
                    ></label>
                  </div>

                  <div className="d-flex flex-column">
                    <button
                      type="submit"
                      className="btn btn-lg btn-outline-success btn-block text-uppercase mb-3"
                    >
                      Send Complaints
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
