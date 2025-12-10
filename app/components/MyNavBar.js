"use client";

import { Nav, Navbar } from "react-bootstrap";

export default function MyNavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#about-me-container">Ed's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav-options">
          <Nav.Link eventKey={1} href="#about-me-container">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} href="#tech-skills-container">
            Skills
          </Nav.Link>
          <Nav.Link eventKey={3} href="#my-projects-div">
            Projects
          </Nav.Link>
          <Nav.Link eventKey={4} href="#contact-me-div">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
