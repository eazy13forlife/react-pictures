import unsplashKey from "../apikeys.js";
import axios from "axios";
import types from "./types.js";

const fetchPictures = (searchString) => {
  return async (dispatch, getState) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        page: 1,
        query: searchString,
        per_page: 12,
        client_id: unsplashKey,
      },
    });

    dispatch({
      type: types.FETCH_PICTURES,
      payload: response.data.results,
    });
  };
};
export default fetchPictures;
