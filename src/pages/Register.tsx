import { useLocation } from "wouter";
import { AuthForm } from "../components/AuthForm";

export const Register = () => {
  const [, setLocation] = useLocation();

  const handleRegister = (username: string, password: string) => {
    // TODO: Implementar a lógica de registro do usuário
    alert(`Usuário ${username} cadastrado com sucesso!`);
    setLocation("/login");
  };

  return (
    <AuthForm
      title="Cadastrar"
      onSubmit={handleRegister}
      footer={<a href="/login">Já tem uma conta? Entrar</a>}
    />
  );
};
