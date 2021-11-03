import { Container, Button, Card } from "react-bootstrap";
import MagicHover from "magic-hover";
import { InfiniteCarousel, Fade } from "../ImportExport";
import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import Modal from "./Modal";

const PHOTOS = [
  {
    photo: require("../assets/img/designs/DRAGON.webp").default,
    caption: "Dragon Render",
    subcaption: "Photoshop/Zbrush",
  },
  {
    photo: require("../assets/img/designs/LED.webp").default,
    caption: "Led ad",
    subcaption: "Photoshop",
  },
  {
    photo: require("../assets/img/designs/LOG.webp").default,
    caption: "Big T",
    subcaption: "Photoshop",
  },
  {
    photo: require("../assets/img/designs/Medeval.webp").default,
    caption: "Medival Equipment",
    subcaption: "Autodesk Maya/Photoshop",
  },
  {
    photo: require("../assets/img/designs/T5.webp").default,
    caption: "Sukhoi Su-57 Render",
    subcaption: "Autodesk Maya/Photoshop",
  },
  {
    photo: require("../assets/img/designs/T50_BKG.webp").default,
    caption: "Sukhoi Su-57 Render",
    subcaption: "Autodesk Maya/Photoshop",
  },
  {
    photo: require("../assets/img/designs/MoveThroughSpaceSlant.webp").default,
    caption: "Move Through Space",
    subcaption: "Photoshop",
  },
  {
    photo: require("../assets/img/designs/iphone_Shot.webp").default,
    caption: "Iphone Camera Shot",
    subcaption: "Photoshop",
  },
  {
    photo: require("../assets/img/designs/Cadera.webp").default,
    caption: "Cadera Delta",
    subcaption: "Illustrator",
  },
  {
    photo: require("../assets/img/designs/BT.webp").default,
    caption: "BTLogo",
    subcaption: "Illustrator",
  },
  {
    photo: require("../assets/img/designs/omi.webp").default,
    caption: "Oh My Information Youtube Channel",
    subcaption: "Illustrator",
  }
];

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false); //For ReactBnbGallery
  const options = {
    max: 20,
    reverse: true,
    perspective: 1000,
    scale: { x: 1, y: 1, z: 1 },
    rotate: 0,
    translate: { x: 0, y: 0 },
  };

  const [openModal, setopenModal] = useState(0);
  const OnModalOpen=(modalNumber)=>{
    setopenModal(modalNumber);
    document.body.style.overflow = "hidden";
    document.body.querySelector("footer").style.opacity="0";
    document.body.querySelector(".navbar").style.visibility="hidden";
  }
  const OnModalClose=()=>{
    setopenModal(0);
    document.body.style.overflow = 'unset';
    document.body.querySelector("footer").style.opacity="100";
    document.body.querySelector(".navbar").style.visibility="visible";
  }

  return (
    <div className="project-container">
      <Container>
        <h2
          className="project-title"
          style={{ fontSize: "3rem", fontFamily: "Prototype" }}
        >
          Projects
        </h2>
      </Container>
      <div className="project-container-card">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
          dots={false}
          showSides={false}
          sidesOpacity={1}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={3}
          slidesSpacing={10}
          dragging={true}
          scrollOnDevice={false}
          autoCycle={false}
          //cycleInterval={10}
        >
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/BTChattingLogo.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        Anonymous Online Chat App, Multiple Users And Rooms
                      </Card.Text>
                      <Button
                        style={{ fontFamily: "inherit" }}
                        href="https://btchatting.herokuapp.com/"
                        variant="dark"
                      >
                        <h3>BTChatting</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>

          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/BTGallery.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        A Gallery Of Created 3D/2D Designs And Photos Gallery
                      </Card.Text>
                      <Button
                        onClick={() => setIsOpen(true)}
                        style={{ fontFamily: "inherit" }}
                        variant="dark"
                      >
                        <h3>Design Gallery</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>

          {/* Work in progress */}
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                  <Card.Img
                      variant="top"
                      src={require("../assets/img/TCorpEms.webp").default}
                    />
                     <Card.Body>
                      <Card.Text>
                        Employee management system UX/UI Design using Figma
                      </Card.Text>
                      <Button
                        onClick={() => {
                         OnModalOpen(1);
                        }}
                        style={{ fontFamily: "inherit" }}
                        variant="dark"
                      >
                        <h3>TCorp.EMS</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                  <Card.Img
                      variant="top"
                      src={require("../assets/img/Connect4.webp").default}
                    />
                     <Card.Body>
                      <Card.Text>
                        Connect 4 Electronic Game - Computer Engineering Project
                      </Card.Text>
                      <Button
                        onClick={() => {
                          OnModalOpen(2);
                        }}
                        style={{ fontFamily: "inherit" }}
                        variant="dark"
                      >
                        <h3>Connect 4</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
           <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/BTAnimeLogo.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        Download And Watch English Anime Subbed or Dubbed
                      </Card.Text>
                      <Button
                        style={{ fontFamily: "inherit" }}
                        href="/#/btanime"
                        variant="dark"
                      >
                        <h3>BTAnime</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/trellotodo.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        A fullstack application for custom communication with trello
                      </Card.Text>
                      <Button
                        style={{ fontFamily: "inherit" }}
                        href="https://btawaifi.github.io/trello-todo-app/"
                        variant="dark"
                      >
                        <h3>Trello Todo List</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/lepont.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        A redesigned wordpress website for Le Pont Organization
                      </Card.Text>
                      <Button
                        style={{ fontFamily: "inherit" }}
                        href="https://festival-aleppo.org"
                        variant="dark"
                      >
                        <h3>Le Pont Organization</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/thelasttemptation.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        A short movie i edited about old Aleppo production By Issa Touma
                      </Card.Text>
                      <Button
                        style={{ fontFamily: "inherit" }}
                        href="https://www.youtube.com/watch?v=xc7HufHJC10&t=7s"
                        variant="dark"
                      >
                        <h3>The Last Temptation</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/PetrossonLogo.webp").default}
                    />
                    <Card.Body>
                      <Card.Text>
                        A Home Installation Company Located In Stockholm |
                        Sweden
                      </Card.Text>
                      <Button
                        style={{ fontFamily: "inherit" }}
                        href="https://petrossonbygg.github.io/"
                        variant="dark"
                      >
                        <h3>PetrossonBYGG</h3>
                      </Button>
                    </Card.Body>
                  </Card>
                </Card>
              </MagicHover>
            </Fade>
          </div>
        </InfiniteCarousel>
      </div>
      <>
        <ReactBnbGallery
          show={isOpen}
          photos={PHOTOS}
          showThumbnails={false}
          onClose={() => setIsOpen(false)}
          backgroundColor="#282828"
        />
      </>
      {openModal===1 && (
        <Modal openModal={openModal} setopenModal={setopenModal} OnModalClose={OnModalClose}>
          <iframe
          title="TCorp.Ems"
            src="https://drive.google.com/file/d/1K-k3gOtcFkoT4h3fBcaILU17NRF2uOcY/preview"
            width="640"
            height="480"
            className="Ems"
            allow="autoplay"
          ></iframe>
        </Modal>
      )}
      {openModal===2 && (
        <Modal openModal={openModal} setopenModal={setopenModal} OnModalClose={OnModalClose}>
          <iframe title="connect4" src="https://docs.google.com/presentation/d/e/2PACX-1vQv4wZtWALo0uGILweo8X_tTDX72SEyJQ_511VSY7nE5vGtuMY5munTtOnDgr2CHg/embed?start=false&loop=false&delayms=5000" frameborder="0" width="640" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
