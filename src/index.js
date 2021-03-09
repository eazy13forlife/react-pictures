import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import combinedReducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(combinedReducers, applyMiddleware(ReduxThunk))}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
