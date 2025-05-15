import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, ChevronDown, X, Menu, Heart, BarChart2, User } from 'lucide-react';
import { useSelector } from "react-redux";

const Navbar = () => {
  // State for dropdown menus
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileAccountOpen, setIsMobileAccountOpen] = useState(false);
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for coupon banner
  const [showCoupon, setShowCoupon] = useState(true);
  // State for active tab in mobile view
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' or 'categories'

  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.mycart.cart);

  // Function to calculate total price
  const total = () => {
    let totalPrice = 0;
    getdata.forEach(item => {
      totalPrice += item.price * item.qnty;
    });
    setPrice(totalPrice);
  };

  // Run total calculation every time cart changes
  useEffect(() => {
    total();
  }, [getdata]);

  // Ref for the mobile menu
  const mobileMenuRef = useRef(null);
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    
    // Only add the event listener when the menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);
  
  return (
    <div className="relative w-full">
      {/* Coupon Banner */}
      {showCoupon && (
        <div className="relative w-full bg-gray-100 p-2 text-center text-sm text-gray-700">
          Use Coupon #0010 For 10% OFF
          <button 
            className="absolute right-4 top-2" 
            onClick={() => setShowCoupon(false)}
          >
            <X size={16} />
          </button>
        </div>
      )}
      
      {/* Main Navbar */}
      <nav className="relative flex w-full items-center justify-between border-b border-gray-200 px-4 py-6 md:px-8 md:py-8">
        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="block lg:hidden">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setActiveTab('menu');
            }} 
            className="text-gray-700 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
        </div>
        
        {/* Left Navigation - Hidden on mobile, visible on lg screens */}
        <div className="hidden lg:flex items-center space-x-6 text-black">
          {/* Home Link with active state */}
          <a href="/" className="group relative text-sm font-medium hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">Home</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-black transition-all duration-300"></div>
          </a>
          
          {/* Shop Dropdown */}
          <div className="relative" onMouseEnter={() => setIsShopOpen(true)} onMouseLeave={() => setIsShopOpen(false)}>
            <a href="#" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
              <div className="flex items-center pb-1 ">
                Shop
                <ChevronDown size={16} className="ml-1" />
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            </a>
            
            {/* Shop Dropdown Menu */}
            {isShopOpen && (
              <div className="absolute left-0 top-full z-50 w-40 bg-white shadow-md">
                <div className="flex flex-col py-2">
                  <a href="womanscategories" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Women</a>
                  <a href="mancategories" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black ">Men</a>
                  <a href="kidscategories" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Kids</a>
                  <a href="personalcategories" style={{textDecoration:"none"}} className="px-4 py-2 text-sm hover:bg-gray-100 text-black">Personal Care</a>
                </div>
              </div>
            )}
          </div>
          
          {/* Blog Link */}
          <a href="blog" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">Blog</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
          
          {/* Contact Us Link */}
          <a href="contact" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">Contact Us</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
          
          {/* About Us Link */}
          <a href="about" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
            <div className="pb-1">About Us</div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>
        
        {/* Center Logo - Adjusted for better mobile responsiveness */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <a href="/">
            <div className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/NT-logo.png" alt="Nature Thread Logo" className="w-full h-full object-contain" />
            </div>
          </a>
        </div>
        
        {/* Right Navigation - Adjusted for better responsive behavior */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden sm:flex items-center">
            <div className="relative" onMouseEnter={() => setIsAccountOpen(true)} onMouseLeave={() => setIsAccountOpen(false)}>
              <a href="#" className="group relative text-sm hover:text-gray-500 text-black" style={{textDecoration:"none"}}>
                <div className="pb-1">My Account</div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
              </a>
              
              {/* My Account Dropdown Menu */}
              {isAccountOpen && (
                <div className="absolute right-0 top-full z-50 w-40 bg-white shadow-md">
                  <div className="flex flex-col py-2">
                    <a href="/account/dashboard" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Dashboard</a>
                    <a href="/account/orders" className="px-4 py-2 text-sm hover:bg-gray-100 text-black " style={{textDecoration:"none"}}>Orders</a>
                    <a href="/account/downloads" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Downloads</a>
                    <a href="/account/addresses" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Addresses</a>
                    <a href="/account/wallet" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>My Wallet</a>
                    <a href="/account/details" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Account details</a>
                    <a href="/account/wishlist" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Wishlist</a>
                    <a href="/logout" className="px-4 py-2 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Logout</a>
                  </div>
                </div>
              )}
            </div>
          </div>
            
          {/* Cart Price - Always visible but styled for all screen sizes */}
          <div className="text-sm md:ml-2">
            <a style={{textDecoration:"none",color:"black"}} href="cart">
              <span className="md:ms-2">{getdata.length} / ₹{price.toFixed(2)}</span>
            </a>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Improved for better responsiveness */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div 
            ref={mobileMenuRef}
            className="absolute left-0 top-0 h-full w-3/4 sm:w-1/2 bg-white overflow-hidden"
          >
            {/* Mobile Navigation Tabs - Improved spacing */}
            <div className="grid grid-cols-2 border-b border-gray-200">
              <button
                onClick={() => handleTabChange('menu')}
                className={`py-4 text-center font-medium ${activeTab === 'menu' ? 'border-b-2 border-gray-800' : 'text-gray-500'}`}
              >
                MENU
              </button>
              <button
                onClick={() => handleTabChange('categories')}
                className={`py-4 text-center font-medium ${activeTab === 'categories' ? 'border-b-2 border-gray-800' : 'text-gray-500'}`}
              >
                CATEGORIES
              </button>
            </div>
            
            {/* Menu Tab Content - Improved for better spacing */}
            {activeTab === 'menu' && (
              <div className="h-full overflow-y-auto pb-20">
                <div className="flex flex-col">
                  <a href="/" className="border-b border-gray-200 px-6 py-4 font-medium text-black" style={{textDecoration:"none"}}>HOME</a>
                  <a href="/" className="border-b border-gray-200 px-6 py-4 font-medium text-black" style={{textDecoration:"none"}}>SHOP</a>
                  <a href="/blog" className="border-b border-gray-200 px-6 py-4 font-medium text-black" style={{textDecoration:"none"}}>BLOG</a>
                  <a href="/about" className="border-b border-gray-200 px-6 py-4 font-medium text-black" style={{textDecoration:"none"}} >ABOUT US</a>
                  <a href="/contact" className="border-b border-gray-200 px-6 py-4 font-medium text-black" style={{textDecoration:"none"}}>CONTACT US</a>
                  
                  <a href="/wishlist" className="border-b border-gray-200 px-6 py-4 font-medium flex items-center text-black" style={{textDecoration:"none"}}>
                    <Heart size={18} className="mr-3" />
                    WISHLIST
                  </a>
                  
                  <a href="/compare" className="border-b border-gray-200 px-6 py-4 font-medium flex items-center text-black" style={{textDecoration:"none"}}>
                    <BarChart2 size={18} className="mr-3" />
                    COMPARE
                  </a>
                  
                  {/* My Account Section with dropdown */}
                  <div className="border-b border-gray-200">
                    <div 
                      className="px-6 py-4 font-medium flex items-center justify-between text-black cursor-pointer"
                      onClick={() => setIsMobileAccountOpen(!isMobileAccountOpen)}
                    >
                      <div className="flex items-center">
                        <User size={18} className="mr-3" />
                        MY ACCOUNT
                      </div>
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isMobileAccountOpen ? 'transform rotate-180' : ''}`} />
                    </div>
                    
                    {/* Mobile Account Dropdown */}
                    {isMobileAccountOpen && (
                      <div className="bg-gray-50">
                        <a href="/account/dashboard" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Dashboard</a>
                        <a href="/account/orders" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Orders</a>
                        <a href="/account/downloads" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Downloads</a>
                        <a href="/account/addresses" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Addresses</a>
                        <a href="/account/wallet" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>My Wallet</a>
                        <a href="/account/details" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Account details</a>
                        <a href="/account/wishlist" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Wishlist</a>
                        <a href="/logout" className="block px-10 py-3 text-sm hover:bg-gray-100 text-black" style={{textDecoration:"none"}}>Logout</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Categories Tab Content - Improved with more width */}
            {activeTab === 'categories' && (
              <div className="h-full overflow-y-auto pb-20">
                <div className="flex flex-col w-full">
                  <a href="womanscategories" className="border-b border-gray-200 px-6 py-4 font-medium text-black w-full" style={{textDecoration:"none"}}>WOMEN</a>
                  <a href="mancategories" className="border-b border-gray-200 px-6 py-4 font-medium text-black w-full" style={{textDecoration:"none"}}>MEN</a>
                  <a href="kidscategories" className="border-b border-gray-200 px-6 py-4 font-medium text-black w-full" style={{textDecoration:"none"}}>KIDS</a>
                  <a href="personalcategories" className="border-b border-gray-200 px-6 py-4 font-medium text-black w-full" style={{textDecoration:"none"}}>PERSONAL CARE</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Bottom Mobile Navigation Bar - Improved spacing and active indicators */}
      <div  className="fixed bottom-0 left-0 z-40 grid w-full grid-cols-4 border-t border-gray-200 bg-white lg:hidden">
        <a style={{textDecoration:"none"}} href="/" className="flex flex-col items-center justify-center py-3 text-black">
          <ShoppingCart size={20} />
          <span className="mt-1 text-xs">Shop</span>
        </a>
        <a style={{textDecoration:"none"}}  href="#" className="flex flex-col items-center justify-center py-3 text-black">
          <Heart size={20} />
          <span className="mt-1 text-xs">Wishlist</span>
        </a>
        <a style={{textDecoration:"none"}}  href="/cart" className="flex flex-col items-center justify-center py-3 relative text-black">
          <ShoppingCart size={20} />
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
            {getdata.length}
          </span>
          <span className="mt-1 text-xs">Cart</span>
        </a>
        <a style={{textDecoration:"none"}}  href="#" className="flex flex-col items-center justify-center py-3 text-black">
          <User size={20} />
          <span className="mt-1 text-xs">Account</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;