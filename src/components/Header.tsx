import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header: React.FC = () => {
  const { cartCount } = useCart();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="text-xl font-black tracking-tighter text-blue-600 hover:opacity-80 transition-opacity"
        >
          GUZA STORE
        </NavLink>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors hover:text-blue-600 ${
                    isActive ? "text-blue-600" : "text-gray-500"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l pl-6 border-gray-100">
            <NavLink 
              to="/cart" 
              className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="text-sm font-bold uppercase tracking-widest">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {cartCount}
                </span>
              )}
            </NavLink>

            <NavLink
              to="/login"
              className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-gray-800 transition-all shadow-md active:scale-95"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;