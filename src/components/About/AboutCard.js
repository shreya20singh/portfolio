import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreya Singh </span>
            living in <span className="purple"> Jersey City, NJ</span>
            <br />
            I am currently a freelancer looking for <span className="purple"> full time roles </span> and freelancing gigs.
            <br />
            I have completed Master of Sceince (MS) in Computer Sceince from New York University <span className="purple">(NYU)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with like minded people
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The song that I came to sing, remains unsung to this day"{" "}
          </p>
          <footer className="blockquote-footer">R. B. Tagore</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
