import { useState } from "react";
import { useLocation } from "wouter";

const Login = () => {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação temporária
    if (username === "user" && password === "123") {
      setLocation("/");
    } else {
      alert("Usuário ou senha inválidos");
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setter(e.currentTarget.value);

  return (
    <div className="flex w-full max-w-6xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2 hidden lg:block">
        <img
          src="https://placehold.co/800x/667fff/ffffff.png?text=Sua+Imagem&font=Montserrat"
          alt="Imagem de Exemplo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Entrar</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-600 dark:text-gray-300"
            >
              Usuário
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange(setUsername)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 dark:text-gray-300"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500 dark:accent-blue-400"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 dark:text-gray-300 ml-2"
            >
              Lembrar-me
            </label>
          </div>
          <div className="mb-6 text-blue-600 dark:text-blue-400">
            <a href="#" className="hover:underline">
              Esqueceu a senha?
            </a>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Entrar
          </button>
        </form>
        <div className="mt-6 text-blue-600 dark:text-blue-400 text-center">
          <a href="#" className="hover:underline">
            Cadastre-se aqui
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
