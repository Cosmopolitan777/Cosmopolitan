// import "../styles/CocktailDetail.scss";
import "../styles/Mypage.scss";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import {useState, useEffect} from "react";
import axios from "axios";
import {API_BASE_URL} from "../app-config";
// import {TabsExample} from "../components/MypageDetail";
import {
  InformationModify,
  LikeList,
  Recommendation,
} from "../components/MypageDetail";

const Mypage = ({cocktailItems, session, recommends, getRecommend, zzims}) => {
  const zzimCocktailInfos = cocktailItems.filter(
    item => zzims.indexOf(item.cocktail_id) > -1,
  );

  return (
    <>
      <TabsExample
        cocktailItems={cocktailItems}
        session={session}
        recommends={recommends}
        getRecommend={getRecommend}
        zzimCocktailInfos={zzimCocktailInfos}
      />
    </>
  );
};

export default Mypage;

function TabsExample({
  cocktailItems,
  session,
  recommends,
  getRecommend,
  zzimCocktailInfos,
}) {
  return (
    <div style={{padding: "40px 30px "}}>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={2}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                좋아요
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" onClick={getRecommend}>
                추천
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                회원정보수정
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* <div> */}
          <Col sm={2}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                {/* <CocktailList /> */}
                <LikeList zzimCocktailInfos={zzimCocktailInfos} />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <Recommendation
                  cocktailItems={cocktailItems}
                  session={session}
                  recommends={recommends}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <InformationModify />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          {/* </div> */}
        </Row>
      </Tab.Container>
    </div>
  );
}
