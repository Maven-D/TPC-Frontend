import React, { useState } from "react";
import { toast } from "react-toastify";

function UpdatingProfile({
  updatingProfileFunction: setUpdatingProfile,
  data,
}) {
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
    const updatedBatch = document.getElementById("update-batch").value;
    const updatedCGPA = document.getElementById("update-cgpa").value;
    const updatedArea = document.getElementById("update-areaofinterest").value;
    const updatedPassword = document.getElementById("update-password").value;
    const updatedResume = document.getElementById("update-resume").values;

    // console.log(updatedName);
    fetch("/api/updateprofile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedName,
        roll_no: updatedRoll,
        studprofilepic: updatedProfilePic,
        email: updatedEmail,
        m10: updatedC10M,
        m11: updatedC11M,
        m12: updatedC12M,
        msem1: updatedS1M,
        msem2: updatedS2M,
        msem3: updatedS3M,
        msem4: updatedS4M,
        msem5: updatedS5M,
        msem6: updatedS6M,
        msem7: updatedS7M,
        msem8: updatedS8M,
        CGPA: updatedCGPA,
        areaofinterest: updatedArea,
        password: updatedPassword,
        batch: updatedBatch,
        resume: updatedResume,
      }),
    }).then((res) => {
      console.log({
        name: updatedName,
        roll_no: updatedRoll,
        studprofilepic: updatedProfilePic,
        email: updatedEmail,
        m10: updatedC10M,
        m11: updatedC11M,
        m12: updatedC12M,
        msem1: updatedS1M,
        msem2: updatedS2M,
        msem3: updatedS3M,
        msem4: updatedS4M,
        msem5: updatedS5M,
        msem6: updatedS6M,
        msem7: updatedS7M,
        msem8: updatedS8M,
        // batch: updatedBatch,
        cgpa: updatedCGPA,
        areaofinterest: updatedArea,
        password: updatedPassword,
      });
      if (res.status == 200) {
        uploadFile();
        toast.success("Updated Successfully");
        setUpdatingProfile((updatingProfile) => !updatingProfile);
      }
    });
  };

  return (
    <div className="content">
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
                <h3>BATCH:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>CGPA:</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>AREA OF INTEREST:</h3>
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
                  required
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
                  required
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
                  defaultValue={data["fields"]["studprofilepic"]}
                  required
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
                  defaultValue={data["fields"]["email"]}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="resume"
                  placeholder="Resume"
                  id="update-resume"
                  required
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
                  defaultValue={data["fields"]["m10"]}
                  required
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
                  defaultValue={data["fields"]["m11"]}
                  required
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
                  defaultValue={data["fields"]["m12"]}
                  required
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
                  defaultValue={data["fields"]["msem1"]}
                  required
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
                  defaultValue={data["fields"]["msem2"]}
                  required
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
                  defaultValue={data["fields"]["msem3"]}
                  required
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
                  defaultValue={data["fields"]["msem4"]}
                  required
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
                  defaultValue={data["fields"]["msem5"]}
                  required
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
                  defaultValue={data["fields"]["msem6"]}
                  required
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
                  defaultValue={data["fields"]["msem7"]}
                  required
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
                  defaultValue={data["fields"]["msem8"]}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="BATCH"
                  placeholder="BATCH"
                  id="update-batch"
                  defaultValue={data["fields"]["batch"]}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="CGPA"
                  placeholder="CPI"
                  id="update-cgpa"
                  defaultValue={data["fields"]["cgpa"]}
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="AREA OF INTEREST"
                  placeholder="AREA OF INTEREST"
                  id="update-areaofinterest"
                  defaultValue={data["fields"]["areaofInterest"]}
                  required
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
                  defaultValue={data["fields"]["password"]}
                  required
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UpdatingProfile;
