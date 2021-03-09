import types from "../actions/types.js";

const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default isLoadingReducer;
