import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function HistoryNavbar() {
  const navLinkStyles = ({ isActive }) => {
    return classNames({
      "font-bold": isActive,
      "font-normal": !isActive,
      underline: isActive,
      "bg-secondary": isActive,
    });
  };
  return (
    <nav>
      <NavLink className={navLinkStyles} to="faq">
        View the FAQs
      </NavLink>
      <NavLink className={navLinkStyles} to="contact">
        Contact Us
      </NavLink>
    </nav>
  );
}
