import React from 'react'
// import { TimelineMax } from "gsap";
import './card.css'

function Card({title,desc,link}) {
  return (
    
    <div className="card1">
            <div className="box">
              <div className="content">
                <h3>{title}</h3>
                <p>{desc}
                </p>
                <a href={link} className='btn btn-branding'>View Project</a>
              </div>
            </div>
          </div>
  )
}

export default Card