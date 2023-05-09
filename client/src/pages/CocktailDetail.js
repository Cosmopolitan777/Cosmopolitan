import {Swiper, SwiperSlide} from "swiper/react";
import {useParams, useNavigate} from "react-router-dom";
import {EffectCoverflow, Navigation, Mousewheel} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "../styles/CocktailDetail.scss";
import CocktailDetailCard from "../components/CocktailDetailCard";

const CocktailDetail = ({cocktailItems}) => {
  const {cocktailId} = useParams();
  const [targetProduct] = cocktailItems.filter(
    c => c.cocktail_id === Number(cocktailId),
  );
  if (!targetProduct) {
    return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>;
  }
  // 10개 지정
  const forShowCocktailItems = [];
  //왼쪽 최대 4개
  for (let i = 1; i < 5; i++) {
    if (cocktailItems[cocktailId - 1 - i] !== undefined) {
      forShowCocktailItems.push(cocktailItems[cocktailId - 1 - i]);
    }
  }
  forShowCocktailItems.reverse();
  //해당 아이템 아이디
  forShowCocktailItems.push(cocktailItems[cocktailId - 1]);
  // //나머지
  const restArrNum = forShowCocktailItems.length;
  for (let i = 1; i < 11 - restArrNum; i++) {
    if (cocktailItems[cocktailId - 1 + i] !== undefined) {
      forShowCocktailItems.push(cocktailItems[cocktailId - 1 + i]);
    }
  }

  return (
    <div className="CocktailDetail">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={restArrNum - 1} //center 지정1
        centeredSlides={true} //center 지정1
        slidesPerView={4}
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
          {forShowCocktailItems.map(item => (
            <SwiperSlide key={item.cocktail_id}>
              <CocktailDetailCard
                key={item.cocktail_id}
                item={item}
                // average={item.vote_average}
              />{" "}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
export default CocktailDetail;
