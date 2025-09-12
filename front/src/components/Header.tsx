import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

function Header({ isMobileMenuOpen, onToggleMobileMenu }: HeaderProps) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-img" src="/src/logo.png" alt="logo orecipes" />
      </Link>
      <h1 className="header-title">Mon livre de recettes </h1>

      {/* Bouton burger pour mobile/tablette */}
      <button
        className="burger-button"
        onClick={onToggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Header;