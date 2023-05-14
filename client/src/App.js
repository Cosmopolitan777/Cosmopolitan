import {BrowserRouter, Routes, Route} from "react-router-dom";
import CocktailList from "./pages/CocktailList";
import {useState, useEffect} from "react";
import CocktailDetail from "./pages/CocktailDetail";
import axios from "axios";
import MainPage from "./pages/MainPage";
import {Header, LoginHeader} from "./components/Header";
import Mypage from "./pages/Mypage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Join from "./pages/Join";
import BoardList from "./pages/BoardList";
import BoardDetail from "./pages/BoardDetail";

import KakaoLogin from "./components/KakaoLogin";

axios.defaults.withCredentials = true;
function App() {
  const [cocktailItems, setCocktailItems] = useState([]);
  const [session, setSession] = useState();
  const [recommends, setRecommends] = useState();
  const [zzims, setZzims] = useState([]);
  const [stars, setStars] = useState([]);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    console.log("mount 완료");
    console.log("REACT_APP_DB_HOST", process.env.REACT_APP_DB_HOST);
    console.log("REACT_APP_MODE", process.env.REACT_APP_MODE);
    console.log("REACT_APP_REST_API_KEY", process.env.REACT_APP_REST_API_KEY);
    console.log("CLIENT_SECRET", process.env.CLIENT_SECRET);
    console.log("REACT_APP_URL", process.env.REACT_APP_URL);
    console.log("REST_API_KEY", process.env.REST_API_KEY);
    console.log("REDIRECT_URI", process.env.REDIRECT_URI);
    console.log("SECRET_KEY", process.env.SECRET_KEY);
    const getCocktails = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_DB_HOST}/cocktail/showlist`,
      );
      setCocktailItems(res.data.slice(0, 20)); //테스트를 위한 슬라이스
      console.log("res.data", res.data);
    };

    const getSession = async () => {
      const [sessionId] = (await axios.get(`${process.env.REACT_APP_DB_HOST}/`))
        .data;
      setSession(sessionId);
      console.log("sessionId>>", sessionId); //3
    };
    //해당 유저에 대한 찜한 칵테일 아이디 배열 반환 ; 예) [4]
    const postZzim = async () => {
      const zzimList = (
        await axios.post(`${process.env.REACT_APP_DB_HOST}/zzim/sz`)
      ).data;

      {
        zzimList && setZzims(zzimList);
      }

      console.log("zzims>>", zzimList);
    };

    //해당 유저에 대한 찜한 별점 배열 반환 ; 예) [4]
    const postStar = async () => {
      const starList = (
        await axios.post(`${process.env.REACT_APP_DB_HOST}/evaluation/userrate`)
      ).data;
      console.log("starList>>", starList);

      {
        starList && setStars(starList);
      }
    };

    const getBoards = async () => {
      console.log("0042!!!");
      console.log(process.env.REACT_APP_DB_HOST);
      const res = await axios.get(
        `${process.env.REACT_APP_DB_HOST}/community/tr`,
      );
      console.log(res.data);
      setBoards(res.data);
    };

    getBoards();

    getCocktails();

    getSession();
    postZzim();
    postStar();
  }, []);
  console.log("session", session);
  //로그아웃
  const getLogout = async () => {
    const isLogout = (
      await axios.get(`${process.env.REACT_APP_DB_HOST}/logout`)
    ).data;
    console.log("isLogout", isLogout);
    setSession();
  };
  //클릭시 서버에서 해당 유저에 대한 추천 목록 받아옴
  const getRecommend = async () => {
    const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/recommend`);
    setRecommends(res.data);
    // console.log(" recommends res.data", res.data);
  };
  // 칵테일 검색

  const getSearchCocktail = async value => {
    // console.log("cocktailword", cocktailWord);
    const searchCocktailList = (
      await axios.get(
        `${process.env.REACT_APP_DB_HOST}/cocktail/searchcock/${value}`,
      )
    ).data;
    setCocktailItems(searchCocktailList.slice(0, 10));
    console.log("searchCocktailList search", searchCocktailList);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {session ? (
          <LoginHeader getLogout={getLogout} />
        ) : (
          <Header getSearchCocktail={getSearchCocktail} />
        )}
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route
            path="/cocktails"
            element={
              <CocktailList
                cocktailItems={cocktailItems}
                session={session}
                zzims={zzims}
              />
            }
          />

          <Route
            path="/cocktails/:cocktailId"
            element={
              <CocktailDetail
                cocktailItems={cocktailItems}
                session={session}
                stars={stars}
              />
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
                zzims={zzims}
              />
            }
          />
          {/*<Route path="/Mypage/:Like" element={<Like />} />*/}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

          <Route path="/auth" element={<KakaoLogin />} />

          <Route path="/boardList" element={<BoardList boards={boards} />} />
          <Route
            path="/boardDetail/:idx"
            element={<BoardDetail boards={boards} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
