import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";
import './styles/style.css'

import AppRoute from "./Routes/AppRoute";

import * as serviceWorker from './components/Services';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


serviceWorker.register();