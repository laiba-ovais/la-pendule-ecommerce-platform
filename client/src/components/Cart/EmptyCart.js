import React from 'react'
import Container from 'react-bootstrap/Container'

export default function EmptyCart() {
  return (
    <div style={{marginTop: '100px'}} className=" container">
        <div className="row">
            <div className=" col-10 mx-auto text-center text-title">
                <h1>Your cart is currently empty</h1>
            </div>
        </div>
    </div>
  )
}
