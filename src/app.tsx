import { Redirect, Route, Switch, useLocation } from "wouter";
import { Login, Register, Home, About, NotFound } from "./pages";
import { Navbar } from "./components/Navbar";
import { Layout } from "./layouts/Layout";
import { AuthLayout } from "./layouts/AuthLayout";
import { useAuth } from "./contexts/AuthContext";

function PrivateRoute({ component: Component }: { component: any }) {
  const { isAuthenticated } = useAuth();

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
        <Route path="/register" component={Register} />
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
    <AuthLayout>{content}</AuthLayout>
  );
}
