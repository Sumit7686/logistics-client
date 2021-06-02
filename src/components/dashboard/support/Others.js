import React from "react";
import SupportPage from "./supportPage/SupportPage";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../../css/Dashboard.css";

export default function Others() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <SupportPage />

      {/* Body. */}
      <div className="support-body pb-5">
        <div className="container">
          <div className="support-body-content">
            <div className="h5 p-4">Others</div>
            <div className="row">
              <div className="col-md-5">
                <div className="support-body-content-box ml-4 mb-4">
                  <div className="m-4 my-5">
                    <span className="h6">
                      How do I sign-up for Delhivery's partner program?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      Where can I send my resume for a relevant opening?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">Where can I send a media query? </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="support-body-content-box-2 mr-4">
                  <div className="m-4 my-5 h6">
                    <div className="m-3 my-5">
                      You can become a Delhivery partner in three simple steps:
                    </div>
                    <div className="m-3 ml-5">
                      1. Click on
                      <span style={{ color: "red" }}>www.PVCS.com/partner</span>
                      and sign up.
                    </div>
                    <div className="m-3 ml-5">
                      2. Select your preferred location.
                    </div>
                    <div className="m-3 ml-5">3. Start delivering.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="h3 text-center my-5">CONTACT US</div>
        <div className="row align-items-center mb-5">
          <div className="col-md-5">
            <div className="support-box float-right">
              <div className="text-center">
                <img
                  src="/photos/raise-ticket.png"
                  alt="constellation"
                  className="has-retina img-responsive"
                />
              </div>
              <div className="text-center h6 mt-3">
                <p>Raise Issue</p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="support-box">
              <div className="text-center">
                <img
                  src="/photos/whatsapp-chat.png"
                  alt="constellation"
                  className="has-retina img-responsive"
                />
              </div>
              <div className="text-center h6 mt-3">
                <p>WhatsApp Chat</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="support-box">
              <div className="text-center">
                <img
                  src="/photos/office-locations.png"
                  alt="constellation"
                  className="has-retina img-responsive"
                />
              </div>
              <div className="text-center h6 mt-3">
                <p>Our Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
