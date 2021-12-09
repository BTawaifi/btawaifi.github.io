import React from "react";
import { Container } from "react-bootstrap";
import { Fade, ExpandableCard } from "../ImportExport";

const TechnologyListFE = [
  "HTML5",
  "CSS",
  "JavaScript",
  "React.js",
  "SASS",
  "Bootstrap",
  "Progressive Web Apps (PWA)",
  "Wordpress",
  "Firebase",
  "React Native",
  "Angular"
];
const TechnologyListBE = [
  "Node.js",
  "Express.js",
  "Mongo DB",
  "Strapi",
  "Sanity.io",
  "Socket.IO ",
  "MySQL",
  "TypeORM",
  "Docker",
  "Jest",
  "Puppeteer",
  "TypeScript",
  "Git",
  "Redis"
];
const TechnologyList2D = [
  "Photoshop",
  "Illustrator",
  "Corel Draw",
  "XD",
  "Figma"
];
const TechnologyList3D = [
  "Maya",
  "3D Studio Max",
  "ZBrush",
  "Cinema 4D",
  "Blender",
  "SOLIDWORKS",
  "Unity",
];
const TechnologyListVP = [
  "Premiere",
  "After Effects",
  "Camtasia",
  "OBS Studio",
  "VideoScribe",
];
const TechnologyListOT = [
  "C#",
  "C++",
  "Java",
  "Arduino",
  "Proteus",
  "Office 365",
  "MATLAB",
  "VHDL",
  "Screaming Frog SEO Spider",
];



const ToolsAndTechnologies = () => {
  return (
    <div className="technologies-container">
      <Container>
        <h2
          className="technologies-title"
          style={{ fontSize: "3rem", fontFamily: "Prototype" }}
        >
          Tools & Technologies
        </h2>
      </Container>
      <Container fluid className="technologies-cards">
        <Fade>
          <ExpandableCard Title="Front-End" TechnologyList={TechnologyListFE} />
          <ExpandableCard Title="Back-End" TechnologyList={TechnologyListBE} />
          <ExpandableCard Title="2D Design" TechnologyList={TechnologyList2D} />
          <ExpandableCard Title="3D Design" TechnologyList={TechnologyList3D} />
          <ExpandableCard Title="Video Production" TechnologyList={TechnologyListVP} />
          <ExpandableCard Title="Other" TechnologyList={TechnologyListOT} />
        </Fade>
      </Container>
    </div>
  );
};

export default ToolsAndTechnologies;
