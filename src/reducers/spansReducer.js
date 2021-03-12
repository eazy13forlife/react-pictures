import types from "../actions/types.js";

const spansReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FIX_SPAN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default spansReducer;
