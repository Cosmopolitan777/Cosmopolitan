import {BrowserRouter, Routes, Route} from "react-router-dom";
import CocktailList from "./pages/CocktailList";
import {useState, useEffect} from "react";
import CocktailDetail from "./pages/CocktailDetail";
import axios from "axios";
import {API_BASE_URL} from "./app-config";
import MainPage from "./pages/MainPage";
import {Header, LoginHeader} from "./components/Header";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Join from "./pages/Join";
axios.defaults.withCredentials = true;
function App() {
  const [cocktailItems, setCocktailItems] = useState([]);
  const [session, setSession] = useState();

  useEffect(() => {
    console.log("mount 완료");
    const getCocktails = async () => {
      const res = await axios.get(`${API_BASE_URL}/cocktail/showlist`);
      setCocktailItems(res.data.slice(0, 10)); //테스트를 위한 슬라이스
      console.log("res.data", res.data);
    };
    const getSession = async () => {
      const isLogin = (await axios.get(`${API_BASE_URL}/`)).data;
      setSession(isLogin);
    };
    getCocktails();
    getSession();
  }, []);
  console.log("session", session);
  const getLogout = async () => {
    const isLogout = (await axios.get(`${API_BASE_URL}/logout`)).data;
    setSession();
  };
  return (
    <div className="App">
      <BrowserRouter>
        {session ? <LoginHeader getLogout={getLogout} /> : <Header />}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/cocktails"
            element={<CocktailList cocktailItems={cocktailItems} />}
          />
          <Route
            path="/cocktails/:cocktailId"
            element={
              <CocktailDetail cocktailItems={cocktailItems} session={session} />
            }
          />
          <Route
            path="/Mypage"
            element={<Mypage cocktailItems={cocktailItems} />}
          />
          {/* <Route path="/Mypage/:Like" element={<Like />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
