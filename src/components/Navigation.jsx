import "./Navigation.css";

import React from "react";
import { Link } from "react-router-dom";

function Navigation({ closeNav }) {
  return (
    <div id="myNav" className="overlay">
      <a className="closebtn" onClick={() => closeNav()}>
        &times;
      </a>
      <div className="overlay-content">
        <Link to="/" onClick={() => closeNav()}>Home</Link>
        <Link to="/vitamin" onClick={() => closeNav()}>Vitamin Juice</Link>
        <a href="">Clothing</a>
        <a href="">Supplements</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navigation;
