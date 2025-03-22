
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomCard, { RoomType } from '@/components/RoomCard';
import Amenities from '@/components/Amenities';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

// Updated room data with standardized descriptions and features
const roomsData: RoomType[] = [
  {
    id: 1,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 2,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1505693314654-ef3a6f5f3a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1517003261185-d9511f3251f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 3,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1573322867430-923d3a0b8640?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 4,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1630157886671-1cdf10a5c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1560185127-c67dc9a32e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 5,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1587155919120-eab47c53f1f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1610392734074-86861661a195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 6,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1630157887466-a671d25ef6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1612320648993-61c1cd604b71?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 7,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3'
    ]
  },
  {
    id: 8,
    name: '3-местный номер Люкс',
    description: 'Уютный и стильный номер, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.',
    capacity: '3 человека',
    size: '24 м²',
    features: [
      'Комфортная двуспальная кровать + односпальная кровать',
      'Кондиционер для поддержания комфортного микроклимата',
      'Телевизор с плоским экраном и спутниковыми каналами',
      'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
      'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
      'Шкаф/место для хранения вещей',
      'Балкон с видом (для номеров на втором этаже)',
      'Доступ к общей летней кухне и зоне барбекю',
      'Бесплатная парковка на территории',
      'Круглосуточное видеонаблюдение в местах общего пользования'
    ],
    images: [
      'https://images.unsplash.com/photo-1576683023079-988e494f06b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1580229080435-1c7e2ce835c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1584956861988-913b8c1c7270?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1558976825-6b1b03a03719?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3'
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
              Мы предлагаем 8 комфортных номеров, каждый из которых рассчитан на размещение до 3 гостей.
              Все номера оборудованы кондиционером, телевизором и собственной ванной комнатой.
            </p>
          </div>
          
          {/* Vertical Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomsData.map((room, index) => (
              <div key={room.id} className="h-full">
                <RoomCard room={room} index={index} />
              </div>
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
