import React from 'react'
import {Button, Card } from "react-bootstrap";
import MagicHover from "magic-hover";
import "react-bnb-gallery/dist/style.css";
import { Fade } from "../ImportExport";

const ProjectsCard = (props) => {
    const options = {
        max: 20,
        reverse: true,
        perspective: 1000,
        scale: { x: 1, y: 1, z: 1 },
        rotate: 0,
        translate: { x: 0, y: 0 },
      };

    return (
        <div>
            <Fade>
                <MagicHover options={options}>
                    <Card className="project-card">
                        <Card border="dark">
                            <Card.Img
                                variant="top"
                                src={props.src}
                            />
                            <Card.Body>
                                <Card.Text className="project-card-text">
                                    {props.text}
                                </Card.Text>
                                <Button
                                    onClick={props.func}
                                    style={{ fontFamily: "inherit" }}
                                    href={props.href}
                                    variant="dark"
                                >
                                    <h3>{props.title}</h3>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Card>
                </MagicHover>
            </Fade>
        </div>
    )
}

export default ProjectsCard
