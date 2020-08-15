// import React, { Component, useState } from 'react';
// import { fade, makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import { CourseDetails } from '../Course/CourseDetails';
// import {ProductConsumer} from '../Course/contex';

// const useStyles = makeStyles((theme) => ({

//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//         height: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//     sectionDesktop: {
//       display: 'none',
//       [theme.breakpoints.up('md')]: {
//         display: 'flex',
//       },
//     },
//     sectionMobile: {
//       display: 'flex',
//       [theme.breakpoints.up('md')]: {
//         display: 'none',
//       },
//     },
//   }));
//          //   var searchfeild =useState( '' );
//         //   const searchchange = (event)=>
//         //   {
//         //     searchfeild = event.target.value;
//         //     const filteredrobots = robots.filter(robots=>{
//         //       return( 
//         //         robots.name.toLowerCase().includes(searchfeild.toLowerCase()))
//         //     })
//         //     console.log(filteredrobots);
//         //     setRobo(filteredrobots); 
//         //   } 
//         //   componentDidMount();

//   const SearchBar=({searchField, searchChange})=>
//   {

//     // var searchfeild = useState( '' );
//     // const [courses , setCourses] = useState( [CourseDetails]);

//     // const onSearchChange = (event) =>{
//     //   searchfeild = event.target.value;
//     //       const filteredcourse = CourseDetails.filter(CourseDetails=>{
//     //          return( 
//     //           CourseDetails.courseTitle.toLowerCase().includes(searchfeild.toLowerCase()))
//     //          })
//     //          setCourses(filteredcourse); 
//     //          console.log(filteredcourse);
//     //           }
//     // const   {searchField, searchChange} = this.state;

//     // const filteredcourse = CourseDetails.filter(CourseDetails=>{
//     //   return( 
//     //     CourseDetails.courseTitle.toLowerCase().includes(this.state.searchField.toLowerCase()))
//     //                })
//     //             //    this.setState({CourseDetails:filteredcourse}); 
                   
//     //      console.log(CourseDetails);
      
//         const classes = useStyles();

//         return(
          
//         <ProductConsumer>
//         {
//           (value)=>{
       
//             return( <div className={classes.search}>
//               <div className={classes.searchIcon}>
//               <SearchIcon />
//               </div>
//               <InputBase
//                 onChange = {searchChange}
                  
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput,
//                 }}
                
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </div>)}}
//         </ProductConsumer> );
//       }
  

// export default SearchBar;

import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { CourseDetails } from '../Course/CourseDetails';
import NameContainer from './NameContainer';

class SearchBar extends React.Component{
  state = {
    CourseDetails: CourseDetails,
    searchTerm: ''
  }

  editSearchTerm = (e) =>{
    this.setState({searchTerm: e.target.value})
  }
  dynamicSearch = () =>{

    const name = CourseDetails.map(i => {
      return i.courseTitle;
    });
     return name.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
      
  //     const filteredcourse = CourseDetails.filter(CourseDetails=>{
  //      return( 
  //                  CourseDetails.courseTitle.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
       
  //      // setCourses(filteredcourse); 
  //       console.log(filteredcourse);
  // })
  // this.setState({courseNames: filteredcourse});
}
  
  render(){
    return(
      <div>
      <Form inline>
      <FormControl type="text" value={this.state.searchTerm} onChange = {this.editSearchTerm} placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    <NameContainer names = {this.dynamicSearch()}></NameContainer>
      </div>
      
    
    )
  }
}

export default SearchBar;