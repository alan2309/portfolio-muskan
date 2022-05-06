import React from 'react'
import './contact.css'

function Contact() {
//   const [data,setData] = useState({
//     email:"",
//     name:"",
//     subject:"",
//     message:""
//   })
//   function Alert() {
//     alert("alertttt")
//   }
//   function sendEmail(){
// alert('send email')
//   }
  return (
    <div id='contact'>
    <section className="get-in-touch">
   <h1 className="title">Get in touch</h1>
   <form className="contact-form row">
      <div className="form-field col x-50">
         <input id="name" className="input-text js-input" type="text" required/>
         <label className="label" for="name">Name</label>
      </div>
      <div className="form-field col x-50">
         <input id="email" className="input-text js-input" type="email" required/>
         <label className="label" for="email">E-mail</label>
      </div>
      <div className="form-field col x-100">
         <input id="message" className="input-text js-input" type="text" required/>
         <label className="label" for="message">Message</label>
      </div>
      <div className="form-field col x-100 align-center">
         <input className="submit-btn" type="submit" value="Submit"/>
      </div>
   </form>
</section>
  </div>
);
}

export default Contact