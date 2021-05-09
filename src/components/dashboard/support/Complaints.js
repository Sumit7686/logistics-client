import React from "react";
import SupportPage from "./supportPage/SupportPage";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../../css/Dashboard.css";

export default function Complaints() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <SupportPage />

      {/* Body. */}
      <div className="support-body pb-5">
        <div className="container">
          <div className="support-body-content">
            <div className="h5 p-4">Complaints</div>
            <div className="row">
              <div className="col-md-5">
                <div className="support-body-content-box ml-4 mb-4">
                  <div className="m-4 my-5">
                    <span className="h6">
                      How can I register a complaint against the courier
                      executive who came to deliver my order?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do on receiving a wrong/damaged/incorrect
                      shipment?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      I received a wrong proof of delivery. What should I do?
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="support-body-content-box-2 mr-4">
                  <div className="m-4 my-5 h6">
                    <div className="m-3 my-5">
                      We are sorry to know that you are not satisfied with the
                      proof of delivery that was shared with you. Please drop an
                      email on customer.
                      <span style={{ color: "red" }}>
                        support@pvcslimited.com
                      </span>
                      or raise your concern on
                      <span style={{ color: "red" }}> WhatsApp</span>. We assure
                      you that your complaint will be resolved on priority.
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
