import React from "react";
import { NavLink , Link} from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../public/webaspace.jpg"; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#F4EBDC] shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center  text-2xl font-bold text-gray-800">
          <img
            src={logo} // Adjust the path to your logo
            alt="logo"
            className="w-10 h-10 object-contain rounded-full mr-3" // Responsive logo size
          />
          <span className="text-primary font-extrabold">Weba</span>
          <span className="text-gray-800">Space</span>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold transition"
                  : "hover:text-primary transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/template"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold transition"
                  : "hover:text-primary transition"
              }
            >
              Templates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold transition"
                  : "hover:text-primary transition"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold transition"
                  : "hover:text-primary transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold transition"
                  : "hover:text-primary transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
  <ul className="md:hidden bg-[#F4EBDC] px-6 pb-4 space-y-2 text-gray-700 font-medium">
    <li className="hover:text-primary transition">
      <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
    </li>
    <li className="hover:text-primary transition">
      <Link to="/template" onClick={() => setIsOpen(false)}>Templates</Link>
    </li>
    <li className="hover:text-primary transition">
      <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
    </li>
    <li className="hover:text-primary transition">
      <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
    </li>
    <li className="hover:text-primary transition">
      <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
    </li>
  </ul>
)}

    </header>
  );
};

export default Navbar;
