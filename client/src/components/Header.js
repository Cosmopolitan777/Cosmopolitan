import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.scss";

export const LoginHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          Header
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: "100px"}}
            navbarScroll
          >
            {/* test code */}
            {/* <Link to="/" className="menu-item">
              home
            </Link>
            <Link to="/CocktailDetail" className="menu-item">
              CocktailDetail
            </Link> */}
            {/* test code */}

            <Nav.Link href="#action1" className="Nav">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="Nav">
              Cocktail
            </Nav.Link>
            <Nav.Link href="#action3" className="Nav">
              Community
            </Nav.Link>
            <Nav.Link href="#action4" className="Nav">
              Logout
            </Nav.Link>
            <Nav.Link href="#action5" className="Nav">
              Mypage
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width: "250px", boxShadow: "none", outline: "none"}}
            />
            <Button variant="outline-success">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// 기본 헤더

export function Header() {
  //   const onEnterKeyDown = e => {
  //     if (e.key === "Enter") {
  //       onButtonClick();
  //     }
  //   };
  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          Header
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{maxHeight: "100px"}}
            navbarScroll
          >
            {/* test code */}
            {/* <Link to="/" className="menu-item">
              home
            </Link>
            <Link to="/CocktailDetail" className="menu-item">
              CocktailDetail
            </Link> */}
            {/* test code */}

            <Nav.Link href="#action1" className="Nav">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="Nav">
              Cocktail
            </Nav.Link>
            <Nav.Link href="#action3" className="Nav">
              Community
            </Nav.Link>
            <Nav.Link href="#action4" className="Nav">
              login
            </Nav.Link>
            <Nav.Link href="#action5" className="Nav">
              join
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width: "250px", boxShadow: "none", outline: "none"}}
              //   onKeyDown={onEnterKeyDown}
            />
            {/* onClick={onButtonClick} */}
            <Button variant="outline-success">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavScrollExample;
// export default Header;
