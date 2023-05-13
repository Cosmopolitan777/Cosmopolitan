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

export const LoginHeader = ({
  getLogout,
  cocktailWord,
  setCocktailWord,
  getSearchCocktail,
}) => {
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
export function Header({
  cocktailWord,
  setCocktailWord,
  getCocktailWord,
  getSearchCocktail,
}) {
  const [value, setValue] = useState("");

  function onSearch() {
    getSearchCocktail(value);
  }

  const onEnterKeyDown = e => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Navbar bg="light" expand="lg" className="Navbar" style={{padding: "0"}}>
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
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width: "250px", boxShadow: "none", outline: "none"}}
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={onEnterKeyDown}
            />
            {/* onClick={onButtonClick} */}
            <Button
              variant="outline-success"
              type="button"
              onClick={() => {
                onSearch();
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
