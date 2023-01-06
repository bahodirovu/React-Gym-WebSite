import React from "react";
import "../../styles/exercies.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercies = () => {
  return (
    <>
      <section id="schedule">
        <div className="container exercies_container">
          <div className="exrcies_top">
            <h2 className="section_title">
              Benefits of <span className="highlists">Exercies</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              <br /> asperiores voluptas possimus quis ab necessitatibus.
            </p>
          </div>
          {/* execise list */}
          <div className="exercies_wrapper">
            <div className="exercies_item">
              <span className="exercies_icon">
                <img src={lunges} alt="" />
              </span>
              <div className="execies_content">
                <h4>Healthy life</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="exercies_item">
              <span className="exercies_icon">
                <img src={yoga} alt="" />
              </span>
              <div className="execies_content">
                <h4>Increased Flexibity</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="exercies_item">
              <span className="exercies_icon">
                <img src={extended} alt="" />
              </span>
              <div className="execies_content">
                <h4>Reducing Blood Pressure</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Exercies;
