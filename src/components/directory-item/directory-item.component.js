import React from "react";
import "./directory-item.style.scss";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div
      className="directory-item-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {/* <img src={imageUrl} alt={title}></img> */}
      <h2>{title}</h2>
      <p>Shop Now</p>
    </div>
  );
};
export default DirectoryItem;
