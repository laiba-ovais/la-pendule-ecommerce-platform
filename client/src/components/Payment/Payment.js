import React from 'react';
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import { render } from '@testing-library/react';

const Payment =()=>{

    return(<div>
        <StripeCheckout
          stripeKey="pk_test_51H3QTXHzmFQ3IEpHb5AQsUscXQoZEINiF2zi8ApZ7gelluyKvuKD2QTSVVYdiSYZWkPYD4up4fuBUcjV7xW8ee4m00eTpjdSaA"
          name="Tesla Roadster"
          billingAddress
          shippingAddress
        />
      </div>);

 }

    // this.state= {
    // name: "Tesla Roadster",
    // price: 64998.67,
    // description: "Cool car"
    // }








export default Payment;