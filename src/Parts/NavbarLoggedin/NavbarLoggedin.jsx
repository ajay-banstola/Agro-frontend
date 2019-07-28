import React, { Component } from 'react'
import './style.css';
import { Row, Col } from 'react-bootstrap';
class NavbarLoggedin extends Component {
    render() {
        return (

            <header className="App-header1">

                <Row>
                    <Col xm={12} md={6} lg = {6} xl={8}></Col>
                    <Col xm={12} md={6} lg = {6}xl={4}>
                        <li className = "nav">Namaste</li>
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                        <li className = "nav">Arun</li>
                        <li><a href="/">Logout</a></li>
                    </Col>
                </Row>
            </header>

        )
    }
}

export default NavbarLoggedin
