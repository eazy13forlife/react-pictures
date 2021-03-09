import { combineReducers } from "redux";

import hasPicturesErrorReducer from "./hasPicturesErrorReducer.js";
import isLoadingReducer from "./isLoadingReducer.js";
import picturesReducer from "./picturesReducer.js";

export default combineReducers({
  pictures: picturesReducer,
  isLoading: isLoadingReducer,
  hasPicturesError: hasPicturesErrorReducer,
});
