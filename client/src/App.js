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
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";

axios.defaults.withCredentials = true;
function App() {
  const [cocktailItems, setCocktailItems] = useState([]);
  const [session, setSession] = useState();
  const [recommends, setRecommends] = useState();

  useEffect(() => {
    console.log("mount 완료");
    const getCocktails = async () => {
      const res = await axios.get(`${API_BASE_URL}/cocktail/showlist`);
      setCocktailItems(res.data.slice(0, 20)); //테스트를 위한 슬라이스
      console.log("res.data", res.data);
    };
    const getSession = async () => {
      const isLogin = (await axios.get(`${API_BASE_URL}/`)).data;
      setSession(isLogin);
      console.log("isLogin>>", isLogin);
    };
    getCocktails();
    getSession();
  }, []);
  console.log("session", session);
  //로그아웃
  const getLogout = async () => {
    const isLogout = (await axios.get(`${API_BASE_URL}/logout`)).data;
    setSession();
  };
  //추천
  const getRecommend = async () => {
    const res = await axios.get(`${API_BASE_URL}/recommend`);
    setRecommends(res.data);
    // console.log(" recommends res.data", res.data);
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
            element={
              <Mypage
                cocktailItems={cocktailItems}
                session={session}
                recommends={recommends}
                getRecommend={getRecommend}
              />
            }
          />
          {/* <Route path="/Mypage/:Like" element={<Like />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/boardList" element={<BoardList />} />
          <Route path="/boardDetail/:idx" element={<BoardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
