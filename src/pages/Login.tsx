import { useLocation } from "wouter";
import { useAuth } from "../contexts/AuthContext";
import { AuthForm } from "../components/AuthForm";

export const Login = () => {
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const handleLogin = (username: string, password: string) => {
    if (username === "user" && password === "123") {
      login();
      setLocation("/");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  return (
    <AuthForm
      title="Entrar"
      onSubmit={handleLogin}
      footer={<a href="/register">Cadastre-se aqui</a>}
    />
  );
};
