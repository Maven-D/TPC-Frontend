import React from "react";
import { Link } from "react-router-dom";

function NavbarHome() {
  function logout() {
    fetch("/api/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => {
        if (data.message == "Success") {
          navigator("/welcome");
        }
      })
    );
  }
  return (
    <header>
      <Link to="/" className="logo">
        <img src="" alt="logo" className="image nav-logo" />
      </Link>
      <nav className="nav-bar">
        <Link to="/welcome">
          <div className="nav-item" onClick={logout}>Logout</div>
        </Link>
      </nav>
    </header>
  );
}

export default NavbarHome;
