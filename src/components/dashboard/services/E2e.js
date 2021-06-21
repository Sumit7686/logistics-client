import React from "react";
import "../../../css/Dashboard.css";
import bgs from "../../../img/bg.jpg";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useHistory } from "react-router-dom";

export default function E2e() {
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
            <div className="h1">DELHIVERY E2E</div>
            <div className="p mt-3">
              We provide End-to-End Supply Chain Solutions for Enterprises using
              our integrated fulfilment platform. We build custom solutions to
              cater to your business requirements using our core warehousing and
              transportation services, powered by our in-house technology
              products.
              <br />
              <br />
              These solutions can be tailored for various use cases and
              appropriately designed based on key supply chain optimization
              considerations and desired service levels.
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/photos/delhivery-e2e.jpg"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
          </div>
        </div>

        <div className="row text-center service-body">
          <div className="col-md-4">
            <img
              src="/photos/Sample solution.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">SAMPLE SOLUTIONS</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Distribution</span> <br />
              <span className="py-2">Vendor Managed Inventory</span> <br />
              <span className="py-2">Returns Management</span>
              <br />
              <span className="py-2">On-demand Fulfilment</span> <br />
              <span className="py-2">Direct to Retail</span> <br />
              <span className="py-2">
                Temperature controlled Freight Solutions
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/photos/services.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">VALUE ADDED SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Network Design </span>
              <br />
              <span className="py-2">Inventory Placement & Optimization</span>
              <br />
              <span className="py-2">End-to-End Visibility and Control</span>
              <br />
              <span className="py-2">Decision Support System</span>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="/photos/industries.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">INDUSTRIES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Automotive</span> <br />
              <span className="py-2">Consumer Products</span> <br />
              <span className="py-2">Retail</span>
              <br />
              <span className="py-2">Electronics</span>
              <br />
              <span className="py-2">Industrial Products</span>
              <br />
              <span className="py-2">Pharma & Healthcare</span>
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
