import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = true; // Set to 'false' to test redirection

const ProtectedRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />; // Renders the protected child route
};

export default ProtectedRoute;