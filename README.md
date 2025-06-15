# Vite + Preact + TypeScript + Wouter Template

Este é um template simples usando **Vite**, **Preact**, **TypeScript** e **Wouter**. Ideal para iniciar projetos leves com navegação por rotas.

## Tecnologias

- [Vite](https://vitejs.dev/)
- [Preact](https://preactjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Wouter](https://github.com/molefrog/wouter)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [Bun](https://bun.sh/)

## Como usar

1. **Instalar dependências**:

   ```bash
   bun install
   ```

2. **Iniciar o projeto em modo de desenvolvimento**:

   ```bash
   bun dev
   ```

## Como este projeto foi criado

```bash
bun create vite meu-projeto --template preact-ts
bun add wouter
bun add tailwindcss @tailwindcss/vite
```

Em vite.config.ts colocar

```tsx
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss()],
});
```

## Observação

Este repositório é apenas um **template base** para projetos que utilizam Preact com Vite e Wouter. Sinta-se à vontade para clonar, customizar e expandir conforme necessário.
