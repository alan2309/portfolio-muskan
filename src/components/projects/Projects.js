import React from 'react'
import Card from './Card'

function Projects() {
  return (
    <div id='projects' style={{minHeight:"50vh"}}>
       <h2 className='work-title'>
        <div className='work-back'>
        My Projects</div>
        </h2><br/>
      <div className="hover_cards">
    <div className="container-1">
      {/* projects */}
      <Card no={1} title='Project 1' desc = 'Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
      <Card no={2} title='Project 2' desc = 'Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
      <Card no={3} title='Project 3' desc = 'Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
      <Card no={4} title='Project 4' desc = 'Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
      <Card no={5} title='Project 5' desc = 'Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
      <Card no={6} title='Project 6' desc = 'Lorem ipsum dolor sit amet, consectur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
      </div></div>
      </div>
  )
}

export default Projects