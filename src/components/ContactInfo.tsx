
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="section-title">Контактная информация</h2>
            <p className="text-coast-600 mb-8">
              Мы всегда рады ответить на ваши вопросы и помочь с бронированием. 
              Свяжитесь с нами любым удобным для вас способом.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sea-100 text-sea-600 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Адрес</h4>
                  <p className="text-coast-600">
                    Улица Енисейская 6/20, Сочи, Краснодарский край
                  </p>
                  <p className="text-coast-600 mt-1">
                    Микрорайон Лоо
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sea-100 text-sea-600 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Телефон</h4>
                  <a 
                    href="tel:+79165209677" 
                    className="text-coast-600 hover:text-sea-600 transition-colors"
                  >
                    +7 916 520-96-77
                  </a>
                  <p className="text-coast-500 text-sm mt-1">
                    Работаем с 9:00 до 21:00, без выходных
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sea-100 text-sea-600 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-sea-800 mb-1">Email</h4>
                  <a 
                    href="mailto:5209677@mail.ru" 
                    className="text-coast-600 hover:text-sea-600 transition-colors"
                  >
                    5209677@mail.ru
                  </a>
                  <p className="text-coast-500 text-sm mt-1">
                    Мы отвечаем на все сообщения в течение 24 часов
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-sea-50 rounded-lg border border-sea-100">
              <h4 className="font-semibold text-sea-800 mb-1">Как добраться</h4>
              <p className="text-coast-600 mb-4">
                Отель находится в микрорайоне Лоо, в 20 километрах от центра Сочи. 
                Добраться до нас можно на автомобиле, такси или общественном транспорте.
              </p>
              <ul className="space-y-2 text-coast-600">
                <li className="flex items-start">
                  <span className="mr-2 text-sea-600">•</span>
                  <span>От аэропорта Адлер: 50 км (примерно 1 час на автомобиле)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sea-600">•</span>
                  <span>От ж/д вокзала Сочи: 20 км (примерно 30 минут на автомобиле)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-sea-600">•</span>
                  <span>Общественный транспорт: автобусы и маршрутные такси до остановки "Лоо"</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6">
              <a
                href="https://realitycalendar.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sea-600 hover:bg-sea-700 text-white px-8 py-3 rounded-md font-semibold transition-all inline-block mt-4 button-shine"
              >
                Забронировать номер
              </a>
            </div>
          </div>
          
          {/* Right Column - Map with marker */}
          <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
            {/* Yandex Map with fixed marker */}
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0f2dbf5bac76c1b3ab9c5e0ad2eb1d77a5f1eaa6a0f6b7ba96b9ca8f5d9c9732&amp;source=constructor"
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Rosa Home Loo на карте"
              className="w-full h-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
