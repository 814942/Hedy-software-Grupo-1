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
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-lg">Trello</div>
      <div className="relative">
      <Link href="boards" className="px-4">
            Boards
        </Link>
        <div className="cursor-pointer" onClick={handleUserDropdownToggle}>
          <img src="/user-icon.png" alt="User Icon" className="w-8 h-8 rounded-full" />
        </div>

        {showUserDropdown && (
          <div className="absolute top-10 right-0 bg-white shadow-md rounded-md mt-2">
            <span className="block px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
              Cerrar sesión (Nombre de usuario)
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
