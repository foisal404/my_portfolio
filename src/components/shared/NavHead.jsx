import { Link } from "react-scroll";

const NavHead = () => {
  const navItem = (
    <>
      <li>
        <Link to="home" smooth={true} offset={50} duration={500}>
          Home
        </Link>
      </li>

      <li>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
      </li>

      <li>
        <Link
          to="projects"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </Link>
      </li>

      <li>
        <Link
          to="conatct"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 fixed top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* li  */}
              {
                navItem
              }
            </ul>
          </div>
          <Link to='home' className="btn btn-ghost normal-case text-xl">foisal.dev</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* li  */}
              {navItem}
          </ul>
        </div>
        
      </div>

      {/* <div className="navbar bg-base-100 fixed top-0 z-10">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">foisal.dev</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="home" smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about"
                activeClass="active"
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="projects"
                activeClass="active"
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="conatct"
                activeClass="active"
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default NavHead;
