import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const shops = [
  {
    id: 1,
    name: "The Local Mart",
    image: "https://via.placeholder.com/300",
    location: "Mumbai, India",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Fresh Groceries",
    image: "https://via.placeholder.com/300",
    location: "Delhi, India",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Tech Gadgets",
    image: "https://via.placeholder.com/300",
    location: "Bangalore, India",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Fashion Hub",
    image: "https://via.placeholder.com/300",
    location: "Pune, India",
    rating: 4.6,
  },
];

const NearbyShops = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Nearby Shops</h2>
      <Row>
        {shops.map((shop) => (
          <Col key={shop.id} md={3} sm={6} className="mb-4">
            <Card className="shop-card shadow-sm">
              <Card.Img variant="top" src={shop.image} />
              <Card.Body>
                <Card.Title>{shop.name}</Card.Title>
                <Card.Text>
                  📍 {shop.location} <br />
                  ⭐ {shop.rating} / 5
                </Card.Text>
                <Button variant="dark" className="w-100">
                  View Shop
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NearbyShops;
