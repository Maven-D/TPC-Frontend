import React, { useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import { useLocation, useNavigate } from "react-router-dom";
import JobComponent from "../components/JobComponent";
import { toast } from "react-toastify";
import UpdateProfile from "../assets/icons8-writer-male-24.png";

import StudentProfileDisplay from "../components/StudentProfileDisplay";
import UpdatingProfile from "./UpdatingProfile";
import { Oval } from "react-loader-spinner";

const userType = localStorage.getItem("userType");

function Profile() {
  const navigator = useNavigate();
  const [data, setData] = useState();
  const [appliedJobs, setAppliedJobs] = useState([]);

  const location = useLocation();
  const { userLogin, userInfo: element } = location.state;
  console.log(userLogin);

  const addNewJob = () => {
    navigator("/addjobs");
  };

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

  const downloadResume = () => {
    // fetch(`/api/viewpdf/?filename=${data["fields"]["resume"]}`, {
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
    window.open(data["fields"]["resume"], "_blank");
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
    let res = null;
    if (userType == "student") {
      res = await fetch("/api/applied/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else if (userType == "company") {
      res = await fetch("/api/jobpostedbycompany/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else return;
    if (res.status != 200) {
      toast.error("Could not get applied jobs!");
      // navigator("/");
    }
    return res.json();
  }

  // console.log(data);
  if (data == undefined || appliedJobs == undefined)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  // if (appliedJobs == undefined) return <div>no jobs</div>;
  // userType = "company";
  console.log(data);
  // console.log(userType);
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
          {userLogin ? (
            <div className="update-profile">
              <img
                src={UpdateProfile}
                onClick={() =>
                  navigator("/updateprofile", {
                    state: { data: data },
                  })
                }
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {userLogin ? (
        <>
          <div
            style={{
              width: "32%",
              display: "flex",
              justifyContent: "center",
              marginLeft: "47%",
            }}
          >
            <h2 className="job-component-title">Jobs</h2>
            {userType == "company" && (
              <button onClick={addNewJob}>ADD NEW JOB</button>
            )}
          </div>
          <JobComponent appliedJobs={appliedJobs} userType={userType} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
