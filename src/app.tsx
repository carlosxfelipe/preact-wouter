import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";

function NotFound() {
  return (
    <div>
      <h1 className="text-xl font-bold">Página não encontrada</h1>
      <p>Desculpe, a página que você tentou acessar não existe.</p>
    </div>
  );
}

export function App() {
  return (
    <Layout>
      <Navbar />
      <main className="p-4 max-w-5xl mx-auto">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Layout>
  );
}
