import React, { useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import { useLocation } from "react-router-dom";
import JobComponent from "../components/JobComponent";
import { toast } from "react-toastify";
import UpdateProfile from "../assets/icons8-writer-male-24.png";

function Profile() {
  const [data, setData] = useState();
  const [appliedJobs, setAppliedJobs] = useState();
  const [updatingProfile, setUpdatingProfile] = useState(false);

  const location = useLocation();
  const { userType, userLogin } = location.state;
  // console.log(userLogin);

  const updateProfile = () => {
    setUpdatingProfile((updatingProfile) => !updatingProfile);
    // update profile api
    // fetch('')
  };

  const downloadResume = () => {
    fetch(`/api/viewpdf/?filename=${data["fields"]["resume"]}`, {
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

  async function getData() {
    const res = await fetch("/api/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status != 200) {
      toast.error("Could not get user!");
      redirect("/");
    }
    return res.json();
  }

  async function getUserJobs() {
    const res = await fetch("/api/applied/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status != 200) {
      toast.error("Could not get applied jobs!");
      redirect("/");
    }
    return res.json();
  }

  useEffect(() => {
    getData().then((userData) => {
      const parsedData = JSON.parse(userData["profile"])[0];
      setData(parsedData);
    });
    getUserJobs().then((userAppliedJobs) => {
      const parsedJobs = JSON.parse(userAppliedJobs["applied"]);
      setAppliedJobs(parsedJobs);
    });
  }, []);
  // console.log(data);
  if (data == undefined) return <div>no data</div>;
  if (appliedJobs == undefined) return <div>no jobs</div>;
  // console.log(appliedJobs);
  return !updatingProfile ? (
    <>
      <NavbarHome />
      <div className="content">
        <div>
          <div style={{ width: "70%" }}>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{data["fields"]["name"]}</td>
                </tr>
                <tr>
                  <td>Roll No.:</td>
                  <td>{data["pk"]}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{data["fields"]["email"]}</td>
                </tr>
                <tr>
                  <td>Resume:</td>
                  <td>
                    <button onClick={downloadResume}>Download Resume</button>
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
          {userLogin ? (
            <div>
              <img src={UpdateProfile} onClick={updateProfile} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {userLogin ? (
        <JobComponent jobsList={appliedJobs} userType={userType} />
      ) : (
        <></>
      )}
    </>
  ) : (
    // add updating profile html
    <></>
  );
}

export default Profile;
