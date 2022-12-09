import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//carlos imagenes
import projImg1 from "../assets/img/calculadora.png";
<<<<<<< HEAD
import projImg2 from "../assets/img/Gato.png";
import projImg3 from "../assets/img/EditMe.png";

//mariana imagenes
import projImg4 from "../assets/img/GaleriaArteMariana.png";
import projImg5 from "../assets/img/gatoGame.png";
import projImg6 from "../assets/img/juegoMariana.png";

//alex imagenes
import projImg7 from "../assets/img/alex1.png";
import projImg8 from "../assets/img/alex2.png";
import projImg9 from "../assets/img/alex3.png";



=======
import projImg2 from "../assets/img/3dPort.png";
import projImg3 from "../assets/img/EditMe.png";

//mariana imagenes
import projImg4 from "../assets/img/lab.gif";
import projImg5 from "../assets/img/mine.gif";
import projImg6 from "../assets/img/oficina.gif";
>>>>>>> e960d24 (se agrego mi portafolio completo)

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "3D WEBS",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
<<<<<<< HEAD
      title: "3D RENDERS",
      description: "DesigN",
=======
      title: "3D Portfolio",
      description: "Desing",
>>>>>>> e960d24 (se agrego mi portafolio completo)
      imgUrl: projImg2,
    },
    {
      title: "INTERACTIVE WEB",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  
  //mariana imagenes
<<<<<<< HEAD
  const projectsMariana = [
=======
  const projects3D = [
>>>>>>> e960d24 (se agrego mi portafolio completo)
    {
      title: "ART GALLERY",
      description: "Development",
      imgUrl: projImg4,
    },
    {
      title: "WEB GAME",
      description: "Games",
      imgUrl: projImg5,
    },
    {
      title: "WEB GAME",
      description: "Games",
      imgUrl: projImg6,
    },
  ];
  
<<<<<<< HEAD
  //alex imagenes
  const projectsAlex = [
    {
      title: "3D WEN",
      description: "Development",
      imgUrl: projImg7,
    },
    {
      title: "WEB GAME",
      description: "Games",
      imgUrl: projImg8,
    },
    {
      title: "CALCULATOR",
      description: "Games",
      imgUrl: projImg9,
    },
  ];
=======
>>>>>>> e960d24 (se agrego mi portafolio completo)
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
<<<<<<< HEAD
                <p>Projects that have been created throughout the university.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Carlos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mariana</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Alex</Nav.Link>
=======
                <p>Projects that I have been created throughout the university.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">School</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3D</Nav.Link>
>>>>>>> e960d24 (se agrego mi portafolio completo)
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
<<<<<<< HEAD
                            projectsMariana.map((project, index) => {
=======
                            projects.map((project, index) => {
>>>>>>> e960d24 (se agrego mi portafolio completo)
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                          {
<<<<<<< HEAD
                            projectsAlex.map((project, index) => {
=======
                            projects3D.map((project, index) => {
>>>>>>> e960d24 (se agrego mi portafolio completo)
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> e960d24 (se agrego mi portafolio completo)
