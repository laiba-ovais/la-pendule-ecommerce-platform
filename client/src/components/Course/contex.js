import React, { Component } from 'react';
import {CourseDetails,courseStored} from './CourseDetails';
import { runInThisContext } from 'vm';
import {Users, User} from '../Users/Users'
import { CourseUpload } from '../../containers/courseUpload/courseUpload'
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
      user: [],
      CartProduct:{},
      UserDetails: Users,
      email:"",
      password:'',
      loggedInUser:{},
      first_name: '',
      last_name: '',
      product_name: '',
      price: '',
      company: '',
      info: '',
      stock: ''
     
  }
    this.onChange = this.onChange.bind(this)
    this.onsubmit = this.onsubmit.bind(this)
    this.onRegister = this.onRegister.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.onLoggout = this.onLoggout.bind(this)
  }
  componentWillMount() {
    localStorage.getItem('signedin')&&localStorage.getItem('cart')&&localStorage.getItem('products') &&localStorage.getItem('cartTax') && localStorage.getItem('cartTotal') && localStorage.getItem('cartSubTotal')&&this.setState({
      cart: JSON.parse(localStorage.getItem('cart')),
      products: JSON.parse(localStorage.getItem('products')),
      cartTax: JSON.parse(localStorage.getItem('cartTax')),
      cartTotal: JSON.parse(localStorage.getItem('cartTotal')),
      cartSubTotal: JSON.parse(localStorage.getItem('cartSubTotal')),
      signedin:JSON.parse(localStorage.getItem('signedin'))
     
   })   
   localStorage.getItem('loggedInUser')&&this.setState({
    loggedInUser:JSON.parse(localStorage.getItem('loggedInUser')),

   })
}
fetchUserData(){
  
  fetch("http://localhost:4000/getuser").then(response => response.json())
   .then(parsedJSON =>parsedJSON.results.map(user => (
    {
        name: `${user.first_name} ${user.last_name}`,
        email: `${user.email}`,
        id:user.id
       
    }
))).then((user) => { localStorage.setItem("users", JSON.stringify(user) + ',');
  return(this.setState({user:user}))})
  .catch(error => console.log('parsing failed', error)) 
}
  componentDidMount(){
   
    this.setProducts();
    this.setUsers();
    // if(this.state.cart&& this.state.products){
    // this.state.products.forEach(element => {
    //   this.state.cart.product.forEach(product=>{
    //     if(element.productID===product.productID){
    //       element.inCart=true
    //     }
    //   })
      
    // });}// yaar esa krna hai k jo cart mein products ho uski incart property true hojaye...
  
  }
  // isse input field mein type honay wali value states ko assign hojati hai
  onChange=(e)=>{
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })

  }
  onLoggout=(e)=>{
    e.preventDefault()
    this.setState({
      loggedInUser:{},
      signedin:false
    })
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("signedin");
    this.props.history.push('/signin');
  }

  setUsers=()=>{
    this.fetchUserData()
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
          return { loggedInUser: tempUser};
        })
        this.setState(()=>{
          return { signedin: true};

        }) 
        localStorage.setItem("user", JSON.stringify(tempUser)); 
        localStorage.setItem("loggedInUser", JSON.stringify(tempUser)); 
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

  addProduct=(event)=>{ // ye function hai
    event.preventDefault()
    axios({  // isse post kr rhy hain email or password thk
      method: 'POST',
      url: '/productAdded',
      data: {
        product_name: this.state.product_name,
        company : this.state.company,
        info:this.state.info,
        price:this.state.price,
        stock: this.state.stock
        
      }
    }).then((response=>{
        this.props.history.push(`/courses`)
      }))
}
componentDidUpdate=()=>{
  localStorage.setItem("cart", JSON.stringify([...this.state.cart]));
  localStorage.setItem("cartSubTotal", JSON.stringify(this.state.cartSubTotal));
  localStorage.setItem("cartTax", JSON.stringify(this.state.cartTax));
  localStorage.setItem("cartTotal", JSON.stringify(this.state.cartTotal));
  localStorage.setItem("signedin", JSON.stringify(this.state.signedin));
  localStorage.setItem("loggedInUser", JSON.stringify(this.state.loggedInUser));




  
  // if(this.state.cart)
  // {
  // var tempcartname =this.state.cart.product.map((product,i)=>{
  //   return product[i].product_name
  // })
  // console.log(tempcartname)
// }


  console.log(this.state.products)
}
fetchProductData(){
  fetch("http://localhost:4000/getproduct").then(response => response.json())
   .then(parsedJSON =>parsedJSON.results.map(product => (
    {
        productID: product.productID,
        product_name: `${product.product_name}`,
        company: `${product.company}`,
        price: product.price,
        info: `${product.info}`,
        stock: product.stock,
        inCart:false,
        total:0,
        count:0
       
    }
))).then((product) => {  
  localStorage.setItem("products", JSON.stringify(this.state.products));
  console.log(product)
  return(this.setState({products:product}))})
  .catch(error => console.log('parsing failed', error)) 
}
  setProducts = () => {
    // let tempProducts = []; // yahan start up per products ki value set hoti hai
    // CourseDetails.forEach(item=> {
    //   const singleItem = {...item};
    //   tempProducts = [...tempProducts, singleItem];
    // })
    // this.setState(()=> {
    //   return {products: tempProducts};
    // }) 
    //  localStorage.setItem("products", JSON.stringify(tempProducts)); 
    this.fetchProductData();
  }

//isse item return hota hai id k liye
  getItem = (productID) => {
    const product = this.state.products.find(item=>  item.productID === productID);
    return product;
  }
// isse details page per item ata hai
  handleDetail = (productID) => {
    const product = this.getItem(productID);
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
      CourseDetails.product_name.toLowerCase().includes(searchField.toLowerCase()))
                     })
    console.log(filteredcourse);
    if(searchField=="")
    {
      this.setProducts();
    }
    else
    this.setState(()=>{return {products:filteredcourse}})

  }
// item cart mein jata hai
  addToCart = (productID) => {
     let tempProducts = [...this.state.products];
     const product = this.getItem(productID);
     const index = tempProducts.indexOf(product);
     product.inCart = true;
     product.count = 1;
     const price = product.price;
     product.total = price;
     localStorage.setItem("cart", JSON.stringify([...this.state.cart, product]));
     
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
  increment = (productID) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.productID === productID);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;
    localStorage.setItem("cart", JSON.stringify(tempCart));
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
  decrement = (productID) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.productID === productID);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count -1;

    if(product.count === 0){
      this.removeItem(productID);
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
  removeItem = (productID) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item=>item.productID!==productID);

    const index = tempProducts.indexOf(this.getItem(productID));
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
      localStorage.removeItem("cart");
      this.setProducts();
      this.addTotals(); 
    })
  }
//total calculationya
  addTotals = () => {
      let subTotal = 0;
      this.state.cart.map(item => (subTotal += item.total));
      const tempTax= subTotal * 0.01;
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
              onRegister:this.onRegister,
              addProduct:this.addProduct,
              onLoggout:this.onLoggout


          }
      }>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer; 

export  default withRouter(ProductProvider);