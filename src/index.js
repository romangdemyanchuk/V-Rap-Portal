/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./modules/store/create-store";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import StoreContext from './components/StoreContext'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
