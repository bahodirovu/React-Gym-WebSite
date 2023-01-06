import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.png";

const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start_wrapper">
          <div className="start_img">
            <img src={trainerImg} alt="" />
          </div>

          <div className="start_content">
            <h2 className="start_title">
              Ready to make <span className="highlists">change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore aliquid, at delectus obcaecati suscipit nostrum a in
              consectetur nesciunt omnis. Nostrum, nobis. Aut itaque
              perspiciatis voluptate cum, doloribus veniam et.
            </p>
            <button className="register_btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Start;
