'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking cookies
    const checkAuth = () => {
      const userCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth='));
      setIsLoggedIn(!!userCookie);
    };
    
    checkAuth();
    
    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Re-check auth on route change so UI updates after login without manual refresh
  useEffect(() => {
    const userCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='));
    setIsLoggedIn(!!userCookie);
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-[#14213d] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="LuxeCart Logo" 
              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold">
              <span className="text-[#e5e5e5]">Luxe</span><span className="text-[#fca311]">Cart</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive('/') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/items"
              className={`transition-colors ${
                isActive('/items') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
            >
              Items
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActive('/about') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActive('/contact') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
            >
              Contact Us
            </Link>
            {isLoggedIn && (
              <Link
                href="/add-item"
                className={`transition-colors ${
                  isActive('/add-item') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
                }`}
              >
                Add Item
              </Link>
            )}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="bg-[#fca311] hover:bg-[#14213d] text-[#14213d] hover:text-[#fca311] px-4 py-2 rounded transition-colors font-semibold"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-[#fca311] hover:bg-red-600 text-[#14213d] hover:text-white px-4 py-2 rounded transition-colors font-semibold"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className={`block py-2 ${
                isActive('/') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className={`block py-2 ${
                isActive('/items') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Items
            </Link>
            <Link
              href="/about"
              className={`block py-2 ${
                isActive('/about') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`block py-2 ${
                isActive('/contact') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            {isLoggedIn && (
              <Link
                href="/add-item"
                className={`block py-2 ${
                  isActive('/add-item') ? 'text-[#fca311] font-semibold' : 'hover:text-[#fca311]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Add Item
              </Link>
            )}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="block bg-[#fca311] hover:bg-[#14213d] text-[#14213d] hover:text-[#fca311] px-4 py-2 rounded mt-2 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left bg-[#fca311] hover:bg-red-600 text-[#14213d] hover:text-white px-4 py-2 rounded mt-2 font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
