import {useState} from "react";
import CocktailItem from "../components/CocktailItem";
import "../styles/CocktailList.scss";
import "../styles/Pagination.scss";

import Pagination from "react-js-pagination";

const CocktailList = ({
  cocktailItems,
  session,
  zzims,
  currentPage,
  cocktailPerPage,
  totalCocktailItems,
  paginate,
}) => {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = currentPage => {
    setPage(currentPage);
    paginate(currentPage);
  };
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCocktailItems / cocktailPerPage); i++) {
    pageNumbers.push(i);
  }

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
        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={totalCocktailItems}
          // pageRangeDisplayed={pageNumbers.length}
          pageRangeDisplayed={10}
          prevPageText={"..."}
          nextPageText={"..."}
          onChange={handlePageChange}
        />
      </footer>
      <br />
    </>
  );
};

export default CocktailList;
