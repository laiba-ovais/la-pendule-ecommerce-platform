import React, { Component } from 'react';
import {CourseDetails,courseStored} from './CourseDetails';
import { runInThisContext } from 'vm';
import {Users, User} from '../Users/Users'
import axios from 'axios'
import { Redirect } from 'react-router-dom';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
      products: [],// yahan sab states hain  
      detailProduct: courseStored,
      cart: [],
      modalOpen: false,
      modalProduct: courseStored,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      signedin:false,
      user:[],
      UserDetails: {},
      email:"",
      password:'',
      loginedUser:''
  }

  componentDidMount(){
    this.setProducts();
  }
  onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value })

  }

  setUsers=()=>{
    let tempUser = []; // yahan start up per products ki value set hoti hai
    Users.forEach(item=> {
      const singleItem = {...item};
      tempUser = [...tempUser, singleItem];
    })
    this.setState(()=> {
      return {user: tempUser};
    }) 
  }

   onsubmit=(e)=>{
    // e.preventDefault();
    
    const response=  axios.post(`/auth`,{
      email: this.state.email,
      password: this.state.password
    })
    if (response) {
      console.log(response);
      console.log(response.data.email);

      let tempUser = this.getUsers(response.data.email);

      this.setState(()=>{
        return { loginedUser: tempUser};
      })
    
      this.props.history.push(`/profile`)
    }

  
  }
  getUsers = (email) => {
    const user = this.state.user.find(item=>  item.email == email);
    return user;
  }

  handleUserDetail = (email) => {
    const user = this.getItem(email);
    this.setState(
      ()=>{
        return {UserDetails: user};
      }
    )
  }

  setProducts = () => {
    let tempProducts = []; // yahan start up per products ki value set hoti hai
    CourseDetails.forEach(item=> {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(()=> {
      return {products: tempProducts};
    })  
  }
//isse item return hota hai id k liye
  getItem = (_id) => {
    const product = this.state.products.find(item=>  item._id == _id);
    return product;
  }
// isse details page per item ata hai
  handleDetail = (_id) => {
    const product = this.getItem(_id);
    this.setState(
      ()=>{
        return {detailProduct: product};
      }
    )
  }
  // ye kaam nhi kir rha hai :(
  searchChange=(event)=>{
  let searchField = event.target.value;
   const filteredcourse= this.state.products.filter((CourseDetails)=>{
    return( 
      CourseDetails.courseTitle.toLowerCase().includes(searchField.toLowerCase()))
                     })
    console.log(filteredcourse);
    if(searchField=="")
    {
      this.setProducts();
    }
    else
    this.setState(()=>{return {products:filteredcourse}})

  }//agar yahan set horhi hai, tou uper wali value kahan se arhi hai
// item cart mein jata hai
  addToCart = (_id) => {
     let tempProducts = [...this.state.products];
     const product = this.getItem(_id);
     const index = tempProducts.indexOf(product);
     product.inCart = true;
     product.count = 1;
     const price = product.price;
     product.total = price;

     this.setState(()=>{
       return {products:tempProducts, cart:[...this.state.cart, product]}
     },
     ()=>{
       this.addTotals();
     })
  }
/// ise pop up ata hai 
  openModal = (_id) => {
    const product = this.getItem(_id);
    this.setState(()=>{
      return {modalProduct: product, modalOpen:true};
    })
  }
//isse pop jata hair
  closeModal = () => {
      this.setState(()=>{
          return {modalOpen: false};
      })
  }
// isse items increase hosktay hain lekin zarorat nhi iski
  increment = (_id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item._id === _id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    
    this.setState(
      ()=> {
        return {cart: [...tempCart]};
      },
      ()=> {
        this.addTotals();
      }
    );
  }
// isse kam hotay hai cart mein
  decrement = (_id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item._id === _id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count -1;

    if(product.count === 0){
      this.removeItem(_id);
    }else {
      product.total = product.count * product.price;
      this.setState(
        ()=>{
          return {cart: [...tempCart]};
        },
        ()=>{
          this.addTotals();
        }
      )
    }
  }
//isse remove hptay hain
  removeItem = (_id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item=>item._id!==_id);

    const index = tempProducts.indexOf(this.getItem(_id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(()=>{
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, ()=>{
      this.addTotals();
    })
  }
//isse cart clear
  clearCart = () => {
    this.setState(()=>{
      return {cart:[]};
    }, ()=>{
      this.setProducts();
      this.addTotals(); 
    })
  }
//total calculationya
  addTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      const tempTax= subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      this.setState(()=>{
        return {
          cartSubTotal: subTotal,
          cartTax: tax,
          cartTotal: total
        }
      })
  }
  render() {
    return (
      <ProductContext.Provider value={
          {
              ...this.state, 
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
              openModal: this.openModal,
              closeModal: this.closeModal,
              increment: this.increment,
              decrement: this.decrement,
              removeItem: this.removeItem,
              clearCart: this.clearCart,
              searchChange: this.searchChange,
              setUsers:this.setUsers,
              getUsers:this.getUsers,
              handleUserDetail:this.handleUserDetail,
              onsubmit:this.onsubmit,
              onChange:this.onChange

          }
      }>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};