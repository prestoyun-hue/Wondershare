import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Dynamic classes based on scroll state
  const headerClass = isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5';
  const logoTextClass = 'text-gray-900';
  const navTextClass = 'text-gray-600 hover:text-wondershare-blue';
  const buttonClass = 'bg-wondershare-blue hover:bg-wondershare-darkBlue text-white';
  const mobileMenuButtonClass = 'text-gray-900';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 group"
          onClick={(e) => handleSmoothScroll(e, '#hero')}
        >
          {/* ESTC Logo replacing W */}
          <svg className="h-7 w-auto text-wondershare-blue fill-current" viewBox="0 0 70 24" xmlns="http://www.w3.org/2000/svg">
             <text x="0" y="21" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="24">ESTC</text>
          </svg>
          <span className={`text-2xl font-bold tracking-tight ${logoTextClass} transition-colors`}>
            PDFelement
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`${navTextClass} font-medium transition-colors`}
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            className={`${buttonClass} px-5 py-2 rounded-full font-medium transition-colors shadow-sm`}
            onClick={(e) => handleSmoothScroll(e, '#contact')}
          >
            견적 문의
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${mobileMenuButtonClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-700 hover:text-wondershare-blue font-medium p-2"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-wondershare-blue text-white text-center py-3 rounded-lg font-bold"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              견적 문의
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;