import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.scss";
import {useState} from "react";

export const LoginHeader = ({getLogout, cocktailWord, setCocktailWord}) => {
  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="logo">
          <>
            <div className="neon">Cosmopolitan</div>
          </>
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

            <Nav.Link href="/" className="Nav">
              Home
            </Nav.Link>
            <Nav.Link href="/cocktails" className="Nav">
              Cocktail
            </Nav.Link>
            <Nav.Link href="/boardList" className="Nav">
              Community
            </Nav.Link>
            <Nav.Link href="/" className="Nav" onClick={getLogout}>
              Logout
            </Nav.Link>
            <Nav.Link href="/Mypage" className="Nav">
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
              value={cocktailWord}
              onChange={e => setCocktailWord(e.target.value)}
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

export function Header({cocktailWord, setCocktailWord, getCocktailWord}) {
  //   const onEnterKeyDown = e => {
  //     if (e.key === "Enter") {
  //       onButtonClick();
  //     }
  //   };
  const [value, setValue] = useState("");
  const onSearch = () => {
    getCocktailWord(value);
  };

  return (
    <Navbar bg="light" expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="logo">
          <>
            <div className="neon">Cosmopolitan</div>
          </>
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

            <Nav.Link href="/" className="Nav">
              Home
            </Nav.Link>
            <Nav.Link href="/cocktails" className="Nav">
              Cocktail
            </Nav.Link>
            <Nav.Link href="/boardList" className="Nav">
              Community
            </Nav.Link>
            <Nav.Link href="/login" className="Nav">
              login
            </Nav.Link>
            <Nav.Link href="/join" className="Nav">
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
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            {/* onClick={onButtonClick} */}
            <Button variant="outline-success" onClick={onSearch}>
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
