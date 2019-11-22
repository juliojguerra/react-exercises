import React from "react";

const Item = ({ photo, removePhoto }) => {
  const handleRemoveClick = () => {
    removePhoto(photo);
  };
  return (
    <div>
      <p>Item: {photo.id}</p>
      <p>ID: {photo.photoId} </p>
      <p>Title: {photo.title}</p>
      <button onClick={handleRemoveClick}>Remove</button>
      <br />
      <img src={photo.thumbnailUrl} alt="#" />
      <br />
    </div>
  );
};

export default Item;
