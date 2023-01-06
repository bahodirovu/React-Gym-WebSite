import React from "react";
import "../../styles/pricing.css";

const Pricing = () => {
  return (
    <section id="price-plans">
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title">
            Gym <span className="highlists">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor, commodi sit amet consectetur adipisicing elit.
            <br />
            Nam consequuntur, quasi exercitationem perferendis aliquam.
          </p>
        </div>
        {/* pricin wrapper */}
        <div className="pricing_wrapper">
          <div className="pricing_item ">
            <div className="pricing_card-top">
              <h2 className="section_title">Regular member</h2>
              <h2 className="pricing section_title">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standart options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button className="register_btn">Join now</button>
            </div>
          </div>

          <div className="pricing_item pricing_item-02">
            <div className="pricing_card-top">
              <h2 className="section_title">Premium member</h2>
              <h2 className="pricing section_title">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standart options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button className="register_btn">Join now</button>
            </div>
          </div>

          <div className="pricing_item">
            <div className="pricing_card-top">
              <h2 className="section_title">Standart member</h2>
              <h2 className="pricing section_title">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited acces to the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Personal Trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Standart options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button className="register_btn">Join now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
