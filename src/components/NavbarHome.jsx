import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarHome() {
  const navigator = useNavigate();
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
  // console.log(userType);
  return (
    <header>
      <Link to="/" className="logo">
        <img src="" alt="logo" className="image nav-logo" />
      </Link>
      <nav className="nav-bar">
        <Link to="/profile" state={{ userLogin: true }}>
          <div className="nav-item">Profile</div>
        </Link>
        <Link to="/welcome">
          <div className="nav-item" onClick={logout}>
            Logout
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default NavbarHome;
