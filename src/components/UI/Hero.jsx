import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="hero_wrapper">
            {/* hero content */}
            <div className="hero_content">
              <h2 className="section_title">
                Exercise is the key to a <br />
                <span className="highlists"> Healthy</span> Lifestyle
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Eveniet culpa dignissimos necessitatibus, natus iure quis.
              </p>
              <div className="hero_btns">
                <button className="register_btn">Get Started</button>
                <button className="watch_btn">
                  <span>
                    <i class="ri-play-fill"></i>
                  </span>
                  Watch Video
                </button>
              </div>
            </div>
            {/* hero img */}
            <div className="hero_img">
              <div className="hero_img-wrapper">
                <div className="box-01">
                  <div className="box-02">
                    <div className="box-03">
                      <div className="box_img">
                        <img src={heroImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heart_rate">
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>
              <div className="gym_location">
                <span>
                  <i class="ri-map-pin-fill"></i>
                </span>
                <h5>
                  find a new gym <br /> near you
                </h5>
              </div>
              <div className="dumble_icon">
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
