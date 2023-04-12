import React from "react";

function NewsRow({ title, content }) {
  return (
    <div className="grid-element">
      <div className="grid-column-elem">
        <img src="" alt="image" />
        <h6 className="elem-title">{title}</h6>
        <p>{content}</p>
      </div>
      <div className="grid-column-elem">
        <img src="" alt="image" />
        <h6 className="elem-title">{title}</h6>
        <p>{content}</p>
      </div>
      <div className="grid-column-elem">
        <img src="" alt="image" />
        <h6 className="elem-title">{title}</h6>
        <p>{content}</p>
      </div>
      <div className="grid-column-elem">
        <img src="" alt="image" />
        <h6 className="elem-title">{title}</h6>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default NewsRow;
