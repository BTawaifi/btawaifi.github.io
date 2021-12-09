import React from "react";
import { Container, Figure } from "react-bootstrap";
import { InfiniteCarousel } from "../ImportExport";

const Skills = () => {

  //import all static Images
  function importAll(r) {
      return r.keys().map(r);
   }
   const TechnologyLinks = importAll(require.context('../assets/img/brands/', false, /\.(png|jpe?g|svg|webp)$/));

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
                <Figure.Image alt="Technology Icon" src={item.default} />
              </Figure>
            ))}
          </InfiniteCarousel>
        </Container>
      </div></div>
  );
};

export default Skills;
