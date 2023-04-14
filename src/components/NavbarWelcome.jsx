import React from "react";
import { Link } from "react-router-dom";

function NavbarWelcome() {
  return (
    <header>
      <Link to="/welcome" className="logo">
        <img src="" alt="logo" className="image nav-logo" />
      </Link>
      <nav className="nav-bar">
        <Link to="/about">
          <div className="nav-item">About us</div>
        </Link>
        <Link to="/Team">
          <div className="nav-item">Team</div>
        </Link>
      </nav>
    </header>
  );
}

export default NavbarWelcome;
