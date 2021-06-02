import React from "react";
import "../../css/Footer.css";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="maindiv7">
      <div className="border-bottom">
        <div className="container">
          <div className="maindiv7-name row pt-5 pb-4">
            <div className="col-md-3">
              <img
                src="/photos/footer-logo.jpg"
                alt="logo"
                className="has-retina img-responsive"
              />
              <div className="mt-3">
                <span className="maindiv7-first">
                  ISO 9001: 2015, ISO 27001: 2013 Certified Company CIN:
                  U63090DL2011PTC221234
                </span>
              </div>
              <div className="d-flex align-items-center mt-4">
                <span className="mr-1 pt-1">
                  <MdEmail />
                </span>
                <span className="maindiv7-first-email">
                  customer.support@pvcs.com
                </span>
              </div>
            </div>
            <div className="maindiv7-secound col-md-1 pl-4">
              <span>company</span>
              <ul className="mt-3">
                <li className="my-3">
                  <a
                    href="/AboutUs"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    About us
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="/Services"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Services
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="/Partner"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Partner
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="/AboutUs"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    News
                  </a>
                </li>
                <li className="my-3">
                  <a
                    href="/AboutUs"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="maindiv7-secound col-md-2 pl-5">
              <span>get in touch</span>
              <ul className="mt-3">
                <li className="my-3">Support</li>
                <li className="my-3">Careers</li>
                <li className="my-3">Start Shipping</li>
              </ul>
            </div>
            <div className="maindiv7-secound col-md-2">
              <span>More from Delhivery</span>
              <ul className="mt-3">
                <li className="my-3">International Parcel Services</li>
                <li className="my-3">Domestic Courier Services</li>
                <li className="my-3">Import-Export Courier Services</li>
              </ul>
            </div>
            <div className="maindiv7-secound col-md-2">
              <span>Quick Links</span>
              <ul className="mt-3">
                <li className="my-3">Full-Truckload Services</li>
                <li className="my-3">Partial-Truckload Services</li>
                <li className="my-3">Supply Chain Logistics</li>
                <li className="my-3">Ecommerce Logistics Services</li>
              </ul>
            </div>
            <div className="maindiv7-secound col-md-2">
              <span>Information Security Policy</span>
              <ul className="mt-3">
                <li>
                  Delhivery is committed to safeguarding the confidentiality,
                  integrity and availability of all physical and electronic
                  information assets of the organization. We ensure that the
                  regulatory, operational and contractual requirements are
                  fulfilled.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="maindiv7-last container py-3">
        <div className="row d-flex align-items-center">
          <div className="maindiv7-last-name col-md-3">
            <span>© PVCS LIMITED</span>
          </div>
          <div className="maindiv7-last-middle col-md-6 text-center">
            <span>
              Contract Labour Act | Terms & Conditions | Privacy Policy | Cookie
              Policy | CSR Policy | EEO Policy
            </span>
          </div>
          <div className="maindiv7-last-icon col-md-3 text-right">
            <span className="m-2">
              <GrInstagram />
            </span>
            <span className="m-2">
              <FaFacebookF />
            </span>
            <span className="m-2">
              <AiFillLinkedin />
            </span>
            <span className="m-2">
              <AiOutlineTwitter />
            </span>
            <span className="m-2">
              <AiFillYoutube />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
