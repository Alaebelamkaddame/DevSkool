import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-10 pb-3  container mx-auto flex items-center justify-between pt-4 relative">
      {/* Logo (Left-aligned) */}
      <Link to="/">
        <h1 className="cursor-pointer font-extrabold text-3xl pl-8  lg:pl-4 md:pl-8">
          <span className="text-orange-600">Dev</span>Skool.
        </h1>
      </Link>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="lg:hidden pr-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Centered Navigation Menu (Desktop Only) */}
      <ul className="hidden lg:flex items-center gap-6 font-medium absolute left-1/2 transform -translate-x-1/2">
        <li className="hover:text-orange-600 transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-600 transition duration-300">
          <Link to="/Courses">Courses</Link>
        </li>
        <li className="hover:text-orange-600 transition duration-300">
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li className="hover:text-orange-600 transition duration-300">
          <Link to="/Blog">Blog</Link>
        </li>
      </ul>

      {/* Join Us Button (Right-Aligned) */}
      <Link to="/Login" className="hidden md:block">
        <button className="cursor-pointer lg:mr-9 px-4 py-2 rounded-full font-bold text-white bg-black hover:bg-orange-600 transition duration-300">
          Join Us
        </button>
      </Link>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-md flex flex-col items-center gap-4 px-6 py-6 font-medium z-50 rounded-lg">
            <li className="hover:text-orange-600">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:text-orange-600">
            <Link to="/Courses" onClick={() => setIsOpen(false)}>Courses</Link>
            </li>
            <li className="hover:text-orange-600">
            <Link to="/ContactUs" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li className="hover:text-orange-600">
            <Link to="/Blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li className="mt-2 w-full flex justify-center">
            <Link to="/Login">
                <button className="cursor-pointer px-4 py-2 rounded-full font-bold text-white bg-black hover:bg-orange-600 transition duration-300">
                Join Us
                </button>
            </Link>
            </li>
        </ul>
       )}
    </nav>
  );
}

export default NavBar;
