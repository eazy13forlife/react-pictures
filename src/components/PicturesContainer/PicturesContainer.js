import React from "react";
import "./PicturesContainer.css";
import ImageCard from "../ImageCard/ImageCard.js";
import Loader from "../Loader/Loader.js";
import { useSelector, useDispatch, useStore } from "react-redux";

const PicturesContainer = () => {
  const searchTerm = useSelector((state) => {
    return state.searchTerm;
  });

  const pictures = useSelector((state) => {
    return state.pictures;
  });
  const isLoading = useSelector((state) => {
    return state.isLoading;
  });

  const hasPicturesError = useSelector((state) => {
    return state.hasPicturesError;
  });

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
      {isLoading ? <Loader message={`Searching for ${searchTerm}`} /> : null}
      <div className={`pictures-container ${renderErrorClass()} `}>
        {renderPictures()}
      </div>
    </div>
  );
};

export default PicturesContainer;
