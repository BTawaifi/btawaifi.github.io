import { Container, Button, Card } from "react-bootstrap";
import MagicHover from "magic-hover";
import { InfiniteCarousel, Fade } from "../ImportExport";
import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";

const PHOTOS = [
  {
    photo:  require("../assets/img/designs/DRAGON.webp").default,
    caption: "Dragon Render",
    subcaption: "Photoshop/Zbrush",
  },
  {
    photo: require("../assets/img/designs/LED.webp").default,
    caption: "Led ad",
    subcaption: "Photoshop",
  },
  {
    photo:    require("../assets/img/designs/LOG.webp").default,
    caption: "Big T",
    subcaption: "Photoshop",
  },
  {
    photo:    require("../assets/img/designs/Medeval.webp").default,
    caption: "Medival Equipment",
    subcaption: "Autodesk Maya/Photoshop",
  },
  {
    photo:    require("../assets/img/designs/T5.webp").default,
    caption: "Sukhoi Su-57 Render",
    subcaption: "Autodesk Maya/Photoshop",
  },
  {
    photo:  require("../assets/img/designs/T50_BKG.webp").default,
    caption: "Sukhoi Su-57 Render",
    subcaption: "Autodesk Maya/Photoshop",
  },
  {
    photo:  require("../assets/img/designs/MoveThroughSpaceSlant.webp").default,
    caption: "Move Through Space",
    subcaption: "Photoshop",
  },
  {
    photo:  require("../assets/img/designs/iphone_Shot.webp").default,
    caption: "Iphone Camera Shot",
    subcaption: "Photoshop",
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
                      src={require("../assets/img/BTChattingLogo.jpg").default}
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
                      src={require("../assets/img/BTGallery.png").default}
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
          <div>
            <Fade>
              <MagicHover options={options}>
                <Card className="project-card">
                  <Card border="dark">
                    <Card.Img
                      variant="top"
                      src={require("../assets/img/BTAnimeLogo.jpg").default}
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
                      src={require("../assets/img/PetrossonLogo.png").default}
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
          backgroundColor='#282828'
        />
      </>
    </div>
  );
};

export default Projects;
