import React, { Component } from "react";
import Slider from "react-slick";
import '../../../assets/css/Vestidos.css'

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
                        <img src="https://res.cloudinary.com/colombia/image/upload/v1650498773/kuepa/descuentos/1/20WWVK61_3007_1_a7gbkb.jpg" className="modalImg" alt="venta1" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/colombia/image/upload/v1650498695/kuepa/descuentos/1/20WWVK61_3007_2_xe1ebw.jpg" className="modalImg" alt="venta2" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/colombia/image/upload/v1650499736/kuepa/descuentos/1/20WWVK61_3007_3_p3fyv9.jpg" className="modalImg" alt="venta2" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/colombia/image/upload/v1650500327/kuepa/descuentos/1/20WWVK61_3007_4_tyyaur.jpg" className="modalImg" alt="venta2" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/colombia/image/upload/v1650500000/kuepa/descuentos/1/20WWVK61_3007_7_upejhj.jpg" className="modalImg" alt="venta2" />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/colombia/image/upload/v1650500157/kuepa/descuentos/1/20WWVK61_3007_8_rsfaqh.jpg" className="modalImg" alt="venta2" />
                    </div>
                </Slider>
            </div>
        );
    }
}