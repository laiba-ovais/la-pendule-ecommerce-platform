import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import PayPalButton from './PayPalButton'
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
//import { Button } from '@material-ui/core';
toast.configure();

export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    var {cart} = value;
    var user = value.loggedInUser;
    // if(cart)
    // {
        //yeh kch show nhi kar rha
    var name= cart.map((product)=>{
        //console.log(product)
        return `${product.product_name} ammount = ${product.count}`
    }).join(" and ")
    console.log(name)

//}

    const [product] = React.useState({
        name: name,
        price: cartTotal
        
      });


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
    //   async function baught() {
    //     const response = await axios.post("/onbaught",
    //       {productID:product.productID,
    //     userId:user.id
    //     }

    //     );
    //     const { status } = response.data;
    //     console.log("Response:", response.data);
    //     if (status === "success") {
    //       toast("Success! Check email for details", { type: "success" });
    //     } else {
    //       toast("Something went wrong", { type: "error" });
    //     }
    //   }
    const onbaught=(e)=> {
        e.preventDefaults()
        cart.product.forEach(element => {
            axios({  // isse post kr rhy hain email or password thk
                method: 'POST',
                url: '/onbaught',
                data: {
                  productID    : element.productID,
                  userid : user.id
                }}).then(response=>{
                    console.log(response);
                } )
            
        });


        
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
                    </h5>{value.signedin?(
                    <StripeCheckout
                    onClick={onbaught}
                    stripeKey="pk_test_51H3QTXHzmFQ3IEpHb5AQsUscXQoZEINiF2zi8ApZ7gelluyKvuKD2QTSVVYdiSYZWkPYD4up4fuBUcjV7xW8ee4m00eTpjdSaA"
                    token={handleToken}
                    amount={cartTotal*100}
                    name="Course Payments"
                    billingAddress
                    shippingAddress
                />
                  ) : (
                    <a href="/signIn">
                        <Button type="button" className="btn btn-primary">Sign In</Button>
                    </a>
                    
                  )}
                    {/* <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/> */}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
