import React from "react";
import NavbarHome from "../components/NavbarHome";
import { useLocation } from "react-router-dom";

import StudentProfileDisplay from "../components/StudentProfileDisplay";

const userType = localStorage.getItem("userType");

function ProfileView() {
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
    <>
      <NavbarHome />
      <div className="profile-div">
        <div className="outer-div">
          <StudentProfileDisplay
            data={data}
            downloadResume={downloadResume}
            userType={userType}
          />
          <div>
            <div className="image-div">
              <img src={data["fields"]["studprofilepic"]} alt="COMPANY LOGO" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileView;
