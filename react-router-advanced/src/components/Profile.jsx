import { Link, Outlet } from 'react-router-dom';

const Profile = () => (
  <div>
    <h2>User Profile</h2>
    <nav>
      <Link to="details" style={{ marginRight: '15px' }}>Details</Link>
      <Link to="settings">Settings</Link>
    </nav>
    <hr />
    {/* Renders the nested route component (Details or Settings) */}
    <Outlet /> 
  </div>
);
export default Profile;