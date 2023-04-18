import React, { useEffect, useState } from "react";

function NewsRow({ top3Data }) {
  console.log(top3Data);
  if (top3Data == undefined) return;
  return (
    <div className="grid-element">
      {top3Data.map((elem) => (
        <div className="grid-column-elem">
          <img src={elem["fields"]["companypic"]} alt="image" />
          <h6 className="elem-title">{elem["fields"]["name"]}</h6>
        </div>
      ))}
    </div>
  );
  // <div className="grid-element">
  //   <div className="grid-column-elem">
  //     <img src={top3Data[0]["fields"]["companypic"]} alt="image" />
  //     <h6 className="elem-title">{}</h6>
  //     <p></p>
  //   </div>
  //   <div className="grid-column-elem">
  //     <img src={top3Data[1]["fields"]["companypic"]} alt="image" />
  //     <h6 className="elem-title"></h6>
  //     <p></p>
  //   </div>
  //   <div className="grid-column-elem">
  //     <img src={top3Data[2]["fields"]["companypic"]} alt="image" />
  //     <h6 className="elem-title"></h6>
  //     <p></p>
  //   </div>
  // </div>
}

export default NewsRow;
