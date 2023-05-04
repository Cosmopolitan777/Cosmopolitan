import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CocktailDetail.scss";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="CocktailDetail">
        {/* <h2> Single Item</h2> */}
        <Slider className="Slider" {...settings}>
          <div className="SlideDiv">
            <h3>dfgrgdg1</h3>
          </div>
          <div className="SlideDiv">
            <h3>2</h3>
          </div>
          <div className="SlideDiv">
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
