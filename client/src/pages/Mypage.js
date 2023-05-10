// import "../styles/CocktailDetail.scss";
import "../styles/Mypage.scss";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
// import {TabsExample} from "../components/MypageDetail";
import {
  InformationModify,
  LikeList,
  Recommendation,
} from "../components/MypageDetail";

const Mypage = ({cocktailItems}) => {
  return (
    <>
      <TabsExample cocktailItems={cocktailItems} />
    </>
  );
};

export default Mypage;

function TabsExample({cocktailItems}) {
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
                {/* <CocktailList /> */}
                <LikeList cocktailItems={cocktailItems} />
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
