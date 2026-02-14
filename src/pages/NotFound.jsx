import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold text-dark">404</h1>
      <p className="fs-5 text-muted mb-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/home"
        className="btn px-4 py-2 btn-color">
        Go Back Home
      </Link>
    </div>
  );
}
