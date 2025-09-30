import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-0 md:px-0">
      <div className="flex justify-between items-center h-24">
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center gap-4 ml-0 pl-2 md:pl-0">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="h-14 w-auto rounded-xl object-contain"
        />
        <div className="text-left">
          <h1
          className="text-xl md:text-3xl font-bold text-gray-800 leading-tight tracking-wide"
          style={{ color: 'rgba(255, 191, 0, 1)' }}
          >
          BARAQ AL KULL
          </h1>
          <p className="text-xs md:text-sm text-gray-500 leading-tight">
          UAE's Trusted Company for Oilfield and Industrial Materials
          </p>
        </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 mr-0 pr-2 md:pr-0">
        {navigation.map((item) => (
          <Link
          key={item.name}
          to={item.href}
          className={`px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
            isActive(item.href)
            ? 'text-[rgb(255,193,7)] bg-[rgb(255,193,7)]/10'
            : 'text-gray-700 hover:text-[rgb(255,193,7)] hover:bg-[rgb(255,193,7)]/10'
          }`}
          >
          {item.name}
          </Link>
        ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden mr-2">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-700 hover:text-orange-600 transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
        <div className="py-4 space-y-2">
          {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 text-base font-medium transition-colors duration-300 rounded-md ${
            isActive(item.href)
              ? 'text-[rgb(255,193,7)] bg-[rgb(255,193,7)]/10'
              : 'text-gray-700 hover:text-[rgb(255,193,7)] hover:bg-[rgb(255,193,7)]/10'
            }`}
          >
            {item.name}
          </Link>
          ))}
        </div>
        </div>
      )}
      </nav>

      {/* Yellow line below header */}
      <div className="h-1 w-full bg-[rgb(255,193,7)]"></div>
    </header>
  );
};

export default Header;
