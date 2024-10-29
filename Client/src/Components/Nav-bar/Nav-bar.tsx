import "./Nav-bar.css";

export const Nav = () => {
  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        Logo
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Servicios
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Acerca de
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
