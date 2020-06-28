import React, { Component } from 'react';
import axios from 'axios'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert,
    Col

} from 'reactstrap';
import pic from "./reg.jpg";
import './auth.css'




export class RegisterModal extends Component {

    state = {
        users:[],
        newUserData:{

            first_name6:"",
            last_name6:"",
            email6:"",
            password6:""
        }

    };
    addUser(){
        axios.post('http://localhost:5000/api/users',this.state.newUserData).then((response)=>{
            let { users } = this.state;
            users.push(response.data);
            alert("User registered successfully");

window.location = '/login';
            this.setState({users , newUserModel: false, newUserData:{


                    first_name6:"",
                    last_name6:"",
                    email6:"",
                    password6:""


                }});


        })
            .catch((err) => {
                alert("Please Fill All Fields!!! ")
            })

    }render() {
        return (
            <body>
            <div className={"container"} style={{width:'40.4rem',height:'41rem'}} >
                <br/><br/>
                <div className={"row"}>
                    <div className={"col-md-6 mt-5 mx-auto"} >
                        <h1 className={"h3 mb-3 font-weight-normal"} align={"center"}><b><i>REGISTER</i></b></h1>
            <div className={"form-group"}>

                <FormGroup>

                    <Label for="username">First Name</Label>
                    <Input username="username" required className={"form-control"} placeholder={"Enter your First Name"} value={this.state.newUserData.first_name6} onChange={(e) => {
                        let { newUserData } = this.state;

                        newUserData.first_name6 = e.target.value;

                        this.setState({ newUserData });
                    }} />

                </FormGroup>

                <FormGroup>

                    <Label for="username">Last Name</Label>
                    <Input username="username" required className={"form-control"} placeholder={"Enter your Last Name"} value={this.state.newUserData.last_name6} onChange={(e) => {
                        let { newUserData } = this.state;

                        newUserData.last_name6 = e.target.value;

                        this.setState({ newUserData });
                    }} />

                </FormGroup>

                <FormGroup>

                    <Label for="email"> Email</Label>
                    <Input type="email" required className={"form-control"} id="email" placeholder={"Enter Email"} value={this.state.newUserData.email6} onChange={(e) => {
                        let { newUserData } = this.state;

                        newUserData.email6 = e.target.value;

                        this.setState({ newUserData });
                    }} />

                </FormGroup>
                <FormGroup>

                    <Label for="password"> Password</Label>
                    <Input type="password"  className={"form-control"}
                           title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number."
                           required placeholder={"Enter Password"} pattern="^(?=.\d)(?=.[a-z])(?=.[A-Z])(?!.\s).*$" id="password" value={this.state.newUserData.password6} onChange={(e) => {
                        let { newUserData } = this.state;

                        newUserData.password6 = e.target.value;

                        this.setState({ newUserData });
                    }} />

                </FormGroup>
                {/* <FormGroup>
                              <Label for="user_status"> Status </Label>
                              <Input type="text" id="user_status" defaultValue="active"
                              readOnly onChange={(e) => {
                                let { newUserData } = this.state;

                                newUserData.user_status = e.target.value;

                                this.setState({ newUserData });     </div>
                              }} />

                </FormGroup>   */}
                <div className="later">
                    <FormGroup>
                        <Col smOffset={1} sm={12}>
                            <Button className="btn btn-primary" color="primary" align="center" onClick={this.addUser.bind(this)}>Register</Button>{' '}
                        </Col> </FormGroup> <br/></div> </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}


export default RegisterModal;
