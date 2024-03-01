import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

export const Projects = () => {
  const projects = [
    {
      title: "WeatherME",
      img: project1,
      desc: "This weather forecast application is crafted using contemporary front-end technologies, such as HTML5, CSS3, and JavaScript ES6, ensuring optimal performance and user experience. Leveraging the OpenWeatherAPI, it seamlessly fetches real-time weather data to provide accurate forecasts.",
    },
    {
      title: "Little-Lemon",
      img: project2,
      desc: "This restaurant table booking website is built with modern frameworks and libraries like ReactJS and Bootstrap, ensuring scalability and efficiency. It boasts full responsiveness and a visually appealing design to elevate the user experience during table reservations.",
    },
    {
      title: "ShopLit",
      img: project3,
      desc: "This e-commerce platform offers a curated selection of top brand clothing, featuring the best offers and festive deals. Developed using HTML5, CSS3, and Bootstrap, it guarantees both responsiveness and an eye-catching design to enhance the shopping experience.",
    },
    {
      title: "Quizzers",
      img: project4,
      desc: " This quiz application, powered by ReactJS, delivers a fully responsive interface with a sleek, modern aesthetic tailored to tech enthusiasts. Users can enjoy an immersive testing experience while the application utilizes local storage to store results seamlessly at each stage.",
    },
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>You can visit my github for the mentioned project source codes</p>
      <a href="https://github.com/ChiragAroraca/Projects">
        <button>
          Visit GitHub &nbsp;<i class="fa-brands fa-github"></i>
        </button>
      </a>
      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project">
              <div className="project-image">
                <img src={project.img} alt="project" />
              </div>
              <div className="project-title">
                <h3>{project.title}</h3>
              </div>
              <div className="hover-bg"></div>
              <div className="project-desc">
                <p>{project.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
