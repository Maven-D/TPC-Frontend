import React from "react";
import NavbarHome from "../components/NavbarHome";
import { useLocation } from "react-router-dom";

import StudentProfileDisplay from "../components/StudentProfileDisplay";

const userType = localStorage.getItem("userType");

function ProfileView() {
  // const navigator = useNavigate();
  // const [data, setData] = useState();
  //   const [appliedJobs, setAppliedJobs] = useState([]);
  //   const [updatingProfile, setUpdatingProfile] = useState(false);

  const location = useLocation();
  const { userInfo: element } = location.state;
  console.log(userType);

  const downloadResume = () => {
    // fetch(`/api/viewpdf/?filename=${element["fields"]["resume"]}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/pdf",
    //     "Content-Disposition": "application; ",
    //   },
    // }).then((res) =>
    //   res.blob().then((blob) => {
    //     var pdfURL = window.URL.createObjectURL(blob);

    //     let tempLink = document.createElement("a");
    //     tempLink.href = pdfURL;
    //     tempLink.download = "Resume.pdf";

    //     tempLink.click();
    //   })
    // );
    window.open(element["fields"]["resume"]);
  };

  return (
    <>
      <NavbarHome />
      <div className="profile-div">
        <div className="outer-div">
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
                    <a onClick={(e) => downloadResume(e)} target="_blank">
                      Download Resume
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="image-div">
              <img
                src={element["fields"]["studprofilepic"]}
                alt="COMPANY LOGO"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileView;
