import React,{useEffect} from 'react'
import './contact2.css'
import $ from 'jquery';

function Contact2() {

    useEffect(()=>{
        var lang = {
            "html": "100%",
            "css": "90%",
            "javascript": "70%",
            "php": "55%",
            "angular": "65%"
          };
          
          var multiply = 4;
          
          $.each( lang, function( language, pourcent) {
          
            var delay = 700;
            
            setTimeout(function() {
              $('#'+language+'-pourcent').html(pourcent);
            },delay*multiply);
            
            multiply++;
          
          });
    },[])
  return (
      <div id='skills'>
          <h2 className='work-title skill-t'>
        <div className='work-back'>
        Skills</div>
        </h2><br/>
    <ul className="skills-bar-container">
  <li>
    <div className="progressbar-title">
      <h3>HTML5</h3>
      <span className="percent" id="html-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressred" id="progress-html"></span>
    </div>
  </li>
  <li>
    <div className="progressbar-title">
      <h3>CSS / SASS</h3>
      <span className="percent" id="css-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressblue" id="progress-css"></span>
    </div>
  </li>
  
  <li>
    <div className="progressbar-title">
      <h3>JavaScript / jQuery</h3>
      <span className="percent" id="javascript-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progresspurple" id="progress-javascript"></span>
    </div>
  </li>
  
  <li>
    <div className="progressbar-title">
      <h3>PHP</h3>
      <span className="percent" id="php-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressorange" id="progress-php"></span>
    </div>
  </li>
  
  <li>
    <div className="progressbar-title">
      <h3>AngularJS</h3>
      <span className="percent" id="angular-pourcent"></span>
    </div>
    <div className="bar-container">
      <span className="progressbar progressgreen" id="progress-angular"></span>
    </div>
  </li>
  
</ul>
    </div>
  )
}

export default Contact2