import { useNavigate, useRouteError } from "react-router-dom";

export default function FaqError() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="faq-error">
      <h2>Error</h2>
      <p>
        {error.message.includes("Failed to fetch")
          ? "Connection refused. Make sure the server is running."
          : error.mesage}
      </p>
      <p>
        Go{" "}
        <span
          onClick={() => navigate(-1)}
          className="hover:text-secondary py-0 rounded-sm border-b-2 border-solid border-secondar cursor-pointer"
        >
          back
        </span>
      </p>
    </div>
  );
}
