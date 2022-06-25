import React,{useEffect} from 'react'
import "./skills.css"
import $ from 'jquery';
import {sdata} from './skillsData';

function Skills() {
useEffect(()=>{
    $(window).scroll(function() {
        var hT = $('#skill-bar-wrapper').offset().top,
            hH = $('#skill-bar-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-1.4*wH)){
            $(document).ready(function(){
                $('.skillbar-container').each(function(){
                    $(this).find('.skills').animate({
                        width:$(this).attr('data-percent')
                    }, 5000); // 5 seconds
                });
            });
        }
     });
})
  return (
    <div id="skills">
<h2 className='work-title skill-t'>
        <div className='work-back'>
        Skills</div>
        </h2><br/>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-lg-offset-2">
          <div style={{padding:"0 35px",marginBottom:"80px"}} id="skill-bar-wrapper">
            <div  className="text-left">
                {sdata.map((s,index)=>{
                    return  <div key={index} >
                   <span style={{fontWeight:"700",fontSize:"18px"}}>{s.skill}</span>
                    <span style={{float:"right",fontWeight:"700",fontSize:"18px"}}>{s.percent}%</span>
                    <div className="skillbar-container clearfix" data-percent={`${s.percent}%`}>
                      <div className="skills" style={{background:s.color}}></div>
                    </div>
                    </div>
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills