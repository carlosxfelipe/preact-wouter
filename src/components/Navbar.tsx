import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          Meu Site
        </Link>
        <div className="space-x-6">
          <Link href="/">Início</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </div>
    </nav>
  );
}
