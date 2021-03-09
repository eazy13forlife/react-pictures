import React from "react";
import "./PicturesContainer.css";
import ImageCard from "../ImageCard/ImageCard.js";
import Loader from "../Loader/Loader.js";

const PicturesContainer = ({
  pictures,
  picturesError,
  loading,
  searchValue,
}) => {
  const renderedPictures = pictures.map((object) => {
    return (
      <ImageCard
        key={object.id}
        image={object.urls.regular}
        description={object.alt_description}
      />
    );
  });

  const renderErrorClass = () => {
    if ((picturesError || !pictures.length) && !loading) {
      return "error";
    }
    return "";
  };

  const renderPictures = () => {
    if (picturesError && !loading) {
      return <p>{picturesError}</p>;
    } else if (!pictures.length && !loading) {
      return <p>{`No pictures could be found for ""${searchValue}"`}</p>;
    } else {
      return renderedPictures;
    }
  };

  return (
    <div className="pictures">
      {loading ? <Loader message={`Searching for ${searchValue}`} /> : null}
      <div className={`pictures-container ${renderErrorClass()} `}>
        {renderPictures()}
      </div>
    </div>
  );
};

export default PicturesContainer;
