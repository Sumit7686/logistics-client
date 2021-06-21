import React from "react";
import "../../../css/Dashboard.css";
import bgs from "../../../img/bg.jpg";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useHistory } from "react-router-dom";

export default function CrossBorder() {
  const history = useHistory();

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="header-image" style={{ backgroundImage: `url(${bgs})` }}>
        <div className="container">
          <div className="header-name h3 text-center">OUR SERVICE</div>
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
              CROSS-BORDER
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
            <div className="h1">DELHIVERY CROSS-BORDER</div>
            <div className="p mt-3">
              We enable our clients to buy and sell inventory from and to the
              markets across the world through Starfleet – our global alliance
              of leading logistics companies and a network of dedicated
              clearance agents and forwarders. We offer multiple transport
              solutions for sea and air cargo, express fulfilment, consolidation
              centers and free trade warehousing infrastructures.
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/photos/delhivery-crossborder.jpg"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
          </div>
        </div>

        <div className="row text-center service-body">
          <div className="col-md-6">
            <img
              src="/photos/services (1).png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Global B2C and B2B Shipping</span> <br />
              <span className="py-2">Sea and Air Cargo Shipping</span> <br />
              <span className="py-2">Air Express Shipping</span>
              <br />
              <span className="py-2">International Fulfilment Centers</span>
              <br />
              <span className="py-2">Cross-border Returns Management</span>
              <br />
              <span className="py-2">
                International Channel Integration <br /> and Management
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/photos/technology-services.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">TECHNOLOGY SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Real-time Cargo Visibility</span>
              <br />
              <span className="py-2">
                Online CHA and Gateway <br /> Management
              </span>
              <br />
              <span className="py-2">
                Real Time Visibility of Origin, <br /> Destination Clearance
              </span>
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
