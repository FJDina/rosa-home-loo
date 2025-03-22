import React from 'react';
import { Wifi, Car, Camera, CookingPot, Wind, UtensilsCrossed } from 'lucide-react';

const amenities = [
  {
    id: 'air-conditioning',
    icon: Wind,
    title: 'Кондиционер',
    description: 'Каждый номер оборудован современным кондиционером для вашего комфорта'
  },
  {
    id: 'wifi',
    icon: Wifi,
    title: 'Wi-Fi',
    description: 'Бесплатный высокоскоростной интернет на всей территории отеля'
  },
  {
    id: 'parking',
    icon: Car,
    title: 'Парковка',
    description: 'Безопасная парковка для вашего автомобиля на территории отеля'
  },
  {
    id: 'surveillance',
    icon: Camera,
    title: 'Видеонаблюдение',
    description: 'Система видеонаблюдения для обеспечения вашей безопасности'
  },
  {
    id: 'kitchen',
    icon: CookingPot,
    title: 'Летняя кухня',
    description: 'Современная летняя кухня, оборудованная всем необходимым'
  },
  {
    id: 'bbq',
    icon: UtensilsCrossed,
    title: 'Зона барбекю',
    description: 'Специально оборудованная зона для приготовления барбекю'
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-sea-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Удобства и услуги</h2>
          <p className="text-coast-600 max-w-3xl mx-auto mt-4">
            Мы предлагаем все необходимое для вашего комфортного отдыха.
            Наши удобства созданы, чтобы сделать ваше пребывание незабываемым.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={amenity.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-sea-100 text-sea-600">
                <amenity.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-sea-800">{amenity.title}</h3>
              <p className="text-coast-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
