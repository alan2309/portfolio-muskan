import React, { useEffect, useState } from "react";
import "./footer2.css";
import {FaInstagram, FaLinkedin, FaGithub,FaKaggle } from "react-icons/fa";

function Footer2() {
  const [year, setYear] = useState(0);
  useEffect(() => {
    let now = new Date();
    setYear(now.getFullYear());
  }, []);
  return (
    <footer id="footer" className="footer-distributed">
      <div className="footer-left">
        <h3>
          Muskan<span>Goyal</span>
        </h3>

        <p className="footer-links">
          <a href="#about" className="link-1">
            About
          </a>

          <a href="#projects">Projects</a>

          <a href="#work">Work</a>

          <a  href={process.env.PUBLIC_URL + '/Muskan_Goyal_Resume.pdf'} download>Resume</a>

          <a href="#skills">Skills</a>
        </p>

        <p className="footer-company-name">Muskan Goyal © {year}</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Mumbai</span> Maharastra, India
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 98339 53390</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p style={{ fontSize: "15px" }}>
            <a href="mailto:muskangoyal4000@gmail.com">
              muskangoyal4000@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About me</span>
          I am a curious soul always in the process of learning and developing my mind through various methods but that doesn't mean I am a total nerd as I like playing sports and play badminton and cycle whenever i get the time. 
        </p>

        <div className="footer-icons">
          <a className="facebook" href="https://github.com/muskan132">
            <FaGithub className="icon" />
          </a>
          <a className="dribbble" href="https://www.linkedin.com/in/muskan-goyal-981b71207/">
            <FaLinkedin className="icon" />
          </a>
          <a className="facebook" href="https://www.instagram.com/muskan____goyal/">
            <FaInstagram className="icon" />
          </a>
          <a className="linkedin" href=" https://www.kaggle.com/muskangoyal132">
            <FaKaggle className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
