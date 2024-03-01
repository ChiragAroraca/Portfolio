import React, { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavClick = () => {
    setMobileNav(!mobileNav);
  };
  const handleNavClose = () => {
    setMobileNav(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>My Portfolio</h1>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chirag-arora30">
                <button className="nav-social-item">
                  <i class="fa-brands fa-linkedin-in"></i>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className="nav-social-item">
                  <i class="fa-brands fa-facebook-f"></i>
                </button>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/ChiragAroraca">
                <button className="nav-social-item">
                  <i class="fa-brands fa-github"></i>
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-button">
          <a href="https://www.linkedin.com/in/chirag-arora30">
            <button>Let's connect</button>
          </a>
        </div>
        <div className="mobile-navbar">
          <div className="mobile-nav-button">
            <button onClick={handleNavClick}>
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-nav-items ${mobileNav ? "open" : ""}`}>
        <a href="https://www.linkedin.com/in/chirag-arora30">
          <button className="nav-social-item">
            <i class="fa-brands fa-linkedin-in"></i>
          </button>
        </a>
        <a href="#">
          <button className="nav-social-item">
            <i class="fa-brands fa-facebook-f"></i>
          </button>
        </a>
        <a href="https://github.com/ChiragAroraca">
          <button className="nav-social-item">
            <i class="fa-brands fa-github"></i>
          </button>
        </a>
        <button className="close-nav" onClick={handleNavClose}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  );
};

export default Navbar;
