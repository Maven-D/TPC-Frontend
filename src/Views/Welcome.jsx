import React, { useEffect, useState } from "react";
import NavbarWelcome from "../components/NavbarWelcome";
import { Link } from "react-router-dom";
import NewsGalary from "../components/NewsGalary";

function Welcome() {
  const [top3Data, setTop3Data] = useState();

  useEffect(() => {
    fetch("/api/top3/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => setTop3Data(JSON.parse(data["top3"])))
    );
  }, []);
  return (
    <>
      <NavbarWelcome />
      <div className="header-title">
        <h1>Training and Placement Cell</h1>
        <h1>IIT Patna</h1>
      </div>
      <div className="login-register-span">
        <Link to="/login">
          <span>Login</span>
        </Link>
        <Link to="/register">
          <span>Register</span>
        </Link>
      </div>
      <NewsGalary top3Data={top3Data} />
    </>
  );
}

export default Welcome;
