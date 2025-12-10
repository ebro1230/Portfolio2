"use client";

import { Figure, Row, Col, Accordion, Button } from "react-bootstrap";

export default function MyAccordion({
  projectNumber,
  projectTitle,
  imageName,
  about,
  site,
  code,
}) {
  return (
    <Accordion className="project">
      <Accordion.Item eventKey={projectNumber}>
        <Accordion.Header>
          <Row className="project-header">
            <Col>
              <Figure>
                <Figure.Image
                  width={400}
                  height={450}
                  alt={projectTitle}
                  src={imageName}
                />
              </Figure>
            </Col>
            <Col className="project-title">{projectTitle}</Col>
          </Row>
        </Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col>{about}</Col>
          </Row>
          <br />
          <Row>
            <Col className="code-buttons">
              <a href={site} target="_blank">
                <Button>View Site</Button>
              </a>
              <a href={code} target="_blank">
                <Button>View Code</Button>
              </a>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
