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
            <ReactPlayer url='https://res.cloudinary.com/colombia/video/upload/v1650424442/kuepa/productos/9/20WWVKXC_8010_V_1_iscgx0.mp4'
              width='100%'
              height='100%'
              loop
              playing
              muted/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650424235/kuepa/productos/9/20WWVKXC_8010_1_xiuncz.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/colombia/image/upload/v1650424510/kuepa/productos/9/20WWVKXC_8010_2_hyuubu.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650424580/kuepa/productos/9/20WWVKXC_8010_3_mhtqdz.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650424651/kuepa/productos/9/20WWVKXC_8010_5_my68rg.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650424725/kuepa/productos/9/20WWVKXC_8010_7_pejqok.jpg" className="modalImg" alt="venta2" />
          </div>
          <div>
          <img src="https://res.cloudinary.com/colombia/image/upload/v1650424798/kuepa/productos/9/20WWVKXC_8010_8_uthyua.jpg" className="modalImg" alt="venta2" />
          </div>
        </Slider>
      </div>
    );
  }
}