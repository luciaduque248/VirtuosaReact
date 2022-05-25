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
            <ReactPlayer url='https://res.cloudinary.com/colombia/video/upload/v1650422055/kuepa/productos/4/22SWVK60_7041_V_1_nsbnpf.mp4'
              width='100%'
              height='100%'
              loop
              playing
              muted/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422204/kuepa/productos/5/22SWVK60_7041_1_jvf6xx.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422327/kuepa/productos/5/22SWVK60_7041_2_tdvpke.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422339/kuepa/productos/5/22SWVK60_7041_3_xc0haa.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422347/kuepa/productos/5/22SWVK60_7041_5_im6bpr.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422358/kuepa/productos/5/22SWVK60_7041_6_as8dpi.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422368/kuepa/productos/5/22SWVK60_7041_8_rjxfpu.jpg" className="modalImg" alt="venta2" />
          </div>
        </Slider>
      </div>
    );
  }
}