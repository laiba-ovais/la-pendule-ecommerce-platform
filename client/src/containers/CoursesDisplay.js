import React, { Component } from 'react'
import {ProductConsumer} from '../components/Course/contex'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../components/Button/Button'
// import Course from './Product';
import {CourseDetails} from '../components/Course/CourseDetails'

export default class CourseDisplay extends Component {

    
  render(props) {
            const course_id = this.props.location.state;
            console.log(course_id);
            const filteredcourse = CourseDetails.filter(CourseDetails=>{
              return( 
               CourseDetails._id==course_id)
              })
              console.log(filteredcourse);
            
            return (
              
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                    <h1>
                      {filteredcourse[0].courseTitle}
                    </h1>
                  </div>
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <img src={filteredcourse[0].courseImage} className="img-fluid" alt="product"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h2>Course Title: {filteredcourse[0].courseTitle}</h2>
                      <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by : <span className="text-uppercase">{filteredcourse[0].courseAuthor}</span>
                      </h4>
                      <h4 className="text-blue">
                        <strong>
                          price: <span>$</span> {filteredcourse[0].price}
                        </strong>
                      </h4>
                      <p className="text-capitalize font-weight-bold mt-3 mb-0">
                          some info about product:
                      </p>
                      <p className="text-muted lead">
                        {filteredcourse[0].info}
                      </p>
                      <div>
                        <Link to="/">
                          <ButtonContainer>
                            back to Courses
                          </ButtonContainer>
                        </Link>
                          <ButtonContainer 
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
                  </div>
                </div>
            );

          }
}
      
    

