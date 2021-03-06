import React from "react";
import UserNavbar from "../navbar/UserNavbar";
import "../../css/Darshan.css";

export default function UserHome({ setAuth }) {
  return (
    <>
      <UserNavbar setAuth={setAuth} />

      <div className="container">
        <div className="pt-4 align-items-center">
          <div className="row text-center mt-5 pt-5">
            <div className="col-md-4 offset-1" data-aos="fade-right">
              <div className="contactcard">
                <img
                  src="/photos/admin/complaints(2).png"
                  alt="sign-up"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a href="/UserComplaints" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{
                      border: "1px solid black",
                      color: "black",
                      fontSize: "22px",
                    }}
                  >
                    Complaints
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-4 offset-2" data-aos="fade-left">
              <div className="contactcard">
                <img
                  src="/photos/admin/order(1).png"
                  alt="delivering-service"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a href="/UserOrderList" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 mt-3 rounded"
                    style={{
                      border: "1px solid black",
                      color: "black",
                      fontSize: "22px",
                    }}
                  >
                    Order List
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
