import React from 'react'
import Card from './Card'
import {pdata} from './projectData';

function Projects() {
  return (
    <div id='projects' style={{minHeight:"50vh"}}>
       <h2 className='work-title'>
        <div className='work-back'>
        My Projects</div>
        </h2><br/>
      <div className="hover_cards">
    <div className="container-1">
      {pdata.map((prof,index)=>{
        return  <Card key={index} title={prof.title} desc = {prof.desc} link={prof.link}/>
      })}
      </div></div>
      </div>
  )
}

export default Projects