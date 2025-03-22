
import React from 'react';
import { MapPin, Waves, Compass, Car } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="section-title">О нас</h2>
            <p className="text-coast-600 mb-6">
              Отель "Loo Home&Sea" расположен в тихом и живописном районе Сочи, всего в 200 метрах от пляжа. 
              Наш отель предлагает уютные номера с современным дизайном и всеми необходимыми удобствами для 
              вашего комфортного отдыха.
            </p>
            <p className="text-coast-600 mb-6">
              Мы стремимся создать для наших гостей атмосферу домашнего уюта в сочетании с высоким уровнем 
              сервиса. Каждый номер оборудован кондиционером, бесплатным Wi-Fi, телевизором и собственной 
              ванной комнатой.
            </p>
            <p className="text-coast-600 mb-8">
              На территории отеля есть летняя кухня, зона барбекю и уютные места для отдыха, где вы можете 
              насладиться теплыми вечерами в кругу семьи или друзей.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-sea-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Расположение</h4>
                  <p className="text-sm text-coast-600">
                    Всего 200 метров от пляжа, в тихом и уютном районе Сочи
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-sea-600">
                  <Waves size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Пляж</h4>
                  <p className="text-sm text-coast-600">
                    Широкий галечный пляж с чистой водой и хорошей инфраструктурой
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-sea-600">
                  <Compass size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Достопримечательности</h4>
                  <p className="text-sm text-coast-600">
                    Рядом множество интересных мест для посещения
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 mt-1 text-sea-600">
                  <Car size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Трансфер</h4>
                  <p className="text-sm text-coast-600">
                    Услуги трансфера из аэропорта или железнодорожного вокзала
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-sea-50 p-6 rounded-lg border border-sea-100">
              <h4 className="font-semibold text-sea-800 mb-3">Дополнительная информация</h4>
              <p className="text-sm text-coast-600 mb-2">
                Отель "Loo Home&Sea" расположен в микрорайоне Лоо, который славится своим чистым пляжем и 
                спокойной атмосферой. Близость к морю, комфортные номера и дружелюбный персонал делают 
                наш отель идеальным выбором для семейного отдыха.
              </p>
              <p className="text-sm text-coast-600">
                В непосредственной близости от отеля находятся магазины, кафе, рестораны и остановки 
                общественного транспорта, что обеспечивает удобный доступ ко всем достопримечательностям Сочи.
              </p>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Отель" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg h-48">
                <img 
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Пляж" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="overflow-hidden rounded-lg shadow-lg h-48">
                <img 
                  src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Сочи" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg h-64">
                <img 
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                  alt="Террасса" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
