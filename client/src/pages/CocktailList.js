import {useState} from "react";
import CocktailItem from "../components/CocktailItem";
import "../styles/CocktailList.scss";

const CocktailList = () => {
  const [cocktailItems, setCocktailItems] = useState([]);
  return (
    <>
      <div className="search-bar d-flex justify-content-between">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        <form>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="search-item"
          />
          <button>검색</button>
        </form>
      </div>
      <div className="container">
        <div className="row row-cols-4 mt-3">
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
        </div>
        <div className="row row-cols-4 mt-3">
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
        </div>
        <div className="row row-cols-4 mt-3">
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
          <div className="col">
            <CocktailItem />
          </div>
        </div>
      </div>
      <footer className="navbar-fixed-bottom mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination d-flex justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default CocktailList;
