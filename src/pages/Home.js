import React from "react";
import { Container, Row, Col, Card, Form, InputGroup, Button, Navbar, Nav } from "react-bootstrap";
import { FaSearch, FaStar } from "react-icons/fa";

const products = [
  { id: 1, name: "Organic Cotton TShirt", price: "$49.99", seller: "Urban Outfitters" },
  { id: 2, name: "Stainless Steel Water Bottle", price: "$19.99", seller: "Tech Haven" },
  { id: 3, name: "Organic Cotton TShirt", price: "$19.99", seller: "Urban Outfitters" },
  { id: 4, name: "Organic Cotton TShirt", price: "$29.99", seller: "Green Grocers" },
  { id: 5, name: "Organic Cotton TShirt", price: "$19.99", seller: "Green Grocers" },
  { id: 6, name: "Stainless Steel Water Bottle", price: "$29.99", seller: "Urban Outfitters" },
];

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      {/* <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">Marketplace</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home Page</Nav.Link>
            <Nav.Link href="#shop-dashboard">Shop Dashboard</Nav.Link>
            <Nav.Link href="#product-upload">Product Upload</Nav.Link>
            <Nav.Link href="#product-listing">Product Listing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Container>
        {/* Header Section */}
        <h2>Welcome to Our Marketplace</h2>
        <p>Discover amazing products and trusted shops</p>

        {/* Search and Category Filter */}
        <InputGroup className="mb-3">
          <Form.Control placeholder="Search products..." />
          <Button variant="outline-secondary">
            <FaSearch />
          </Button>
        </InputGroup>
        <Form.Select className="mb-4">
          <option>Select Category</option>
          <option>Clothing</option>
          <option>Accessories</option>
          <option>Home & Kitchen</option>
        </Form.Select>

        {/* Featured Products */}
        <h4>
          <FaStar className="text-warning" /> Featured Products
        </h4>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-3">
              <Card>
                <Card.Img variant="top" src="/images/tshirt.jpg" alt="Product Image" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Card.Text className="text-muted">{product.seller}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
