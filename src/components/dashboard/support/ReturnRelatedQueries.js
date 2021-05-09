import React from "react";
import SupportPage from "./supportPage/SupportPage";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../../css/Dashboard.css";

export default function ReturnRelatedQueries() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <SupportPage />

      {/* Body. */}
      <div className="support-body pb-5">
        <div className="container">
          <div className="support-body-content">
            <div className="h5 p-4">Return Related Queries</div>
            <div className="row">
              <div className="col-md-5">
                <div className="support-body-content-box ml-4 mb-4">
                  <div className="m-4 my-5">
                    <span className="h6">
                      My shipment has been returned/cancelled. What does it mean
                      and who do I contact?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What if my shipment is marked as lost?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">How do I cancel my shipment?</span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do if my return shipment pick up is delayed?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do if I haven't received the refund of my
                      returned shipment yet?
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="support-body-content-box-2 mr-4">
                  <div className="m-4 my-5 h6">
                    <div className="m-3 my-5">
                      Your shipment can be returned/cancelled due to 2 reasons:
                    </div>
                    <div className="my-2 ml-5">
                      1. It might have been damaged in transit.
                    </div>
                    <div className="my-2 ml-5">
                      2. The merchant has sent the wrong shipment.
                    </div>
                    <div className="m-3 my-5">
                      Please contact your merchant for further clarification.
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
