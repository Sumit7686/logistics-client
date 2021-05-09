import React from "react";
import SupportPage from "./supportPage/SupportPage";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../../css/Dashboard.css";

export default function ShipWithUs() {
  return (
    <div>
      <Navbar />

      {/* Header. */}
      <SupportPage />

      {/* Body. */}
      <div className="support-body pb-5">
        <div className="container">
          <div className="support-body-content">
            <div className="h5 p-4">Ship With Us</div>
            <div className="row">
              <div className="col-md-5">
                <div className="support-body-content-box ml-4 mb-4">
                  <div className="m-4 my-5">
                    <span className="h6">
                      How to ship my personal parcel through PVSC limited?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      How do I sign-up to ship regularly with PVSC limited ?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      How can I avail your different services?
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="support-body-content-box-2 mr-4">
                  <div className="m-4 my-5 h6">
                    <div className="m-3 my-5">
                      This service is temporarily unavailable. We will be back
                      soon with an expanded proposition and a superior customer
                      experience. Please watch out our website,
                      <span style={{ color: "red" }}>www.pvcslimited.com</span>
                      for more updates.
                    </div>
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
