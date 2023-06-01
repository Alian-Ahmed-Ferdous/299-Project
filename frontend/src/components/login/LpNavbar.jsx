import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './LpNavbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function LpNavBar() {
  return (
    <div className="navbar">
      <Container className="contain">
        <div className="brand" href="#">KOBIGAAN</div>
        <div className="text">
          <a href="login">Login</a>
        </div>
      </Container>
    </div>
  );
}

export default LpNavBar;
