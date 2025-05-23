import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";

import "./styles/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
