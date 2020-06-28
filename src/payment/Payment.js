import React from "react";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
import "./pay.css";

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
        <div>
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



        </div>

            <div className='align-content-lg-center'>
                <h2 className='text-danger'>We have helped</h2>
            </div>
        </div>

    );


}
export default Payment;
