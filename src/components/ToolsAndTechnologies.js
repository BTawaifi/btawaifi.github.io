import React from "react";
import { Container } from "react-bootstrap";
import { Fade,ExpandableCard } from "../ImportExport";

const TechnologyListFE = [
  "HTML5",
  "CSS",
  "JavaScript",
  "React.js",
  "SASS",
  "jQuery",
  "Bootstrap",
  "Progressive Web Apps (PWA)",
  "Wordpress",
];
const TechnologyListBE = [
  "Node.js",
  "Express.js",
  "Mongo DB",
  "Strapi",
  "Sanity.io",
  "Socket.IO ",
  "Firebase",
  "MySQL",
];
const TechnologyList2D = [
  "Photoshop",
  "Lightroom",
  "Illustrator",
  "Corel Draw",
  "XD",
  "Figma",
  "Captivate",
  "ToonBoom Harmony",
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
      <Container fluid  className="technologies-cards">
        <Fade>
        <ExpandableCard Title="Front-End" TechnologyList={TechnologyListFE} />
        <ExpandableCard Title="Back-End" TechnologyList={TechnologyListBE} />
        <ExpandableCard Title="2D Design" TechnologyList={TechnologyList2D} />
        <ExpandableCard Title="3D Design" TechnologyList={TechnologyList3D} />
        <ExpandableCard
          Title="Video Production"
          TechnologyList={TechnologyListVP}
        />
        <ExpandableCard Title="Other" TechnologyList={TechnologyListOT} />
        </Fade>
      </Container>
    </div>
  );
};

export default ToolsAndTechnologies;
