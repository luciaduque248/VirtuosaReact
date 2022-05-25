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
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650420006/kuepa/productos/2/22SWVK29_2000_1_qye4la.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650420023/kuepa/productos/2/22SWVK29_2000_2_c3wn3f.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650420058/kuepa/productos/2/22SWVK29_2000_3_jsuhyo.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650420080/kuepa/productos/2/22SWVK29_2000_4_citwlf.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650420116/kuepa/productos/2/22SWVK29_2000_5_osymxc.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650420154/kuepa/productos/2/22SWVK29_2000_7_zc6blv.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650420189/kuepa/productos/2/22SWVK29_2000_8_j20xz9.jpg" className="modalImg" alt="venta2" />
          </div>
        </Slider>
      </div>
    );
  }
}