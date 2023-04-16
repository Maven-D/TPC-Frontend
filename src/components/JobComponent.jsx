import React from "react";

function expandTile(userType) {
  if (userType != "company") return;
  // html for expanded tile
}

function SingleJobEntry(userType) {
  return (
    <div className="content" onClick={() => expandTile(userType)}>
      <div className="jobs">
        <div style={{ width: "30%" }}>
          <h3 align="center">COMPANY NAME</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="download.png" alt="COMPANY LOGO" />
          </div>
          <h3 align="center">JOB ROLE</h3>
        </div>
        <div style={{ width: "70%" }}>
          <h3>JOB DESCRIPTION</h3>
          <p>
            We are seeking a Marketing Coordinator to join our team. The ideal
            candidate should have excellent communication skills, be highly
            organized, and have experience working in a fast-paced environment.
            The Marketing Coordinator will be responsible for coordinating
            marketing campaigns, managing social media accounts, and assisting
            with the development of marketing materials such as brochures,
            presentations, and proposals. The successful candidate should be
            proficient in Adobe Creative Suite, have a strong attention to
            detail, and be able to work collaboratively with other team members.
            A degree in marketing, communications, or a related field is
            preferred.
          </p>
          <h4 align="center">CTC:ctc</h4>
        </div>
        {userType == "company" ? <div>&darr;</div> : <></>}
      </div>
    </div>
  );
}

function JobComponent({ jobsList: appliedJobs, userType }) {
  return appliedJobs.map((elem) => SingleJobEntry(userType));
}

export default JobComponent;
