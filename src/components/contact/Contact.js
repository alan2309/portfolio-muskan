import React from 'react'
import './contact.css'
import {ProgressBar} from 'react-bootstrap'

function Contact() {
//   }
  return (
     <div id='skills'>
        <h2 style={{fontSize:"40px",textAlign:"center",fontFamily:"Montserrat",fontWeight:"800"}}>Skills</h2>
           <div style={{marginBottom:"60px",marginTop:"20px"}} className='container'>
              <label style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"20px"}}>Html</label>
        <ProgressBar className='p' variant="success" now={40} label={`40%`} />
        <label style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"20px"}}>Html</label>
        <ProgressBar className='p' variant="success" now={40} label={`40%`} />
        <label style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"20px"}}>Html</label>
        <ProgressBar className='p' variant="success" now={40} label={`40%`}/>
        <label style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"20px"}}>Html</label>
        <ProgressBar className='p' variant="success" now={40} label={`40%`}/>
        </div>
          </div>
);
}

export default Contact