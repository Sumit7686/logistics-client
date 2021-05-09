import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import bgs from "../../img/bg.jpg";
import "../../css/Dashboard.css";
import { useHistory } from "react-router-dom";

export default function Services() {
  const history = useHistory();

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="header-image" style={{ backgroundImage: `url(${bgs})` }}>
        <div className="container">
          <div className="header-name h2 text-center">OUR SERVICE</div>
          <div className="header-content h5 text-center mt-3">
            Making the world a smaller place.
          </div>
          <div className="header-button text-center mt-5 mb-3">
            <button onClick={() => history.push("/Services")} className="p-1">
              DELHIVERY EXPRESS
            </button>
            <button onClick={() => history.push("/Fulfilment")} className="p-1">
              DELHIVERY FULFILMENT
            </button>
            <button onClick={() => history.push("/Freight")} className="p-1">
              DELHIVERY FREIGHT
            </button>
            <button
              onClick={() => history.push("/CrossBorder")}
              className="p-1"
            >
              DELHIVERY CROSS-BORDER
            </button>
            <button onClick={() => history.push("/E2e")} className="p-1">
              DELHIVERY E2E
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="h1">DELHIVERY EXPRESS</div>
            <div className="p mt-3">
              We operate India’s largest express parcel transportation network
              with fully integrated and self-owned pickup, mid-mile and delivery
              operations that successfully reach 20 households every second
              across India. Our in-house transport management platform enables
              our clients to schedule pickups, track orders in real-time, manage
              returns and replacements with ease. We offer flexibility to
              clients through delivery time choices and flexible payment
              options.
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/photos/delhivery_express.gif"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
          </div>
        </div>

        <div className="row text-center service-body">
          <div className="col-md-4">
            <img
              src="/photos/shipping.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">SHIPPING SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">On-demand Delivery</span> <br />
              <span className="py-2">Same-day/Next-day Delivery</span> <br />
              <span className="py-2">Time-defined/Slot-based Delivery</span>
              <br />
              <span className="py-2">Returns Management</span>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/photos/special-services.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">SPECIAL SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">
                Product Replacement/Exchange Services
              </span>
              <br />
              <span className="py-2">Large/Oversize Order Delivery</span> <br />
              <span className="py-2">High-value Product Delivery</span>
              <br />
              <span className="py-2">HAZMAT/Dangerous Goods Delivery</span>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/photos/technology-services.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">TECHNOLOGY SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Real-time Monitoring and Control</span>
              <br />
              <span className="py-2">Consignee Address Validation</span> <br />
              <span className="py-2">Fraud Detection</span>
              <br />
              <span className="py-2">Flexible Payment on Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center my-4">
          <div className="body-button-last">
            <button>CONTACT US</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
