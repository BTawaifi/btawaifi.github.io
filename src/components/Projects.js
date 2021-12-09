import { Container} from "react-bootstrap";
import { InfiniteCarousel} from "../ImportExport";
import React, { useState } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import Modal from "./Modal";
import ProjectsCard from "./ProjectsCard";

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
  const [openModal, setopenModal] = useState(0);
  const OnModalOpen = (modalNumber) => {
    setopenModal(modalNumber);
    document.body.style.overflow = "hidden";
    document.body.querySelector("footer").style.opacity = "0";
    document.body.querySelector(".navbar").style.visibility = "hidden";
  }
  const OnModalClose = () => {
    setopenModal(0);
    document.body.style.overflow = 'unset';
    document.body.querySelector("footer").style.opacity = "100";
    document.body.querySelector(".navbar").style.visibility = "visible";
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

          <ProjectsCard href={"https://btchatting.herokuapp.com/"} src={require("../assets/img/BTChattingLogo.webp").default}
            text={"Anonymous Online Chat App, Multiple Users And Rooms"} title={"BTChatting"} />

          <ProjectsCard href={"/#/btanime"} src={require("../assets/img/BTAnimeLogo.webp").default}
            text={"Download And Watch English Anime Subbed or Dubbed"} title={"BTAnime"} />

          <ProjectsCard href={"https://btawaifi.github.io/trello-todo-app/"} src={require("../assets/img/trellotodo.webp").default}
            text={"A fullstack application for custom communication with trello"} title={"Trello Todo List"} />

          <ProjectsCard href={"https://festival-aleppo.org"} src={require("../assets/img/lepont.webp").default}
            text={"A redesigned wordpress website for Le Pont Organization"} title={"Le Pont Organization"} />

          <ProjectsCard href={"https://www.youtube.com/watch?v=xc7HufHJC10&t=7s"} src={require("../assets/img/thelasttemptation.webp").default}
            text={"A short movie i edited about old Aleppo production By Issa Touma"} title={"The Last Temptation"} />

          <ProjectsCard href={"https://petrossonbygg.github.io/"} src={require("../assets/img/PetrossonLogo.webp").default}
            text={" A Home Installation Company Located In Stockholm | Sweden"} title={"PetrossonBYGG"} />

          <ProjectsCard func={() => setIsOpen(true)} src={require("../assets/img/BTGallery.webp").default}
            text={"A Gallery Of Created 3D/2D Designs And Photos Gallery"} title={"Design Gallery"} />

          <ProjectsCard func={() => { OnModalOpen(1) }} src={require("../assets/img/TCorpEms.webp").default}
            text={"Employee management system UX/UI Design using Figma"} title={"TCorp.EMS"} />

          <ProjectsCard func={() => { OnModalOpen(2) }} src={require("../assets/img/Connect4.webp").default}
            text={"Connect 4 Electronic Game - Computer Engineering Project"} title={"Connect 4"} />
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
      {openModal === 1 && (
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
      {openModal === 2 && (
        <Modal openModal={openModal} setopenModal={setopenModal} OnModalClose={OnModalClose}>
          <iframe title="connect4" src="https://docs.google.com/presentation/d/e/2PACX-1vQv4wZtWALo0uGILweo8X_tTDX72SEyJQ_511VSY7nE5vGtuMY5munTtOnDgr2CHg/embed?start=false&loop=false&delayms=5000" frameborder="0" width="640" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
