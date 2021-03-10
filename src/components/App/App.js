import React, { useState, useEffect } from "react";
import SearchBar from "../Searchbar/SearchBar.js";
import axios from "axios";
import unsplashKey from "../../apikeys.js";
import { useSelector, useDispatch } from "react-redux";

import { fetchPictures } from "../../actions/";
import PicturesContainer from "../PicturesContainer/PicturesContainer.js";
import "./App.css";
import Loader from "../Loader/Loader.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPictures("dog"));
  }, []);

  return (
    <div className="app">
      <SearchBar />
      <PicturesContainer />
    </div>
  );
};

export default App;
