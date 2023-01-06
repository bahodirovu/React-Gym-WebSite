import React from "react";
import "../../styles/testimonials.css";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <section id="classes">
      <div className="container sliders">
        <h2 className="section_title">Tesimonials</h2>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide_item">
              <div className="slide_img-01">
                <img src={avatar01} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                qui cupiditate hic autem odio? Debitis rem rerum facilis hic
                officiis amet, atque nam odio aspernatur assumenda natus modi
                cumque ipsa!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide_item">
              <div className="slide_img-02">
                <img src={avatar02} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                qui cupiditate hic autem odio? Debitis rem rerum facilis hic
                officiis amet, atque nam odio aspernatur assumenda natus modi
                cumque ipsa!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide_item">
              <div className="slide_img-03">
                <img src={avatar01} alt="" />
              </div>
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                qui cupiditate hic autem odio? Debitis rem rerum facilis hic
                officiis amet, atque nam odio aspernatur assumenda natus modi
                cumque ipsa!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
