import React, { useEffect } from "react";
import SearchBar from "../Searchbar/SearchBar.js";
import { useDispatch } from "react-redux";

import { fetchPictures } from "../../actions/";
import PicturesContainer from "../PicturesContainer/PicturesContainer.js";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPictures("dog"));
  }, [dispatch]);

  return (
    <div className="app">
      <SearchBar />
      <PicturesContainer />
    </div>
  );
};

export default App;
