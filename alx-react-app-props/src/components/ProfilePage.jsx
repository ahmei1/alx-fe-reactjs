import UserInfo from './UserInfo';
import UserContext from './UserContext';
import { useContext } from 'react';

function ProfilePage() {
    const userData = useContext(UserContext);
  return <h1>the user: {userData.name}, and the email: {userData.email}</h1>;
}

export default ProfilePage;