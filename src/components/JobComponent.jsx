import React from "react";

const userType = localStorage.getItem("userType");

function expandTile(userType) {
  if (userType != "company") return;
  // html for expanded tile
}

function SingleJobEntry(elem) {
  console.log(elem);
  return (
    <div className="content" onClick={() => expandTile(userType)}>
      <div className="jobs">
        <div style={{ width: "30%" }}>
          <h3 align="center"></h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="download.png" alt="COMPANY LOGO" />
          </div>
          <h3 align="center">{elem["fields"]["jobTitle"]}</h3>
        </div>
        <div style={{ width: "70%" }}>
          <h3>JOB DESCRIPTION</h3>
          <p>{elem["fields"]["jobDesc"]}</p>
          <h4 align="center">CTC:{elem["fields"]["ctc"]}</h4>
        </div>
        {userType == "company" ? <div>&darr;</div> : <></>}
      </div>
    </div>
  );
}

function JobComponent({ appliedJobs }) {
  return appliedJobs.map((elem) => SingleJobEntry(elem));
}

export default JobComponent;
