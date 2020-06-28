import React, {Component, useEffect, useState} from 'react';
import * as axios from "axios";

function Help () {

    const [Data, setData] = useState([]);
    const [Balance, setBalance] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://localhost:5000/v1/customers').then((response) => {
                if (response.data.customers) {

                    setData(response.data.customers);

                    console.log(response.data.customers);

                } else {
                    alert("Failed");
                }
            }
        );


    }, []);

    useEffect( () => {
        const result =  axios(
            'http://localhost:5000/v1/balance').then((response) => {
                if (response.data.balance) {

                    setBalance(response.data.balance.pending);

                    console.log(response.data.balance);
                    console.log('Check', Data)

                } else {
                    alert("Failed");
                }
            }
        );


    }, []);



    return (
        <div>
            {Data.subscriptions}

        </div>



    )

}



export default Help;
