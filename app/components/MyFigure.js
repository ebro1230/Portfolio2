"use client";

import { Figure, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function MyFigure({}) {
  return (
    <Figure>
      <Figure.Image
        width={300}
        height={316}
        roundedCircle={true}
        alt="Profile Picture"
        src="/Headshot.jpg"
      />
      <Figure.Caption>
        <Row className="social-media-icons">
          <Col className="github">
            <a target="_blank" href="https://github.com/ebro1230">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
          <Col className="linkedIn">
            <a target="_blank" href="https://www.linkedin.com/in/ebro1230/">
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon={faSquare} color="white" />
                <FontAwesomeIcon icon={faLinkedin} />
              </span>
            </a>{" "}
          </Col>
          <Col className="email">
            <a target="_blank" href="mailto:ebro1230@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>{" "}
          </Col>
        </Row>
      </Figure.Caption>
    </Figure>
  );
}
