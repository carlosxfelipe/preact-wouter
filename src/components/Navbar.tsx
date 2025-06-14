import { Link } from "wouter";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Meu Site
        </Link>
        <div className="nav-links">
          <Link href="/">Início</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </div>
    </nav>
  );
}
