import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function AlumniUpdateProfile() {
  const [batch, setBatch] = useState();
  const [cidList, setCidList] = useState();
  const [currentCompany, setCurrentCompany] = useState();

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
    fetch("/api/cidlist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => setCidList(JSON.parse(data["cid"])))
    );
  }, []);

  if (batch == null) return;

  const updateProfile = async () => {
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
    // const updatedCGPA = document.getElementById("update-cgpa").value;
    const updatedArea = document.getElementById("update-areaofinterest").value;
    const updatedPassword = document.getElementById("update-password").value;
    const updatedCompany = document.getElementById(
      "update-current-company"
    ).values;
    const updatedCName =
      document.getElementById("update-company-name") == null
        ? ""
        : document.getElementById("update-company-name").value;
    const updatedDesignation =
      document.getElementById("resume-designation").values;
    const updatedCTC = document.getElementById("update-ctc").values;
    const updatedTenure = document.getElementById("update-tenure").values;
    const updatedResume = document.getElementById("update-resume").values;

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
        roll_no: updatedRoll,
        alumprofilepic: updatedProfilePic,
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
        // CGPA: cgpa,
        area: updatedArea,
        password: updatedPassword,
        batch: updatedBatch,
        cid: updatedCompany,
        company: updatedCName,
        designation: updatedDesignation,
        ctc: updatedCTC,
        tenure: updatedTenure,
        resume: updatedResume,
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
  if (cidList == undefined) return;
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

        <label for="roll-number">Roll Number:</label>
        <input
          type="text"
          id="update-roll"
          name="roll-number"
          defaultValue={data["pk"]}
        />

        <label for="profile-picture">Profile Picture:</label>
        <input
          type="text"
          id="update-profile-pic"
          name="profile-picture"
          defaultValue={data["fields"]["alumprofilepic"]}
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="update-email"
          name="email"
          defaultValue={data["fields"]["email"]}
        />
        <label for="current-company">Current Company:</label>

        <select
          id="update-current-company"
          name="email"
          defaultValue={data["fields"]["cid"]}
          onChange={(e) => setCurrentCompany(e.target.value)}
        >
          {cidList.map((elem) => (
            <option>{elem}</option>
          ))}
        </select>

        {currentCompany == "Other Company / Off-Campus" && (
          <>
            <label for="company-name">Company Name:</label>
            <input type="text" id="update-company-name" name="resume-company" />
          </>
        )}

        <label for="resume-designation">Designation:</label>
        <input
          type="text"
          id="update-designation"
          name="resume-designation"
          defaultValue={data["fields"]["m10"]}
        />

        <label for="resume-ctc">CTC:</label>
        <input
          type="text"
          id="update-ctc"
          name="resume-ctc"
          defaultValue={data["fields"]["m10"]}
        />

        <label for="resume-class-10">Class 10 Marks:</label>
        <input
          type="number"
          id="update-c10m"
          name="resume-class-10"
          defaultValue={data["fields"]["m10"]}
        />

        <label for="resume-class-11">Class 11 Marks:</label>
        <input
          type="number"
          id="update-c11m"
          name="resume-class-11"
          defaultValue={data["fields"]["m11"]}
        />

        <label for="resume-class-12">Class 12 Marks:</label>
        <input
          type="number"
          id="update-c12m"
          name="resume-class-12"
          defaultValue={data["fields"]["m12"]}
        />

        <label for="semester-1">Semester 1 Marks:</label>
        <input
          type="number"
          id="update-cs1m"
          name="semester-1"
          defaultValue={data["fields"]["msem1"]}
        />

        <label for="semester-2">Semester 2 Marks:</label>
        <input
          type="number"
          id="update-cs2m"
          name="semester-2"
          defaultValue={data["fields"]["msem2"]}
        />

        <label for="semester-3">Semester 3 Marks:</label>
        <input
          type="number"
          id="update-cs3m"
          name="semester-3"
          defaultValue={data["fields"]["msem3"]}
        />

        <label for="semester-4">Semester 4 Marks:</label>
        <input
          type="number"
          id="update-cs4m"
          name="semester-4"
          defaultValue={data["fields"]["msem4"]}
        />

        <label for="semester-5">Semester 5 Marks:</label>
        <input
          type="number"
          id="update-cs5m"
          name="semester-5"
          defaultValue={data["fields"]["msem5"]}
        />

        <label for="semester-6">Semester 6 Marks:</label>
        <input
          type="number"
          id="update-cs6m"
          name="semester-6"
          defaultValue={data["fields"]["msem6"]}
        />

        <label for="semester-7">Semester 7 Marks:</label>
        <input
          type="number"
          id="update-cs7m"
          name="semester-7"
          defaultValue={data["fields"]["msem7"]}
        />

        <label for="semester-8">Semester 8 Marks:</label>
        <input
          type="number"
          id="update-cs8m"
          name="semester-8"
          defaultValue={data["fields"]["msem8"]}
        />

        <label for="batch">Batch:</label>

        <select defaultValue={data["fields"]["batch"]} id="update-batch">
          {batch.map((elem) => (
            <option>{elem}</option>
          ))}
        </select>

        <label for="area-of-interest">Area of Interest:</label>
        <input
          type="text"
          id="update-areaofinterest"
          name="area-of-interest"
          defaultValue={data["fields"]["area"]}
        />

        <label for="update-password">Update Password:</label>
        <input
          type="password"
          id="update-password"
          name="update-password"
          defaultValue={data["fields"]["password"]}
        />

        <label for="update-password">Update Resume:</label>
        <input
          type="password"
          id="update-resume"
          name="update-password"
          defaultValue={data["fields"]["resume"]}
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

export default AlumniUpdateProfile;
