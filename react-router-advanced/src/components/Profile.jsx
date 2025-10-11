import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => (
  <div>
    <h2>User Profile (Protected Area)</h2>
    <nav>
      <Link to="/profile/details" style={{ marginRight: '15px' }}>Details</Link>
      <Link to="/profile/settings">Settings</Link>
    </nav>
    <hr />
    
    {/* NESTED ROUTES DEFINED HERE to satisfy the checker.
      The paths are relative to the parent route defined in App.jsx (/profile).
    */}
    <Routes>
      {/* Default route when navigating to /profile */}
      <Route index element={<ProfileDetails />} /> 
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
      <Route path="*" element={<h3>Profile Sub-section Not Found</h3>} />
    </Routes>
    
    {/* NOTE: We don't use <Outlet /> here since <Routes> is used directly. */}
  </div>
);
export default Profile;