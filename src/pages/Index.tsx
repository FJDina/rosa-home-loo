
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
          'public/lovable-uploads/b4a7f2dc-ae8e-4336-bf56-1c717a9fd563.png',
          'public/lovable-uploads/e0eaae02-5e59-46a9-9903-62658de16a47.png',
          'public/lovable-uploads/eb8768cf-d99a-4847-b2a5-d444396f5ecf.png',
          'public/lovable-uploads/9f985940-3dfd-4ecb-b77d-57eea1a600e0.png',
          'public/lovable-uploads/25f36fd3-c43d-4dfb-9d99-60cb32172e79.png'
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
          'public/lovable-uploads/31e4374a-686a-4054-8060-f726bdc68f4d.png',
          'public/lovable-uploads/7bb2a6a1-9355-4ff2-91fa-a1d6f720c894.png',
          'public/lovable-uploads/f93fc763-774f-4f2d-827a-baeb2cda1a5a.png',
          'public/lovable-uploads/a4b1654c-1f36-4eb4-8320-b25d1146196c.png',
          'public/lovable-uploads/f93fc763-774f-4f2d-827a-baeb2cda1a5a.png'
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
          'public/lovable-uploads/b4a7f2dc-ae8e-4336-bf56-1c717a9fd563.png',
          'public/lovable-uploads/e0eaae02-5e59-46a9-9903-62658de16a47.png',
          'public/lovable-uploads/eb8768cf-d99a-4847-b2a5-d444396f5ecf.png',
          'public/lovable-uploads/9f985940-3dfd-4ecb-b77d-57eea1a600e0.png',
          'public/lovable-uploads/25f36fd3-c43d-4dfb-9d99-60cb32172e79.png'
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
          'public/lovable-uploads/73184c97-8dc7-499c-a94b-af3455f8460c.png',
          'public/lovable-uploads/7757c440-193a-4fd4-96f7-b11c840bd54b.png',
          'public/lovable-uploads/70692f1e-728e-41b7-b3b8-30fb8cf218ee.png',
          'public/lovable-uploads/206f924c-d570-445a-abdb-a794caa53576.png',
          'public/lovable-uploads/668c92b3-c402-4a4b-a3ad-f1585fed254f.png'
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
          'public/lovable-uploads/d86744e0-2ce8-447b-a98f-a9b984087cf2.png',
          'public/lovable-uploads/5e03b727-fdba-4c8f-b1ff-3ccc33ec47cd.png',
          'public/lovable-uploads/c8e16b73-d760-4a80-9670-4e1d3798bd45.png',
          'public/lovable-uploads/5430c28e-8cd3-4f59-8fca-8261d660fe61.png',
          'public/lovable-uploads/0dbf9c96-4374-4d4b-ae33-b5f7f7fb9d77.png'
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
          'public/lovable-uploads/d86744e0-2ce8-447b-a98f-a9b984087cf2.png',
          'public/lovable-uploads/5e03b727-fdba-4c8f-b1ff-3ccc33ec47cd.png',
          'public/lovable-uploads/c8e16b73-d760-4a80-9670-4e1d3798bd45.png',
          'public/lovable-uploads/5430c28e-8cd3-4f59-8fca-8261d660fe61.png',
          'public/lovable-uploads/0dbf9c96-4374-4d4b-ae33-b5f7f7fb9d77.png'
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
          'public/lovable-uploads/a63a11c1-e204-49f6-a1c5-16575e8b58f7.png',
          'public/lovable-uploads/edc66ed1-f99a-4235-ac22-f6c5bbaed95d.png',
          'public/lovable-uploads/9bbd9a74-e152-46c5-a67d-5475a9b30dff.png'
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
