import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./prodect.css";
import About from "./About";

function NavbarApp() {
  const cart = useSelector((state) => state.cart);
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          CartApp
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/" className="nav-link">
              Prodects
            </Link>
            <Link to="/cart" className="nav-link">
              <ShoppingCartIcon />
              <span className="spanz">{cart.length}</span>
            </Link>
          </Nav>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
