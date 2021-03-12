import React from "react";
import { createSelector } from "reselect";

import "./PicturesContainer.css";
import ImageCard from "../ImageCard/ImageCard.js";
import Loader from "../Loader/Loader.js";
import { useSelector } from "react-redux";

const getStates = createSelector(
  (state) => {
    return state.searchTerm;
  },
  (state) => {
    return state.pictures;
  },
  (state) => {
    return state.isLoading;
  },
  (state) => {
    return state.hasPicturesError;
  },
  (searchTerm, pictures, isLoading, hasPicturesError) => {
    return { searchTerm, pictures, isLoading, hasPicturesError };
  }
);

console.log(getStates);

const PicturesContainer = () => {
  const { searchTerm, pictures, isLoading, hasPicturesError } = useSelector(
    (state) => {
      return getStates(state);
    }
  );

  const renderedPictures = pictures.map((object) => {
    return (
      <ImageCard
        key={object.id}
        image={object.urls.regular}
        description={object.alt_description}
        id={object.id}
      />
    );
  });

  const renderErrorClass = () => {
    if ((hasPicturesError || !pictures.length) && !isLoading) {
      return "error";
    }
    return "";
  };

  const renderPictures = () => {
    if (hasPicturesError && !isLoading) {
      return <p>There was an error accessing your images</p>;
    } else if (!pictures.length && !isLoading) {
      return <p>{`No images could be found for ""${searchTerm}"`}</p>;
    } else {
      return renderedPictures;
    }
  };

  return (
    <div className="pictures">
      {isLoading ? <Loader message={`Searching for "${searchTerm}"`} /> : null}
      <div className={`pictures-container ${renderErrorClass()} `}>
        {renderPictures()}
      </div>
    </div>
  );
};

export default PicturesContainer;
