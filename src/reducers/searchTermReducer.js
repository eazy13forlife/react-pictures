import types from "../actions/types.js";

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default searchTermReducer;
