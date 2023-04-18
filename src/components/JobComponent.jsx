import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const userType = localStorage.getItem("userType");

async function expandTile(userType, navigator) {
  if (userType != "company") return;
  // html for expanded tile
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let trMain = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.textContent = "Name";
  let th2 = document.createElement("th");
  th2.textContent = "Roll-No";
  let th3 = document.createElement("th");
  th3.textContent = "Profile-Link";
  trMain.appendChild(th1);
  trMain.appendChild(th2);
  trMain.appendChild(th3);
  thead.appendChild(trMain);
  table.appendChild(thead);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const res = await fetch("/api/whoapplied/", {
    method: "GET",
  });

  let data = await res.json();
  data = JSON.parse(data["applied"]);
  console.log(data);

  data.forEach((element) => {
    console.log(element);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = element["fields"]["name"];
    let td2 = document.createElement("td");
    td2.textContent = element["pk"];
    let td3 = document.createElement("td");
    let profileLink = document.createElement("a");
    profileLink.innerHTML = "Link to profile";
    profileLink.addEventListener("click", () => {
      navigator("/user/profileview/", {
        state: {
          userInfo: element,
        },
      });
    });
    td3.appendChild(profileLink);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  });
  const parent = document.getElementById("expanding-tiles");
  console.log(parent);
  parent.parentNode.appendChild(table);
}

function SingleJobEntry(elem) {
  // const [whoApplied, setWhoApplied] = useState();
  const navigator = useNavigate();
  console.log(elem);
  return (
    <div
      className="content"
      onClick={() => expandTile(userType, navigator)}
      id="expanding-tiles"
    >
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
