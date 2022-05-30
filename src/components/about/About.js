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
      <p>👋 Hello, I am</p>
      <h1>Muskan Goyal</h1>
      
      <TextLoop interval={3000}>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> Ai Developer.</h2>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> Data Analyst.</h2>
          <h2 style={{ color: "#1F51FF" ,fontWeight:"900"}}> Engineer.</h2>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> Content Writter.</h2>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> ML Model Designer.</h2>
        </TextLoop><br/>
      <h2 className="mb-5">
        based in Maharastra,India
      </h2>
      <div>
        <a className="btn btn-branding" href='/' download="Alankrit's Resume.pdf">
          My Resume  <FaDownload className="icon d" size={20} />
        </a>
      </div>
    </div>
    </Col>
    </Row>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f7fe" fillOpacity="1" d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,170.7C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
  );
}

export default About;
