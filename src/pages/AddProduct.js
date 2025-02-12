import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { FaUpload, FaBox, FaTag, FaDollarSign, FaClipboardList, FaLayerGroup } from "react-icons/fa";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    inventory: "",
    category: "",
    tags: "",
    image: null,
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Submitted: ", product);
    alert("Product Created Successfully!");
  };

  return (
    <Container className="mt-4">
      <h2>📦 Add New Product</h2>
      <p>Create a new product listing for your shop</p>

      <Form onSubmit={handleSubmit} className="mt-3">
        <Card className="p-4 mb-4">
          <Row>
            <Col md={3}>
              <Card className="d-flex align-items-center justify-content-center p-4 border">
                <Form.Group>
                  <Form.Label className="d-block text-center">📷 Product Images</Form.Label>
                  <div className="upload-box text-center border p-3">
                    <FaUpload size={30} />
                    <Form.Control type="file" accept="image/*" onChange={handleImageUpload} hidden />
                  </div>
                </Form.Group>
              </Card>
            </Col>

            <Col md={9}>
              <Form.Group className="mb-3">
                <Form.Label>📌 Product Name</Form.Label>
                <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>📝 Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={product.description} onChange={handleChange} />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>💲 Price</Form.Label>
                    <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>📦 Inventory</Form.Label>
                    <Form.Control type="number" name="inventory" value={product.inventory} onChange={handleChange} required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>📂 Category</Form.Label>
                <Form.Select name="category" value={product.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home & Kitchen">Home & Kitchen</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>🏷️ Tags</Form.Label>
                <Form.Control type="text" name="tags" value={product.tags} onChange={handleChange} placeholder="Add tags (comma separated)" />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                🚀 Create Product
              </Button>
            </Col>
          </Row>
        </Card>
      </Form>
    </Container>
  );
};

export default AddProduct;
