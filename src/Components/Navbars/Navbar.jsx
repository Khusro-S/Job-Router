import { NavLink } from "react-router-dom";
import classNames from "classnames";
export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return classNames({
      "font-bold": isActive,
      "font-normal": !isActive,
      underline: isActive,
      "bg-secondary": isActive,
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
    </nav>
  );
}
