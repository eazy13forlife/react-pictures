import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import hasPicturesErrorReducer from "./hasPicturesErrorReducer.js";
import isLoadingReducer from "./isLoadingReducer.js";
import picturesReducer from "./picturesReducer.js";
import searchTermReducer from "./searchTermReducer.js";
import spansReducer from "./spansReducer.js";

export default combineReducers({
  pictures: picturesReducer,
  isLoading: isLoadingReducer,
  hasPicturesError: hasPicturesErrorReducer,
  form: formReducer,
  searchTerm: searchTermReducer,
  spans: spansReducer,
});
