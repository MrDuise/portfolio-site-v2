import React, { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { images } from "../../constants";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={images.logo} alt="logo" />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {["About", "Projects", "Contact"].map((item) => (
              <li className="nav-item" key={`link-${item}`}>
                <div />
                <a
                  className="nav-links"
                  href={`#${item}`}
                  onClick={handleClick}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {click ? (
            <RiCloseLine className="nav-icon" onClick={handleClick} />
          ) : (
            <RiMenu3Line className="nav-icon" onClick={handleClick} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
