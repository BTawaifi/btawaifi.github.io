//import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "intersection-observer";
import "../assets/css/nav.css";
import {
  GeneralContainer,
  NavNoLinks,
  Anime
} from "../ImportExport";
import { Helmet } from "react-helmet-async"; //usage requires HelmetProvider component
import { motion } from "framer-motion";

const AnimeRoute = () => {
  return (
    <>
      <Helmet>
        <title>BTanime | Download Or Watch English Anime Online</title>
        {/*<link rel="canonical" href="http://mysite.com/example" />*/}
        <meta
          name="description"
          content="Download Or Watch Anime Online In High Quality With English Subs And Dubs"
        />
        <meta
          name="keywords"
          content="BTanime | Download Or Watch English Anime Online, Btanime, watch anime, download anime, hd anime"
        />

        <meta name="author" content="Boutros Tawaifi" />
        <meta
          name="title"
          property="og:title"
          content="BTanime | Download Or Watch English Anime Online"
        />
        <meta
          name="image"
          property="og:image"
          content="./assets/img/Logo.png"
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <NavNoLinks logoText="Back" navBackground="" />

        <div className="position-absolute"></div>
        <GeneralContainer containerClass="Dark_Bg">
          <Anime />
        </GeneralContainer>

      </motion.div>
    </>
  );
}

export default AnimeRoute
