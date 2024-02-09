import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const MeteoSearch = () => {
  const [city, setCity] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4} className="mt-5">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicCity">
              <Form.Label className="text-bold mt-4 text-warning fs-1">
                City:
              </Form.Label>
              <Form.Control
                className="mt-4"
                type="text"
                placeholder="Search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Link to={`/MeteoResult?city=${encodeURIComponent(city)}`}>
              <Button
                variant="warning"
                type="submit"
                className="mt-4 text-white"
              >
                ENTER
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MeteoSearch;
