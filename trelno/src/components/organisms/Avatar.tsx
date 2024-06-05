"use client";
import { useState } from "react";
import Link from "next/link";

const Avatar = ({ user, signOut }) => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const handleUserDropdownToggle = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("Cerrar sesión");
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    }
  };

  return (
    <div className="relative rounded-full">
      <div
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={handleUserDropdownToggle}
      >
        {!user ? (
          <div className="rounded-full">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              alt="User Icon"
              className="w-auto rounded-full"
            />
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-red shadow-lg rounded-md py-2 z-10 transition-transform transform origin-top-right scale-95">
                <div className="px-4 py-2 text-gray-800 border-b border-gray-200">
                  <div className="font-bold" action={signOut}>
                    <Link
                      className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                      href="/login"
                    >
                      Log In
                    </Link>
                  </div>
                  <div className="text-sm text-gray-500">{user?.email}</div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-full">
            <img
              src={user.user_metadata?.avatar_url}
              alt="avatar"
              className="w-auto rounded-full"
            />
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-red shadow-lg rounded-md py-2 z-10 transition-transform transform origin-top-right scale-95">
                <div className="px-4 py-2 text-gray-800 border-b border-gray-200">
                  <div className="font-bold">
                    {user?.user_metadata?.full_name}
                  </div>
                  <div className="text-sm text-gray-500">{user?.email}</div>
                </div>
                <div className="py-1">
                  <button className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100">
                    Settings
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
