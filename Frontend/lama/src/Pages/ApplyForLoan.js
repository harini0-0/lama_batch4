import React from 'react';
import './Apply.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import EmployeeNavbar from '../components/navbar/NavbarEmployee';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function ApplyForLoan() {
  return (
    <>
    <div className="nav">Apply For Loan</div>
  <div id="f1">
    <Form>
      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="exampleForm.disabled" >
        <FloatingLabel>Employee Id</FloatingLabel>
        <Form.Control type="text" placeholder="12114" readOnly size="lg" />
      </Form.Group>

      <Form.Group as={Col} controlId="exampleForm.ControlInput1">
        <FloatingLabel>Item Category</FloatingLabel>
        <Form.Select aria-label="Default select example" size="lg">
          <option>Select one</option>
          <option value="1">Furniture</option>
          <option value="2">Electronics</option>
          <option value="3">Travel Essential</option>
        </Form.Select>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="exampleForm.disabled">
        <Form.Label>Item Description</Form.Label>
        <Form.Control as="textarea" rows={1} size="sm"/>
      </Form.Group>
      <Form.Group as={Col} controlId="exampleForm.disabled">
        <Form.Label>Item Value</Form.Label>
        <Form.Control as="textarea" rows={1} size="sm"/>
      </Form.Group>
      </Row>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Item Category</Form.Label>
        <Form.Select aria-label="Default select example" size="sm">
          <option>Item Make</option>
          <option value="1">Wooden</option>
          <option value="2">Glass</option>
          <option value="3">Steel</option>
        </Form.Select>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </div>
   </>
  );
}

export default ApplyForLoan;