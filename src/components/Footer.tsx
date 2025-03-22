
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-sea-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h4 className="text-2xl font-playfair font-semibold mb-4">Loo Home<span className="text-sea-300">&</span>Sea</h4>
            <p className="text-sea-100 mb-4">
              Уютный отель на берегу Черного моря в Сочи, где комфорт встречается с великолепными видами и гостеприимством.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sea-700 flex items-center justify-center hover:bg-sea-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sea-700 flex items-center justify-center hover:bg-sea-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-sea-300" />
                <span>Улица Енисейская 6/20, Сочи, Краснодарский край</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-sea-300" />
                <a href="tel:+79165209677" className="hover:text-sea-300 transition-colors">
                  +7 916 520-96-77
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-sea-300" />
                <a href="mailto:5209677@mail.ru" className="hover:text-sea-300 transition-colors">
                  5209677@mail.ru
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {['home', 'rooms', 'amenities', 'about', 'gallery', 'contacts'].map((item, index) => {
                const labels = ['Главная', 'Номера', 'Удобства', 'О нас', 'Галерея', 'Контакты'];
                return (
                  <li key={index}>
                    <a 
                      href={`#${item}`}
                      className="hover:text-sea-300 transition-colors flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {labels[index]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Column 4 - Book Now */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Забронировать номер</h4>
            <p className="text-sea-100 mb-4">
              Забронируйте номер прямо сейчас и получите лучшие цены и условия.
            </p>
            <a
              href="https://realitycalendar.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sea-500 hover:bg-sea-400 text-white px-6 py-2 rounded-md font-medium inline-block button-shine"
            >
              Забронировать
            </a>
          </div>
        </div>
        
        <div className="border-t border-sea-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sea-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Loo Home&Sea. Все права защищены.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-sea-200 hover:text-sea-300 text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <span className="text-sea-700">|</span>
            <a href="#" className="text-sea-200 hover:text-sea-300 text-sm transition-colors">
              Условия использования
            </a>
            <button 
              onClick={scrollToTop}
              className="ml-6 w-10 h-10 bg-sea-700 rounded-full flex items-center justify-center hover:bg-sea-600 transition-colors"
              aria-label="Наверх"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
