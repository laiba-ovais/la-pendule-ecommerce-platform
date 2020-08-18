import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function ServiceRegister(){
    
        return(
            <Container className=" mt-5 bg-white">
            <Form className="container-fluid mt-5" method="post" action="/serviceRegistered">
                <Form.Group as={Row} controlId="first_name">
                    <Form.Label column sm="3">First Name</Form.Label>
                    <Col sm="6">
                    <Form.Control name="first_name" type="text" placeholder="First Name" required/>
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} controlId="last_name">
                    <Form.Label column sm="3">Last Name</Form.Label>
                    <Col sm="6">
                    <Form.Control name="last_name" type="text" placeholder="Last Name" required />
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} controlId="age">
                    <Form.Label column sm="3">Age</Form.Label>
                    <Col sm="6">
                    <Form.Control name="age" type="number" placeholder="Age" min="18" max="60"/>
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} controlId="tel">
                    <Form.Label column sm="3">Contact Number</Form.Label>
                    <Col sm="6">
                    <Form.Control name="tel" type="tel" pattern="[0]{1}[3]{1}[0-9]{2}-[0-9]{7}" placeholder="Contact Number" />
                    <small>Format: 0333-1234567</small>
                    </Col>
                    
                </Form.Group>
                <Form.Group as={Row} controlId="service">
                    <Form.Label column sm="3" >Service</Form.Label>
                    <Col sm="6">
                        <Form.Control name="service" as="select" required>
                        <option name="mechanic" value="mechanic">Mechanic</option>
                        <option name="electrician" value="electrician">Electrician</option>
                        <option name="maid/housekeeper" value="maid/housekeeper">Maid/Housekeeper</option>
                        <option name="plumber" value="plumber">Plumber</option>
                        <option name="chef" value="chef">Chef</option>
                        <option name="sweeper" value="sweeper">Sweeper</option>
                    </Form.Control>
                    </Col>
                    
                </Form.Group>

                <Form.Group as={Row} controlId="service">
                <Form.Label column sm="3">Sex</Form.Label>
                <Col sm="6">
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="Male" name="sex" value="male" type={type} id={`inline-${type}-1`} checked />
                    <Form.Check inline label="Female" name="sex" value="female" type={type} id={`inline-${type}-1`} />
                    
                    </div>
                ))}
                </Col>
               
                </Form.Group>
                
                <Form.Group as={Row} controlId="additional_details">
                    <Form.Label column sm="3">Additional Details Or Requirements</Form.Label>
                    <Col sm="6">
                    <Form.Control as="textarea" rows="4" name="additional_details" />
                    </Col>
                    
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
            
        )
    
}

