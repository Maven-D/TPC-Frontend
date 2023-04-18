import React from "react";

function StudentProfileDisplay({ data }) {
  const userType = localStorage.getItem("userType");
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
                <a href={data["fields"]["resume"]} target="_blank">
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
