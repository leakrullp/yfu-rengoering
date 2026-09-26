import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./NavBar.css";
import labels from "../../assets/data/strings";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1>
        <Link to="/" className="logo-link">
          <h1>{labels.meta.name ?? "Portfolio"}</h1>
        </Link>
      </h1>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <h5>{labels.nav.about ?? "About"}</h5>
          </Link>
        </li>

        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            <h5>{labels.nav.projects ?? "Projects"}</h5>
          </Link>
        </li>

        <li>
          <Link to="/cv" onClick={() => setMenuOpen(false)}>
            <h5>{labels.nav.cv ?? "CV"}</h5>
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <h5>{labels.nav.contact ?? "Contact"}</h5>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
