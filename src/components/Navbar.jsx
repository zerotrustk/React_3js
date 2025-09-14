// src/components/Navbar.jsx
//https://i.pinimg.com/736x/36/45/14/36451498b44a93a7817fa0d8979ae46a.jpg
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <img src="D:\Ravi\Project\React_3js\images.jpg" alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-blue-400">Home</a></li>
        <li><a href="#" className="hover:text-blue-400">About</a></li>
        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
