import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import bootstrap from "../images/bootstrap.png";
import jQuery from "../images/jQuery.png";
import reactlogo from "../images/react.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
  const data = [
    {
      img: html,
      title: "HTML5",
    },
    {
      img: css,
      title: "CSS3",
    },
    {
      img: javascript,
      title: "Javascript",
    },
    {
      img: bootstrap,
      title: "Bootstrap",
    },
    {
      img: jQuery,
      title: "jQuery",
    },
    {
      img: reactlogo,
      title: "ReactJS",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>Skills</h2>
        <p>
          I bring a diverse array of front-end development skills to the table,
          honed through extensive experience in the tech industry. My expertise
          spans multiple cutting-edge technologies, making me a versatile and
          dynamic front-end developer.
        </p>
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <div className="skill-carousel">
                <div className="skill-image">
                  <img src={d.img} alt="Logo" />
                </div>
                <div className="title">
                  <h3>{d.title}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
