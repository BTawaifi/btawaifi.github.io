import React, {useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../assets/img/Logo.png";
import Logolgt from "../assets/img/Logo-lgt.png";
import "../assets/css/nav.css";

export const NavNoLinks = (props) => {
  const [logoText] = useState(props.logoText);
  useEffect(() => {
  window.scrollTo(0, 0);
  })

  return (
    <div >
      <Navbar className={props.navBackground}
        expand="sm"
        bg={props.navBackground}
        variant={props.navBackground}
        fixed="top"
        style={{width: "fit-content"}}
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
      </Navbar>
    </div>
  );
};
