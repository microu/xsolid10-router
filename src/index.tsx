/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { DataContextProvider } from "./data/context";

const root = document.getElementById("root");

render(
  () => (
    <DataContextProvider>
      <Router source={hashIntegration()}>
        <App />
      </Router>
    </DataContextProvider>
  ),
  root!
);
