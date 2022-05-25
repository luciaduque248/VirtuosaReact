import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from 'react-player'
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
        <div className="video">
            <ReactPlayer url='https://res.cloudinary.com/colombia/video/upload/v1650423420/kuepa/productos/8/22SWVK30_8021_V_1_zu5ufk.mp4'
              width='100%'
              height='100%'
              loop
              playing
              muted/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650423367/kuepa/productos/8/22SWVK30_8021_2_mosqzd.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650423647/kuepa/productos/8/22SWVK30_8021_1_jdw3c7.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650423867/kuepa/productos/8/22SWVK30_8021_6_vboxtb.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650424045/kuepa/productos/8/22SWVK30_8021_5_yjcxcj.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650424096/kuepa/productos/8/22SWVK30_8021_4_rhftgw.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650423993/kuepa/productos/8/22SWVK30_8021_7_epkkbj.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650423944/kuepa/productos/8/22SWVK30_8021_8_ggkwdq.jpg" className="modalImg" alt="venta2" />
          </div>
        </Slider>
      </div>
    );
  }
}