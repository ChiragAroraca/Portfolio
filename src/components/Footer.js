import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h1>Chirag Arora</h1>
      </div>
      <div className="footer-socials">
        <ul>
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
        <p>Copyright 2024. All rights reserved</p>
      </div>
    </footer>
  );
};
