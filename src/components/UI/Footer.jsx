import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>Fitbody</h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Dolore repellendus quae hic pariatur totam facere.
            </p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <a href="#">Our program</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>
              <li>
                <a href="#">Become member</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright - {year} developed by UBT</p>
      </div>
    </footer>
  );
}
export default Footer;
