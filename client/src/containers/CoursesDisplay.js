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
            return (
              <h1>course CourseDetails </h1>
                // <div className="row">
                //   <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                //     <h1>
                //       {courseTitle}
                //     </h1>
                //   </div>
                //   <div className="row">
                //     <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                //         <img src={courseImage} className="img-fluid" alt="product"/>
                //     </div>
                //     <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                //       <h2>model: {courseTitle}</h2>
                //       <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                //         made by : <span className="text-uppercase">{courseAuthor}</span>
                //       </h4>
                //       <h4 className="text-blue">
                //         <strong>
                //           price: <span>$</span> {price}
                //         </strong>
                //       </h4>
                //       <p className="text-capitalize font-weight-bold mt-3 mb-0">
                //           some info about product:
                //       </p>
                //       <p className="text-muted lead">
                //         {info}
                //       </p>
                //       <div>
                //         <Link to="/">
                //           <ButtonContainer>
                //             back to products
                //           </ButtonContainer>
                //         </Link>
                //           <ButtonContainer 
                //             // disabled={inCart?true:false}
                //             // onClick={()=>{
                //             //   value.addToCart(_id);
                //             //   value.openModal(_id);
                //             // }}
                //           >
                //             {inCart ? "inCart":"add to cart"}
                //           </ButtonContainer>
                //       </div>
                //     </div>
                //   </div>
                // </div>
            );

          }
}
      
    

