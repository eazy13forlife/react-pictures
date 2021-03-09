import types from "./types.js";

const isLoading = (boolean) => {
  return {
    type: types.IS_LOADING,
    payload: boolean,
  };
};

export default isLoading;
