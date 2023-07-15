'use client'
import Link from 'next/link'
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
        <Link href="/" className="text-gray-900 hover:text-orange-400 ml-4">Home</Link>
        <Link href="/recent-highlights" className="text-gray-900 hover:text-orange-400 ml-4">Recent</Link>
        <Link href="/research" className="text-gray-900 hover:text-orange-400 ml-4">Research</Link>
        <Link href="/projects" className="text-gray-900 hover:text-orange-400 ml-4">Project</Link>
        <Link href="/infos" className="text-gray-900 hover:text-orange-400 ml-4">Info</Link>
        <Link href="/curriculum-vitae" className="text-gray-900 hover:text-orange-400 ml-4">Curriculum Vitae</Link>
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
          <div className="absolute right-0 mt-8 py-0 w-48 bg-white rounded-md shadow-lg pr-4">
            <ul> 
              
            <li class='hover:bg-orange-600 hover:text-white'><Link href="/" className="text-gray-900 hover:text-white ml-4">Home</Link></li>
            <hr/>
            <li class='hover:bg-orange-600 hover:text-white'><Link href="/recent-highlights#recent" className="text-gray-900 hover:text-white ml-4">Recent</Link></li>
            <hr/>
            <li class='hover:bg-orange-600 hover:text-white'><Link href="/research#research" className="text-gray-900 hover:text-white ml-4">Research</Link></li>
            <hr/>
            <li class='hover:bg-orange-600 hover:text-white'><Link href="/projects#projects" className="text-gray-900 hover:text-white ml-4">Project</Link></li>
            <hr/>
            <li class='hover:bg-orange-600 hover:text-white'><Link href="/infos#info" className="text-gray-900 hover:text-white ml-4">Info</Link></li>
            <hr/>
            <li class='hover:bg-orange-600 hover:text-white'><Link href="/curriculum-vitae#cv" className="text-gray-900 hover:text-white ml-4">Curriculum Vitae</Link></li>
            </ul>
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
