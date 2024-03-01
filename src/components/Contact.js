import React from "react";
import contact from "../images/contact-img.svg";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-img">
          <img src={contact} alt="Contact ME" />
        </div>
        <div className="contact-form">
          <h1>GET IN TOUCH</h1>
          <form action="https://formspree.io/f/xvoerdze" method="POST">
            <div>
              <input type="text" name="First Name" placeholder="First Name" />
              <input type="text" name="Last Name" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" name="email" placeholder="E-mail" />
              <input type="text" name="number" placeholder="Phone number" />
            </div>
            <textarea
              id="w3review"
              name="w3review"
              placeholder="Enter Message"
              className="textarea"
            />
            <button className="submit-contact" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
