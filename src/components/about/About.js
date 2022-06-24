import React from "react";
import {Row,Col} from 'react-bootstrap';
import TextLoop from "react-text-loop";
import "./about.css";
import avatar from '../../assets/avatar.png'
import {FaDownload} from 'react-icons/fa'

function About() {
  return (
    <div>
    <div id='about' className="avatar-img">
    <Row>
    <Col style={{flexDirection:"column"}} lg={5}className="d-flex d-none d-lg-block">
    <img style={{width:"35vw",height:"75vh",marginTop:"80px"}} src={avatar} alt="avatar"/>
    </Col>
    <Col lg={7}>
    <div className="hero">
      <p style={{color:"white"}}>👋 Hello, I am</p>
      <h1 style={{color:"white"}}>Muskan Goyal</h1>
      
      <TextLoop interval={3000}>
          <h2 style={{WebkitTextStroke:"1px grey", color: "black",fontWeight:"900" ,fontSize:"35px"}}> AI Engineer.</h2>
          <h2 style={{WebkitTextStroke:"1px grey", color: "black",fontWeight:"900" ,fontSize:"35px"}}> Data Scientist.</h2>
          <h2 style={{WebkitTextStroke:"1px grey", color: "black",fontWeight:"900" ,fontSize:"35px"}}> Data Analyst.</h2>
          <h2 style={{WebkitTextStroke:"1px grey", color: "black",fontWeight:"900" ,fontSize:"35px"}}> ML Engineer.</h2>
        </TextLoop><br/>
      <h2 style={{color:"white"}} className="mb-5">
        based in Maharastra,India
      </h2>
      <div>
        <a className="btn btn-branding" href={process.env.PUBLIC_URL + '/Muskan_Goyal_Resume.pdf'} download>
          My Resume  <FaDownload className="icon d" size={20} />
        </a>
      </div>
    </div>
    </Col>
    </Row>
    </div>
    <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 350" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="5%" stopColor="#f196dcff"></stop><stop offset="95%" stopColor="#d9a0e5ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 73.56937799043064,186.63157894736844 147.13875598086128,173.26315789473685 245,185 C 342.8612440191387,196.73684210526315 465.01435406698556,233.57894736842104 562,237 C 658.9856459330144,240.42105263157896 730.8038277511963,210.421052631579 827,183 C 923.1961722488037,155.578947368421 1043.7703349282297,130.73684210526315 1150,134 C 1256.2296650717703,137.26315789473685 1348.1148325358852,168.63157894736844 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth={0} fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f7fe" fillOpacity="1" d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,170.7C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
    </div>
  );
}

export default About;
