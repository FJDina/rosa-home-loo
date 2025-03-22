
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type RoomType = {
  id: number;
  name: string;
  description: string;
  features: string[];
  images: string[];
  capacity: string;
  size: string;
};

interface RoomCardProps {
  room: RoomType;
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <>
      <div 
        className={cn(
          "group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover-scale",
          "opacity-0 animate-fade-in",
          { "animation-delay-100": index % 2 === 1, "animation-delay-200": index % 3 === 2 }
        )} 
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Image Carousel */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          {room.images.map((image, idx) => (
            <div 
              key={idx}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                idx === activeImageIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <img 
                src={image} 
                alt={`${room.name} - изображение ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
          
          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevImage}
              className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-all"
              aria-label="Следующее изображение"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Expand Button */}
          <button 
            onClick={() => openModal(activeImageIndex)}
            className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Открыть галерею"
          >
            <Maximize2 size={18} />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {activeImageIndex + 1} / {room.images.length}
          </div>
        </div>
        
        {/* Room Info */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-sea-800">{room.name}</h3>
          <p className="text-coast-600 mb-4">{room.description}</p>
          
          <div className="flex gap-4 mb-4 text-sm">
            <div className="flex items-center">
              <span className="text-coast-500 mr-2">Вместимость:</span>
              <span className="font-medium">{room.capacity}</span>
            </div>
            <div className="flex items-center">
              <span className="text-coast-500 mr-2">Площадь:</span>
              <span className="font-medium">{room.size}</span>
            </div>
          </div>
          
          <ul className="mb-5">
            {room.features.map((feature, idx) => (
              <li key={idx} className="text-coast-600 text-sm mb-1 flex items-start">
                <span className="mr-2 text-accent">•</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <a
            href="https://realitycalendar.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-sea-50 hover:bg-sea-100 text-sea-800 text-center py-3 rounded-md font-medium transition-colors border border-sea-200"
          >
            Забронировать
          </a>
        </div>
      </div>
      
      {/* Full Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] p-4">
            <img 
              src={room.images[modalImageIndex]} 
              alt={`${room.name} - изображение ${modalImageIndex + 1}`} 
              className="w-full h-full object-contain"
            />
            
            <button
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={closeModal}
              aria-label="Закрыть"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={prevModalImage}
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={nextModalImage}
              aria-label="Следующее изображение"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {modalImageIndex + 1} / {room.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoomCard;
