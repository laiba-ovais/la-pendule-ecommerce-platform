import React from 'react';
import Card from 'react-bootstrap/Card';
import 'tachyons';
import Container from 'react-bootstrap/Container';
import './Home.css'

export default function Home(){
    return(
        <div>
        <Container style={{background: 'yellow'}} className="con-bod row mt-2 grow">
        
        <img className="col-md-4"  src={require("../../static/images/cook.png")} />
        <div className="col-md-8">
            <h1>Cooking</h1>
            <p>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
        </div>   
    </Container>

    <Container style={{background: 'pink'}} className="con-bod row mt-2 grow">
    
    <img className="col-md-4"  src={require("../../static/images/education.png")} />
    <div className="col-md-8">
        <h1>Education</h1>
        <p>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </p>
    </div>   
</Container>
<Container style={{background: 'purple'}} className="con-bod row mt-2 grow">
    
    <img className="col-md-4"  src={require("../../static/images/sports.png")} />
    <div className="col-md-8">
        <h1>Sports</h1>
        <p>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </p>
    </div>   
</Container>
<Container style={{background: 'blue'}} className="con-bod row mt-2 grow">
    
    <img className="col-md-4"  src={require("../../static/images/soft.png")} />
    <div className="col-md-8">
        <h1>Soft Skills</h1>
        <p>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </p>
    </div>   
</Container>
<Container style={{background: 'orange'}} className="con-bod row mt-2 grow">
    
    <img className="col-md-4"  src={require("../../static/images/fitness.png")} />
    <div className="col-md-8">
        <h1>Fitness</h1>
        <p>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </p>
    </div>   
</Container>
<Container style={{background: 'red'}} className="con-bod row mt-2 grow">
    
    <img className="col-md-4"  src={require("../../static/images/technology.png")} />
    <div className="col-md-8">
        <h1>Technology</h1>
        <p>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </p>
    </div>   
</Container>
        </div>
        
        
    )
}