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
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650408865/kuepa/productos/1/20SWVK63_6000_1_wkdphk.jpg" className="modalImg" alt="venta1" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650408872/kuepa/productos/1/20SWVK63_6000_2_ri81ic.jpg" className="modalImg" alt="venta1" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650408882/kuepa/productos/1/20SWVK63_6000_3_zhadai.jpg" className="modalImg" alt="venta1" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650408899/kuepa/productos/1/20SWVK63_6000_4_ihfi1o.jpg" className="modalImg" alt="venta1" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650408915/kuepa/productos/1/20SWVK63_6000_6_fjx5vz.jpg" className="modalImg" alt="venta1" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650408925/kuepa/productos/1/20SWVK63_6000_7_xykl9q.jpg" className="modalImg" alt="venta1" />
          </div>
        </Slider>
      </div>
    );
  }
}