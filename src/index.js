import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/js/all.js';
import App from "./pages/_app";
import "./styles/main.bundle.css";

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);
