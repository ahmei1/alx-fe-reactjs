import { Navigate, Outlet } from 'react-router-dom';

// **Mock Authentication State**
// Change this to 'false' to test the protection/redirection
const isAuthenticated = true; 

const ProtectedRoute = () => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to the home page
    return <Navigate to="/" replace />;
  }

  // If authenticated, render the nested route content (via Outlet)
  return <Outlet />;
};

export default ProtectedRoute;