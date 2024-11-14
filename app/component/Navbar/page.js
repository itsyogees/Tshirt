'use client';

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaRegHeart,
  FaRegUserCircle,
} from "react-icons/fa";
import Link from "next/link";
// import '../../styles/globals.scss'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close dropdowns when closing the menu
    if (isMenuOpen) {
      setIsAboutDropdownOpen(false);
      setIsCoursesDropdownOpen(false);
    }
  };
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsCoursesDropdownOpen(false); // Close Courses dropdown when About is opened
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    setIsAboutDropdownOpen(false); // Close About dropdown when Courses is opened
  };

  return (
    <div className="navbarMain">
      <div className="navbarContainer">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navIcons">
            <div className="logo">
              <Link href="/">
                <img
                  src="/image/logo1.png"
                  alt="Logo"
                  width={200}
                  height={65}
                />
              </Link>
            </div>

            {/* Hamburger and Close Icons */}
            <div className="menuToggle" onClick={toggleMenu}>
              {!isMenuOpen ? (
                <FaBars className="icon" />
              ) : (
                <FaTimes className="icon" />
              )}
            </div>

            {/* Navigation Items */}
            <ul className={`navItems ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link href="/pages/Homepage" onClick={toggleMenu}>
                  Home
                </Link>
              </li>

              {/* About with Dropdown */}
              <li>
                <Link href="/pages/Aboutpage" onClick={toggleMenu}>
                About
                </Link>
              </li>
              {/* <li
                className={`hasDropdown ${isAboutDropdownOpen ? 'dropdownActive' : ''}`}
                onClick={toggleAboutDropdown}
              >
                About
                <FaChevronDown className="dropdownIcon" />
                {isAboutDropdownOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link href="/pages/About" onClick={toggleMenu}>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/Career" onClick={toggleMenu}>
                        Career
                      </Link>
                    </li>
                  </ul>
                )}
              </li> */}

              {/* Courses with Dropdown */}
              {/* <li
                className={`hasDropdown ${isCoursesDropdownOpen ? 'dropdownActive' : ''}`}
                onClick={toggleCoursesDropdown}
              >
                Programs
                <FaChevronDown className="dropdownIcon" />
                {isCoursesDropdownOpen && (
                  <ul className="dropdown">
                    <li>
                      <Link href="/pages/SubProgram1" onClick={toggleMenu}>
                        Sub-Program 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/SubProgram2" onClick={toggleMenu}>
                        Sub-Program 2
                      </Link>
                    </li>
                    <li>
                      <Link href="/pages/SubProgram3" onClick={toggleMenu}>
                        Sub-Program 3
                      </Link>
                    </li>
                  </ul>
                )}
              </li> */}

              <li>
                <Link href="/pages/Design" onClick={toggleMenu}>
                Design a Tee
                </Link>
              </li>

              <li>
                <Link href="/pages/Help" onClick={toggleMenu}>
                Help
                </Link>
              </li>

           
            </ul>
          </div>
           {/* Right Side Icons and Text */}
          <div className='rightMenu'>
      <Link href='/pages/Ordering'  ><FaSearch className='icon'/></Link>    
            <Link href="/pages/Cardpage">
              <FaRegHeart className='icon' />
            </Link>
            <Link href="/component/ProfilePage">
              <FaRegUserCircle className='icon' />
            </Link>
            <span className='helloText'>Hello, Sign In</span>
            {/* <span className={styles.signInText}>Sign In</span> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
