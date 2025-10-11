import { Navigate, Outlet } from 'react-router-dom';

// Simple mock authentication state
const isAuthenticated = true; // Set to 'false' to test redirection

const ProtectedRoute = () => {
  if (!isAuthenticated) {
    // Redirects unauthenticated users to the home page
    return <Navigate to="/" replace />;
  }

  // Renders the child route components if authenticated
  return <Outlet />;
};

export default ProtectedRoute;