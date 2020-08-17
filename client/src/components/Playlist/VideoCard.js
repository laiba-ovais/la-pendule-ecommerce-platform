import React from 'react';
//import Card from 'react-bootstrap/Card';
//import 'tachyons';
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';

export default class VideoCard extends React.Component{
    constructor(props){
        super(props);
        
    }
       state={
        headings:[],
        
       }
        setUrl = (key) =>{
            this.props.onClick(key + 1);
            console.log(this.state.num)
        }

    componentDidMount(){
        this.setheading();
        this.setUrl();
      }
    setheading(){
        let headings = ['Build your first website', 'Developer fundamentals','HTML tags' , 'HTML tags 2', 'Self closing HTML tags','Anchor tags',`Q&A's`]
        this.setState({headings: headings});
    }
   render(){
    return(
        <div className='col-md-5 float-right'>
            {this.state.headings.map(function(headings, index){
                return (
                    <Container onClick={this.setUrl(index)} num={this.state.num} className='mt-2 bg-white row-cols-1'>
                 <img className="col-sm-4 inline-block" width='20px' height='20px' src={require('../../videos/technology/html.png')}/>
                 <h2 key = {index} className="float-right col-sm-4">{headings}</h2>
            </Container>
                )
            })}
        </div>
    )}
    
            }