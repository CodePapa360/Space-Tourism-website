import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute left-0 top-0 mt-4 flex w-full items-center justify-between  ">
      <Link to="/home" className="mx-4 w-20">
        <img className="w-full" src="/images/shared/logo.svg" alt="Logo" />
      </Link>

      <span className="z-10 -mr-4 ml-auto h-[1px] w-full bg-slate-500"></span>

      <nav>
        <ul className="flex gap-8 bg-slate-500/25 pl-10 pr-20 backdrop-blur-sm">
          <li>
            <NavLink className="inline-block py-4" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="inline-block py-4" to="/destination">
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink className="inline-block py-4" to="/crew">
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink className="inline-block py-4" to="/technology">
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
