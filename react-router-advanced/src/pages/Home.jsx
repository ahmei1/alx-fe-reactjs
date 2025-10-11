import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <nav className="mt-4">
        <Link className="mr-4 text-blue-500" to="/profile/details">Profile Details</Link>
        <Link className="mr-4 text-blue-500" to="/profile/settings">Profile Settings</Link>
        <Link className="text-blue-500" to="/post/1">Post 1</Link>
      </nav>
    </div>
  );
}
