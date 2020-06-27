import React, {Component} from 'react';
import {fetchData} from "../../api";
import styles from "../../App.module.css";
import './display.css'
import corona from "../../as.jpg";
import {Cards, Country, Graph} from "../index";
import Slide from "./Slide";
import Page from 'react-page-loading'

class Display extends Component {
    state={
        data:{},
        country:''

    }

    async componentDidMount() {
        const newData=await fetchData();

        this.setState({data:newData})

    }

    handleCountryChange =async (country)=>{
        //fecth
        //setstae
        //
        const newData=await fetchData(country);

        this.setState({data:newData,country:country})
    }


    render() {
        const {data,country}=this.state;


        return (
            <div className={styles.container}>
                <Page loader={"bar"} color={"#a90000"} size={10}   >

<Slide/>




                <Cards data={data}/>


                <Country handleCountryChange={this.handleCountryChange}/>
                <Graph data={data} country={country}/>


                <footer className="ftco-footer bg-dark ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="mouse">
                                <a href="#" className="mouse-icon">
                                    <div className="mouse-wheel">
                                        <span className="ion-ios-arrow-up"></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="text-info">HELP EVERYONE</h2>
                                    <p className="text-light bg-dark">
                                      Help Everyone,
                                        We will let you know who you have helped
                                    </p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-twitter"></span>
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-facebook"></span>
                                            </a>
                                        </li>
                                        <li className="ftco-animate">
                                            <a href="#">
                                                <span className="icon-instagram"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4 ml-md-5">
                                    <h2 className="text-info">Menu</h2>
                                    <ul className="list-unstyled">

                                        <li>
                                            <a href="#" className="py-2 d-block">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/Contactus" className="py-2 d-block">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="text-info">Have a Question?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-phone"></span>
                                                    <span className="text">0777885111</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="icon icon-envelope"></span>
                                                    <span className="text">info@donut.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | HELP EVERYONE{" "}
                                    <i className="icon-heart color-danger" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                </Page>
            </div>
        )
    }
}

export default Display;
