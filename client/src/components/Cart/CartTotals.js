import React from 'react'
import {Link} from 'react-router-dom'
// import PayPalButton from './PayPalButton'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
toast.configure();

export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    var product = value.product;
       


    console.log(product);
    async function handleToken(token, addresses) {
        const response = await axios.post("/checkout",
          { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    
    
    
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            subtotal: 
                        </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            tax: 
                        </span>
                        <strong>${cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            total: 
                        </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                    <StripeCheckout
                        stripeKey="pk_test_51H3QTXHzmFQ3IEpHb5AQsUscXQoZEINiF2zi8ApZ7gelluyKvuKD2QTSVVYdiSYZWkPYD4up4fuBUcjV7xW8ee4m00eTpjdSaA"
                        token={handleToken}
                        amount={cartTotal}
                        name="Course Payments"
                        billingAddress
                        shippingAddress
                    />
                    {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/> */}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
