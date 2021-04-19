import React, { useEffect,useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

import Logo from "../assets/img/Logo.png";
import Logolgt from "../assets/img/Logo-lgt.png";
export const NavFull = (props) => {

  const [logoText] = useState(props.logoText);
  const [UnderScore, UseUnderScore] = useState(1);
  const handleSelect = (eventKey) => {
    props.executeScroll(eventKey);
  };

  //Note: Try Intersection observer instead
  //Todo: Make it a generic component (props array)
  const windowScroll = () => {
    let modHeight = [600, 1200, 1800, 2400];
    if (window.innerWidth < 480) {
      modHeight[2] = 2200;
      modHeight[3] = 2800;
    } else {
      modHeight[3] = 2400;
    }
    if (window.scrollY > 0 && window.scrollY < modHeight[0]) {
      UseUnderScore(1); //about
    } else if (
      window.scrollY >= modHeight[0] &&
      window.scrollY < modHeight[1]
    ) {
      UseUnderScore(2); //skills
    } else if (
      window.scrollY >= modHeight[1] &&
      window.scrollY < modHeight[2]
    ) {
      UseUnderScore(3); //technologies
    } else if (
      window.scrollY >= modHeight[2] &&
      window.scrollY < modHeight[3]
    ) {
      UseUnderScore(4); //projects
    } else if (window.scrollY >= modHeight[3]) {
      UseUnderScore(5); //contacts
    } else {
      UseUnderScore(1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
      UseUnderScore(0);
    };
  }, []);

  return (
    <div >
      <Navbar className={props.navBackground}
        onSelect={handleSelect}
        expand="sm"
        bg={props.navBackground}
        variant={props.navBackground}
        fixed="top"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logoText?Logolgt:Logo}
            width="36"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="logoText">{" " + logoText}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav.Link eventKey="1">
              About
              <div
                style={{ width: 50 }}
                className={
                  "UnderScoreLink" + (UnderScore === 1 ? "Active" : "")
                }
              />
            </Nav.Link>
            <Nav.Link eventKey="2">
              Skills
              <div
                style={{ width: 50 }}
                className={
                  "UnderScoreLink" + (UnderScore === 2 ? "Active" : "")
                }
              />
            </Nav.Link>
            <Nav.Link eventKey="3">
              Technologies
              <div
                style={{ width: 115 }}
                className={
                  "UnderScoreLink" + (UnderScore === 3 ? "Active" : "")
                }
              />
            </Nav.Link>
            <Nav.Link eventKey="4">
              Projects
              <div
                style={{ width: 70 }}
                className={
                  "UnderScoreLink" + (UnderScore === 4 ? "Active" : "")
                }
              />
            </Nav.Link>
            <Nav.Link eventKey="5">
              Contact
              <div
                style={{ width: 70 }}
                className={
                  "UnderScoreLink" + (UnderScore === 5 ? "Active" : "")
                }
              />
            </Nav.Link>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
