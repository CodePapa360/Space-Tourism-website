import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute left-0 top-0 flex w-full items-start justify-between md:items-center">
      <Link to="/home" className="m-4 w-10">
        <img className="w-full" src="/images/shared/logo.svg" alt="Logo" />
      </Link>

      {/* <span className="z-10 -mr-4 ml-auto h-[1px] w-full bg-slate-500"></span> */}

      <span
        onClick={() => setIsOpen((open) => !open)}
        className="z-10 m-4 cursor-pointer"
      >
        <img src="/images/shared/icon-hamburger.svg" alt="" />
      </span>

      <nav
        className={`${
          isOpen ? "right-0" : "right-[-100%]"
        } fixed  top-0 h-screen w-[60%] bg-slate-700/25 backdrop-blur-lg transition-all`}
      >
        <ul className="mt-14 flex flex-col gap-2 p-4 ">
          <li>
            <NavLink className="navItem" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/destination">
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/crew">
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink className="navItem" to="/technology">
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
