import './NavBar.css'
/*import { Link } from 'react-router-dom'*/
import { NavLink, useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <img id="image" src="Images/Digital.jpg" alt="Logo" height="80" width="80" />
        <div>
          <h1>DIGITAL SPRINGS COMPUTING</h1>
          <h3>......digital computer waves!💿</h3>
        </div>
        <ul>
         <li><NavLink to="/Home">Home</NavLink></li>
          <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
        { /*<li><NavLink to="/Register">Register</NavLink></li>*/}
          <li><NavLink to="/Login">Login</NavLink></li>
          <li><NavLink to="/Services">Services<i class="fas fa-caret-down"></i></NavLink>
          <ul class="dropdown-menu">
      <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Apply">Tech-link</NavLink></li>
          <li><NavLink to="/Jobs">Jobs</NavLink></li>
        </ul>
          </li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
       
<button className="button" onClick={() => navigate('/Register')}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    viewBox="0 0 20 20"
    height="20"
    fill="none"
    className="svg-icon"
  >
    <g strokeWidth="1.5" strokeLinecap="round" stroke="#ff342b">
      <path
        d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"
      ></path>
      <path
        d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"
      ></path>
    </g>
  </svg>
  <span className="label"><strong>Get Started</strong></span>
  
</button>
       </ul>
      </nav>
    </div>
  );
}

export default NavBar
