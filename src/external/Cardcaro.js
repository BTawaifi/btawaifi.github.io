import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";
import {
  Container,
  Image,
  Row,
  Col,
  Form,
  Navbar,
  Button,
  Nav,
  Card,
  Carousel,
} from "react-bootstrap";

class Cardcaro extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      top: "16rem",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }

  static get CARD_STYLE() {
    return {
      height: "100%",
      width: "300px",
      padding: "20px",
      textAlign: "center",
      background: "#333",
      color: "#333",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  }

  render() {
    return (
      <div style={Cardcaro.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={false} autoplay_speed={5500} spread={'wide'}>
          <div style={Cardcaro.CARD_STYLE}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  require("../assets/img/cosmic-background-with-colorful-laser-lights_181624-21427.jpg")
                    .default
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div style={Cardcaro.CARD_STYLE}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  require("../assets/img/cosmic-background-with-colorful-laser-lights_181624-21427.jpg")
                    .default
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div style={Cardcaro.CARD_STYLE}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  require("../assets/img/cosmic-background-with-colorful-laser-lights_181624-21427.jpg")
                    .default
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div style={Cardcaro.CARD_STYLE}>
            <Card>
              <Card.Img
                variant="top"
                src={
                  require("../assets/img/cosmic-background-with-colorful-laser-lights_181624-21427.jpg")
                    .default
                }
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}

export default Cardcaro;
