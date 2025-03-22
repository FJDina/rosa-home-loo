
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomCard, { RoomType } from '@/components/RoomCard';
import Amenities from '@/components/Amenities';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

// Sample data for rooms
const roomsData: RoomType[] = [
  {
    id: 1,
    name: 'Стандартный номер',
    description: 'Уютный номер с видом на внутренний двор отеля, идеально подходит для одного или двух гостей.',
    capacity: '2 человека',
    size: '18 м²',
    features: [
      'Двуспальная или две односпальные кровати',
      'Кондиционер',
      'Телевизор',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 2,
    name: 'Улучшенный номер',
    description: 'Просторный номер с большими окнами и видом на сад, оснащен всем необходимым для комфортного отдыха.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Двуспальная кровать и диван-кровать',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1505693314654-ef3a6f5f3a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 3,
    name: 'Семейный номер',
    description: 'Идеальный вариант для семейного отдыха с детьми, просторный номер с отдельными спальными зонами.',
    capacity: '4 человека',
    size: '32 м²',
    features: [
      'Двуспальная кровать и двухъярусная кровать',
      'Кондиционер',
      'Телевизор',
      'Холодильник',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1573322867430-923d3a0b8640?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 4,
    name: 'Люкс с видом на море',
    description: 'Роскошный номер с панорамным видом на море, отдельной гостиной и всеми необходимыми удобствами.',
    capacity: '2 человека',
    size: '40 м²',
    features: [
      'Кровать king-size',
      'Отдельная гостиная',
      'Кондиционер',
      'Телевизор Smart TV',
      'Мини-бар',
      'Собственная ванная комната с душевой кабиной',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1630157886671-1cdf10a5c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1560185127-c67dc9a32e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 5,
    name: 'Студия с балконом',
    description: 'Светлая и просторная студия с удобным балконом, где можно насладиться утренним кофе с видом на горы.',
    capacity: '2 человека',
    size: '28 м²',
    features: [
      'Двуспальная кровать',
      'Кухонный уголок',
      'Кондиционер',
      'Телевизор',
      'Балкон с мебелью',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 6,
    name: 'Двухкомнатный люкс',
    description: 'Элегантный двухкомнатный номер с отдельной спальней и гостиной для комфортного проживания.',
    capacity: '3 человека',
    size: '45 м²',
    features: [
      'Кровать king-size в спальне',
      'Раскладной диван в гостиной',
      'Кондиционер',
      'Два телевизора',
      'Мини-кухня',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1630157887466-a671d25ef6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 7,
    name: 'Эконом номер',
    description: 'Компактный и функциональный номер, идеально подходящий для путешественников с ограниченным бюджетом.',
    capacity: '1-2 человека',
    size: '16 м²',
    features: [
      'Одна двуспальная или две односпальные кровати',
      'Кондиционер',
      'Телевизор',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 8,
    name: 'Апартаменты',
    description: 'Просторные апартаменты с кухней и гостиной, идеально подходящие для длительного проживания.',
    capacity: '4 человека',
    size: '55 м²',
    features: [
      'Две спальни',
      'Полностью оборудованная кухня',
      'Гостиная',
      'Кондиционер',
      'Телевизор',
      'Стиральная машина',
      'Собственная ванная комната',
      'Бесплатный Wi-Fi'
    ],
    images: [
      'https://images.unsplash.com/photo-1576683023079-988e494f06b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580229080435-1c7e2ce835c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584956861988-913b8c1c7270?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  }
];

const Index = () => {
  useEffect(() => {
    // Set the language of the HTML tag
    document.documentElement.lang = 'ru';
    
    // Set the page title and description
    document.title = 'Loo Home&Sea - Отель в Сочи у моря';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Уютный отель Loo Home&Sea в Сочи, в 200 метрах от моря. Комфортные номера, отличный сервис и гостеприимство.');
    }

    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Rooms Section */}
      <section id="rooms" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title mx-auto">Наши номера</h2>
            <p className="text-coast-600 max-w-3xl mx-auto mt-4">
              Мы предлагаем комфортные номера различных категорий, чтобы удовлетворить потребности 
              каждого гостя. Все номера оборудованы кондиционером, телевизором и собственной ванной комнатой.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://realitycalendar.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sea-600 hover:bg-sea-700 text-white px-8 py-3 rounded-md font-semibold transition-all inline-block button-shine"
            >
              Забронировать номер
            </a>
          </div>
        </div>
      </section>
      
      <Amenities />
      <AboutUs />
      <Gallery />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;
