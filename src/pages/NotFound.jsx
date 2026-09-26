import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="section text-center">
      <div className="wrap">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-ink-mute mb-8">This page doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </div>
    </div>
  );
}
