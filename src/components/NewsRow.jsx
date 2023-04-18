import React, { useEffect, useState } from "react";

function NewsRow({ top3Data }) {
  console.log(top3Data);
  if (top3Data == undefined) return;
  return (
    <div className="grid-element">
      {top3Data.map((elem) => (
        <div className="grid-column-elem">
          <div style={{ width: "400px", height: "400px" }}>
            <img src={elem["fields"]["companypic"]} alt="image" />
          </div>
          <h6 className="elem-title">{elem["fields"]["name"]}</h6>
        </div>
      ))}
    </div>
  );
}

export default NewsRow;
