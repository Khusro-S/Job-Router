import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
        assumenda ipsum eos nostrum quidem magni quos voluptates doloribus
        aperiam sunt, provident officia esse veniam. Ratione recusandae ex rerum
        qui? Exercitationem.
      </p>

      <p>
        Go to{" "}
        <Link
          to="/"
          className="hover:text-secondary py-0 rounded-sm border-b-2 border-solid border-secondary"
        >
          Home Page
        </Link>
        .
      </p>
    </div>
  );
}
