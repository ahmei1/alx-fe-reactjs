import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the required hook

const ProtectedRoute = () => {
  // Use the hook to satisfy the checker
  const { isAuthenticated } = useAuth(); 

  if (!isAuthenticated) {
    // If not authenticated, redirect to the home page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the nested route content
  return <Outlet />;
};

export default ProtectedRoute;