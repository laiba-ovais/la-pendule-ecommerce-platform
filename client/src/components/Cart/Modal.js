import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from '../Course/contex';
import {ButtonContainer} from '../Button/Button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value)=>{
                console.log(value)
                const {modalOpen, closeModal} = value;
                const {product_name , productID , price} = value.modalProduct;

                if(!modalOpen){
                    return null;
                }else{
                    return <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" 
                                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h5>item added to the cart</h5>
                                    <img src={`https://graphite-sphere-286919.uc.r.appspot.com/static/${productID}.png`} className="img-fluid" alt="product"/>
                                    <h5>{product_name}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to='/courses'>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                            store
                                        </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                        <ButtonContainer onClick={()=>closeModal()}>
                                            go to cart
                                        </ButtonContainer>
                                    </Link>
                                </div>
                            </div>
                        </div>        
                    </ModalContainer>
                }
            }}
        </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        #modal {
            background: white;
        }
`;
