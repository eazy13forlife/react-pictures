import React, { useState, useEffect } from "react";
import SearchBar from "../Searchbar/SearchBar.js";
import axios from "axios";
import unsplashKey from "../../apikeys.js";
import PicturesContainer from "../PicturesContainer/PicturesContainer.js";
import "./App.css";
import Loader from "../Loader/Loader.js";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [picturesError, setPicturesError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("dogs");

  useEffect(() => {
    fetchPhotos(searchValue);
  }, []);

  const fetchPhotos = async (searchString) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            page: 1,
            query: searchString,
            per_page: 12,
            client_id: unsplashKey,
          },
        }
      );
      setPictures(response.data.results);
      setPicturesError(false);
    } catch (error) {
      setPicturesError("Sorry, pictures could not be accessed.");
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <SearchBar
        onSubmit={fetchPhotos}
        setSearchValue={setSearchValue}
        searchSValue={searchValue}
      />
      <PicturesContainer
        pictures={pictures}
        picturesError={picturesError}
        loading={loading}
        searchValue={searchValue}
      />
    </div>
  );
};

export default App;
