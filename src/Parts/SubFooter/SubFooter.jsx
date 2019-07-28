import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Footer from "../../Parts/Footer/Footer";
import "./style.css";

/*
This component is made using https://mdbootstrap.com/docs/react/navigation/footer/
*/

const SubFooter = () => {
  return (
    <footer className="SubFooter">
      <MDBFooter color="blue" className="font-small pt-4 mt-4 subfooter-pad">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title">Agro Marketplace</h5>
              <p>
                <span>+9779843213456,</span>
                <span>+9779843213456</span>
                <br />
                <a class="email-link" href="info@agronepal.com">
                  info@agronepal.com
                </a>
              </p>
            </MDBCol>
            <MDBCol md="">
              <ul>
                <h5 className="title">News</h5>
                <li className="list-unstyled">
                  <a href="#!">Poultry Farming</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Animal Husbandary</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Beekeeping</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Fish Farmiing</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Hydro Ponics</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="">
              <ul>
                <h5 className="title">People Profile</h5>
                <li className="list-unstyled">
                  <a href="#!">Farmer</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Agrobusiness</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Useful Organization</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="">
              <ul>
                <h5 className="title">Agro Tech. Market</h5>
                <li className="list-unstyled">
                  <a href="#!">Business Marker</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Farmers</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="">
              <ul>
                <h5 className="title">Others</h5>
                <li className="list-unstyled">
                  <a href="#!">Weather</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Calculator</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Market Place</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Talk</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Videos</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </footer>
  );
};

export default SubFooter;
