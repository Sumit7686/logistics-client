import React from "react";
import SupportPage from "./supportPage/SupportPage";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../../css/Dashboard.css";

export default function ShipmentRelatedQueries() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <SupportPage />

      {/* Body. */}
      <div className="support-body pb-5">
        <div className="container">
          <div className="support-body-content">
            <div className="h5 p-4">Shipment Related Queries</div>
            <div className="row">
              <div className="col-md-5">
                <div className="support-body-content-box ml-4 mb-4">
                  <div className="m-4 my-5">
                    <span className="h6">
                      What do I do if my shipment is delayed?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">How can I track my shipment ?</span>
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
                      How do I change my delivery address?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      Can my security guard or neighbour receive my shipment if
                      I am not available?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      How can I get the delivery of my shipment if I missed it
                      today?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      My shipment is out for delivery. When will I receive it?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">Can I avail of an open delivery?</span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      How can I self collect my shipment?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      What documents do I need to carry for self-collection of
                      my shipment?
                    </span>
                  </div>
                  <div className="m-4 my-5">
                    <span className="h6">
                      How can I get the contact number of my delivery agent?
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="support-body-content-box-2 mr-4">
                  <div className="m-4 my-5 p">
                    <div className="m-3 my-5">
                      Due to unforeseen circumstances, your delivery can get
                      delayed. A new delivery timeframe will be shared with you
                      when you track your shipment on our website. However, in
                      case you require an urgent delivery, please write to us at
                      customer.
                      <span style={{ color: "red" }}>
                        support@delhivery.com
                      </span>
                      or raise your concern on WhatsApp, and we will try our
                      best to expedite your shipment.
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
