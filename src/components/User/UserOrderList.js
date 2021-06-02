import React from "react";
import UserNavbar from "../navbar/UserNavbar";
import "../../css/Darshan.css";

export default function UserOrderList({ setAuth }) {
  return (
    <>
      <UserNavbar setAuth={setAuth} />

      <div className="container pt-4">
        <div className="d-flex align-items-center" data-aos="zoom-out">
          <a
            href="/UserHome"
            style={{
              textDecoration: "none",
              fontSize: "45px",
              color: "black",
            }}
          >
            <i class="las la-angle-double-left"></i>
          </a>
        </div>

        <div className="align-items-center">
          <div className="row text-center mt-5">
            <div className="col-md-4 offset-1" data-aos="fade-right">
              <div className="contactcard">
                <img
                  src="/photos/admin/delivery(1).png"
                  alt="sign-up"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a href="/UserCurrentOrder" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{
                      border: "1px solid black",
                      color: "black",
                      fontSize: "22px",
                    }}
                  >
                    Current Order Details
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-4 offset-2" data-aos="fade-left">
              <div className="contactcard">
                <img
                  src="/photos/admin/complete_order.png"
                  alt="sign-up"
                  className="has-retina img-responsive rounded"
                />
                <div className="mb-5"></div>
                <a href="/UserCompleteOrder" style={{ textDecoration: "none" }}>
                  <span
                    className="p py-1 px-4 rounded"
                    style={{
                      border: "1px solid black",
                      color: "black",
                      fontSize: "22px",
                    }}
                  >
                    Complete Order Details
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
