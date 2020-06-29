import React, { Component } from 'react';
import axios from 'axios';
import {Wave} from "react-animated-text";
// import backg from '../components/auth/bck.jpg'
// import Navbar1 from "./navbar.component"


export default class contactus extends Component {

    constructor(props) {
        super(props);

        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            fullName:'',
            email: '',
            message:'',

        }
    }


    onChangeFullName(e) {
        this.setState({
            fullName: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const contact = {
            fullName: this.state.fullName,
            email: this.state.email,
            message: this.state.message,
        };


        axios.post('https://codebeattheeaters.herokuapp.com/contacts/add', contact)
        .then(res => alert(res.data) )//console.log(res.data));

        this.setState({
            fullName: '',
            email: '',
            message: '',
        })
    }




    render() {
        return (

            // <body background={pic}>
            // <Navbar1/>
            <div className={"container"} style={{width:'45.4rem',height:'41rem'}} >

                <h1 className='text-primary text-center'>Contact us</h1>
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light
 p-4">
                                <p className='text-dark'><span className='text-primary'>Address:</span><br></br>
                                    87 7/5 Galle Road Colombo-06</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light p-4">
                                <p><span className='text-dark'>Phone:</span> <a href="tel://0777885111">0777885111</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light p-4">
                                <p><span className='text-dark'>Email:</span> <a href="mailto:info@donut.com">info@donut.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light p-4">
                                <p><span className='text-dark'>Your Donation Helps A Family</span></p>
                            </div>
                        </div>
                    </div>

                 <br/>
                <div className={"card"}style={{width:'50.4rem',height:'38rem',opacity:0.9}}>

               <br/>

                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                           
                            <div className="form-group">
                                <label>Full Name: </label>
                                <input  type="text"
                                        required
                                        placeholder={"Enter Full Name"}
                                        className="form-control"
                                        value={this.state.fullName}
                                        onChange={this.onChangeFullName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email: </label>
                                <input  type="email"
                                        required
                                        placeholder={"Enter Email Address"}
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label>Message: </label>
                                <div className="form-group">
                                <textarea
                                className="form-control"
                                rows="8"
                                required
                                value={this.state.message}
                                onChange={this.onChangeMessage}
                                ></textarea>
                                </div>
                            </div>

                            <div className="form-group" >
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>

        )
    }
}
