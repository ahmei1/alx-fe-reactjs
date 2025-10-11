import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Login Page</h1>
      <p>Simulate login here.</p>
      <Link to="/" className="text-blue-500 mt-2 block">Go to Home</Link>
    </div>
  );
}
