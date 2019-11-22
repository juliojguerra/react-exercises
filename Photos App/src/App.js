import React, { useState, useEffect } from "react";
import PhotoDisplay from "./components/PhotoDisplay";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [removedPhotos, setRemovedPhotos] = useState([]);

  const size = 10;

  const removePhoto = photoToRemove => {
    setRemovedPhotos(removedPhotos.concat(photoToRemove));

    const updatedPhotos = photos.filter(photo => photo.id !== photoToRemove.id);
    setPhotos(updatedPhotos);
  };

  const recoverPhoto = photoToRecover => {
    setPhotos(photos.concat(photoToRecover));
    //TBD
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, size)));
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <PhotoDisplay
        photos={photos}
        removePhoto={removePhoto}
        removedPhotos={removedPhotos}
        recoverPhoto={recoverPhoto}
      />
    </div>
  );
};

export default App;
