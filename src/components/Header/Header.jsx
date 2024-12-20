import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../Shared/AuthProvider/AuthProvider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleLogOutBtn = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
    console.log("log out");
  };

  return (
    <div className="container mx-auto py-10">
      <div className="navbar nav-box rounded-2xl py-5 px-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className="text-lg font-medium text-[#010001] hover:text-[#000000] hover:bg-none"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-lg font-medium text-[#010001] hover:text-[#000000] hover:bg-none"
                  to={"/listedbooks"}
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-lg font-medium text-[#010001] hover:text-[#000000] hover:bg-none"
                  to={"/pagetoread"}
                >
                  Page to Read
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl lg:text-4xl text-[#010001] font-extrabold"
          >
            Book.<span className="text-[#EC669F]">Express</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu header-menu menu-horizontal px-1">
            <li>
              <NavLink
                className="text-lg font-normal text-[#010001] hover:text-[#000000] hover:bg-none"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg font-normal text-[#010001] hover:text-[#000000] hover:bg-none"
                to={"/listedbooks"}
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg font-normal text-[#010001] hover:text-[#000000] hover:bg-none"
                to={"/pagetoread"}
              >
                Page to Read
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-lg font-normal text-[#010001] hover:text-[#000000] hover:bg-none"
                to={"/contactus"}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <Link
              onClick={handleLogOutBtn}
              className="bg-[#7F5DF6] text-white py-2 rounded-full px-6 font-semibold"
            >
              Log Out
            </Link>
          ) : (
            <>
              <Link
                to={"/signin"}
                className="mr-5 bg-[#EC669F] text-white py-2 rounded-full px-6 font-semibold"
              >
                Sign Up
              </Link>
              <Link
                to={"/login"}
                className="bg-[#7F5DF6] text-white py-2 rounded-full px-6 font-semibold"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
