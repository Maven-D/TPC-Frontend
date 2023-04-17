import React, { useEffect, useState } from "react";
import NavbarHome from "../components/NavbarHome";
import { useLocation } from "react-router-dom";
import JobComponent from "../components/JobComponent";
import { toast } from "react-toastify";
import UpdateProfile from "../assets/icons8-writer-male-24.png";
import "../CSS/profile.css";

function Profile() {
  const [data, setData] = useState();
  const [appliedJobs, setAppliedJobs] = useState();
  const [updatingProfile, setUpdatingProfile] = useState(false);

  const location = useLocation();
  const { userType, userLogin } = location.state;
  // console.log(userLogin);

  const updateProfile = () => {
    // setUpdatingProfile((updatingProfile) => !updatingProfile);
    // update profile api
    const updatedName = document.getElementById("update-name").value;
    const updatedRoll = document.getElementById("update-roll").value;
    const updatedProfilePic =
      document.getElementById("update-profile-pic").value;
    const updatedEmail = document.getElementById("update-email").value;

    const updatedC10M = document.getElementById("update-c10m").value;
    const updatedC11M = document.getElementById("update-c11m").value;
    const updatedC12M = document.getElementById("update-c12m").value;
    const updatedS1M = document.getElementById("update-cs1m").value;
    const updatedS2M = document.getElementById("update-cs2m").value;
    const updatedS3M = document.getElementById("update-cs3m").value;
    const updatedS4M = document.getElementById("update-cs4m").value;
    const updatedS5M = document.getElementById("update-cs5m").value;
    const updatedS6M = document.getElementById("update-cs6m").value;
    const updatedS7M = document.getElementById("update-cs7m").value;
    const updatedS8M = document.getElementById("update-cs8m").value;
    const updatedPassword = document.getElementById("update-password").value;
    // console.log(updatedName);
    fetch("/api/updateprofile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: {
        name: updatedName,
        roll_no: updatedRoll,
        studprofilepic: updatedProfilePic,
        email: updatedEmail,
        m10: updatedC10M,
        m11: updatedC11M,
        m12: updatedC12M,
        s1: updatedS1M,
        s2: updatedS2M,
        s3: updatedS3M,
        s4: updatedS4M,
        s5: updatedS5M,
        s6: updatedS6M,
        s7: updatedS7M,
        s8: updatedS8M,
        password: updatedPassword,
      },
    }).then((res) => {
      if (res.status == 200) {
        uploadFile();
        toast.success("Updated Successfully");
        setUpdatingProfile((updatingProfile) => !updatingProfile);
      }
    });
  };

  function uploadFile() {
    const updatedResume = document.getElementById("update-resume").files[0];
    if (data["fields"]["resume"] != "") return;
    fetch("/api/resumefileupload", {
      method: "PUT",
      body: updatedResume,
      // 👇 Set headers manually for single file upload
      headers: {
        "content-type": updatedResume.type,
        "content-length": `${updatedResume.size}`, // 👈 Headers need to be a string
      },
    });
  }

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
              <img
                src={UpdateProfile}
                onClick={() =>
                  setUpdatingProfile((updatingProfile) => !updatingProfile)
                }
              />
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
    <div class="content">
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
          <table>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>NAME:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>ROLL NO.:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>PROFILE PICTURE:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>EMAIL:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>RESUME:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>CLASS 10 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>CLASS 11 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>CLASS 12 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 1 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 2 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 3 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 4 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 5 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 6 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 7 MARKS:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SEMESTER 8 MARKS:</h3>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <h3>UPDATE PASSWORD:</h3>
              </td>
            </tr>
          </table>
          <input type="submit" value="UPDATE" onClick={updateProfile} />
        </div>
        <div style={{ width: "50%" }}>
          <table>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="update-name"
                  value={data["fields"]["name"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="rollno"
                  placeholder="Roll No."
                  id="update-roll"
                  value={data["pk"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="propic"
                  placeholder="Link to profile picture"
                  id="update-profile-pic"
                  value={data["fields"]["studprofilepic"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="email"
                  placeholder="example@example.com"
                  id="update-email"
                  value={data["fields"]["email"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="file"
                  name="resume"
                  placeholder="Resume"
                  id="update-resume"
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="C10M"
                  placeholder="Marks in %"
                  id="update-c10m"
                  value={data["fields"]["m10"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="C11M"
                  placeholder="Marks in %"
                  id="update-c11m"
                  value={data["fields"]["m11"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="C12M"
                  placeholder="Marks in %"
                  id="update-c12m"
                  value={data["fields"]["m12"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S1M"
                  placeholder="SPI"
                  id="update-cs1m"
                  value={data["fields"]["s1"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S2M"
                  placeholder="SPI"
                  id="update-cs2m"
                  value={data["fields"]["s2"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S3M"
                  placeholder="SPI"
                  id="update-cs3m"
                  value={data["fields"]["s3"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S4M"
                  placeholder="SPI"
                  id="update-cs4m"
                  value={data["fields"]["s4"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S5M"
                  placeholder="SPI"
                  id="update-cs5m"
                  value={data["fields"]["s5"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S6M"
                  placeholder="SPI"
                  id="update-cs6m"
                  value={data["fields"]["s6"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S7M"
                  placeholder="SPI"
                  id="update-cs7m"
                  value={data["fields"]["s7"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="S8M"
                  placeholder="SPI"
                  id="update-cs8m"
                  value={data["fields"]["s8"]}
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  id="update-password"
                  value={data["fields"]["password"]}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile;
