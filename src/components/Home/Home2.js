import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png";
import AvatarPicSvg from './AvatarPicSvg';
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a full stack mobile apps developer
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Swift, JavaScript, Dart and Java</b>
              </i>
              <br />
              <br />
              My field of interests are in building new &nbsp;
              <i>
                <b className="purple">Mobile Apps </b> and
                also in {" "}
                <b className="purple">
                  Backend Development
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing end to end products
              with <b className="purple">SwiftUI</b> and <b className="purple">FireBase</b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>            
              <AvatarPicSvg /> {/* Use the AvatarPicSvg component */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shreya20singh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreya-singh-a96a37100/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:iamshreya20singh@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail /> 
                  </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

