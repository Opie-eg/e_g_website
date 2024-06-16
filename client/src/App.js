import React, {useState, useEffect} from 'react'
import { Navbar, Container, Row, Col, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';  // Import the Bootstrap CSS
import './styles.css'; // Import your CSS file


function App() {

  return (
    <div className="dark-mode">
      {/* Navigation Bar */}
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <img
              
              src="/eg_teste_final.png" // Replace with the actual path to your logo image
              width="50"
              height="50"
              className="d-inline-block align-top"
              
            /> home
            </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <Row>
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