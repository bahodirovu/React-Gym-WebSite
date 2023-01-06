import React, { useEffect, useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

function Header() {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const nav_links = [
    {
      path: "#",
      display: "Home",
    },
    {
      path: "#schedule",
      display: "Schedule",
    },
    {
      path: "#classes",
      display: "Classes",
    },
    {
      path: "#price-plans",
      display: "Prices",
    },
  ];
  return (
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="nav_wrapper">
            {/* logo */}
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>Fitbody</h2>
            </div>
            {/* navigation menu */}
            <div className="navigation">
              <ul className="menu">
                {nav_links.map((item) => (
                  <li className="nav__items">
                    <a href={item.path}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* nav right */}
            <div className="nav_right">
              <button className="register_btn">Register</button>
              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
