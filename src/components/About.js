import { motion } from "framer-motion";
import React from "react";
import { Container, Row, Col, Nav, Card, Image } from "react-bootstrap";
import Avatar from "../assets/img/BT.webp";
import MagicHover from "magic-hover";
import "../assets/css/about.css";

const About = () => {
  const options = {
    max: 20,
    reverse: true,
    perspective: 1000,
    scale: { x: 1, y: 1, z: 1 },
    rotate: 0,
    translate: { x: 0, y: 0 }
  };
  return (
    <>
      <Container className="about-container">
      <MagicHover options={options} className={"simple-box"}>
        <motion.div initial={{opacity:0.8}} whileHover={{ opacity:1 }} className="about-container-inner">
          <Card className="about-card">
            <Row>
              <Col className="pl-4" xs={12} md={8} lg={9}>
                <Card.Body className="justify-content-start text-left about-body">
                  <h1 className="about-title">Boutros Tawaifi</h1>

                  <div className="about-container-text-top">
                    <h3 className="pl-0">
                      I’m a
                      <span className="about-span-weight">
                        &nbsp;Full Stack Engineer / Instructor / Designer.
                      </span>
                      <br />I work with Technologies including
                      <span className="about-span-weight">
                        &nbsp;React, Nodejs, Adobe,
                      </span>
                      <br />and <span className="about-span-weight">Autodesk Products.</span>
                    </h3>
                  </div>

                  <h3>
                    I'm very
                    <span className="about-span-weight"> Passionate</span> and
                    <span className="about-span-weight"> Success Driven</span>.
                    <br />
                    My Hobbies are Reading, Socializing, Video Games and
                    Philosophy.
                    <br />I Also do
                    <span className="about-span-weight">
                      &nbsp;Electronic Projects,
                    </span>
                    &nbsp;and
                    <span className="about-span-weight">&nbsp;Circuit Design.</span>
                    {/*<br />
                    I'm Currently Finishing My
                    <span className="about-span-weight">
                    &nbsp;Computer Engineering Degree
                    </span>
                    &nbsp;At Aleppo State University*/}
                  </h3>
                </Card.Body>
              </Col> 
              <Col className="about-image" xs={0} md={2} lg={2}>
                <Image src={Avatar} alt={"Boutros Tawaifi Image"} roundedCircle />
              </Col>
            </Row>
          </Card>
        </motion.div>
        </MagicHover>
        
        <Nav.Link
          className="about-btn-download-resume"
          href={require("../assets/other/Resume-Boutros-Tawaifi.pdf").default}
        >
          <motion.div  whileHover={{scale:1.05,transition:{yoyo:Infinity}}} >
          Download Resume
          <div
            className={"UnderScoreLinkActive white"}
            style={{ width: "12.5rem", position: "initial" }}
          /> </motion.div>
        </Nav.Link>
       
      </Container>
    </>
  );
};
export default About;
