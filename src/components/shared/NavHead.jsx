const NavHead = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">foisal.dev</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a>Contact Me</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavHead;
