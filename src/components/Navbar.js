import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { BsFillBagDashFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={nav}>
      <Container>
        <Navbar.Brand href="#home" as={Link} to="/" color="white">
          CVJ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" color="white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/shop">
                Women's
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <input type="submit" />
          </Form>
        </Navbar.Collapse>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="dark">
              <BsFillBagDashFill color="darkGray" fontSize="25px" />
              <Badge as={Link} to="/cart" color="gray">
                {0}
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Check Out</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

const nav = {
  marginBottom: "30px",
  padding: "30px",
};

export default NavBar;
