import React from 'react'
// import { TimelineMax } from "gsap";
import './card.css'

function Card({title,no,desc}) {
  return (
    
    <div className="card1">
            <div className="box">
              <div className="content">
                <h2>{no>9?no:`0${no}`}</h2>
                <h3>{title}</h3>
                <p>{desc}
                </p>
                <a href className='btn btn-branding'>View Project</a>
              </div>
            </div>
          </div>
  )
}

export default Card