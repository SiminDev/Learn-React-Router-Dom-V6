import { NavLink } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/product"
      >
        Product
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navigation;
