import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

import img1 from "../img/aeliya.jpg";
import img2 from "../img/anushka.jpg";
import img3 from "../img/riya.jpg";
import img4 from "../img/subash.jpg";
import img5 from "../img/testomonial.png";
import img6 from "../img/inspire.png";
import img7 from "../img/tearfund.png";
import img8 from "../img/micah.jpg";
import img9 from "../img/team.jpg";

import Header from "../components/Header";
import Background from "../components/Background";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div
          className="teampic"
          style={{
            width: "100%",
            height: "60vh",
            margin: "0",
            padding: "0",
            overflow: "hidden",
          }}
        >
          <img
            src={img9}
            alt="teampic"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              margin: "0",
              padding: "0",
            }}
          />
        </div>
        <Background />
        {/* logo */}
        <div className="cplogo">
          <img
            src={img6}
            alt="logo"
            style={{ width: "120px", height: "auto" }}
          />
          <img
            src={img7}
            alt="logo"
            style={{ width: "120px", height: "auto" }}
          />
          <img
            src={img8}
            alt="logo"
            style={{ width: "120px", height: "auto" }}
          />
        </div>
        {/* Our team */}

        <div className="container">
          <h1 className="text-center mb-5">Meet Our Team</h1>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member">
                <div
                  className="round-image"
                  style={{ backgroundImage: `url(${img1})` }}
                ></div>
                <p className="membername">Aeliya Tamang</p>
                <p>BSc. CSIT</p>
                <p>Madan Bhandari Memorial College</p>
                <p className="universityname">Tribhuwan University</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member">
                <div
                  className="round-image"
                  style={{ backgroundImage: `url(${img2})` }}
                ></div>
                <p className="membername">Anushka Suyal</p>
                <p>BSc. CSIT</p>
                <p>Ambition College</p>
                <p className="universityname">Tribhuwan University</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member">
                <div
                  className="round-image"
                  style={{ backgroundImage: `url(${img3})` }}
                ></div>
                <p className="membername">Riya Shrestha</p>
                <p>BSc (Hons) Computing</p>
                <p>Islington College</p>
                <p className="universityname">London Metropolitan University</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="team-member">
                <div
                  className="round-image"
                  style={{ backgroundImage: `url(${img4})` }}
                ></div>
                <p className="membername">Subash Danuwar</p>
                <p>BIT</p>
                <p>KIST College</p>
                <p className="universityname">Purbanchal University</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="about-us-carousel">
          <Carousel showArrows={true} infiniteLoop={true}>
            {/* Carousel Item 1 */}
            <div className="about-us">
              <h2>About Us</h2>
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  id urna eu ipsum facilisis tristique. Nullam vitae tincidunt
                  nisl. Sed ultricies urna vel quam euismod, vel bibendum neque
                  feugiat. Duis elementum nisi ut lacus lacinia
                </p>
                <img
                  src={img5}
                  alt="Testimonial"
                  style={{ width: "50px", height: "auto" }}
                />
                <h5>Aeliya Tamang</h5>
              </div>
            </div>

            {/* Carousel Item 2 */}
            <div className="about-us">
              <h2>About Us</h2>
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  id urna eu ipsum facilisis tristique. Nullam vitae tincidunt
                  nisl. Sed ultricies urna vel quam euismod, vel bibendum neque
                  feugiat. Duis elementum nisi ut lacus lacinia
                </p>
                <img
                  src={img5}
                  alt="Testimonial"
                  style={{ width: "50px", height: "auto" }}
                />
                <h5>Anushka Suyal</h5>
              </div>
            </div>

            {/* Carousel Item 3 */}
            <div className="about-us">
              <h2>About Us</h2>
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  id urna eu ipsum facilisis tristique. Nullam vitae tincidunt
                  nisl. Sed ultricies urna vel quam euismod, vel bibendum neque
                  feugiat. Duis elementum nisi ut lacus lacinia
                </p>
                <img
                  src={img5}
                  alt="Testimonial"
                  style={{ width: "50px", height: "auto" }}
                />
                <h5>Riya Shrestha</h5>
              </div>
            </div>

            {/* Carousel Item 4 */}
            <div className="about-us">
              <h2>About Us</h2>
              <div className="about-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  id urna eu ipsum facilisis tristique. Nullam vitae tincidunt
                  nisl. Sed ultricies urna vel quam euismod, vel bibendum neque
                  feugiat. Duis elementum nisi ut lacus lacinia
                </p>
                <img
                  src={img5}
                  alt="Testimonial"
                  style={{ width: "50px", height: "auto" }}
                />
                <h5>Subash Danuwar</h5>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Footer Section */}
        <div className="footer">
          <p>&copy; 2023 SangaSangai. All rights reserved.</p>
          <div className="footer-links">
            {/* <Link to="/about">About </Link> */}
            <a href="https://inspireuvic.org/" target="_blank">
              Inspire
            </a>
            <a
              href="https://www.tearfund.org/about-us/our-impact/where-we-work/nepal"
              target="_blank"
            >
              Tearfund
            </a>
            <a
              href="https://www.facebook.com/MicahNetworkNepal/"
              target="_blank"
            >
              Micah
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
