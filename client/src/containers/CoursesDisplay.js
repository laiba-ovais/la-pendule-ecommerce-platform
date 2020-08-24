import React, { Component } from 'react'
import {ProductConsumer} from '../components/Course/contex'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../components/Button/Button'
// import Course from './Product';
import {CourseDetails} from '../components/Course/CourseDetails'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridWatches from '../containers/GridWatches/GridWatches'
import 'react-bootstrap'
//import ResponsivePlayer from '../components/VideoPlayer/ResponsivePlayer';


export default class CourseDisplay extends Component {

    
  render(props){
    
            // const course_id = this.props.location.state;
            // console.log(course_id);
            // const filteredcourse = CourseDetails.filter(CourseDetails=>{
            //   return( 
            //    CourseDetails._id==course_id)
            //   })
            //   console.log(filteredcourse);
            
              
            return (
              <ProductConsumer >
                { //yw wala
               (value)=>{
            const {productID, product_name, stock, company , info, price, inCart} = 
            value.detailProduct;
              return(
                <div>
            <Container style={{marginTop: '100px'}} className=" con-bod" >
                  <div className="row">
                  <div className="col-md-4">
                  <div className=" mx-auto my-3 text-capitalize relative">
                        <img src={`http://localhost:4000/static/${productID}.png`} width="500px" height="500px" alt="product"/>
                        </div>
                        <div className="my-3">
                        <Link to="/courses"> 
                          <ButtonContainer className="btn mr-5" style={{background: 'orange'}}>
                            back to Store
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer
                           style={{background: 'orange'}}
                          className="ml-4 btn"
                           disabled={inCart?true:false}
                            onClick={()=>{
                               value.addToCart(productID);
                               value.openModal(productID);
                           }}
                            
                          >
                            {inCart ? "inCart":"add to cart"}
                          </ButtonContainer>
                      
                    </div>
                  </div>
                    
                    <div className="col-10 mx-auto col-md-8 my-3 text-capitalize inline-block ">
                      <h3>{product_name}</h3>
                      <h3>
                        <span className="text-capitalize">{company}</span>
                      </h3>
                      <h4 >
                          price: <span>$</span> {price}
                      </h4>
                      
                      <div className="  mt-3 mb-0">
                        <h4 >Details:</h4>
                      
                      <p>
                        {info}
                      </p>
                      </div>
                    </div>
                  </div>
                  
            </Container> 
           
            </div>
              )
                          }
                }
            </ProductConsumer>
            )

          }
}
      
    

