import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Gallery images - only include user uploaded images
const galleryImages = [
  // Category 1 - Luxury Triple Room with Balcony
  {
    id: 1,
    category: 'rooms',
    src: 'public/lovable-uploads/b4a7f2dc-ae8e-4336-bf56-1c717a9fd563.png',
    alt: 'Ванная комната с душем'
  },
  {
    id: 2,
    category: 'rooms',
    src: 'public/lovable-uploads/e0eaae02-5e59-46a9-9903-62658de16a47.png',
    alt: 'Балкон с видом'
  },
  {
    id: 3,
    category: 'rooms',
    src: 'public/lovable-uploads/eb8768cf-d99a-4847-b2a5-d444396f5ecf.png',
    alt: 'Спальня с кроватью'
  },
  {
    id: 4,
    category: 'rooms',
    src: 'public/lovable-uploads/9f985940-3dfd-4ecb-b77d-57eea1a600e0.png',
    alt: 'Интерьер комнаты'
  },
  {
    id: 5,
    category: 'rooms',
    src: 'public/lovable-uploads/25f36fd3-c43d-4dfb-9d99-60cb32172e79.png',
    alt: 'Шкаф в комнате'
  },
  {
    id: 6,
    category: 'rooms',
    src: 'public/lovable-uploads/31e4374a-686a-4054-8060-f726bdc68f4d.png',
    alt: 'Вид комнаты'
  },
  {
    id: 7,
    category: 'rooms',
    src: 'public/lovable-uploads/7bb2a6a1-9355-4ff2-91fa-a1d6f720c894.png',
    alt: 'Декор комнаты'
  },
  {
    id: 8,
    category: 'rooms',
    src: 'public/lovable-uploads/f93fc763-774f-4f2d-827a-baeb2cda1a5a.png',
    alt: 'Балкон номера'
  },
  {
    id: 9,
    category: 'rooms',
    src: 'public/lovable-uploads/a4b1654c-1f36-4eb4-8320-b25d1146196c.png',
    alt: 'Душевая комната'
  },
  // Category 2 - Luxury Quadruple Room with Balcony
  {
    id: 10,
    category: 'rooms',
    src: 'public/lovable-uploads/73184c97-8dc7-499c-a94b-af3455f8460c.png',
    alt: 'Балкон номера для четверых'
  },
  {
    id: 11,
    category: 'rooms',
    src: 'public/lovable-uploads/7757c440-193a-4fd4-96f7-b11c840bd54b.png',
    alt: 'Спальня с двумя кроватями'
  },
  {
    id: 12,
    category: 'rooms',
    src: 'public/lovable-uploads/70692f1e-728e-41b7-b3b8-30fb8cf218ee.png',
    alt: 'Интерьер номера для четверых'
  },
  {
    id: 13,
    category: 'rooms',
    src: 'public/lovable-uploads/206f924c-d570-445a-abdb-a794caa53576.png',
    alt: 'Ванная комната номера'
  },
  {
    id: 14,
    category: 'rooms',
    src: 'public/lovable-uploads/668c92b3-c402-4a4b-a3ad-f1585fed254f.png',
    alt: 'Большая спальня'
  },
  // Category 3 - Comfort Triple Room on 1st Floor
  {
    id: 15,
    category: 'rooms',
    src: 'public/lovable-uploads/d86744e0-2ce8-447b-a98f-a9b984087cf2.png',
    alt: 'Ванная комната с душем на первом этаже'
  },
  {
    id: 16,
    category: 'rooms',
    src: 'public/lovable-uploads/5e03b727-fdba-4c8f-b1ff-3ccc33ec47cd.png',
    alt: 'Стол с фруктами в комнате'
  },
  {
    id: 17,
    category: 'rooms',
    src: 'public/lovable-uploads/c8e16b73-d760-4a80-9670-4e1d3798bd45.png',
    alt: 'Вход в комнату на первом этаже'
  },
  {
    id: 18,
    category: 'rooms',
    src: 'public/lovable-uploads/5430c28e-8cd3-4f59-8fca-8261d660fe61.png',
    alt: 'Спальня на первом этаже'
  },
  {
    id: 19,
    category: 'rooms',
    src: 'public/lovable-uploads/0dbf9c96-4374-4d4b-ae33-b5f7f7fb9d77.png',
    alt: 'Детали интерьера спальни'
  },
  // Category 4 - Luxury Triple Room with Private Entrance and Terrace
  {
    id: 20,
    category: 'rooms',
    src: 'public/lovable-uploads/a63a11c1-e204-49f6-a1c5-16575e8b58f7.png',
    alt: 'Трехместный номер с отдельным входом'
  },
  {
    id: 21,
    category: 'rooms',
    src: 'public/lovable-uploads/edc66ed1-f99a-4235-ac22-f6c5bbaed95d.png',
    alt: 'Ванная комната в номере с отдельным входом'
  },
  {
    id: 22,
    category: 'rooms',
    src: 'public/lovable-uploads/9bbd9a74-e152-46c5-a67d-5475a9b30dff.png',
    alt: 'Интерьер номера с отдельным входом'
  }
];

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'rooms', label: 'Номера' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.classList.add('overflow-hidden');
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-sea-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Фотогалерея</h2>
          <p className="text-coast-600 max-w-3xl mx-auto mt-4">
            Ознакомьтесь с нашей фотогалереей, которая демонстрирует интерьер и экстерьер отеля, 
            номера и окружающую природу.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-sea-600 text-white shadow-md' 
                    : 'bg-white text-coast-600 hover:bg-sea-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              onClick={() => openModal(index)}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={prevImage}
            aria-label="Предыдущее изображение"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={nextImage}
            aria-label="Следующее изображение"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="relative w-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[currentImageIndex].src} 
              alt={filteredImages[currentImageIndex].alt} 
              className="w-full h-full object-contain"
            />
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
