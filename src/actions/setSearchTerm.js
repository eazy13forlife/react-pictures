import types from "./types.js";

const setSearchTerm = (searchTerm) => {
  return {
    type: types.SET_SEARCH_TERM,
    payload: searchTerm,
  };
};

export default setSearchTerm;
