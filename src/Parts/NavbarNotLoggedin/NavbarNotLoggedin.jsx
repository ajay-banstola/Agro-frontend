import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
class NavbarNotLoggedin extends Component {
  render() {
    return (
      <header className="App-header">
        <Row>
          <Col xs={12} md={8} xl={8} />
          <Col xs={12} md={4} xl={4}>
            <i className="far fa-user" />
            <li>
              <a href="/">Login</a>
            </li>
            <li id="separator">|</li>
            <Router>
              <button className="button button1">Sign up</button>
            </Router>
          </Col>
        </Row>
      </header>
    );
  }
}

export default NavbarNotLoggedin;
