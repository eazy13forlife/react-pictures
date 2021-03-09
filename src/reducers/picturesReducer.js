import types from "../../src/actions/types.js";

const picturesReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_PICTURES:
      return action.payload;
    default:
      return state;
  }
};

export default picturesReducer;
