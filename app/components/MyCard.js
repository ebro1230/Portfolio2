"use client";

import Card from "react-bootstrap/Card";

export default function Home({ title, image, text }) {
  return (
    <Card className="techskill">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
