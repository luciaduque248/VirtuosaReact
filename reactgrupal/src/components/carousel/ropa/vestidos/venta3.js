import React, { Component } from "react";
import Slider from "react-slick";

import '../../../../components/assets/css/Vestidos.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8765be", borderRadius: "35px", height: "38px", width: "35px", paddingTop: "0.6rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8765be", borderRadius: "35px", height: "38px", width: "35px", paddingTop: "0.6rem" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650420717/kuepa/productos/3/22SWVW47_9019_1_qn6u7e.jpg" className="modalImg" alt="venta3" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650420804/kuepa/productos/3/22SWVW47_9019_2_lp2kqw.jpg" className="modalImg" alt="venta3" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650420907/kuepa/productos/3/22SWVW47_9019_3_p29gmz.jpg" className="modalImg" alt="venta3" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650420949/kuepa/productos/3/22SWVW47_9019_4_j1lzdk.jpg" className="modalImg" alt="venta3" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650421168/kuepa/productos/3/22SWVW47_9019_5_vbwbn4.jpg" className="modalImg" alt="venta3" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650421088/kuepa/productos/3/22SWVW47_9019_8_pctweg.jpg" className="modalImg" alt="venta3" />
          </div>
          
        </Slider>
      </div>
    );
  }
}