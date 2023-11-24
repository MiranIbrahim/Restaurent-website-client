import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const NavBar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu"> Menu </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad"> Order </NavLink>
      </li>
      {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
      <li>
        <NavLink to="/private"> Private </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/cart' className=" text-xl">
          <FaCartShopping/>
          <div className="badge badge-secondary">+{cart.length}</div>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-60 text-white max-w-screen-xl">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-slate-500"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          Bistro Boss Restaurent
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex gap-4 justify-center items-center mr-4">
              <p>{user.displayName}</p>
              <img
                src={user.photoURL}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            </div>
            <button onClick={handleLogOut} className="btn btn-primary">
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-primary" to="login">
              {" "}
              Login{" "}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
