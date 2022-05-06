import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaGithub} from "react-icons/fa";
import './footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p style={{fontSize:"18px"}} className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Muskan Goyal.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
            <li><a className="facebook" href="https://www.github.com/"><FaGithub className='icon' /></a></li>
            <li><a className="dribbble" href="https://www.linkedin.com/"><FaLinkedin className='icon'/></a></li>
              <li><a className="facebook" href="https://www.facebook.com/"><FaFacebook className='icon' /></a></li>
              <li><a className="twitter" href="https://www.instagram.com/"><FaInstagram className='icon'/></a></li>
              <li><a className="linkedin" href="https://twitter.com/"><FaTwitter className='icon'/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer