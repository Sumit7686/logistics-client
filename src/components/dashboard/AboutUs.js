import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import bgs from "../../img/bg.jpg";
import bgTrack from "../../img/getting-there.gif";
import "../../css/Dashboard.css";

export default function AboutUs() {
  return (
    <div>
      <Navbar />

      <div className="header-image" style={{ backgroundImage: `url(${bgs})` }}>
        <div className="container">
          <div className="header-name h1 text-center">ABOUT US</div>
          <div className="h5 text-center">
            Changing the world, one shipment at a time.
          </div>
        </div>
      </div>
      <div className="my-5 container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="h1">WHO ARE WE ?</div>
            <div className="p pt-3">
              Since its inception in 2011, Delhivery has become India’s leading
              supply chain services company. Our vision is to become the
              operating system for commerce in India, through a combination of
              world-class infrastructure, logistics operations of the highest
              quality and cutting-edge engineering and technology capabilities.
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              title="iframe"
              width="560"
              height="315"
              src="/photos/Who are we.mp4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className="body-track"
        style={{ backgroundImage: `url(${bgTrack})` }}
      >
        <div className="container">
          <div className="h1 pt-5">ITʼS IN THE GETTING THERE</div>
          <div className="p pt-3 col-md-8">
            Our team has successfully fulfilled over 850 million orders to more
            than 300 million households across India. 24 automated sort centers,
            85+ fulfilment centers, 70 hubs, 3000+ direct delivery centers,
            7500+ partner centers, 15000+ vehicles and 40000+ team members make
            it possible to deliver a million packages a day, 24 hours a day, 7
            days a week, 365 days a year. We are Delhivery.
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
        <div className="col-md-6">
            <iframe
              title="iframe"
              width="560"
              height="315"
              src="/photos/our-mission.mp4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-md-6">
            <div className="h1 pb-2">OUR MISSION</div>
            <div className="h5">SMALL WORLD</div>
            <div className="p pt-3">
              PVCS provides products and services with the aim of building
              trust and improving the lives of consumers, small businesses,
              enterprises and our growing team of employees and partners. We are
              disrupting India’s logistics industry through our proprietary
              network design, infrastructure, partnerships, and engineering and
              technology capabilities. PVCS brings unparalleled cost
              efficiency and pan-India reach to the businesses of over 10000
              customers. We are driven by a mission to shrink time and distance,
              making the world a smaller place for our customers and over a
              billion consumers they serve.
            </div>
          </div>
        </div>
      </div>

      <div className="company-history mt-5">
        <div className="container">
          <div className="text-center h1 py-3 mb-0">COMPANY HISTORY</div>
          <div className="row mt-4">
            <div className="col-md-6 mt-4">
              <div className="h4">HISTORY</div>
              <div className="company-history-content">
                <div className="container">
                  <div className="p mt-3">
                    2 million sq ft of established infrastructure across 175+
                    pin codes and 10+ cities.
                  </div>
                  <div className="p mt-3">
                    Launch of 3 new mega trucking terminals in Surat, Rajkot
                    and Ahmedabad.
                  </div>
                  <div className="company-history-content-img mt-2">
                    <img
                      src="/photos/mega-trucking_launch.jpg"
                      alt="company-history"
                      className="has-retina img-responsive"
                    />
                  </div>
                  <div className="p mt-3">
                    Deployment of tractor-trailers in express trucking in
                    partnership with Volvo Trucks.
                  </div>
                  <div className="company-history-content-img mt-2">
                    <img
                      src="/photos/volvo truck.jpg"
                      alt="volvo truck"
                      // alt="company-history"
                      className="has-retina img-responsive"
                    />
                    <div className= "p mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/photos/company-history.jpg"
                alt="company-history"
                className="has-retina img-responsive"
              />
              <div className="row text-center my-4">
                <div className="col-md-3">
                  <span className="h4">10</span> <br />
                  <span>CITIES</span>
                </div>
                <div className="col-md-3">
                  <span className="h4">10K+</span> <br />
                  <span>CUSTOMERS</span>
                </div>
                <div className="col-md-3">
                  <span className="h4">200+</span> <br />
                  <span>SELLERS</span>
                </div>
                <div className="col-md-3">
                  <span className="h4">25K+</span> <br />
                  <span>PRODUCTS/DAY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
