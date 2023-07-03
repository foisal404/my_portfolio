import { Link } from 'react-scroll'

const NavHead = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">foisal.dev</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to='home'   smooth={true} offset={50} duration={500} >Home</Link>
          </li>
          
          <li>
          <Link to='about' activeClass="active"   smooth={true} offset={50} duration={500} >About</Link>
          </li>
          
          <li>
          <Link to='conatct' activeClass="active"   smooth={true} offset={50} duration={500} >Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavHead;
