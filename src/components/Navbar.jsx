// src/components/Navbar.jsx
//https://i.pinimg.com/736x/36/45/14/36451498b44a93a7817fa0d8979ae46a.jpg


/*export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo *}
      <div className="text-2xl font-bold tracking-wide">
        <img src="D:\Ravi\Project\React_3js\images.jpg" alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Links *}
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">About</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
*/

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo Image */}
        <div className="flex items-center space-x-2">
          <img src="/3D.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-wide">React in 3js</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="flex flex-col space-y-4 mt-4 md:hidden">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

/*
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <h1>Navbar Test</h1>
    </nav>
  );
}
  */
