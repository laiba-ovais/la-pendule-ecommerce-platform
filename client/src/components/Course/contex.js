import React, { Component } from 'react';
import {CourseDetails,courseStored} from './CourseDetails';
import { runInThisContext } from 'vm';
import {Users, User} from '../Users/Users'
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom';
import { toast } from "react-toastify";
toast.configure();

const ProductContext = React.createContext(); //yahan use kiya hai contex api acha main agar is state mein number 0 kar deti uske baad function banta jis mein state change hoti? this.setstate karke? mjhy onclick functio
// khair ab change krna hai sab tu login dekh lein? code dekhata hu mein
class ProductProvider extends Component {
  // state = {
  //     products: [],// yahan sab states hain  
  //     detailProduct: courseStored,
  //     cart: [],
  //     modalOpen: false,
  //     modalProduct: courseStored,
  //     cartSubTotal: 0,
  //     cartTax: 0,
  //     cartTotal: 0,
  //     signedin:false,
  //     user:[],
  //     UserDetails: {},
  //     email:"",
  //     password:'',
  //     loginedUser:''
  // }
  constructor(props) {
    super(props)
    this.state = {
      products: [],// yahan sab states hain  
      detailProduct: courseStored,
      cart: [],
      modalOpen: false,
      modalProduct: courseStored,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      signedin:false,
      user: {},
      UserDetails: Users,
      email:"",
      password:'',
      loginedUser:'',
      first_name: '',
      last_name: ''
     
  }
    this.onChange = this.onChange.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
    this.onRegister = this.onRegister.bind(this)
  }

  componentDidMount(){
    if(!localStorage.user){
      this.setUsers()
    }
    if(!localStorage.products){
      this.setProducts();
    }
    
    
  }
  // isse input field mein type honay wali value states ko assign hojati hai
  onChange=(e)=>{
    e.preventDefault();
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
    localStorage.setItem("users", JSON.stringify(tempUser) + ',');
    console.log(localStorage.users);
  }

   onsubmit=(event)=>{ // ye function hai
    event.preventDefault()
    axios({  // isse post kr rhy hain email or password thk
      method: 'POST',
      url: '/signin',
      data: {
        email    : this.state.email,
        password : this.state.password
      }
    }).then((response=>{
      if (response.data.email) { // response ko phr se state mein daal rhy hain user ko find kr k states mein take profile mein show kara lein
        console.log(response);
        console.log(response.data.email);
  
        let tempUser = this.getUsers(response.data.email);

        this.setState(()=>{
          return { loginedUser: tempUser};
        })
        this.setState(()=>{
          return { signedin: true};

        }) 
        localStorage.setItem("user", JSON.stringify(tempUser));  
      this.props.history.push(`/profile`)
      }
      if(response.data.error){
        alert("User not found No registered")
        this.props.history.push(`/register`)
      }
      if(response.data.error2){
        alert("Incorrect email or password")
        this.props.history.push(`/signin`)
      }
    }))
    
    
  
  }
  getUsers = (email) => {
    const user = this.state.user.find(item=>  item.email == email);
    return user;
  }

  
  onRegister=(event)=>{ // ye function hai
    event.preventDefault()
    axios({  // isse post kr rhy hain email or password thk
      method: 'POST',
      url: '/submit',
      data: {
        email    : this.state.email,
        password : this.state.password,
        first_name:this.state.first_name,
        last_name:this.state.last_name
      }
    }).then((response=>{
      if (response.data.email) { // response ko phr se state mein daal rhy hain user ko find kr k states mein take profile mein show kara lein
        console.log(response);
        console.log(response.data.email);    
        this.props.history.push(`/signin`)
      }
      if(response.data.exist){
        alert("Email user already exist");
        this.props.history.push(`/register`)
      }
    }))
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
    localStorage.setItem("products", JSON.stringify(tempProducts)); 
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
              ...this.state, // yahan states ko deconstruct kiya hai or value mein store kiya hai or sab functions
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
              onChange:this.onChange,
              onRegister:this.onRegister

          }
      }>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer; 

export  default withRouter(ProductProvider);