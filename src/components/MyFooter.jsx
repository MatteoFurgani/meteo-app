import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const MyFooter = () => {
  return (
    <Container className="footer text-warning">
      <Row className="text-center mt-5">
        <Col className="col-12 mb-3">
          <i className="bi bi-whatsapp fs-3 mx-5"></i>
          <i className="bi bi-instagram fs-3 mx-5"></i>
          <i className="bi bi-youtube fs-3 mx-5"></i>
          <i className="bi bi-twitter fs-3 mx-5"></i>
          <i className="bi bi-facebook fs-3 mx-5"></i>
        </Col>
      </Row>
    </Container>
  );
};
export default MyFooter;
