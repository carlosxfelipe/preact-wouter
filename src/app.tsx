import { Redirect, Route, Switch, useLocation } from "wouter";
import Login from "./pages/Login";
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

function PrivateRoute({ component: Component }: { component: any }) {
  const isAuthenticated = true;

  return isAuthenticated ? <Component /> : <Redirect to="/login" />;
}

export function App() {
  const [location] = useLocation();

  const noLayoutRoutes = ["/login", "/register"];

  const useLayout = !noLayoutRoutes.includes(location);

  const content = (
    <main className="p-4 max-w-5xl mx-auto">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={() => <PrivateRoute component={Home} />} />
        <Route
          path="/about"
          component={() => <PrivateRoute component={About} />}
        />
        <Route component={NotFound} />
      </Switch>
    </main>
  );

  return useLayout ? (
    <Layout>
      <Navbar />
      {content}
    </Layout>
  ) : (
    content
  );
}
