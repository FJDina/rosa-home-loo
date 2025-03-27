
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-sea-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-30000"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1548578903-698fa900fdb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3")',
          animation: 'slow-zoom 30s infinite alternate ease-in-out'
        }}
      ></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center max-w-4xl animate-fade-in">
        <h2 className="text-lg md:text-xl font-medium text-white/95 mb-2">Добро пожаловать в</h2>
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
          Rosa Home <span className="text-sea-300">Loo</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Ваш уютный отель на берегу Черного моря в Сочи, где комфорт встречается с великолепными видами и гостеприимством
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://realitycalendar.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/90 text-sea-800 px-8 py-3 rounded-md font-semibold transition-all button-shine hover-scale"
          >
            Забронировать
          </a>
          <button
            onClick={() => scrollToSection('rooms')}
            className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white/70 px-8 py-3 rounded-md font-medium transition-all hover-scale"
          >
            Посмотреть номера
          </button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <button 
        onClick={() => scrollToSection('rooms')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity z-20"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2 font-light">Узнайте больше</span>
        <ChevronDown size={24} className="animate-waves" />
      </button>
    </section>
  );
};

export default Hero;
