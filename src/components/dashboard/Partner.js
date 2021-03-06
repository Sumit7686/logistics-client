import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import bgs from "../../img/bg.jpg";
import { useHistory } from "react-router-dom";

export default function Partner() {
  let history = useHistory();

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="header-image" style={{ backgroundImage: `url(${bgs})` }}>
        <div className="container">
          <div className="header-name h2 text-center">PARTNER WITH US</div>
          <div className="header-content h5 text-center mt-3">
            Build your business with Delhivery Partner Program.
          </div>
          <div className="header-button text-center mt-5 mb-3">
            <button onClick={() => history.push("/Partner")} className="p-1">
              CONSTELLATION
            </button>
            <button
              onClick={() => history.push("/LastMileAgent")}
              className="p-1"
            >
              LAST-MILE AGENT
            </button>
            <button
              onClick={() => history.push("/DropAtStore")}
              className="p-1"
            >
              DROP AT STORE
            </button>
            <button onClick={() => history.push("/Franchisee")} className="p-1">
              FRANCHISEE
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="partner-body container">
        <div className="row my-4">
          <div className="col-md-6">
            <div className="h1">CONSTELLATION</div>
            <div className="partnerbody-content p mt-4">
              Constellation partners extend Delhivery's transportation network
              to geographies which are currently not serviced by Delhivery
              internal operations. As a partner, you will be expected to manage
              the delivery center operations and the staff in your local area.
              Partners may opt to provide a range of services including parcel
              delivery, pick-up services and partial-truckload freight pick-up
              and delivery services. We currently have 850+ Constellation
              partners successfully running 950+ delivery centers across 900+
              cities.
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              title="iframe"
              width="560"
              height="315"
              src="/photos/constellation.mp4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* <div className="partner-body-2">
        <div className="h1 text-center py-4 mb-0">TESTIMONIALS</div>
        <div className="container">
        
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-ride="carousel"
            data-interval="3000">
  
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="my-5">
                  <div className="row">
                    <div className="partner-body-2-image d-flex col-md-6">
                      <img
                        src="/photos/owner.jpg"
                        alt="owner"
                        className="has-retina img-responsive"
                      />
                      <span className="pl-3 h3">
                        Sumit Bharodiya
                        <div className="h6">Management</div>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="p">
                        Constellation has enabled us to build an effective
                        corporate identity in terms of market awareness and lead
                        generation. We are based out of West Bengal and are
                        present in 2 districts - Helencha and Mirzapur. Over the
                        past year, we have grown to handle over 250 packages a
                        day. We look forward to working with Delhivery for many
                        years to come.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="my-5">
                  <div className="row">
                    <div className="partner-body-2-image d-flex col-md-6">
                      <img
                        src="/photos/owner.jpg"
                        alt="owner"
                        className="has-retina img-responsive"
                      />
                      <span className="pl-3 h3">
                        Paras Bhalala
                        <div className="h6">Designer</div>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="p">
                        We would like to thank you for the amazing effort and
                        great support! We started working with Delhivery in June
                        2017 and are based out of Barpeta in Assam. With your
                        help, we deliver more than 170 packages a day within a
                        certain time frame. This has translated into providing a
                        great experience for our clients.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="my-5">
                  <div className="row">
                    <div className="partner-body-2-image d-flex col-md-6">
                      <img
                        src="/photos/owner.jpg"
                        alt="owner"
                        className="has-retina img-responsive"
                      />
                      <span className="pl-3 h3">
                        Chirag Dhorajiya
                        <div className="h6">Node-Js</div>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="p">
                        We partnered with Delhivery in 2016 because of its core
                        competencies in the logistics space.The team???s hands-on
                        approach and willingness to go that extra mile helps in
                        creating outstanding customer experiences. We are
                        present in the Raghunathganj and Dhulian district of
                        West Bengal and deliver over 200 and 170 packages daily
                        in each district respectively.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="my-5">
                  <div className="row">
                    <div className="partner-body-2-image d-flex col-md-6">
                      <img
                        src="/photos/owner.jpg"
                        alt="owner"
                        className="has-retina img-responsive"
                      />
                      <span className="pl-3 h3">
                        Vivek Gauswami
                        <div className="h6">Node-Js</div>
                      </span>
                    </div>
                    <div className="col-md-6">
                      <div className="p">
                        Delhivery provides a great service to my company in
                        Orissa. Dealing with more than 567 packages a day, I am
                        completely satisfied with the speed and simplicity of
                        working with the team.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="partner-body-3 container mt-5 pt-5">
        <div className="text-center">
          <div className="partner-body-3-name h3">
            GET STARTED IN THREE SIMPLE STEPS
          </div>
        </div>

        <div className="container">
          <div className="row text-center mt-4">
            <div className="col-md-4">
              <img
                src="/photos/sign-up.jpg"
                alt="sign-up"
                className="has-retina img-responsive"
              />
              <div className="h3">01</div>
              <span className="p">Sign up for Constellation</span>
            </div>
            <div className="col-md-4">
              <img
                src="/photos/select-location.jpg"
                alt="select-location"
                className="has-retina img-responsive"
              />
              <div className="h3">02</div>
              <span className="p">Select the preferred location</span>
            </div>
            <div className="col-md-4">
              <img
                src="/photos/delivering-service.jpg"
                alt="delivering-service"
                className="has-retina img-responsive"
              />
              <div className="h3">03</div>
              <span className="p">
                Start delivering and servicing <br /> customers in your
                territory
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-4">
        <div className="partner-body-button">
          <button>PARTNER PROGRAM</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
