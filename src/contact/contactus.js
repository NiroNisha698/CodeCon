import React, { Component } from 'react';
import axios from 'axios';
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


        axios.post('http://localhost:5000/contacts/add', contact)
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
                 <br/>
                <div className={"card"}style={{width:'50.4rem',height:'38rem',opacity:0.9}}>

               <br/>
                    <b>  <i> <h3 align={"center"}>Contact us</h3></i></b>

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
                                <input  type="text"
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

                            <div className="form-group">
                                <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            // </body>
        )
    }
}
