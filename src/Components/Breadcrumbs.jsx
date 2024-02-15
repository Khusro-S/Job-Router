import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ mode }) {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return (
    <div className="breadcrumbs flex justify-between">
      <div className="breaNav flex gap-2">{crumbs}</div>

      <div className="m-0 relative">
        <input
          id="mode"
          name="mode"
          type="checkbox"
          className="mode opacity-0 peer"
        />
        <label
          htmlFor="mode"
          onClick={mode}
          className="relative before:border before:border-solid before:border-white  before:bg-secondary before:absolute before:top-0 before:right-0 before:w-12 before:h-6 before:rounded-2xl before:transition-colors before:duration-200 
           after:absolute after:top-1 after:right-1 after:w-4 after:h-4 after:rounded-full after:bg-white after:transition-transform after:duration-200 peer-checked:before:bg-primary peer-checked:after:-translate-x-6"
        ></label>
      </div>
    </div>
  );
}
