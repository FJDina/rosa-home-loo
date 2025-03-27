
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RoomCategory from '@/components/RoomCategory';
import Amenities from '@/components/Amenities';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import { RoomType } from '@/components/RoomCard';

// Common features for all rooms
const commonFeatures = [
  'Кондиционер для поддержания комфортного микроклимата',
  'Холодильник',
  'Собственная ванная комната с душем, полотенцами и туалетными принадлежностями',
  'Бесплатный Wi-Fi для высокоскоростного доступа в интернет',
  'Доступ к общей полностью оборудованной кухне',
  'Зона барбекю',
  'Бесплатная парковка на территории',
  'Круглосуточное видеонаблюдение в местах общего пользования'
];

// Room categories data
const roomCategories = [
  {
    id: 1,
    title: "Номер Люкс с балконом на троих",
    rowDisplay: 3,
    rooms: [
      {
        id: 101,
        categoryId: 1,
        name: "Номер Люкс с балконом на троих",
        description: "Уютный и стильный номер с балконом, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.",
        capacity: "3 человека",
        size: "24 м²",
        features: [
          'Комфортная двуспальная кровать + односпальная кровать',
          'Балкон с видом',
          ...commonFeatures
        ],
        images: [
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
        ]
      },
      {
        id: 102,
        categoryId: 1,
        name: "Номер Люкс с балконом на троих",
        description: "Уютный и стильный номер с балконом, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.",
        capacity: "3 человека",
        size: "24 м²",
        features: [
          'Комфортная двуспальная кровать + односпальная кровать',
          'Балкон с видом',
          ...commonFeatures
        ],
        images: [
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1505693314654-ef3a6f5f3a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
        ]
      },
      {
        id: 103,
        categoryId: 1,
        name: "Номер Люкс с балконом на троих",
        description: "Уютный и стильный номер с балконом, рассчитанный на комфортное размещение до 3 гостей. Наслаждайтесь отдыхом с современными удобствами и приятной атмосферой.",
        capacity: "3 человека",
        size: "24 м²",
        features: [
          'Комфортная двуспальная кровать + односпальная кровать',
          'Балкон с видом',
          ...commonFeatures
        ],
        images: [
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1573322867430-923d3a0b8640?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Номер Люкс с балконом для четверых",
    rowDisplay: 2,
    rooms: [
      {
        id: 201,
        categoryId: 2,
        name: "Номер Люкс с балконом для четверых",
        description: "Просторный номер с балконом, идеальный для семьи или компании из 4 человек. Светлый и комфортный интерьер создаст атмосферу домашнего уюта.",
        capacity: "4 человека",
        size: "30 м²",
        features: [
          'Две двуспальные кровати или двуспальная кровать + две односпальные',
          'Балкон с видом',
          ...commonFeatures
        ],
        images: [
          'https://images.unsplash.com/photo-1630157886671-1cdf10a5c441?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1560185127-c67dc9a32e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1618219740975-d40978bb7378?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Комфорт номер на 1-м этаже для троих",
    rowDisplay: 2,
    rooms: [
      {
        id: 301,
        categoryId: 3,
        name: "Комфорт номер на 1-м этаже для троих",
        description: "Удобный номер на первом этаже для троих гостей. Отлично подходит для тех, кто предпочитает проживание без лестниц.",
        capacity: "3 человека",
        size: "22 м²",
        features: [
          'Комфортная двуспальная кровать + односпальная кровать',
          'Расположен на первом этаже',
          ...commonFeatures
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
        id: 302,
        categoryId: 3,
        name: "Комфорт номер на 1-м этаже для троих",
        description: "Удобный номер на первом этаже для троих гостей. Отлично подходит для тех, кто предпочитает проживание без лестниц.",
        capacity: "3 человека",
        size: "22 м²",
        features: [
          'Комфортная двуспальная кровать + односпальная кровать',
          'Расположен на первом этаже',
          ...commonFeatures
        ],
        images: [
          'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1630157887466-a671d25ef6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1615874694520-474822394e73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1612320648993-61c1cd604b71?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3'
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Номер Люкс с отдельным входом и террасой для троих",
    rowDisplay: 2,
    rooms: [
      {
        id: 401,
        categoryId: 4,
        name: "Номер Люкс с отдельным входом и террасой для троих",
        description: "Эксклюзивный номер с отдельным входом и собственной террасой для максимальной приватности. Идеально для тех, кто ценит личное пространство.",
        capacity: "3 человека",
        size: "26 м²",
        features: [
          'Комфортная двуспальная кровать + односпальная кровать',
          'Отдельный вход',
          'Собственная терраса',
          ...commonFeatures
        ],
        images: [
          'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
          'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3'
        ]
      }
    ]
  }
];

// Convert room categories array to a flat array of rooms
const allRoomsData: RoomType[] = roomCategories.flatMap(category => category.rooms);

const Index = () => {
  useEffect(() => {
    // Set the language of the HTML tag
    document.documentElement.lang = 'ru';
    
    // Set the page title and description
    document.title = 'Rosa Home Loo - Отель в Сочи у моря';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Уютный отель Rosa Home Loo в Сочи, Горный Воздух, в 10 минутах ходьбы от моря. Комфортные номера, отличный сервис и гостеприимство.');
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
              Мы предлагаем 7 комфортных номеров, разделенных на 4 категории.
              Все номера оборудованы кондиционером, холодильником и собственной ванной комнатой.
              Гостевой дом расположен в микрорайоне Горный Воздух, в 10 минутах ходьбы до моря.
            </p>
          </div>
          
          {/* Room Categories */}
          {roomCategories.map(category => (
            <RoomCategory 
              key={category.id}
              title={category.title}
              rooms={category.rooms}
              rowDisplay={category.rowDisplay}
            />
          ))}
          
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
