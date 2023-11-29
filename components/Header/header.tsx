import React from 'react';

const Header = () => {
  return (
    /*
    <div className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-bold">
          <span className="bg-lime-600 p-2 rounded font-extrabold">S</span>
          adiq{" "}
          <span className="bg-lime-600 p-2 rounded font-extrabold">M</span>ohammad
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#blogs" className="hover:text-gray-300">Blogs</a>
          <a href="#login" className="hover:text-gray-300">Login</a>
        </div>
      </div>
    </div>*/
    <div>
      <nav className='flex'>
        <a href="./assets/android-chrome-512x512.png">Logo</a>
      </nav>
      <div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
