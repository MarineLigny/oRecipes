import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© 2025 - Mon livre de recettes</p>
      <NavLink to="/mentions-legales" className="footer-link">
        Mentions légales
      </NavLink>
    </footer>
  );
}

export default Footer;