import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <nav className={`menu ${menuOpen && "menu-open"}`}>
        {/* if menuOpen is true then add class of menuOpen */}
      <button className="menu__close" onClick={() => setMenuOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="menu__links">
        <a href="/" className="menu__link">
          Home
        </a>
        <a href="/" className="menu__link">
          Products
        </a>
        <button className="menu__link menu__cart">Cart</button>
      </div>
    </nav>
  );
};

export default Menu;
