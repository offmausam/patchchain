import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Navbar, Container, Nav, NavDropdown, Badge } from "react-bootstrap";

import useWindowOnScroll from "hooks/useWindowOnScroll";
import useSmoothScrollTo from "hooks/useSmoothScrollTo";
import Icon from "components/Icon";
import NavItem from "components/NavItem";
import Image from "components/Image";
import subIconOne from "../../../content/assets/images/icon1.png";
import subIconTwo from "../../../content/assets/images/icon2.png";
import barIcon from "../../../content/assets/images/icons/bars-solid.png";

import "./Navbar.scss";

const MyNavbar = ({ anchors, frontmatter, extraItems }) => {
  const { brand, menuText, imageFileName } = frontmatter;

  const handleScrollToTop = useSmoothScrollTo(0);

  const [expanded, setExpanded] = React.useState(false);
  const toggleMenu = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const closeMenu = React.useCallback(() => {
    setExpanded(false);
  }, []);
  const handleBrandClick = React.useCallback(() => {
    closeMenu();
    handleScrollToTop();
  }, [closeMenu, handleScrollToTop]);

  const [shrink, setShrink] = React.useState(false);
  const handleWindowScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShrink(scrollTop > 100);
  }, []);
  useWindowOnScroll(handleWindowScroll);

  return (
    <Navbar className={clsx("navbar-root")} expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand className="cursor-pointer" onClick={handleBrandClick}>
          <Image className="img-fluid" fileName={imageFileName} alt={brand} />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu} aria-label="Toggle navigation">
          {menuText}
          <img src={barIcon} alt="" height={20} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className="text-capitalize ml-auto">
            <NavDropdown title="Apps" id="basic-nav-dropdown">
              <NavDropdown.Item href="#href1" className="mb-2">
                <div className="d-flex align-items-center sub-nav-item">
                  <img className="img-fluid mr-3" src={subIconOne} alt={brand} />
                  <div className="content">
                    <strong>PatchChain</strong> <Badge className="info">Beta</Badge>
                    <p className="m-0 p-0">Vulnerability Coordination & Bug Bounty Platform</p>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#href2">
                <div className="d-flex align-items-center sub-nav-item">
                  <img className="img-fluid mr-3" src={subIconTwo} alt={brand} />
                  <div className="content">
                    <strong>Unchain.cash</strong>{" "}
                    <Badge className="success">Under Development</Badge>
                    <p className="m-0 p-0">
                      Multichain Decentralized Protocol for Private Transaction
                    </p>
                  </div>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
            {anchors.map((anchor) => (
              <NavItem key={anchor} to={anchor} onClick={closeMenu} />
            ))}
          </Nav>
          {extraItems}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

MyNavbar.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  anchors: PropTypes.arrayOf(PropTypes.string),
  frontmatter: PropTypes.object,
  extraItems: PropTypes.any,
};

MyNavbar.defaultProps = {
  anchors: [],
  frontmatter: {},
  extraItems: null,
};

export default MyNavbar;
