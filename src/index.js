import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import "./i18n";
ReactDOM.render(
  <Router>
    <Helmet>
      <title>MK Green Energy</title>
      <meta name="description" content="Parent MK Green Energy" />
    </Helmet>
    <App />
    <ToastContainer />
  </Router>,
  document.getElementById("root")
);
