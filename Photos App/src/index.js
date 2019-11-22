import React from "react";
import ReactDom from "react-dom";
import App from "./App";

function renderApp(AppComponent) {
  ReactDom.render(<AppComponent />, document.getElementById("root"));
}

document.addEventListener("DOMContentLoaded", function() {
  renderApp(App);
});
