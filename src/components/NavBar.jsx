import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";

function NavBar() {
  return (
    <div className="navbar bg-[#136420] text-primary-content shadow-sm px-4">

      <div className="navbar-start flex items-center gap-3">
        <div className="w-10 rounded-full overflow-hidden">
          <img src={logo} alt="Fashion Hub Logo" />
        </div>
        <h1 className="text-white font-bold text-xl">Fashion Hub</h1>
      </div>

      <div className="navbar-center hidden lg:flex min-w-96">
        <label className="input rounded-2xl flex items-center gap-2">
          <input
            className="placeholder-gray-400"
            type="search"
            placeholder="Search"
          />
        </label>
      </div>

      <div className="navbar-end flex items-center gap-4">

        {/* Cart */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-[#136420]">
            Login
          </button>
        </Link>

      </div>
    </div>
  );
}

export default NavBar;
