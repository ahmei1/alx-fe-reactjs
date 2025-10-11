import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost'; // Used for the dynamic route
import ProtectedRoute from './components/ProtectedRoute'; // Used for protection

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px 20px', background: '#333' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        <Link to="/profile" style={{ color: 'white', marginRight: '15px' }}>Profile (Protected)</Link> 
        <Link to="/blog/101" style={{ color: 'white' }}>Blog Post 101</Link> 
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Basic Route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic Routing Implemented: "/blog/:id" */}
          <Route path="/blog/:id" element={<BlogPost />} /> 

          {/* Protected Route Implemented (Wraps the profile path) */}
          <Route element={<ProtectedRoute />}>
            {/* The * is needed here since Profile.jsx contains its own <Routes> */}
            <Route path="/profile/*" element={<Profile />} /> 
          </Route>

          {/* Fallback */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;