import React, { Component } from "react";
import "./style.css";
import { Row } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <Row>
        <div className="Footer">
          <p style={leftSide}>Copy right c 2019 Agro-Market.</p>
          <p style={rightSide}>- Agro Market</p>
        </div>
      </Row>
    );
  }
}
const rightSide = {
  float: "right",
  paddingRight: "100px"
};

const leftSide = {
  float: "left",
  paddingLeft: "100px"
};

export default Footer;
