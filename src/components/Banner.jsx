import React from "react";
import PropTypes from "prop-types";

import { Container, Button, Badge } from "react-bootstrap";
import "./Banner.scss";
import { Link } from "gatsby";
import envelopIcon from "../../content/assets/images/icons/envelope-solid.png";
import facebookIcon from "../../content/assets/images/icons/facebook-brands.png";
import githubIcon from "../../content/assets/images/icons/github-brands.png";
import instagramIcon from "../../content/assets/images/icons/instagram-brands.png";
import twitterIcon from "../../content/assets/images/icons/twitter-brands.png";

const Banner = ({ header, subheader }) => {
  return (
    <div className="banner-wrap">
      <Container>
        <div className="banner-text-holder">
          <div className="banner-top-text">
            <Badge bg="info" className="p-1">
              News
            </Badge>
            <p>Patch whitelist is now open</p>
          </div>
          <div className=" banner-mid">
            <h1>{header}</h1>
            <p>{subheader}</p>
          </div>
          <div className="banner-bottom">
            <div className="button-wrap">
              <Button
                variant="primary"
                className="text-white px-3 px-md-4 py-2 py-md-3 mr-2 mr-md-3 mb-2"
              >
                White Paper
              </Button>
              <Button
                variant="primary"
                className="text-white px-3 px-md-4 py-2 py-md-3 mr-2 mr-md-3 mb-2"
              >
                Light Paper
              </Button>
              <Button
                variant="primary"
                className="text-white px-3 px-md-4 py-2 py-md-3 mr-2 mr-md-3 mb-2"
              >
                Join our Community
              </Button>
            </div>
          </div>
        </div>
        <div className="banner-social">
          <ul className="list-unstyled">
            <li>
              <Link to="">
                <img src={twitterIcon} className="social-icon img-fluid" alt="Twitter" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={instagramIcon} className="social-icon img-fluid" alt="Instagram" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={githubIcon} className="social-icon img-fluid" alt="Github" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={envelopIcon} className="social-icon img-fluid" alt="Envelop" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src={facebookIcon} className="social-icon img-fluid" alt="Facebook" />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

Banner.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
};

Banner.defaultProps = {
  header: "",
  subheader: "",
};

export default Banner;
