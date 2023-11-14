import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/crew">Crew</NavLink>
      </li>
      <li>
        <NavLink to="/technology">Technology</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
