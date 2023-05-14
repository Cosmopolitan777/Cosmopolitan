import {Swiper, SwiperSlide} from "swiper/react";
// import {useParams, useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
import {EffectCoverflow, Navigation, Mousewheel} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "../styles/CocktailDetail.scss";
import CocktailDetailCard from "../components/CocktailDetailCard";
import {useLocation} from "react-router-dom";
import CocktailDetailCardDummy from "../components/CocktailDetailCardDummy";
import {ContactShadows} from "@react-three/drei";

const CocktailDetail = ({cocktailItems, session, stars}) => {
  const location = useLocation();
  console.log("cocktailItems>> ", cocktailItems);
  const {cocktailId} = useParams();
  const [targetProduct] = cocktailItems.filter(
    c => c.cocktail_id === Number(cocktailId),
  );
  if (!targetProduct) {
    return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>;
  }

  var forShowCocktailItems = cocktailItems;
  // [저장된 별점 관련 로직]
  const existCockIds = [];
  const existStarRates = [];
  for (let s of stars) {
    existCockIds.push(s["cocktail_id"]); //객체 내 각 속성 값갖는 배열 생성
    existStarRates.push(s["rating"]);
  }

  // link에서 넘긴 각 페이지 해당 목록 받아옴
  if (location.state !== null && location.state.eachPageItems !== undefined) {
    forShowCocktailItems = location.state.eachPageItems;
    console.log("eachPageItems");
    console.log(location.state.eachPageItems);
  }
  console.log("linkItems>>", forShowCocktailItems);

  // 해당 prams의 인덱스 찾기
  for (const obj of forShowCocktailItems) {
    if (Number(obj["cocktail_id"]) === Number(cocktailId)) {
      var targetIdx = forShowCocktailItems.indexOf(obj);
      break;
    }
  }
  // 슬라이드 수 고정 10개이고 만약 link에서 불러온 아이템 리스트가
  // 그보다 적을 경우 더미데이터 생성
  if (forShowCocktailItems.length <= 10) {
    var dummyArr = [];
    for (let i = 1; i <= 10 - forShowCocktailItems.length; i++) {
      dummyArr.push({key: i, idx: i});
    }
  }
  console.log("dummyArr>>", dummyArr);

  return (
    <div className="CocktailDetail">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={targetIdx} //center 지정1
        centeredSlides={true} //center 지정1
        autoHeight={true}
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          400: {
            slidesPerview: 4,
          },
          // 500: {
          //   slidesPerView: 2,
          // },
          600: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        coverflowEffect={{
          rotate: 10, // 회전각도
          stretch: 0,
          depth: 100, // 깊이감도
          modifier: 2, //
          slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게 해준다.
        }}
        navigation={true} // 네비게이션 버튼
        mousewheel={true} // 마우스 휠
        modules={[EffectCoverflow, Navigation, Mousewheel]} // 모듈추가
        className="mySwiper"
      >
        <div className="container">
          {Array.isArray(forShowCocktailItems) &&
            forShowCocktailItems.map(item => (
              <SwiperSlide key={item.cocktail_id}>
                <CocktailDetailCard
                  key={item.cocktail_id}
                  item={item}
                  session={session}
                  isstar={
                    existCockIds.indexOf(item.cocktail_id) > -1
                      ? existStarRates[existCockIds.indexOf(item.cocktail_id)]
                      : 0
                  }
                />{" "}
              </SwiperSlide>
            ))}
          {dummyArr !== undefined &&
            dummyArr.map(item => (
              <SwiperSlide key={item.key}>
                <CocktailDetailCardDummy />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
export default CocktailDetail;
