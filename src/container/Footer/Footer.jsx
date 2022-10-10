import React from "react";



import "./Footer.scss";

const Footer = () => {
  return (
    <div id="Contact">
      <div className="app__footer">
        <h2 className="head-text">Contact</h2>

        <div className="app__footer-form app__flex">
          <form action="https://formsubmit.co/3b6507d7ae009379565db3b008504553" method="POST">
            <div className="app__flex">
              <input
                className="p-text"
                type="text"
                placeholder="Your Name"
                name="username"
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                name="message"
              />
            </div>
            <button type="button" className="p-text">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
