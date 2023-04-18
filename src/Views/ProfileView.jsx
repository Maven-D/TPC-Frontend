import React, { useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import { useLocation, useNavigate } from "react-router-dom";
import JobComponent from "../components/JobComponent";
import { toast } from "react-toastify";
import UpdateProfile from "../assets/icons8-writer-male-24.png";

import StudentProfileDisplay from "../components/StudentProfileDisplay";
import UpdatingProfile from "./UpdatingProfile";

const userType = localStorage.getItem("userType");

function Profile() {
  //   const navigator = useNavigate();
  //   const [data, setData] = useState();
  //   const [appliedJobs, setAppliedJobs] = useState([]);
  //   const [updatingProfile, setUpdatingProfile] = useState(false);

  const location = useLocation();
  const { userInfo: element } = location.state;
  console.log(userType);

  const downloadResume = () => {
    fetch(`/api/viewpdf/?filename=${element["fields"]["resume"]}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "application; ",
      },
    }).then((res) =>
      res.blob().then((blob) => {
        var pdfURL = window.URL.createObjectURL(blob);

        let tempLink = document.createElement("a");
        tempLink.href = pdfURL;
        tempLink.download = "Resume.pdf";

        tempLink.click();
      })
    );
  };

  return (
    <div className="content">
      <div>
        <div style={{ width: "70%" }}>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{element["fields"]["name"]}</td>
              </tr>
              <tr>
                <td>Roll No.:</td>
                <td>{element["pk"]}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{element["fields"]["email"]}</td>
              </tr>

              <tr>
                <td>Resume:</td>
                <td>
                  <a
                    href={element["fields"]["resume"]}
                    target="_blank"
                    onClick={() => downloadResume()}
                  >
                    Download Resume
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <img src="download.png" alt="COMPANY LOGO" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
