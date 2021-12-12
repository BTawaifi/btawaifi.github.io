//import 'bootstrap/dist/css/bootstrap.min.css';
import React,{lazy,useRef} from "react";
import "intersection-observer";
import {
    GeneralContainer,
    About,
    Fade,
    NavFull
} from "../ImportExport";

import { Helmet } from "react-helmet-async"; //usage requires HelmetProvider component
import { motion } from "framer-motion";

const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const ToolsAndTechnologies = lazy(() => import("../components/ToolsAndTechnologies"));
const ContactFooter = lazy(() => import("../components/ContactFooter"));

const HomeRoute = () => {
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

    return (
        <div>
            <Helmet>
                <title>
                    Boutros Tawaifi Portfolio | Full-Stack Developer | Designer
                </title>
                {/*<link rel="canonical" href="http://mysite.com/example" />*/}

                <meta
                    name="description"
                    content="Full-Stack React And NodeJs Express developer, Logo, Branding, Design And Computer Engineering | BT | BTChatting | Boutros Tawaifi"
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
                    content="Full-Stack React And NodeJs Express developer, Logo, Branding, Design And Computer Engineering | BT | BTChatting | Boutros Tawaifi"
                />
                <meta
                    property="og:image"
                    content="https://lh3.googleusercontent.com/a-/AOh14GgO5XO-e6FAcTMKUrm4YE8YV1sheOtbAyLZe6jOVg=s288-p-no"
                />
            </Helmet>
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
                <div className="position-absolute" ref={RefList[0]}></div>
                <GeneralContainer containerClass="Dark_Bg bg-height-mod-about">
                    <header>
                        <About />
                    </header>
                </GeneralContainer>

                <main>
                    <div className="position-absolute" ref={RefList[1]}></div>
                    <GeneralContainer containerClass="Light_Bg">
                        <Fade>
                            <article>
                                <Skills />
                            </article>
                        </Fade>
                    </GeneralContainer>

                    <div className="position-absolute" ref={RefList[2]}></div>
                    <GeneralContainer containerClass="Dark_Bg">
                        <Fade>
                            <article>
                                <ToolsAndTechnologies />
                            </article>
                        </Fade>
                    </GeneralContainer>

                    <div className="position-absolute" ref={RefList[3]}></div>
                    <GeneralContainer containerClass="Light_Bg">
                        <Fade>
                            <article>
                                <Projects />
                            </article>
                        </Fade>
                    </GeneralContainer>
                </main>

                <div className="position-absolute" ref={RefList[4]}></div>
                <GeneralContainer containerClass="Dark_Bg bg-height-mod-contact">
                    <Fade className="contacts-fade">
                        <footer>
                            <ContactFooter />
                        </footer>
                    </Fade>
                </GeneralContainer>

            </motion.div >
        </div>
    )
}

export default HomeRoute
