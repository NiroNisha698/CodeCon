import React from "react";


import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
import "./pay.css";
import {Carousel} from "react-bootstrap";
import pic4 from "../components/Images/p6.jpg";
import {Wave} from "react-animated-text";
import pic1 from "../components/Images/p1.jpg";
import pic2 from "../components/Images/pic5.jpg";
import pic3 from "../components/Images/pic4.jpg";

toast.configure();

function Payment() {
    const [product] = React.useState({
        name: "Beat the Eaters",
        price: 1500.00
    });

    async function handleToken(token) {
        //console.log({ token, addresses });
        const response = await axios.post(
            "https://m9ifw.sse.codesandbox.io/checkout",

            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for detail", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (



        <div className="container1">
            <div className="product">
                <h1>{product.name}</h1>
                <h3> Donation Amount: LKR {product.price}</h3>
            </div>

            <StripeCheckout
                stripeKey="pk_test_51GxZ12EXtqLGnPz4zrtiAW3ac8Bj6Fgk5WK6DeNaieuq5JzkGVXiAd79b6zJyRvNnlIRJOoBEuROlaQqRsRD9SBM00J1xCcHOv"
                token={handleToken}
                billingAddress
                shippingAddress
                amount={product.price * 100}
                name={product.name}


            />
<br/>
<br/>

            <div className="myImg" >
                <span className="blinking"><h1>Donated Districts</h1></span>

            <br/>
            <br/>

            <div className="slider">
                <div>
                <p>Colombo</p>
                <p>Gampaha</p>
                <p>Ratnapura</p>
                    <p>Jaffna</p>
                    <p>Kandy</p>
                    <p>Moneragala</p>
                    <p>Matara</p>
                </div>
            </div>



        </div>

  </div>








    );
}
export default Payment;
