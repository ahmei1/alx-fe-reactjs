import { Link, Routes, Route } from 'react-router-dom';
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
    
    {/* Defining NESTED ROUTES inside the component */}
    <Routes>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
      <Route index element={<ProfileDetails />} />
    </Routes>
  </div>
);
export default Profile;