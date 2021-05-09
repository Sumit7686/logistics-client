import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../../css/Dashboard.css";
import SupportPage from "./support/supportPage/SupportPage";

export default function Support() {
  return (
    <div>
      <Navbar />

      {/* Header. */}
      <SupportPage />

      {/* Body. */}
      <div className="support-body pb-5">
        <div className="container">
          <div className="support-body-content">
            <div className="h5 p-4">Top Queries</div>
            <div className="row">
              <div className="col-md-5">
                <div className="support-body-content-box ml-4 mb-4">
                  <div className="m-4 my-5">
                    <span className="h6">How can I track my shipment ?</span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do if my shipment is delayed?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do if my shipment status is still at 'Pick up'?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      How can I get proof of delivery for my shipment?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do if I haven't received the refund of my
                      returned shipment?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      My shipment is out for delivery. When will I receive it?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do on receiving a wrong/damaged/incorrect
                      shipment?
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="support-body-content-box-2 mr-4">
                  <div className="m-4 my-5 h6">
                    <div className="m-3 my-5">
                      1. To track your shipment, visit www.delhivery.com, enter
                      your tracking ID (AWB/LRN) and click on 'TRACK'.
                    </div>
                    <div className="m-3">
                      2. You can login using your mobile number to track and
                      take actions on all your Delhivery shipments in one go.
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
              <div className="text-center h4 mt-3">
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
              <div className="text-center h5 mt-3">
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
              <div className="text-center h4 mt-3">
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
