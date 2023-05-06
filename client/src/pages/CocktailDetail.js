// import React, {Component} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Navigation, Mousewheel} from "swiper";
// import {EffectCoverflow, Navigation, Mousewheel} from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "../Styles/CocktailDetail.scss";
import CocktailDetailCard from "../Components/CocktailDetailCard";

const CocktailDetail = () => {
  return (
    <div className="CocktailDetail">
      {/* <Swiper
        className="Swiper"
        style={style}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
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
          {/* {movies.map(movie => ( */}
          <SwiperSlide>
            {/* <Movie
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                average={movie.vote_average}
              />{" "} */}
            <CocktailDetailCard />
          </SwiperSlide>
          {/* ))}{" "} */}
          <SwiperSlide>
            {/* <Movie
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                average={movie.vote_average}
              />{" "} */}
            <CocktailDetailCard />
          </SwiperSlide>
          <SwiperSlide>
            {/* <Movie
                id={movie.id}
                key={movie.id}
                poster_path={movie.poster_path}
                title={movie.title}
                average={movie.vote_average}
              />{" "} */}
            <CocktailDetailCard />
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
export default CocktailDetail;
