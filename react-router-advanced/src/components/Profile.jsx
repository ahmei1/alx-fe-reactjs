import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <nav className="mt-2">
        <Link className="mr-4 text-blue-500" to="details">Details</Link>
        <Link className="text-blue-500" to="settings">Settings</Link>
      </nav>
      <div className="mt-4 border p-4 rounded bg-gray-50">
        <Outlet /> {/* Nested Routes render here */}
      </div>
    </div>
  );
}
