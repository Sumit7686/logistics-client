import React from "react";
import UserNavbar from "../navbar/UserNavbar";

export default function UserHome({ setAuth }) {
  return (
    <>
      <UserNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div className="pt-5 align-items-center">
          <div className="row text-center mt-5 pt-5">
            <div className="col-md-6">
              <img
                src="/photos/admin/user(1).png"
                alt="sign-up"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
              />
              <div className="mb-5"></div>
              <a href="/UserHome" style={{ textDecoration: "none" }}>
                <span
                  className="p py-1 px-4 rounded"
                  style={{ border: "1px solid" }}
                >
                  User
                </span>
              </a>
            </div>
            <div className="col-md-6">
              <img
                src="/photos/admin/delivery(1).png"
                alt="delivering-service"
                className="has-retina img-responsive rounded"
                style={{ border: "5px solid" }}
              />
              <div className="mb-5"></div>
              <a href="/UserOrderList" style={{ textDecoration: "none" }}>
                <span
                  className="p py-1 px-4 mt-3 rounded"
                  style={{ border: "1px solid" }}
                >
                  Order List
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
