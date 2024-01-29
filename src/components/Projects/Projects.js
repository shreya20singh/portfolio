import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import meal from "../../Assets/Projects/MealApp.png";
import lessgo from "../../Assets/Projects/lessgo.png";
import todo from "../../Assets/Projects/TodoList.png";
import NYCSchools from "../../Assets/Projects/NYCSchools.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To do list App"
              description="A sleek, intuitive, and powerful to-do list app designed to streamline your daily tasks and boost your efficiency. Built with SwiftUI for frontend and with a firebase backend."
              ghLink="https://github.com/shreya20singh/ToDo-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lessgo}
              isBlog={false}
              title="Trip planning App"
              description="Seamlessly plan every detail of your journey, from flights and accommodations to activities and dining, all in one intuitive platform. "
              ghLink="https://github.com/shreya20singh/Lessgoo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NYCSchools}
              isBlog={false}
              title="Schools of NYC"
              description="A simple app that lists all the schools of NYC and their details. Build using SwiftUi and Mapkit."
              ghLink="https://github.com/shreya20singh/NYCSchools"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meal}
              isBlog={false}
              title="Meals App"
              description="An recepie app built with SwiftUi. This app consumes mealdb api's to display recepies."
              ghLink="https://github.com/shreya20singh/MealApp"           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
