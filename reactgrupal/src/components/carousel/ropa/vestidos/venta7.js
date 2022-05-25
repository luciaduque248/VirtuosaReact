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
            <ReactPlayer url='https://res.cloudinary.com/colombia/video/upload/v1650423093/kuepa/productos/7/21WWVKA6_9019_V_1_llapgq.mp4'
              width='100%'
              height='100%'
              loop
              playing
              muted/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650422889/kuepa/productos/7/21WWVKA6_9019_1_q3s9bw.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650423136/kuepa/productos/7/21WWVKA6_9019_2_dk6wfc.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650423167/kuepa/productos/7/21WWVKA6_9019_3_zrqmom.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650423192/kuepa/productos/7/21WWVKA6_9019_7_yfjbsc.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650423217/kuepa/productos/7/21WWVKA6_9019_8_zog0l6.jpg" className="modalImg" alt="venta2" />
          </div>
        </Slider>
      </div>
    );
  }
}