import types from "../actions/types.js";

const hasPicturesErrorReducer = (state = false, action) => {
  switch (action.type) {
    case types.THROW_PICTURES_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default hasPicturesErrorReducer;
