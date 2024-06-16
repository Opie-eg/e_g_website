import React, {useState, useEffect} from 'react'
import { Navbar, Container, Row, Col, Button,Accordion, ListGroup ,Badge } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';  // Import the Bootstrap CSS
import './styles.css'; // Import your CSS file


function App() {

  return (
    <div className="dark-mode div">
      {/* Navigation Bar */}
      <Navbar variant="dark">
     
          <Navbar.Brand href="/">
          <img
              
              src="/eg_teste_final.png" // Replace with the actual path to your logo image
              width="50"
              height="50"
              className="d-inline-block align-top move-left"
              
            />
            </Navbar.Brand>
       
      </Navbar>

      {/* Main Content */}
      <Container  className="mt-4">
        <Row>
      <Col>
      Roster
      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center dark-mode wow-dk"
      >
        <div className="ms-0 me-auto d-flex align-items-center">
        <img
              
              src="/deathknight/blood.jpg" // Replace with the actual path to your logo image
              width="30"
              height="30"
              className="ms-1 me-auto d-inline-block align-top move-left spec-icons"
              
            />
          <div className="fw-bold ms-4 me-auto">Yalinna</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">654</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">H</div>
          <div className="ms-1 me-auto">S</div>
          <div className="ms-1 me-auto">C</div>
          <div className="ms-1 me-auto">G</div>
          <div className="ms-1 me-auto no-tier">L</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center  dark-mode wow-dk"
      >
        <div className="ms-0 me-auto d-flex align-items-center">
        <img
              
              src="/deathknight/unholy.jpg" //steal icons from https://wowmeta.com/guides/raids/death-knight/blood
              width="30"
              height="30"
              className="ms-1 me-auto d-inline-block align-top move-left spec-icons"
              
            />
          <div className="fw-bold ms-4 me-auto">Cwustina</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">654</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">H</div>
          <div className="ms-1 me-auto">S</div>
          <div className="ms-1 me-auto">C</div>
          <div className="ms-1 me-auto">G</div>
          <div className="ms-1 me-auto no-tier">L</div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center  dark-mode wow-mage"
      >
        <div className="ms-0 me-auto d-flex align-items-center">
        <img
              
              src="/mage/fire.jpg" //steal icons from https://wowmeta.com/guides/raids/death-knight/blood
              width="30"
              height="30"
              className="ms-1 me-auto d-inline-block align-top move-left spec-icons"
              
            />
          <div className="fw-bold ms-4 me-auto">frog</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">654</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">H</div>
          <div className="ms-1 me-auto">S</div>
          <div className="ms-1 me-auto">C</div>
          <div className="ms-1 me-auto">G</div>
          <div className="ms-1 me-auto no-tier">L</div>
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-center  dark-mode wow-hunter"
      >
        <div className="ms-0 me-auto d-flex align-items-center">
        <img
              
              src="/hunter/beastmastery.jpg" //steal icons from https://wowmeta.com/guides/raids/death-knight/blood
              width="30"
              height="30"
              className="ms-1 me-auto d-inline-block align-top move-left spec-icons"
              
            />
          <div className="fw-bold ms-4 me-auto">Scarce</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">654</div>
          <div className="ms-1 me-auto">-</div>
          <div className="ms-1 me-auto">H</div>
          <div className="ms-1 me-auto">S</div>
          <div className="ms-1 me-auto">C</div>
          <div className="ms-1 me-auto">G</div>
          <div className="ms-1 me-auto no-tier">L</div>
        </div>
      </ListGroup.Item>
     
      </ListGroup>
      </Col>
        
          <Col>
            {/* Main Heading */}
            <h1 className="custom-heading">Welcome to Ex Gratia</h1>

            {/* Subheading or Description */}
            <p className="custom-paragraph">
              This is a simple paragraph nothing more to see here.
            </p>

            {/* Call-to-Action Button */}
            <Button variant="primary">This is a button</Button>
          </Col>
  
        </Row>
  
      </Container>
      
    </div>
  );
};


export default App