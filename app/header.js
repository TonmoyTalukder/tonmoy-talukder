'use client'

import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-gray-50 flex justify-end">
      {/* Navigation Links for Large Screens */}
      <div className="hidden md:flex md:items-center">
        <a href="/" className="text-gray-900 hover:text-orange-400 ml-4">Home</a>
        <a href="/#recent" className="text-gray-900 hover:text-orange-400 ml-4">Recent</a>
        <a href="/#research" className="text-gray-900 hover:text-orange-400 ml-4">Research</a>
        <a href="/#info" className="text-gray-900 hover:text-orange-400 ml-4">Info</a>
        <a href="https://drive.google.com/file/d/1nb4uVV8NDuStjwUTlEvjR7OziyaP9RsR/view" target="_blank" className="text-gray-900 hover:text-orange-400 ml-4">Resume</a>
      </div>

      {/* Toggle Button for Small Screens */}
      <div className="md:hidden">
        <button
          className="text-gray-900 focus:outline-none"
          onClick={toggleNav}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6H5M19 12H5M19 18H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-8 py-2 w-48 bg-white rounded-md shadow-lg">
            <a href="/" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Home</a>
            <a href="/about" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Recent</a>
            <a href="/contact" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Research</a>
            <a href="/contact" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Info</a>
            <a href="/contact" className="block px-4 py-2 text-gray-900 hover:bg-gray-200">Resume</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;



// import React from 'react';

// const Header = () => {
//   return (
    
//     <div style={{paddingLeft: "5.25rem"}} class="header-special mb-5 px-20 nav flex justify-end">
        
//             <a href="/" class="px-4 py-2 bg-transparent text-gray-800 hover:text-gray-900">
//                 <span>Home</span>
//             </a>
//             <a href="/about" class="px-4 py-2 bg-transparent text-gray-800 hover:text-gray-900">
//                 <span>About</span>
//             </a>
//             <a href="/contact" class="px-4 py-2 bg-transparent text-gray-800 hover:text-gray-900">
//                 <span>Contact</span>
//             </a>        
//     </div>
//   );
// };

// export default Header;
