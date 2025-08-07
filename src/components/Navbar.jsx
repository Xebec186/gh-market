import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { CiMenuBurger, CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow px-4 py-2 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo and Main Links */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <Link to="/" className="text-xl font-bold">
            GH Market
          </Link>
          <ul className="hidden md:flex gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/products" className="hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Icons and Hamburger */}
        <div className="flex items-center gap-6">
          {/* Search Bar (desktop only) */}
          <div className="hidden md:block w-96">
            <SearchBar />
          </div>

          <ul className="flex items-center gap-4 text-xl text-gray-600">
            <li>
              <Link to="/cart" className="hover:text-blue-500">
                <CiShoppingCart />
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="hover:text-blue-500">
                <CiHeart />
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-blue-500">
                <CiUser />
              </Link>
            </li>
          </ul>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <CiMenuBurger className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Search Bar for mobile */}
      <div className="mt-2 md:hidden">
        <SearchBar />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-700 font-medium hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
