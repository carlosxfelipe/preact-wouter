import React, { useState } from "react";

type AuthFormProps = {
  title: string;
  onSubmit: (username: string, password: string) => void;
  footer?: React.ReactNode;
};

export const AuthForm = ({ title, onSubmit, footer }: AuthFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
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
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleInputChange(setUsername)}
              className="w-full"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange(setPassword)}
              className="w-full"
              autoComplete="off"
            />
          </div>

          <button type="submit" className="w-full">
            {title}
          </button>
        </form>

        {footer && <div className="mt-6 text-center">{footer}</div>}
      </div>
    </div>
  );
};
