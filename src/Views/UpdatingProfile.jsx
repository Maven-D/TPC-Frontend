import React, { useState, useEffect } from "react";

import StudentUpdateProfile from "../components/StudentUpdateProfile";
import CompanyUpdateProfile from "../components/CompanyUpdateProfile";
import AlumniUpdateProfile from "../components/AlumniUpdateProfile";

function UpdatingProfile() {
  const userType = localStorage.getItem("userType");
  return userType == "student" ? (
    <StudentUpdateProfile />
  ) : userType == "company" ? (
    <CompanyUpdateProfile />
  ) : (
    <AlumniUpdateProfile />
  );
}

export default UpdatingProfile;
