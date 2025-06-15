import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";

function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>Desculpe, a página que você tentou acessar não existe.</p>
    </div>
  );
}

export function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem", maxWidth: "1280px", margin: "0 auto" }}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  );
}
