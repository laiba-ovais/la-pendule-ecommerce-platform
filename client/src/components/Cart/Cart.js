import React, { Component } from 'react'
// import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../components/Course/contex'
import CartList from './CartList'
import CartTotals from './CartTotals'

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {
            value => {
              const {cart} = value;
              if(cart.length>0){
                return (
                  <React.Fragment>
                    <div  style={{marginTop: '100px'}}>
                    <CartColumns/>
                    <CartList value={value}/>
                    <CartTotals value={value} history={this.props.history}/>
                    </div>
                    {/* <Title name="your" title="cart"/> */}
                    
                  </React.Fragment>
                );
              }else{
                  return <EmptyCart/>;
              }
            }
          }
        </ProductConsumer>
        
      </section>
    )
  }
}
