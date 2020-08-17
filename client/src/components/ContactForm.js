import '../views/styles/ContactForm.css';
import emailjs from "emailjs-com";
import React from 'react';
import swal from 'sweetalert';

export default function ContactUs() {

    function sweetAlertClick() {
        swal("Message sent!", "Please allow me 24 hours to respond. Have a great day!", "success")
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs
            .sendForm(
                "gmail",
                "michaeltemplate",
                e.target,
                "user_5Bf1J7iCd4fehUqEZhouf"
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    
    return (
    <div className="BackgroundImg">
        <div className="container">
            <div className="row text-center pt-5 pb-5">
                <div className="col-12 pt-5">
                    <h1 id="FormH1">Contact Me</h1>
                </div>
                <div className="col-12">
                    <p id="FormP">→ I'll be happy to answer any questions ←</p> 
                </div>
                <form onSubmit = {sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-secondary" value="Send Message" onClick={sweetAlertClick}></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}