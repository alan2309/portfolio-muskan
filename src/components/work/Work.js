import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FiChrome } from 'react-icons/fi';
import './work.css'
import {wData} from './workData'

function Work() {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div>
    <div style={{background: "linear-gradient(#250E68,#D9A0E5)"}} id='work' className='main-div'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#ffffff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,106.7C384,85,480,43,576,42.7C672,43,768,85,864,117.3C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <h2 className='work-title'>
        <div style={{color:"white"}} className='work-back'>
        Work Experience</div>
        </h2><br/>
      <VerticalTimeline>
        {wData.map((work,index)=>{
          return <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work work-date"
          date={work.date}
          iconStyle={{ background: getRandomColor(), color: '#fff' }}
          icon={<FiChrome />}
        >
          <h3 className="vertical-timeline-element-title">{work.pos}</h3>
          <h4 style={{fontSize:"35px"}} className="vertical-timeline-element-subtitle">{work.comp}</h4>
          <p style={{color:"black"}}>
            {work.desc}
          </p>
        </VerticalTimelineElement>
        })}
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FiChrome />}
  />
</VerticalTimeline>
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="5%" stopColor="#f096dcff"></stop><stop offset="95%" stopColor="#daa0e5ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 130.60714285714283,155.46428571428572 261.21428571428567,110.92857142857142 393,128 C 524.7857142857143,145.07142857142858 657.7499999999999,223.75 781,240 C 904.2500000000001,256.25 1017.7857142857144,210.07142857142858 1126,193 C 1234.2142857142856,175.92857142857142 1337.1071428571427,187.96428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth={0} fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f7fe" fillOpacity="1" d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,170.7C1120,181,1280,235,1360,261.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
      </div>
  )
}

export default Work