import React from "react";
import "../../../css/Dashboard.css";
import bgs from "../../../img/bg.jpg";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useHistory } from "react-router-dom";

export default function Fulfilment() {
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
            <div className="h1">DELHIVERY FULFILMENT</div>
            <div className="p mt-3">
              We operate over 85 fulfilment centers across India, with over 6
              million sq ft of storage and processing space. Our proprietary
              warehouse management system is integrated with all the major
              demand channels and courier partners. It is designed to enable
              efficient multi-tenant, multi-location warehousing – allowing
              clients to quickly and flexibly scale operations across India with
              zero fixed costs. We also offer integrated distribution solutions
              to enterprises by combining our warehousing and freight solutions.
              This facilitates fast and cost-efficient offline distribution.
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/photos/delhivery-fulfilment.jpg"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
          </div>
        </div>

        <div className="row text-center service-body">
          <div className="col-md-6">
            <img
              src="/photos/fulfilment-services.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">FULFILMENT SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Multi-channel B2C Order Fulfilment</span>
              <br />
              <span className="py-2">B2B Order Fulfilment</span>
              <br />
              <span className="py-2">Returns Management</span>
              <br />
              <span className="py-2">Courier Selection and Management</span>
              <br />
              <span className="py-2">
                Category-specific Fulfilment <br /> (Furniture/White Goods)
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
              <span className="py-2">Distributed Order Management</span> <br />
              <span className="py-2">
                Global Inventory Visibility and Management
              </span>
              <br />
              <span className="py-2">Channel Integration and Management</span>
              <br />
              <span className="py-2">Courier Selection and Management</span>
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
