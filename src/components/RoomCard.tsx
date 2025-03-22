
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
  const [isExpanded, setIsExpanded] = useState(false);

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
          "opacity-0 animate-fade-in h-full flex flex-col",
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
        <div className="p-6 flex flex-col flex-grow">
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
          
          <div className="mt-auto">
            <Collapsible
              open={isExpanded}
              onOpenChange={setIsExpanded}
              className="w-full space-y-4"
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 bg-sea-50 hover:bg-sea-100 text-sea-800 border-sea-200"
                >
                  {isExpanded ? 'Скрыть галерею' : 'Показать больше фото'}
                  {isExpanded ? <X size={16} /> : <ChevronRight size={16} />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {room.images.slice(0, 4).map((img, idx) => (
                    <div 
                      key={`expanded-${idx}`} 
                      className="cursor-pointer rounded-md overflow-hidden aspect-video"
                      onClick={() => openModal(idx)}
                    >
                      <img 
                        src={img} 
                        alt={`${room.name} - фото ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
            
            <a
              href={`https://realitycalendar.ru/rooms/${room.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-sea-600 hover:bg-sea-700 text-white text-center py-3 rounded-md font-medium transition-colors mt-4"
            >
              Забронировать
            </a>
          </div>
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
              <X size={24} />
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
