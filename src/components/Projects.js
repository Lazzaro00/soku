import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import apple from "../assets/img/apple.jpg";
import bmw from "../assets/img/bmw.jpg";
import antartide from "../assets/img/antartide.jpg";
import sotto_cassa from "../assets/img/sotto_cassa.jpg";
import dimmi_perche from "../assets/img/DimmiPerché.jpg";
import fuori_città from "../assets/img/fuoriCittà.jpg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Fuori Città - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: fuori_città,
      link: "/"

    },
    {
      title: "Dimmi Perche - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: dimmi_perche,
      link: "/DimmiPerchè"

    },
    {
      title: "Apple - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: apple,
      link: "/Apple"

    },
    {
      title: "BMW - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: bmw,
      link: "/Bmw"
    },
    {
      title: "Antartide - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: antartide,
      link: "/Antartide"
    },
    {
      title: "Sotto Cassa - Soku",
      description: "Clicca qui per i link alla canzone",
      imgUrl: sotto_cassa,
      link: "/SottoCassa"
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
