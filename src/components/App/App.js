import React from "react";
import SearchBar from "../Searchbar/SearchBar.js";

import PicturesContainer from "../PicturesContainer/PicturesContainer.js";
import usePictures from "../../custom_hooks/usePictures.js";
import "./App.css";

const App = () => {
  const pictures = usePictures("dog");
  return (
    <div className="app">
      <SearchBar />
      <PicturesContainer />
    </div>
  );
};

export default App;
