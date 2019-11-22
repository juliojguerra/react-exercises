import React from "react";

const RemovedPhoto = ({ removedPhoto, recoverPhoto }) => {
  const handleRemoveClick = () => {
    recoverPhoto(removedPhoto);
  };
  return (
    <div>
      <p>Item: {removedPhoto.id}</p>
      <p>ID: {removedPhoto.photoId} </p>
      <p>Title: {removedPhoto.title}</p>
      <button onClick={handleRemoveClick}>Recover</button>
      <br />
      <img src={removedPhoto.thumbnailUrl} alt="#" />
      <br />
    </div>
  );
};

export default RemovedPhoto;
