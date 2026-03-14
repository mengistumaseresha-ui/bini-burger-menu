import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu as MenuIcon, X, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white">
            <Utensils size={24} />
          </div>
          <div>
            <h1 className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>ቢኒ በርገር</h1>
            <p className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-stone-500' : 'text-stone-200'}`}>Bini Burger</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`text-sm font-medium hover:text-orange-600 transition-colors ${isScrolled ? 'text-stone-700' : 'text-white'}`}>Home</a>
          <a href="#menu" className={`text-sm font-medium hover:text-orange-600 transition-colors ${isScrolled ? 'text-stone-700' : 'text-white'}`}>Menu</a>
          <a href="#about" className={`text-sm font-medium hover:text-orange-600 transition-colors ${isScrolled ? 'text-stone-700' : 'text-white'}`}>About</a>
          <button className={`p-2 rounded-full relative transition-colors ${isScrolled ? 'bg-stone-100 text-stone-700' : 'bg-white/10 text-white'}`}>
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">0</span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button className={`p-2 rounded-full ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            <ShoppingCart size={20} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-full ${isScrolled ? 'text-stone-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-stone-800 font-medium py-2">Home</a>
              <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-stone-800 font-medium py-2">Menu</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-stone-800 font-medium py-2">About</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;