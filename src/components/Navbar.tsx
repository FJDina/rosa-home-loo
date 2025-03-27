
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'rooms', label: 'Номера' },
  { id: 'amenities', label: 'Удобства' },
  { id: 'about', label: 'О нас' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'contacts', label: 'Контакты' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <span className={cn(
            "font-playfair text-2xl font-bold transition-colors",
            scrolled ? "text-sea-800" : "text-white"
          )}>
            Rosa Home <span className="text-accent">Loo</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "font-medium text-sm transition-colors relative group",
                scrolled ? "text-sea-700 hover:text-sea-900" : "text-white/90 hover:text-white"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Book Now Button */}
        <a
          href="https://realitycalendar.ru"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "hidden md:flex px-5 py-2 rounded-md font-medium text-sm button-shine",
            scrolled 
              ? "bg-sea-600 hover:bg-sea-700 text-white" 
              : "bg-white hover:bg-white/90 text-sea-800"
          )}
        >
          Забронировать
        </a>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className={cn(
            "md:hidden p-1 transition-colors",
            scrolled ? "text-sea-800" : "text-white"
          )}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-sea-900/95 z-50 flex flex-col pt-20 pb-6 px-6 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={closeMenu}
              className="text-white/90 hover:text-white font-medium text-lg py-2 border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://realitycalendar.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-white hover:bg-white/90 text-sea-800 px-5 py-3 rounded-md font-medium text-center button-shine"
          onClick={closeMenu}
        >
          Забронировать
        </a>
      </div>
    </header>
  );
};

export default Navbar;
