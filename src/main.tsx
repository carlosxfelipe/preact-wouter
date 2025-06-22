import { render } from "preact";
import { Router } from "wouter";
import "./styles.css";
import { App } from "./app.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
  document.getElementById("app")!
);
