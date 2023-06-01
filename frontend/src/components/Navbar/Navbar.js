import { Link } from "react-router-dom";
import './Navbar.css'
import {useLogout} from '../../hooks/useLogout'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const {logout} = useLogout()
  const navigate = useNavigate();

  const handleLogOut = async () => {
    logout()
    // navigate to "/"
    navigate('/');
  }

  return (
    <nav className="nav">
      <div className="navCol">
        <Link to="/" className="navTitle">
          KOBIGAAN
        </Link>
      </div>
      <div className="navCol">
        <button onClick={handleLogOut} className="navLogout">
          Log Out
          </button>
      </div>
    </nav>
  );
}
