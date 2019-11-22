import React from "react";
import Item from "../Item";
import RemovedPhoto from "../RemovedPhoto";

const PhotoDisplay = ({ photos, removePhoto, removedPhotos, recoverPhoto }) => {
  return (
    <div>
      <div>
        {photos.map(photo => (
          <Item key={photo.id} photo={photo} removePhoto={removePhoto} />
        ))}
      </div>
      <div>
        <h2>Removed Photos</h2>
        {removedPhotos.map(removedPhoto => (
          <RemovedPhoto
            key={removedPhoto.id}
            removedPhoto={removedPhoto}
            recoverPhoto={recoverPhoto}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoDisplay;
