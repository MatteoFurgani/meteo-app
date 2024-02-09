import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Link className="nav-link text-warning fs-3" to="/">
            MYMeteo
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNavbar;
