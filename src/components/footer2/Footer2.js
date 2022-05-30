import React from 'react'
import './footer2.css'
import { FaFacebook,FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa";

function Footer2() {
  return (
<footer id='footer' className="footer-distributed">

			<div className="footer-left">

				<h3>Muskan<span>Goyal</span></h3>

				<p className="footer-links">
					<a href="#about" className="link-1">About</a>

					<a href="#projects">Projects</a>
				
					<a href="#work">Work</a>
				
					<a href="#resume">Resume</a>
					
					<a href="#skills">Skills</a>
				</p>

				<p className="footer-company-name">Muskan Goyal © 2022</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Mumbai</span> Maharastra, India</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 98339 53390</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p style={{fontSize:"15px"}}><a href="mailto:muskangoyal4000@gmail.com">muskangoyal4000@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About me</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

                <a className="facebook" href="https://www.github.com/"><FaGithub className='icon' /></a>
                <a className="dribbble" href="https://www.linkedin.com/"><FaLinkedin className='icon'/></a>
                <a className="facebook" href="https://www.facebook.com/"><FaFacebook className='icon' /></a>
                <a className="linkedin" href="https://twitter.com/"><FaTwitter className='icon'/></a>

				</div>

			</div>

		</footer>
  )
}

export default Footer2