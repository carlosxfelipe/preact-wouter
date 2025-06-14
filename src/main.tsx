import { render } from "preact";
import { Router } from "wouter";
import "./styles.css";
import { App } from "./app.tsx";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")!
);
