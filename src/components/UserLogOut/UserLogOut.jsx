import './UserLogOut.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({user, setUser}) {
  function handleLogOut() {
    logOut();
    setUser(null);
  }

  return (
    <div className="UserLogOut">
      <button className="logout" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
