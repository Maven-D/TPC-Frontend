import React from "react";
import NewsRow from "./NewsRow";

function NewsGalary() {
  return (
    <>
      <h3 className="news-header">News Galary</h3>
      <div className="news-grid">
        <NewsRow title="random" content="lorem30" />
        <NewsRow title="random" content="lorem30" />
        <NewsRow title="random" content="lorem30" />
        <NewsRow title="random" content="lorem30" />
      </div>
    </>
  );
}

export default NewsGalary;
