import types from "./types.js";

const updateLoading = (boolean) => {
  return {
    type: types.UPDATE_LOADING,
    payload: boolean,
  };
};

export default updateLoading;
