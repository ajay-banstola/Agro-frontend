import React, { Component } from "react";
import NavbarLoggedin from "../../Parts/NavbarLoggedin/NavbarLoggedin";
import SubFooter from "../../Parts/SubFooter/SubFooter";
import Footer from "../../Parts/Footer/Footer";
import ItemList from "../../Parts/ItemList/ItemList";
import SubHeaderNotLoggedin from "../../Parts/SubHeaderNotLoggedin/SubHeaderNotLoggedin";

export class Homepage1 extends Component {
  render() {
    return (
      <div>
        <NavbarLoggedin />
        <SubHeaderNotLoggedin />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <ItemList />
        <SubFooter />
        <ItemList />
        <Footer />
      </div>
    );
  }
}

export default Homepage1;
