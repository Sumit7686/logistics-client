import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import bgs from "../../img/bg.jpg";

export default function Careers() {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="header-image" style={{ backgroundImage: `url(${bgs})` }}>
        <div className="container">
          <div className="header-name h1 text-center pt-3">
            CAREERS AT DELHIVERY
          </div>
          <div className="header-content h5 text-center mt-3">
            Driven by ideas and people
          </div>
        </div>
      </div>

      {/* Body. */}
      <div className="career-body">
        <div className="container">
          <div className="row my-5">
            <div className="col-md-6">
              <div className="h1">JOIN US</div>
              <div className="career-body-content p mt-3">
                We’re looking for curious, passionate people with a desire to
                solve challenging business problems through first principles. We
                move fast, operate under pressure and with limited resources. If
                you have a deep interest to relentlessly move our business
                forward and share our joy at making the world a smaller place,
                give us a shout.
              </div>
              <div className="career-body-button">
                <button className="mt-5">VIEW TECH OPENINGS</button>
              </div>
              <div className="mt-4 career-body-linkSpan">
                <span className="career-body-linkSpan-1">
                  For other profiles, please click
                </span>
                <span className="career-body-linkSpan-2"> here.</span>
              </div>
            </div>
            <div className="col-md-6">
              <iframe
                title="iframe"
                width="560"
                height="315"
                src="/photos/join us.mp4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="career-body-values1">
          <div className="text-center h3">OUR VALUES</div>
          <div className="row my-5 align-items-center">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center career-body-values1-image">
              <img
                src="/photos/img-1.jpg"
                alt="constellation"
                className="has-retina img-responsive"
              />
              <div className="text-left ml-5 career-body-values1-content">
                <div className="h2 pt-3 pl-2 my-3">BOLD</div>
                <div className="p pl-2 career-body-values1-content-p">
                  Humble yet steadfast. Motivated by the hunt. We work hard,
                  iterate fast, make pragmatic decisions and remain unwaveringly
                  focused on our mission of simplifying the movement of goods.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="career-body-values2">
          <div className="row my-5 align-items-center">
            <div className="col-md-6 text-center career-body-values2-image">
              <img
                src="/photos/img-2.jpg"
                alt="constellation"
                className="has-retina img-responsive"
              />
              <div className="text-left ml-5 career-body-values2-content">
                <div className="h2 pt-3 pl-2 my-3">HUMAN</div>
                <div className="p pl-2 career-body-values2-content-p">
                  We’re trying to build a world-beating business and a
                  world-beating team in one of the most challenging economies on
                  the planet. We are committed to developing people to deliver
                  consistent quality and service by providing them with the
                  necessary mentorship, skills, training and support to take on
                  grand challenges, experiment, make mistakes, and learn from
                  each other.
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="career-body-values3">
          <div className="row my-5 align-items-center">
            <div className="col-md-6"></div>
            <div className="col-md-6 text-center career-body-values3-image">
              <img
                src="/photos/img-3.jpg"
                alt="constellation"
                className="has-retina img-responsive"
              />
              <div className="text-left ml-5 career-body-values3-content">
                <div className="h2 pt-3 pl-2 my-3">CUSTOMER EXPERIENCES</div>
                <div className="p pl-2 career-body-values3-content-p">
                  Our clients are the heart of our business. Every package
                  matters. Every scan matters. We’re constantly looking for ways
                  to become faster, more reliable and more efficient than
                  yesterday.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="career-body-values4">
          <div className="row my-5 align-items-center">
            <div className="col-md-6 text-center career-body-values4-image">
              <img
                src="/photos/img-4.jpg"
                alt="constellation"
                className="has-retina img-responsive"
              />
              <div className="text-left ml-5 career-body-values4-content">
                <div className="h2 pt-3 pl-2 my-3">PEOPLE DRIVEN</div>
                <div className="p pl-2 career-body-values4-content-p">
                  We’re proud of our team of over 40000 people, united in our
                  common quest towards building the operating system for
                  commerce in India. Our people are what makes us different. We
                  have created an equal opportunity workplace that values
                  transparency, diversity and a culture of craftsmanship.
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
