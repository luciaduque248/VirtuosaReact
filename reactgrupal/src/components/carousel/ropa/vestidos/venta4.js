import React, { Component } from "react";
import Slider from "react-slick";
import '../../../assets/css/Vestidos.css';

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
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650421353/kuepa/productos/4/22SWVW44_9019_1_lpsmqs.jpg" className="modalImg" alt="venta4" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650421443/kuepa/productos/4/22SWVW44_9019_V_1_zl9vby.jpg" className="modalImg" alt="venta4" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650421659/kuepa/productos/4/22SWVW44_9019_5_wflhvi.jpg" className="modalImg" alt="venta4" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650421775/kuepa/productos/4/22SWVW44_9019_7_x4ri9u.jpg" className="modalImg" alt="venta4" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650421968/kuepa/productos/4/22SWVW44_9019_4_bmnosw.jpg" className="modalImg" alt="venta4" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650421880/kuepa/productos/4/22SWVW44_9019_8_dbwyye.jpg" className="modalImg" alt="venta4" />
          </div>
        </Slider>
      </div>
    );
  }
}