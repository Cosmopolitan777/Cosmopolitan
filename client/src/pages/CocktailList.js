import {useState} from "react";
import CocktailItem from "../components/CocktailItem";
import "../styles/CocktailList.scss";

const CocktailList = ({cocktailItems, session, zzims}) => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-4">
          {cocktailItems.map(item => (
            // console.log(zzims.indexOf(item.cocktail_id))
            <div className="col mt-3">
              <CocktailItem
                key={item.cocktail_id}
                item={item}
                session={session}
                iszzim={zzims.indexOf(item.cocktail_id) > -1 ? 1 : 0}
              />
            </div>
          ))}
        </div>
      </div>
      {/* pagenation */}
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
