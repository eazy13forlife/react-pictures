import types from "./types.js";

const throwPicturesError = (boolean) => {
  return {
    type: types.THROW_PICTURES_ERROR,
    payload: boolean,
  };
};

export default throwPicturesError;
