import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = ({ onSubmit, setSearchValue, searchValue }) => {
  const [searchInput, setSearchInput] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchInput);
    setSearchValue(searchInput);
  };
  return (
    <form
      action="urlofthepageontheservethatthisformwillgoto"
      methood="POST"
      onSubmit={onFormSubmit}
    >
      <div className="field">
        <input
          placeholder="Search image..."
          type="text"
          name="user search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default SearchBar;
