import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Image from "components/Image";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import longArrow from "../../../../content/assets/images/icons/long-arrow-alt-right-solid.png";

import "./Technology.scss";

const Technology = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, imageFileName } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <Col md={5}>
          <Image
            className="img-fluid d-block mx-auto mb-4 mb-sm-0"
            fileName={imageFileName}
            alt={imageFileName}
          />
        </Col>
        <Col md={7}>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
          <Col md={12}>
            <ul className="list-unstyled list-custom text-white text-left">
              <li>
                <img src={longArrow} className="img-fluid mr-2" alt="" /> Deflationary LaunchPad
              </li>
              <li>
                <img src={longArrow} className="img-fluid mr-2" alt="" /> Incubation of Microcaps &
                FairLaunchs
              </li>
              <li>
                <img src={longArrow} className="img-fluid mr-2" alt="" /> Benefit to holders inform
                of fee re-distribution & Burn
              </li>
            </ul>
            <a href="" className="mt-4 px-5 py-3 text-white mr-3 btn btn-primary">
              Explore
            </a>
          </Col>
        </Col>
      </Row>
    </PageSection>
  );
};

Technology.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Technology.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Technology;
