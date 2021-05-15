import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../css/Dashboard.css";
import { toast } from "react-toastify";

export default function Dashboard() {
  const history = useHistory();

  const [orderId, setOrderId] = useState("");

  const getOrderId = async () => {
    const body = { orderId };

    axios.post("http://localhost:5000/auth/order", body).then((result) => {
      if (result.data.data.length !== 0) {
        localStorage.setItem("TrackOrderId", orderId);
        history.push("/OrderTrack");
        toast.success(result.data.message);
      } else {
        toast.error(result.data.message);
      }
    });
  };

  return (
    <div>
      <Navbar />

      {/* Black Body. */}
      <div className="maindiv">
        <div className="container h-100">
          <div className="row m-0 hs-100 align-items-center">
            <div className="col-md-5 col-sm-12">
              <div className="p-5">
                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="maindiv-sider carousel-inner">
                    <div className="carousel-item active">
                      <h2 className="text-white">70 HUBS, 85 CENTRES</h2>
                    </div>
                    <div className="carousel-item">
                      <h2 className="text-white">50 TRUCKS DAILY</h2>
                    </div>
                    <div className="carousel-item">
                      <h2 className="text-white">4000 TEAMS MEMBERS</h2>
                    </div>
                    <div className="carousel-item">
                      <h2 className="text-white">8M ORDERS FULFILLED</h2>
                    </div>
                    {/* <div className="carousel-item">
                      <h2 className="text-white">5 CITIES SERVICES</h2>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="bg-white maindiv-form">
                <div className="text-center">
                  <div className="maindiv-track">
                    <ul className="p-2">
                      <li>TRACK ORDER</li>
                    </ul>
                  </div>
                  <div className="maindiv-radio">
                    <lable className="m-0">
                      <input type="radio" className="m-2" name="radio" />
                      <span>Mobile Number</span>
                    </lable>
                    <lable className="m-2">
                      <input type="radio" className="m-2" name="radio" />
                      <span>Tracking ID</span>
                    </lable>
                    <lable className="m-2">
                      <input type="radio" className="m-2" name="radio" />
                      <span>Order ID / Ref ID</span>
                    </lable>
                    <lable className="m-2">
                      <input type="radio" className="m-2" name="radio" />
                      <span>LTL Shipment (LRN)</span>
                    </lable>
                  </div>
                </div>
                <div className="maindiv-form row d-flex mt-3">
                  <div className="col-md-7 col-sm-10">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control ml-2"
                        placeholder="Enter Mobile or tracking number"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-10">
                    <button
                      className="maindiv-input-button btn py-1 mb-2 rounded m-1"
                      onClick={() => getOrderId()}
                    >
                      Get OTP & Track
                    </button>
                  </div>
                </div>
              </div>
              <div className="maindiv-form row d-flex mt-3">
                <div className="col-md-7 col-sm-12">
                  <div className="form-group">
                    <span className="maindiv-form-span">
                      START SHIPPING WITH PVCS LMTD
                    </span>
                  </div>
                </div>
                {/* <div className="col-md-5 col-sm-12">
                  <button className="maindiv-input-button btn py-2 mb-4 rounded">
                    SET-UP BUSINESS ACCOUNT
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* blue Body. */}
        <div className="maindiv2">
          <div className="container">
            <span className="float-right my-2">
              <span className="delivery-number h4">
                CURRENTLY DELIVERING PACKAGE NUMBER :
              </span>
              <span className="h3"> 827,949</span>
            </span>
          </div>
        </div>
      </div>

      {/* Video Body. */}
      {/* <div className="container">
        <div className="maindiv3">
          <div className="row mt-5 align-items-center mb-5">
            <div className="col-md-6 mt-1 ml-1">
              <iframe
                title="iframe"
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/tQio2yieuCo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-md-5 maindiv3-1 ml-4">
              <h2 className="maindiv3-h2-1">OUR LARGEST</h2>
              <h2 className="maindiv3-h2-2">TRUCKING TERMINAL AT BILASPUR</h2>
            </div>
          </div>
        </div>
      </div> */}

      {/* Service. */}
      <div className="maindiv4 container pt-5">
        <div className="row maindiv4">
          <div className="col-md-6 mt-1">
            <div className="maindiv4-name h1 text-center mb-3">SERVICES</div>
            <div className="maindiv-content row align-items-center mb-5">
              <div>
                PVCS LIMITED'S aim is to build the operating system for commerce
                in India. We provide parcel transportation, warehousing,
                freight, reverse logistics, cross-border and technology services
                to over 10000 customers including all of India’s largest
                e-commerce companies and leading enterprises. Our supply chain
                platform and logistics operations bring flexibility, breadth,
                efficiency and innovation to our customers’ supply chain and
                logistics operations. Our operations, infrastructure and
                technology enable our customers to transact with us and our
                partners at the lowest costs.
              </div>

              {/* <div className="w-100">
                <button className="maindiv4-button btn rounded float-right p-2 mt-3">
                  Know More
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-md-5">
            <img src="/photos/services-2.gif" alt="gifService" />
          </div>
        </div>
      </div>

      {/* Partner. */}
      <div className="maindiv5 container pt-5">
        <div className="row maindiv4">
          <div className="col-md-5 maindiv3-1">
            <img src="/photos/partner-4.jpg" alt="gifPartner" />
          </div>
          <div className="col-md-6 mt-1">
            <div className="maindiv5-name h1 text-center mb-3">PARTNER</div>
            <div className="row align-items-center mb-5">
              <div className="maindiv5-content">
                As part of our vision we also aim to enable businesses and
                individuals across India with tools to participate in the huge
                digital supply chain opportunity of the future. Over 7500
                businesses have already partnered with Delhivery and have access
                to our infrastructure and technology, in order to extend the
                Delhivery fulfilment platform through their product and
                operations.
              </div>

              {/* <div className="w-100">
                <button className="maindiv5-button btn rounded float-right p-2 mt-3">
                  Know More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* In the News. */}
      <div className="maindiv6 container">
        <div className="d-flex">
          <div className="maindiv6-name h2">IN THE NEWS</div>
          {/* <div className="maindiv6-button ml-auto">
            <button className="btn rounded p-2 px-4">VIEW ALL</button>
          </div> */}
        </div>

        {/* First */}
        <div className="maindiv6-first row mt-4 mb-4 rounded">
          <div className="col-md-6 mt-1">
            <div className="maindiv6-first-content h2">
              funding alert !<br></br> <br></br>Retail investors buys $25m worth
              of shares in PVCS LIMITED
            </div>
          </div>
          <div className="maindiv6-first-img col-md-6 p-0">
            <img
              className="rounded-right"
              src="/photos/funding_news.gif"
              alt="funding_news"
            />
          </div>
        </div>

        {/* Second */}
        <div className="maindiv-secound row mb-5">
          <div className="col-md-6 pl-0">
            <div className="maindiv6-second-firstBox h3 p-4 rounded">
              Will be top delivery company by revenue: PVCS LIMITED
            </div>
          </div>
          <div className="col-md-6 ml-auto pr-0">
            <div className="maindiv6-second-secoundBox h3 p-4 rounded">
              Covid-19 and the role of ai, machine learning in logistics: a
              conversation with PVCS limited
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
