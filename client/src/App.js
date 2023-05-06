import CocktailList from "./pages/CocktailList";
import {useState, useEffect} from "react";
import CocktailItem from "./Components/CocktailItem";
// import CocktailDetail from "./pages/CocktailDetail";
import axios from "axios";
import {API_BASE_URL} from "./app-config";
// import MainPage from "./pages/MainPage";

function App() {
  const [cocktailItems, setCocktailItems] = useState([]);
  useEffect(() => {
    console.log("mount 완료");
    const getCocktails = async () => {
      const res = await axios.get(`${API_BASE_URL}/cocktail/showlist`);
      setCocktailItems(res.data.slice(0, 10)); //테스트를 위한 슬라이스
      console.log("res.data", res.data);
    };
    getCocktails();
  }, []);
  return (
    <div className="App">
      <CocktailList cocktailItems={cocktailItems} />
      {/* <CocktailDetail cocktailItems={cocktailItems} /> */}
      {/* <CocktailItem cocktailItems={cocktailItems} /> */}
      {/* {cocktailItems.map(item => {
        return <CocktailItem key={item.cocktail_id} item={item} />;
      })} */}
      {/* <MainPage /> */}
    </div>
  );
}

export default App;
