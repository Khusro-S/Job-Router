import { NavLink } from "react-router-dom";
import classNames from "classnames";
export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return classNames({
      "font-bold": isActive,
      "font-normal": !isActive,
      underline: isActive,
      "dark:bg-secondary bg-primary": isActive,
    });
  };
  return (
    <nav className="">
      <h1>Job-Router</h1>
      <NavLink className={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink className={navLinkStyles} to="/help">
        Help
      </NavLink>
      <NavLink className={navLinkStyles} to="/careers">
        Careers
      </NavLink>
    </nav>
  );
}
