import React, { Component } from "react";
import NavbarLoggedin from "../../Parts/NavbarLoggedin/NavbarLoggedin";
import SubFooter from "../../Parts/SubFooter/SubFooter";
import Footer from "../../Parts/Footer/Footer";

export class Homepage2 extends Component {
  render() {
    return (
      <div>
        <NavbarLoggedin />
        <SubFooter />
        <Footer />
      </div>
    );
  }
}

export default Homepage2;
