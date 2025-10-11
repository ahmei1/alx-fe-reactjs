import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import BlogPost from './pages/BlogPost';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px 20px', background: '#333' }}>
        <Link to="/" style={{ color: 'white', marginRight: '15px' }}>Home</Link>
        {/* Profile is protected, but the link is visible */}
        <Link to="/profile" style={{ color: 'white', marginRight: '15px' }}>Profile</Link> 
        {/* Dynamic Route Example */}
        <Link to="/posts/123" style={{ color: 'white' }}>Post 123</Link> 
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* Basic Route */}
          <Route path="/" element={<Home />} />

          {/* Dynamic Route */}
          <Route path="/posts/:postId" element={<BlogPost />} />

          {/* Protected Routes Wrapper */}
          <Route path="/profile" element={<ProtectedRoute />}>
            {/* Nested Routes inside the Profile component */}
            <Route element={<Profile />}>
              <Route index element={<ProfileDetails />} /> {/* Default child route */}
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>
          </Route>

          {/* Catch-all for 404 - Optional */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;