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
            <ReactPlayer url='https://res.cloudinary.com/colombia/video/upload/v1650422647/kuepa/productos/6/22SWVW26_3021_V_1_ird5ve.mp4'
              width='100%'
              height='100%'
              loop
              playing
              muted/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422500/kuepa/productos/6/22SWVW26_3021_1_d1zlic.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422672/kuepa/productos/6/22SWVW26_3021_2_bvdg8a.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650422687/kuepa/productos/6/22SWVW26_3021_4_fwsidq.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650422723/kuepa/productos/6/22SWVW26_3021_5_cmlsfl.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650422739/kuepa/productos/6/22SWVW26_3021_7_pxbxtw.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650422755/kuepa/productos/6/22SWVW26_3021_8_zvijgx.jpg" className="modalImg" alt="venta2" />
          </div>
        </Slider>
      </div>
    );
  }
}