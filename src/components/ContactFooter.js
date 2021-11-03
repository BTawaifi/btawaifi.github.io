import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const ContactFooter = () => {
  return (
    <>
      <div className="contact-container text-left " style={{ color: "white" }}>
        <div className="contact-title">Contact Info</div>
        <div className="contact-text">
          <div className="mb-3">
            <FontAwesomeIcon
              className="contact-fa-circle"
              icon={faCircle}
              size="3x"
              fixedWidth
            />
            <FontAwesomeIcon
              className="contact-fa-inner"
              icon={faPhoneAlt}
              size="2x"
              fixedWidth
            />
            <h2 style={{ display: "inline" }}> 0947575314</h2>
          </div>
          <div className="mb-3">
            <FontAwesomeIcon
              className="contact-fa-circle"
              icon={faCircle}
              size="3x"
              fixedWidth
            />
            <FontAwesomeIcon
              className="contact-fa-inner"
              icon={faEnvelope}
              size="2x"
              fixedWidth
            />

            <h2 style={{ display: "inline" }}>
              {" "}
              Boutrous.m.tawaifi@gmail.com{" "}
            </h2>
          </div>

          <div className="mb-3">
            <FontAwesomeIcon
              className="contact-fa-circle"
              icon={faCircle}
              size="3x"
              fixedWidth
            />
            <FontAwesomeIcon
              className="contact-fa-inner"
              icon={faMapMarkerAlt}
              size="2x"
              fixedWidth
            />

            <h2 style={{ display: "inline" }}> Aleppo | Syria</h2>
          </div>
        </div>
      </div>

      <div className="contact-container-icons">
        <motion.div whileHover={{scale:1.05,transition:{yoyo:Infinity}}} className="mb-3">
          <a
            className="contact-text-icons"
            href="https://www.facebook.com/boutros.tawaifi.fb/"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
          </a>
        </motion.div>
        <motion.div whileHover={{scale:1.05,transition:{yoyo:Infinity}}} className="mb-3">
          <a className="contact-text-icons" href="https://github.com/btawaifi">
            <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
          </a>
        </motion.div>
         {/*<motion.div whileHover={{scale:1.05,transition:{yoyo:Infinity}}} className="mb-3">
          <a
            className="contact-text-icons"
            href="https://www.linkedin.com/in/boutros-tawaifi"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
          </a>
        </motion.div>
       <motion.div whileHover={{scale:1.05,transition:{yoyo:Infinity}}} className="mb-3">
          <a
            className="contact-text-icons"
            href="https://www.youtube.com/channel/"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
          </a>
        </motion.div>*/}
      </div>
    </>
  );
};

export default ContactFooter;
