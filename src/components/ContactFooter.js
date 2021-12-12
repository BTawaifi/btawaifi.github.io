import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  //faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import ContactIcon from "./ContactIcon";
import "../assets/css/contacts.css";

const ContactFooter = () => {
  return (
    <>
      <div className="contact-container text-left " style={{ color: "white" }}>
        <div className="contact-title">Contact Info</div>
        <div className="contact-text">
          <div className="mb-3">
            <FontAwesomeIcon className="contact-fa-circle" icon={faCircle} size="3x" fixedWidth />
            <FontAwesomeIcon className="contact-fa-inner" icon={faPhoneAlt} size="2x" fixedWidth />
            <h2 style={{ display: "inline" }}> +963 947575314</h2>
          </div>
          <div className="mb-3">
            <FontAwesomeIcon className="contact-fa-circle" icon={faCircle} size="3x" fixedWidth />
            <FontAwesomeIcon className="contact-fa-inner" icon={faEnvelope} size="2x" fixedWidth />
            <h2 style={{ display: "inline" }}>
              Boutrous.m.tawaifi@gmail.com
            </h2>
          </div>

          <div className="mb-3">
            <FontAwesomeIcon className="contact-fa-circle" icon={faCircle} size="3x" fixedWidth />
            <FontAwesomeIcon className="contact-fa-inner" icon={faMapMarkerAlt} size="2x" fixedWidth />
            <h2 style={{ display: "inline" }}> Aleppo | Syria</h2>
          </div>
        </div>
      </div>

      <div className="contact-container-icons">
        <ContactIcon href={"https://www.facebook.com/boutros.tawaifi.fb/"} icon={faFacebook}/>
        <ContactIcon href={"https://github.com/btawaifi"} icon={faGithub}/>
        <ContactIcon href={"https://www.linkedin.com/in/boutros-tawaifi"} icon={faLinkedin}/>
        {/*<ContactIcon href={"https://www.youtube.com/channel/"} icon={faYoutube}/>*/}
      </div>
    </>
  );
};

export default ContactFooter;
