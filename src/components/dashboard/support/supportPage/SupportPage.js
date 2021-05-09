import React from "react";
import { NavLink } from "react-router-dom";
import bgs from "../../../../img/bg.jpg";
import "../../../../css/Dashboard.css";

export default function SupportPage() {
  return (
    <div>
      {/* header. */}
      <div className="header-image" style={{ backgroundImage: `url(${bgs})` }}>
        <div className="container">
          <div className="header-name h1 text-center pt-3">
            DELHIVERY HELP DESK
          </div>
          <div className="header-content-input h5 text-center mt-5 p-10">
            <input
              type="text"
              placeholder="Enter your question here..."
              className="form-control"
            />
          </div>
        </div>
      </div>

      {/* Body. */}
      <div className="support-content">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-2">
              <div className="support-content-box">
                <NavLink
                  to="/Support"
                  activeClassName="active"
                  className="support-header"
                >
                  <div className="text-center">
                    <img
                      src="/photos/Top queries.png"
                      alt="constellation"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="text-center h6 mt-3">
                    <p>Top Queries</p>
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-2">
              <div className="support-content-box">
                <NavLink
                  to="/ShipmentRelatedQueries"
                  activeClassName="active"
                  className="support-header"
                >
                  <div className="text-center">
                    <img
                      src="/photos/shipment related queries.png"
                      alt="constellation"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="text-center h6 mt-3">
                    Shipment Related Queries
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-2">
              <div className="support-content-box">
                <NavLink
                  to="/Complaints"
                  activeClassName="active"
                  className="support-header"
                >
                  <div className="text-center">
                    <img
                      src="/photos/complaints.png"
                      alt="constellation"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="text-center h6 mt-3">Complaints</div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-2">
              <div className="support-content-box">
                <NavLink
                  to="/ReturnRelatedQueries"
                  activeClassName="active"
                  className="support-header"
                >
                  <div className="text-center">
                    <img
                      src="/photos/return related service.png"
                      alt="constellation"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="text-center h6 mt-3">
                    Return Related Queries
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-2">
              <div className="support-content-box">
                <NavLink
                  to="/ShipWithUs"
                  activeClassName="active"
                  className="support-header"
                >
                  <div className="text-center">
                    <img
                      src="/photos/ship with us.png"
                      alt="constellation"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="text-center h6 mt-3">Ship With Us</div>
                </NavLink>
              </div>
            </div>

            <div className="col-md-2">
              <div className="support-content-box">
                <NavLink
                  to="/Others"
                  activeClassName="active"
                  className="support-header"
                >
                  <div className="text-center">
                    <img
                      src="/photos/other.png"
                      alt="constellation"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="text-center h6 mt-3">Others</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
