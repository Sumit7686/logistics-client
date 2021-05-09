import React from "react";
import "../../../css/Dashboard.css";
import bgs from "../../../img/bg.jpg";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { useHistory } from "react-router-dom";

export default function Freight() {
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
            <div className="h1">DELHIVERY FREIGHT</div>
            <div className="p mt-3">
              Delhivery provides partial-truckload as well as full-truckload
              services to meet the customers’ freight requirements. Our services
              are designed to meet regular as well as seasonal requirements
              across the country. Customers’ freight requirements are serviced
              at the lowest costs – with a combination of our own fleet and our
              network of pan-India professional truckload partners. All of this
              is done through Optimus and Orion – simple freight booking and
              management interfaces of our PTL and FTL freight exchanges.
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/photos/delhivery-freight.jpg"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
          </div>
        </div>

        <div className="row text-center service-body">
          <div className="col-md-6">
            <img
              src="/photos/services.png"
              alt="delhivery-express"
              className="has-retina img-responsive"
            />
            <div className="mt-4">
              <span className="h5">SERVICES</span>
            </div>
            <div className="service-body-content mt-3">
              <span className="py-2">Partial-truckload Freight</span> <br />
              <span className="py-2">Full-truckload Freight</span> <br />
              <span className="py-2">Freight Procurement Solutions</span>
              <br />
              <span className="py-2">GST Management</span>
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
              <span className="py-2">Real-time Consignment Visibility </span>
              <br />
              <span className="py-2">
                Spot and Forward Freight Rate Trading
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
