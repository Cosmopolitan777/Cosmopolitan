import {useState} from "react";
import CocktailItem from "../Components/CocktailItem";
import "../Styles/CocktailList.scss";

const CocktailList = ({cocktailItems}) => {
  console.log(cocktailItems);
  return (
    <>
      <div className="search-bar d-flex justify-content-between">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
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
        <div className="row row-cols-4">
          {cocktailItems.map(item => (
            <div className="col mt-3">
              <CocktailItem key={item.cocktail_id} item={item} />
            </div>
          ))}
        </div>
      </div>
      <footer className="navbar-fixed-bottom mt-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
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
