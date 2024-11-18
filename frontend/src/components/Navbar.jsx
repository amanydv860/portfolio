import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="fixed top-0 w-full flex justify-between items-center p-4 shadow-sm shadow-shinepur bg-white z-10">
      {/* Logo Section */}
      <div className="font-light font-interTight text-3xl pl-8">
        <Link
          to="/"
          onClick={() => handleScroll('home')}
          className="hover:text-shinepur transition duration-300"
        >
          <span className="inline-block transform rotate-180">V</span>M
          <span className="inline-block transform rotate-180">V</span>N
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-5 pr-10 font-interTight">
        <Link
          to="/"
          onClick={() => handleScroll('about')}
          className="hover:text-shinepur transition duration-300"
        >
          About
        </Link>
        <Link
          to="/"
          onClick={() => handleScroll('projects')}
          className="hover:text-shinepur transition duration-300"
        >
          Projects
        </Link>
        <Link
          to="/"
          onClick={() => handleScroll('sociallink')}
          className="hover:text-shinepur transition duration-300"
        >
          Social Link
        </Link>
        <Link
          to="/"
          onClick={() => handleScroll('contact')}
          className="hover:text-shinepur  transition duration-300"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden pr-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl focus:outline-none">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            to="/"
            onClick={() => handleScroll('about')}
            className="hover:text-shinepur  transition duration-300"
          >
            About
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll('projects')}
            className="hover:text-shinepur  transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll('sociallink')}
            className="hover:text-shinepur  transition duration-300"
          >
            Social Link
          </Link>
          <Link
            to="/"
            onClick={() => handleScroll('contact')}
            className="hover:text-shinepur  transition duration-300"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
