import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Navigation, Mousewheel} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "../Styles/CocktailDetail.scss";
import CocktailDetailCard from "../Components/CocktailDetailCard";

const CocktailDetail = ({cocktailItems}) => {
  return (
    <div className="CocktailDetail">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
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
          {cocktailItems.map(item => (
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
