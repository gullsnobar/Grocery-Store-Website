import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Apple,
  Cake,
  Palette,
  ShoppingBag,
  Shirt,
  Sofa,
  Home,
} from 'lucide-react';
import logo from '../assets/Logo-new.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Grocery', icon: Apple },
    { name: 'Bakery', icon: Cake },
    { name: 'Makeup', icon: Palette },
    { name: 'Bags', icon: ShoppingBag },
    { name: 'Clothing', icon: Shirt },
    { name: 'Furniture', icon: Sofa },
    { name: 'Daily Needs', icon: Home },
  ];

  const pagesDropdownItems = [
    'Flash Sale',
    'Manufacturers/Publishers',
    'Authors',
    'FAQ',
    'Terms & Conditions',
    'Customer Refund Policy',
    'Vendor Refund Policy',
  ];

  return (
    <div className="bg-white">
      {/* Main Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Section - Logo and Category */}
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center">
                <img src={logo} alt="PickBazar" className="h-7 w-auto" />
              </a>

              {/* Category Dropdown */}
              <div className="hidden lg:block relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-white font-medium px-6 py-2.5 rounded-md border-2 border-white transition-colors"
                  style={{ backgroundColor: '#019376' }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#017a63')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#019376')}
                >
                  <Apple className="w-5 h-5" />
                  <span className="text-lg">Grocery</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50 py-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <a
                          key={category.name}
                          href="#"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-gray-500" />
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors">Shops</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors">Offers</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors">Contact</a>

              {/* Pages Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 font-medium px-3 py-2 rounded-md transition-colors">
                  <span>Pages</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full mt-2 right-0 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {pagesDropdownItems.map((item, idx) => (
                      <a key={idx} href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Join Button */}
              <a
                href="/join"
                className="hidden lg:block text-white px-6 py-2.5 rounded-md font-medium transition-colors border-2 border-white"
                style={{ backgroundColor: '#019376' }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#017a63')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#019376')}
              >
                Join
              </a>

              {/* Become a Seller Button */}
              <Link
                to="/signup"
                className="hidden lg:block text-white px-6 py-2.5 rounded-md font-medium transition-colors border-2 border-white"
                style={{ backgroundColor: '#019376' }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#017a63')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#019376')}
              >
                Become a Seller
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-600 hover:text-teal-600 p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
