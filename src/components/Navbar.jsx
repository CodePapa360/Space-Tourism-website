import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4 md:px-0 md:py-8">
      <Link to="/home" className="w-10 md:mx-8">
        <img className="w-full" src="/images/shared/logo.svg" alt="Logo" />
      </Link>

      <span className="z-10 -mr-8 ml-auto hidden h-[1px] grow bg-slate-500 md:block"></span>

      <span
        onClick={() => setIsOpen((open) => !open)}
        className="z-10 cursor-pointer md:hidden"
      >
        <img
          src={`/images/shared/icon-${isOpen ? "close" : "hamburger"}.svg`}
          alt="Menu"
        />
      </span>

      <nav
        className={`${
          isOpen ? "right-0" : "right-[-100%]"
        } fixed top-0 h-screen w-full max-w-[13rem] bg-slate-700/25 backdrop-blur-lg transition-all md:relative md:right-0 md:h-auto md:w-auto md:max-w-none md:px-20`}
      >
        <ul className="mt-14 flex flex-col gap-2 pl-8 uppercase md:mt-0 md:flex-row md:gap-8 md:pl-0">
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
