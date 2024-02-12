import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <div>
      <h2>Thank you for contacting us </h2>
      <p>
        Go{" "}
        <Link
          to="/"
          className="hover:text-secondary py-0 rounded-sm border-b-2 border-solid border-secondar"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
