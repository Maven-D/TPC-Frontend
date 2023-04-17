import React from "react";
import { useNavigate } from "react-router-dom";

function AddJob() {
  const navigator = useNavigate();
  function addNewJob() {
    const jobTitle = document.getElementById("add-job-title").value;
    const jobDesc = document.getElementById("add-job-desc").value;
    const modeOfinterview = document.getElementById(
      "add-job-interview-mode"
    ).value;
    const minQualification = document.getElementById("add-job-min-qual").value;
    const salaryPackage = document.getElementById("add-job-salary").value;
    fetch("/api/addjob/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jid: jobTitle + jobDesc,
        jobTitle: jobTitle,
        jobDesc: jobDesc,
        flag_job: true,
        minQual: minQualification,
      }),
    }).then((res) => {
      if (res.status == 200) {
        navigator(-1);
      }
    });
  }

  return (
    <div class="content">
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <table>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3 style={{ margin: "18.72px" }}>JOB TITLE</h3>
              </td>
            </tr>

            <tr>
              <td style={{ padding: " 8px" }}>
                <h3>JOB DESCRIPTION</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>MODE OF INTERVIEW</h3>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <h3>MARKS CRITERIA</h3>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>
                <h3>SALARY PACKAGE</h3>
              </td>
            </tr>
          </table>
          <input type="submit" value="ADD JOB" onClick={addNewJob} />
        </div>
        <div style={{ width: "50%" }}>
          <table>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="jobtitle"
                  placeholder="Job Title"
                  id="add-job-title"
                  required
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "0%" }}>
                <textarea
                  name="textarea"
                  placeholder="Job Description"
                  id="add-job-desc"
                  required
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  class="moi"
                  style={{ "margin-right": "160px", "text-align": "center" }}
                >
                  <label for="modeofinterview">CHOOSE THE INTERVIEW MODE</label>
                  <select
                    name="modeofinterview"
                    id="add-job-interview-mode"
                    required
                  >
                    <option value="onlinewritten">ONLINE WRITTEN EXAM</option>
                    <option value="offlinewritten">OFFLINE WRITTEN EXAM</option>
                    <option value="onlineinterview">ONLINE INTERVIEW</option>
                    <option value="offlineinterview">OFFLINE INTERVIEW</option>
                  </select>
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="marks_criteria"
                  placeholder="marks criteria"
                  id="add-job-min-qual"
                  required
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="salarypkg"
                  placeholder="salary package"
                  id="add-job-salary"
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

export default AddJob;
