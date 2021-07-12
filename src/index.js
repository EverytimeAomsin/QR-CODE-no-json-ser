import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";


import { createStore } from "redux";
import { Provider } from "react-redux";
import { menuReducer } from "./Database/menu";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(menuReducer, composeWithDevTools());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
