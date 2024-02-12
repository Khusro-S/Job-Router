import { Link, useRouteError } from "react-router-dom";

export default function CareerError() {
  const error = useRouteError();
  return (
    <div className="career-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">
        Back to the{" "}
        <span className="hover:text-secondary py-0 rounded-sm border-b-2 border-solid border-secondary">
          homepage
        </span>
      </Link>
    </div>
  );
}
