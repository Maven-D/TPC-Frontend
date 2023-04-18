import React from "react";
import NewsRow from "./NewsRow";

function NewsGalary({ top3Data }) {
  return (
    <>
      <h3 className="news-header">Top 3 Company</h3>
      <div className="news-grid">
        <NewsRow top3Data={top3Data} />
      </div>
    </>
  );
}

export default NewsGalary;
