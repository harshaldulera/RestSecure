import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-black text-white w-64 p-4">
      {/* Logo */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">RestSecure</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <a href="#" className="block py-2 px-4 rounded transition duration-300 hover:bg-green-500 hover:text-black">Home</a>
        <a href="#" className="block py-2 px-4 rounded transition duration-300 hover:bg-green-500 hover:text-black">Latest Posts</a>
        <a href="#" className="block py-2 px-4 rounded transition duration-300 hover:bg-green-500 hover:text-black">Categories</a>
        <a href="#" className="block py-2 px-4 rounded transition duration-300 hover:bg-green-500 hover:text-black">About Us</a>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-8">
        <p className="text-sm mb-2">Follow Us</p>
        <div className="flex space-x-4">
          <a href="#" className="text-green-500 hover:text-green-300 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-green-500 hover:text-green-300 transition duration-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-green-500 hover:text-green-300 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
