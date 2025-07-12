import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const getLink = (path) => {
    return location.pathname === path
      ? 'text-blue-600 font-bold'
      : 'text-black hover:text-blue-500';
  };

  return (
    <div className="p-7">
      <nav
        className="w-full h-10 items-center flex rounded-2xl flex-col"
        style={{ backgroundColor: '#fafaf7' }}
      >
        <div className="flex items-center ml-15">
          <h1 className="font-bold text-4xl">Fitness</h1>
          <div className="flex space-x-8 ml-60 font-semibold font-[sans-serif]">
            <Link to="/" className={getLink('/')}>Home</Link>
            <Link to="/subscription" className={getLink('/subscription')}>Exercise</Link>
            <Link to="/about" className={getLink('/about')}>About us</Link>
            <Link to="/contact" className={getLink('/contact')}>Contact</Link>
          </div>
          <div className="button ml-75">
            <Link to="/sign">
              <button className="rounded-xl p-2 h-10 w-30 text-white font-medium font-[sans]" style={{ backgroundColor: '#282a28' }}>
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
