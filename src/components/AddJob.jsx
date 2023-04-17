import React from "react";

function AddJob() {
  return (
    <div class="content">
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%" }}>
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
          <input type="submit" value="ADD JOB" />
        </div>
        <div style={{ width: "35%" }}>
          <table>
            <tr>
              <td style={{ padding: "0%" }}>
                <input type="text" name="jobtitle" placeholder="Job Title" />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "0%" }}>
                <textarea
                  name="textarea"
                  placeholder="Job Description"
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
                  <select name="modeofinterview" id="modeinter">
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
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "0%" }}>
                <input
                  type="text"
                  name="salarypkg"
                  placeholder="salary package"
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
