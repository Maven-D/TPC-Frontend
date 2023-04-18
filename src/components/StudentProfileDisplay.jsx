import React from "react";

function StudentProfileDisplay({ data }) {
  const userType = localStorage.getItem("userType");

  function downloadResume(e) {
    e.preventDefault();
    window.open(data["fields"]["resume"]);
  }
  return (
    <div style={{ width: "70%" }}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{data["fields"]["name"]}</td>
          </tr>
          <tr>
            <td>{userType == "company" ? "CId" : "Roll No.:"}</td>
            <td>{data["pk"]}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{data["fields"]["email"]}</td>
          </tr>
          {userType == "student" && (
            <tr>
              <td>Resume:</td>
              <td>
                <a onClick={(e) => downloadResume(e)} target="_blank">
                  Download Resume
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentProfileDisplay;
