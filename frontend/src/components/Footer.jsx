//Past Alexis to Future Alexis: you had an issue with href quotes...sometimes the quotes looks SLIGHTLY different and actually have some junk attached to it...you fixed it by erasing the quotes and writing them again

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {FacebookShareButton, LinkedinShareButton, TumblrShareButton, TwitterShareButton} from 'react-share';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter color="indigo" className="font-small darken-3 pt-0" >
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12" className="py-5">
          <div className="mb-5 flex-center">
          <FacebookShareButton quote="Can't figure out what to eat? Check out this yummy recipe app." hashtag="#recipebox" url="therecipebox.netlify.app">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
            </FacebookShareButton>

            <TwitterShareButton children="therecipebox.netlify.app" url="therecipebox.netlify.app" hashtags={["recipebox"]} title="Yum yum yum this recipe app rocks! www.therecipebox.netlify.app">
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
              </TwitterShareButton>

            <LinkedinShareButton url="therecipebox.netlify.app">
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
              </LinkedinShareButton>

            <TumblrShareButton url="therecipebox.netlify.app" caption="Check out this yummy recipe app!">
              <i className="fab fa-tumblr fa-lg white-text fa-2x"> 
              </i>
            </TumblrShareButton>

          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link to="/"> Recipe Box </Link>
      </MDBContainer>
    </div>
  </MDBFooter>
  );
}

export default Footer;