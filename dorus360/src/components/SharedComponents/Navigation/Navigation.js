import { NavLink } from "react-router-dom";

function Navigation() {
  const handlerActiveLink = ({ isActive }) =>
    isActive ? "navigation__link navigation__link_active" : "navigation__link";

  return (
    <nav className="navigation">
      <NavLink to="/" className={handlerActiveLink}>
        Home
      </NavLink>
      <NavLink to="/products" className={handlerActiveLink}>
        Products
      </NavLink>
      <NavLink to="/about" className={handlerActiveLink}>
        About
      </NavLink>
      <NavLink to="/contacts" className={handlerActiveLink}>
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
