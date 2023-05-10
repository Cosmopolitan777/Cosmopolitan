// import {useParams, useNavigate} from "react-router-dom";
// import {EffectCoverflow, Navigation, Mousewheel} from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

import "../styles/CocktailDetail.scss";
import CocktailDetailCard from "../components/CocktailDetailCard";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faHandHoldingHeart} from "@fortawesome/free-solid-svg-icons";
import "../styles/Mypage.scss";
import {Color} from "three";
import {useState} from "react";

const Mypage = () => {
  return (
    <>
      {/* <FillExample /> */}
      {/* <StackedExample /> */}
      {/* <h1 style={{padding: "20px 5%"}}>마이페이지</h1> */}s
      <TabsExample />
    </>
    // <div style={{backgroundColor: "white", height: "100vh"}}>
    //   <h1 style={{padding: "5%"}}>마이페이지</h1>

    //   <div className="Text">
    //     <h3 style={{margin: "3%"}}>
    //       <FontAwesomeIcon icon={faHeart} className="Icon heart" />찜 목록
    //     </h3>
    //   </div>
    //   <div className="Text">
    //     <h3 style={{margin: "3%"}}>
    //       <FontAwesomeIcon icon={faHandHoldingHeart} className="Icon Holding" />
    //       추천
    //     </h3>
    //   </div>
    // </div>
  );
};

export default Mypage;

function TabsExample() {
  return (
    <div style={{padding: "40px 30px ", backgroundColor: "white"}}>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={2}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                찜 목록
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                추천 목록
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                회원정보수정
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={2}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <Like />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Recommendation />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <InformationModify />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

const Like = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "800px",
        width: "60vw",
        padding: "5%",
        margin: "0 5%",
        borderRadius: "6px",
      }}
    >
      <div className="Text">
        <h3 style={{margin: "0 3%"}}>
          {/* <FontAwesomeIcon icon={faHeart} className="Icon heart" /> */}찜
          목록
        </h3>
      </div>
    </div>
  );
};

const Recommendation = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "800px",
        width: "60vw",
        padding: "5%",
        margin: "0 5%",
        borderRadius: "6px",
      }}
    >
      <div className="Text">
        <h3 style={{margin: "0 3%"}}>
          {/* <FontAwesomeIcon icon={faHandHoldingHeart} className="Icon Holding" /> */}
          추천목록
        </h3>
      </div>
    </div>
  );
};

// const Recommendation = ({cocktailItems}) => {
//   console.log("cocktailItems>> ", cocktailItems);
//   const {cocktailId} = useParams();
//   const [targetProduct] = cocktailItems.filter(
//     c => c.cocktail_id === Number(cocktailId),
//   );
//   if (!targetProduct) {
//     return <main className="ProductDetailPage">존재하지 않는 상품입니다.</main>;
//   }
//   // 10개 지정
//   const forShowCocktailItems = [];
//   //왼쪽 최대 4개
//   for (let i = 1; i < 5; i++) {
//     if (cocktailItems[cocktailId - 1 - i] !== undefined) {
//       forShowCocktailItems.push(cocktailItems[cocktailId - 1 - i]);
//     }
//   }
//   forShowCocktailItems.reverse();
//   //해당 아이템 아이디
//   forShowCocktailItems.push(cocktailItems[cocktailId - 1]);
//   // //나머지
//   const restArrNum = forShowCocktailItems.length;
//   for (let i = 1; i < 11 - restArrNum; i++) {
//     if (cocktailItems[cocktailId - 1 + i] !== undefined) {
//       forShowCocktailItems.push(cocktailItems[cocktailId - 1 + i]);
//     }
//   }

//   return (
//     <div className="CocktailDetail">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         initialSlide={restArrNum - 1} //center 지정1
//         centeredSlides={true} //center 지정1
//         slidesPerView={4}
//         coverflowEffect={{
//           rotate: 10, // 회전각도
//           stretch: 0,
//           depth: 100, // 깊이감도
//           modifier: 2, //
//           slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게 해준다.
//         }}
//         navigation={true} // 네비게이션 버튼
//         mousewheel={true} // 마우스 휠
//         modules={[EffectCoverflow, Navigation, Mousewheel]} // 모듈추가
//         className="mySwiper"
//       >
//         <div className="container">
//           {forShowCocktailItems.map(item => (
//             <SwiperSlide key={item.cocktail_id}>
//               <CocktailDetailCard
//                 key={item.cocktail_id}
//                 item={item}
//                 // average={item.vote_average}
//               />{" "}
//             </SwiperSlide>
//           ))}
//         </div>
//       </Swiper>
//     </div>
//   );
// };

const InformationModify = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "800px",
        width: "60vw",
        padding: "5%",
        margin: "0 5%",
        borderRadius: "6px",
      }}
    >
      <h3 style={{margin: "0 3%"}}>회원정보수정</h3>
    </div>
  );
};

// export default TabsExample;
// export default StackedExample;
