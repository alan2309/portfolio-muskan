import React from "react";
import {Row,Col} from 'react-bootstrap';
import TextLoop from "react-text-loop";
import "./about.css";
import avatar from '../../assets/avatar.png'

function About() {
  return (
    <div id='about' className="avatar-img">
    <Row>
    <Col style={{flexDirection:"column"}} lg={5}className="d-flex d-lg-block">
    <img style={{width:"35vw",height:"75vh",marginTop:"80px"}} src={avatar} alt="avatar"/>
    </Col>
    <Col lg={7}>
    <div className="hero">
      <p>👋 Hello, I am</p>
      <h1>Muskan Goyal</h1>
      <TextLoop interval={2000}>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> Ai Developer.</h2>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> Data Analyst.</h2>
          <h2 style={{ color: "#1F51FF" ,fontWeight:"900"}}> Engineer.</h2>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> Content Writter.</h2>
          <h2 style={{ color: "#1F51FF",fontWeight:"900" }}> ML Model Designer.</h2>
        </TextLoop><br/>
      <h2 class="mb-5">
        based in Maharastra,India
      </h2>
      <div>
        <a href="#contact" class="btn btn-branding">
          Contact me
        </a>
      </div>
     
    </div>
    </Col>
    </Row>
    </div>
  );
}

export default About;
