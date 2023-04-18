import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function CompanyUpdateProfile() {
  const [batch, setBatch] = useState();

  const navigator = useNavigate();

  // const [cgpa, setCgpa] = useState();

  const location = useLocation();
  const { data: data } = location.state;

  useEffect(() => {
    fetch("/api/batchlist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => setBatch(JSON.parse(data["batch"])))
    );
  }, []);

  if (batch == null) return;

  const updateProfile = async () => {
    // setUpdatingProfile((updatingProfile) => !updatingProfile);
    // update profile api
    const updatedName = document.getElementById("update-name").value;

    const updatedProfilePic =
      document.getElementById("update-profile-pic").value;
    const updatedEmail = document.getElementById("update-email").value;
    const updatedSalaryPackage = document.getElementById(
      "update-salary-package"
    ).value;
    const updatedMarksCriteria = document.getElementById(
      "update-marks-criteria"
    ).value;
    const updatedModeOfInterview = document.getElementById(
      "update-modeofinterview"
    ).value;
    const updatedTimeOfStart = document.getElementById(
      "update-time-of-start"
    ).value;
    const updatedRequiredCandidate = document.getElementById(
      "update-required-candidate"
    ).value;

    const updatedPassword = document.getElementById("update-password").value;

    // fetch('/api/getcpi', {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // }).then((res) => res.json().then((data) => setCgpa(data["cpi"])));

    // if(cgpa == undefined) return;
    // console.log(cgpa);

    // console.log(updatedName);
    fetch("/api/updateprofile/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: updatedName,
        salaryPackage: updatedSalaryPackage,
        reqCandDet: updatedRequiredCandidate,
        marksCriteria: updatedMarksCriteria,
        mode_of_interview: updatedModeOfInterview,
        time_of_start_iitp: updatedTimeOfStart,
        companypic: updatedProfilePic,
        email: updatedEmail,
        // CGPA: cgpa,
        password: updatedPassword,
      }),
    }).then((res) => {
      if (res.status == 200) {
        toast.success("Updated Successfully");
        navigator("/profile", {
          state: { userLogin: true },
        });
      }
    });
  };

  console.log(data);
  return (
    <div className="update-profile">
      <h4>Update Profile</h4>

      <form>
        <label for="name">Name:</label>
        <input
          type="text"
          id="update-name"
          name="name"
          defaultValue={data["fields"]["name"]}
        />

        <label for="roll-number">Salary Package:</label>
        <input
          type="text"
          id="update-salary-package"
          name="roll-number"
          defaultValue={data["fields"]["salaryPackage"]}
        />

        <label for="profile-picture">Profile Picture:</label>
        <input
          type="text"
          id="update-profile-pic"
          name="profile-picture"
          defaultValue={data["fields"]["companypic"]}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="update-email"
          name="email"
          defaultValue={data["fields"]["email"]}
        />

        <label for="marks-criteria">Marks Criteria:</label>
        <input
          type="number"
          id="update-marks-criteria"
          name="marks-criteria"
          defaultValue={data["fields"]["marksCriteria"]}
        />

        <label for="modeofinterview">Mode of Interview:</label>
        <select
          id="update-modeofinterview"
          name="modeofinterview"
          onChange={(e) => e.target.value}
        >
          <option value="Online_written">Online and Written</option>
          <option value="Offline_written">Offline and Written</option>
          <option value="Online_interview">Online and Interview</option>
          <option value="Offline_interview">Offline and Interview</option>
        </select>

        <label for="timeofstart">Time of start in IITP:</label>
        <input
          type="text"
          id="update-time-of-start"
          name="timeofstart"
          defaultValue={data["fields"]["time_of_start_iitp"]}
        />

        <label for="required-candidate">Required Candidate Details:</label>
        <input
          type="text"
          id="update-required-candidate"
          name="required-candidate"
          defaultValue={data["fields"]["reqCandDet"]}
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="update-password"
          name="password"
          defaultValue={data["fields"]["password"]}
        />
        <input
          type="submit"
          value="Submit"
          onClick={(e) => {
            e.preventDefault();
            updateProfile();
          }}
        />
      </form>
    </div>
  );
}

export default CompanyUpdateProfile;
