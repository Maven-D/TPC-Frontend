import React from "react";
import { Link } from "react-router-dom";

function NavbarWelcome() {
  return (
    <header>
      <Link to="/">
        <img src="" alt="logo" className="image nav-logo" />
      </Link>
      <nav className="nav-bar">
        <div className="nav-item">About us</div>
        <div className="nav-item">Team</div>
      </nav>
    </header>
  );
}

export default NavbarWelcome;
