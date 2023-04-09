import React from "react";
import NavbarWelcome from "../components/NavbarWelcome";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <NavbarWelcome />
      <div className="header-title">
        <h1>Training and Placement Cell</h1>
        <h1>IIT Patna</h1>
      </div>
      <div className="login-register-span">
        <Link>
          <span>Login</span>
        </Link>
        <Link>
          <span>Register</span>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
