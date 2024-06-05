'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleLogout = () => {

    console.log('Cerrar sesión');
  };

  return (
    <nav className="bg-gray-700 p-4 flex justify-between items-center">
      <div className="bg-gray-700 text-white text-lg">Trellno</div>
      <div className="relative">
        <div className="bg-gray-700 cursor-pointer" onClick={handleUserDropdownToggle}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="User Icon" className="w-8 h-8 rounded-full" />
        </div>

        {showUserDropdown && (
          <div className="bg-gray-700 absolute top-10 right-0 bg-white shadow-md rounded-md">
            <span className="bg-gray-700 block px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
              Cerrar sesión
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
