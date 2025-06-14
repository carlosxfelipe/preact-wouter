import { Route } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem", maxWidth: "1280px", margin: "0 auto" }}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </>
  );
}
