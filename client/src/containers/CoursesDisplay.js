import React, { Component } from 'react'
import {ProductConsumer} from '../components/Course/contex'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../components/Button/Button'
// import Course from './Product';
import {CourseDetails} from '../components/Course/CourseDetails'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



export default class CourseDisplay extends Component {

    
  render(props){
    
            const course_id = this.props.location.state;
            console.log(course_id);
            const filteredcourse = CourseDetails.filter(CourseDetails=>{
              return( 
               CourseDetails._id==course_id)
              })
              console.log(filteredcourse);
            
              
            return (
            
            <Container className="bg-white" >
                  <div className="col-10 mx-auto text-center  text-blue pt-4 my-5 ss">
                    <h1 className="font-weight-bolder">
                      {filteredcourse[0].courseTitle}
                    </h1>
                  </div>
                  <div className="row">
                  <div className="ml-5">
                  <div className=" mx-auto my-3 text-capitalize relative">
                        <img src={filteredcourse[0].courseImage} className="img-fluid" alt="product"/>
                        </div>
                        <div className="my-3">
                        <Link to="/">
                          <ButtonContainer>
                            back to Courses
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
                          className="ml-2"
                            // disabled={inCart?true:false}
                            // onClick={()=>{
                            //   value.addToCart(_id);
                            //   value.openModal(_id);
                            // }}
                            
                          >
                            {filteredcourse[0].inCart ? "inCart":"add to cart"}
                          </ButtonContainer>
                      
                    </div>
                  </div>
                    
                    <div className="col-10 mx-auto col-md-8 my-3 text-capitalize inline-block ">
                      <h3 className="font-weight-bold">Course Title: {filteredcourse[0].courseTitle}</h3>
                      <h3 className="font-weight-bold text-capitalize mt-3 mb-2">
                        Instructor : <span className="text-capitalize">{filteredcourse[0].courseAuthor}</span>
                      </h3>
                      <h4 className="text-blue">
                        <strong>
                          price: <span>$</span> {filteredcourse[0].price}
                        </strong>
                      </h4>
                      <div className="  mt-3 mb-0">
                        <h3 className="text-capitalize font-weight-bold"> Course Details:</h3>
                      
                      <p className="font-weight-bold">
                        {filteredcourse[0].info}
                      </p>
                      </div>
                    </div>
                  </div>
                
            </Container>  
                
            )

          }
}
      
    

