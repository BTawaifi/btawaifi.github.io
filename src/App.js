//import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from "react";
import "./assets/css/nav.css";
import "./assets/css/about.css";
import "./assets/css/skills.css";
import "./assets/css/technologies.css";
import "./assets/css/projects.css";
import "./assets/css/contacts.css";
import "./assets/css/anime.css";
import "./App.css";
import "intersection-observer";
import {
  NavFull,
  NavNoLinks,
  GeneralContainer,
  About,
  Skills,
  Projects,
  ContactFooter,
  ToolsAndTechnologies,
  Anime,
  Fade,
} from "./ImportExport";
import { HashRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; //usage requires HelmetProvider component
import ReactLoading from "react-loading";
import "./index.css";

function App() {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const RefList = [myRef1, myRef2, myRef3, myRef4, myRef5];

  const executeScroll = (eventKey) => {
    if (eventKey === "1") {
      myRef1.current.scrollIntoView();
    } else if (eventKey === "2") {
      myRef2.current.scrollIntoView();
    } else if (eventKey === "3") {
      myRef3.current.scrollIntoView();
    } else if (eventKey === "4") {
      myRef4.current.scrollIntoView();
    } else if (eventKey === "5") {
      myRef5.current.scrollIntoView();
    }
  };

  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setisLoaded(true);
  }, []);

  if (isLoaded) {
    return (
      <HashRouter basename="/" className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch key={window.location.pathname}>
            <Route exact path="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <NavFull
                  RefList={RefList}
                  logoText=""
                  navBackground="light"
                  executeScroll={executeScroll}
                />
                <Home RefList={RefList} />
              </motion.div>
            </Route>

            <Route exact path="/btanime">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <NavNoLinks logoText="Back" navBackground="" />
                <BTAnime />
              </motion.div>
            </Route>
          </Switch>
        </AnimatePresence>
      </HashRouter>
    );
  } else {
    return (
      <div className="react-loading">
        <ReactLoading type={"bars"} color={"#fff"} height={"20%"} />
      </div>
    );
  }
}

function Home(props) {
  return (
    <div>
      <Helmet>
        <title>
          Boutros Tawaifi Portfolio | Full-Stack Developer | Designer
        </title>
        {/*<link rel="canonical" href="http://mysite.com/example" />*/}

        <meta
          name="description"
          content="Full-Stack React And NodeJs Express developer, Logo, Branding, Design And Computer Engineering | BTAnime | BTChatting | Boutros Tawaifi"
        />
        <meta
          name="keywords"
          content="Boutros Tawaifi, Botros Tawaifi, Btawaifi, Boutrous Tawaifi, Botrous Tawaifi"
        />

        <meta name="author" content="Boutros Tawaifi" />
        <meta property="og:url" content="https://btawaifi.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Boutros Tawaifi Portfolio | Full-Stack Developer | Designer"
        />
        <meta
          property="og:description"
          content="Full-Stack React And NodeJs Express developer, Logo, Branding, Design And Computer Engineering | BTAnime | BTChatting | Boutros Tawaifi"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/a-/AOh14GgO5XO-e6FAcTMKUrm4YE8YV1sheOtbAyLZe6jOVg=s288-p-no"
        />
      </Helmet>

      <div className="position-absolute" ref={props.RefList[0]}></div>
      <GeneralContainer containerClass="Dark_Bg bg-height-mod-about">
        <header>
          <About />
        </header>
      </GeneralContainer>

      <main>
        <div className="position-absolute" ref={props.RefList[1]}></div>
        <GeneralContainer containerClass="Light_Bg">
          <Fade>
            <article>
              <Skills />
            </article>
          </Fade>
        </GeneralContainer>

        <div className="position-absolute" ref={props.RefList[2]}></div>
        <GeneralContainer containerClass="Dark_Bg">
          <Fade>
            <article>
              <ToolsAndTechnologies />
            </article>
          </Fade>
        </GeneralContainer>

        <div className="position-absolute" ref={props.RefList[3]}></div>
        <GeneralContainer containerClass="Light_Bg">
          <Fade>
            <article>
              <Projects />
            </article>
          </Fade>
        </GeneralContainer>
      </main>

      <div className="position-absolute" ref={props.RefList[4]}></div>
      <GeneralContainer containerClass="Dark_Bg bg-height-mod-contact">
        <Fade className="contacts-fade">
          <footer>
            <ContactFooter />
          </footer>
        </Fade>
      </GeneralContainer>
    </div>
  );
}

function BTAnime() {
  return (
    <div>
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

      <div className="position-absolute"></div>
      <GeneralContainer containerClass="Dark_Bg">
        <Anime />
      </GeneralContainer>
    </div>
  );
}
export default App;
