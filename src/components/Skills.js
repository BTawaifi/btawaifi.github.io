import React from "react";
import { Container, Figure } from "react-bootstrap";
import { InfiniteCarousel } from "../ImportExport";

const Skills = () => {
  const TechnologyLinks = [
    require("../assets/img/brands/logo-2582747_1280.webp").default,
    require("../assets/img/brands/logo-2582748_640.webp").default,
    require("../assets/img/brands/seal-color-aef0354c.webp").default,
    require("../assets/img/brands/JavaScript.webp").default,
    require("../assets/img/brands/react-hexagon.webp").default,
    require("../assets/img/brands/jquery+icon-1320185152994214115.webp").default,
    require("../assets/img/brands/800px-Bootstrap_logo.svg.webp").default,
    require("../assets/img/brands/pwa.webp").default,

    require("../assets/img/brands/logo-node.webp").default,
    require("../assets/img/brands/Express.webp").default,
    require("../assets/img/brands/mongodb-logo.webp").default,
    require("../assets/img/brands/mySQL.webp").default,
    require("../assets/img/brands/Strapi.webp").default,
    require("../assets/img/brands/Sanity.webp").default,
    require("../assets/img/brands/Socket.webp").default,
    require("../assets/img/brands/firebase.webp").default,

    require("../assets/img/brands/Photoshop.webp").default,
    require("../assets/img/brands/Lightroom.webp").default,
    require("../assets/img/brands/Illustrator.webp").default,
    require("../assets/img/brands/XD.webp").default,
    require("../assets/img/brands/captivate.webp").default,
    require("../assets/img/brands/corel.webp").default,
    require("../assets/img/brands/harmony.webp").default,

    require("../assets/img/brands/3Dmax.webp").default,
    require("../assets/img/brands/maya.webp").default,
    require("../assets/img/brands/ZBrush.webp").default,
    require("../assets/img/brands/cinema-4d-logo.webp").default,
    require("../assets/img/brands/blender.webp").default,
    require("../assets/img/brands/unity.webp").default,
    require("../assets/img/brands/solidworks-114573eb04.webp").default,

    require("../assets/img/brands/After_Effects.webp").default,
    require("../assets/img/brands/Premiere.webp").default,
    require("../assets/img/brands/Icon_Camtasia_512px.webp").default,
    require("../assets/img/brands/obs.webp").default,
    require("../assets/img/brands/21185-logo-1541431220.webp").default,

    require("../assets/img/brands/csharp.webp").default,
    require("../assets/img/brands/cpp.webp").default,
    require("../assets/img/brands/java_logo_640.1419968352.webp").default,
    require("../assets/img/brands/arduino.webp").default,
    require("../assets/img/brands/proteus.webp").default,
    require("../assets/img/brands/Office-365-Logo.webp").default,
    require("../assets/img/brands/Matlab-Logo.webp").default,
    require("../assets/img/brands/vhdl.webp").default,
    require("../assets/img/brands/screaming-frog-logo-kg.webp").default,
  ];

  return (
    <div>
    <div className="skills-container">
      <Container>
        <h2 className="skills-title">Skills</h2>
      </Container>
      <Container className="skills-container-text text-left ">
        <div className="skills-body">
          <ul>
            <li>Electrical and Computer Engineering</li>
            <li>Web/Software Development</li>
            <li>2D/3D Design And Animation</li>
            <li>Video Production</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>User Experience (UX) and UI</li>
          </ul>
        </div>
      </Container>

      <Container fluid className="skills-carousel ">
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 9,
                slidesToScroll: 1,
              },
            },
          ]}
          dots={false}
          showSides={false}
          sidesOpacity={1}
          sideSize={0.1}
          slidesToScroll={8}
          slidesToShow={9}
          slidesSpacing={3}
          dragging={true}
          scrollOnDevice={false}
          autoCycle={false}
          cycleInterval={6000}
        >
          {TechnologyLinks.map((item, i) => (
            <Figure key={i}>
              <Figure.Image alt="Technology Icon" src={item} />
            </Figure>
          ))}
        </InfiniteCarousel>
      </Container>
    </div></div>
  );
};

export default Skills;
