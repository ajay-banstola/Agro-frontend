import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Row, Col } from 'react-bootstrap';
import image1 from '../../images/background.jpg';
import './style.css';
//import TextField from '@material-ui/core/TextField';
//import classes from "*.module.sass";
import Button from '@material-ui/core/Button';

export const Signup = () => {
  var divStyle = {
    overflow:'hidden',
  };
  return (
    <Row>
    <Col sm={3} md = {3} lg = {3} xl = {4} style = {divStyle}>
    <p><img src = {image1} alt = "backgroundImg" class = "backgroundImg"/></p>
    </Col>
    <Col xs={12} sm = {6} md = {6} lg = {6} xl = {4}>
      <MDBRow>
        <MDBCol>
          <form>
            <h2 className = "text-center">AGRO MARKETPLACE</h2>
            <p className="h5 text-center">LOGIN</p>
            <div className="grey-text">
            <p>Username</p>
              <MDBInput
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              
              <p>Password</p>
              <MDBInput
                group
                type="password"
                validate
              />

            </div>
            <div className="text-center">
              <Button variant = "contained" color = "primary">
              LOGIN
              </Button>

            </div>

            
          </form>
        </MDBCol>
      </MDBRow>
    </Col>
    <Col sm = {3} md = {3} lg = {3} xl = {4} style = {divStyle}>
    <p><img src = {image1} alt = "backgroundImg" class = "backgroundImg"/></p>
    </Col>
  </Row>
    
  );
};

export default Signup