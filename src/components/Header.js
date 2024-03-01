import React from "react";
import logo from "../images/header-img.svg";
import Typed from "typed.js";
import { useEffect } from "react";

export const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Developer", " Designer"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="header">
      <div className="header-container-1">
        <h2 className="introduction">
          Hi! I'm Chirag and I'm a Web&nbsp;
          <span ref={el} />
        </h2>
        <div>
          <p>
            I am a Meta Certified Front-end Developer skilled in modern web
            development technologies like HTML5, CSS3, and JavaScript. I have
            experience working with frameworks and libraries such as jQuery,
            Bootstrap, and ReactJS. I have created numerous responsive and
            visually appealing websites.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/chirag-arora30">
          <button className="header-button">
            Let's Connect <i class="fa-solid fa-arrow-right"></i>
          </button>
        </a>
      </div>
      <div className="header-container-2">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};
