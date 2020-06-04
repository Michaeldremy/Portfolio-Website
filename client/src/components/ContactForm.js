import '../views/styles/ContactForm.css';
import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {name, email, subject, message} = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            subject,
            message
        })

        console.log('this form has been submitted')
    }
    
    render() {
        return (
            <div>
            <div className="container">
                <div className="row text-center pt-5 pb-5">
                    <div className="col-12 pt-5">
                        <h1 id="FormH1">Contact Me</h1>
                    </div>
                    <div className="col-12">
                        <p id="FormP">→ I'll be happy to answer any questions ←</p> 
                    </div>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" onChange={this.handleChange}/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={this.handleChange}/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" onChange={this.handleChange}/>
                            </div>
                            <div className="col-8 form-group pt-2 mx-auto">
                                <textarea name="" className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="col-8 pt-3 mx-auto">
                                <button type="button" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    };
}
    
export default ContactForm;