import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import apple from "../assets/img/apple.jpg";
import bmw from "../assets/img/bmw.jpg";
import antartide from "../assets/img/antartide.jpg";
import sotto_cassa from "../assets/img/sotto_cassa.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Apple - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: apple,
    },
    {
      title: "BMW - Soku",
      description: "Design & Development",
      imgUrl: bmw,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: antartide,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: sotto_cassa,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Songs</h2>
                <Row className="prog">
                  {
                  projects.map((project, index) => {
                    
                    return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      );
                    })}
                </Row>
              </div>}
            </TrackVisibility>
      </Container>
      
    </section>
  )
}
