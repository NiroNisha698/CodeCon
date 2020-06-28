import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import s from '../../back.jpg'
import pic1 from '../Images/p1.jpg'
import pic2 from '../Images/pic5.jpg'
import pic3 from '../Images/pic4.jpg'
import pic4 from '../Images/p6.jpg'
import {Wave} from "react-animated-text";
class Slide extends Component {

    render() {
        return (
            <div>
                <Carousel>

                    <Carousel.Item>

                        <img
                            className="d-block w-100"
                            src={pic4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                           <h1><Wave text='Welcome to HELP EVERYONE' effect="stretch" effectChange={2.2}

                            />
                           </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"


                        />
                        <Carousel.Caption>
                            <h3>Help Everyone Donate Now</h3>
                            <p>More number of people have lost their job due to Covid 19. Help them. Click the above button
                                <br></br>'Help the needy'   <br></br> to DONATE</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Recovery Rate is increasing </h3>
                            <p>Let's Restart our normal life</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            alt="Third slide"

                        />

                        <Carousel.Caption>
                            <h3>Help Everyone</h3>
                            <p>Your small donation might help a family</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Slide;
