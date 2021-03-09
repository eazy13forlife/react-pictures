import types from "./types.js";

const hasPicturesError = (boolean) => {
  return {
    type: types.HAS_PICTURES_ERROR,
    payload: boolean,
  };
};

export default hasPicturesError;
