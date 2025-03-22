
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Example gallery images
const galleryImages = [
  {
    id: 1,
    category: 'hotel',
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Отель - внешний вид'
  },
  {
    id: 2,
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Номер - спальня'
  },
  {
    id: 3,
    category: 'surroundings',
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Окрестности - пляж'
  },
  {
    id: 4,
    category: 'hotel',
    src: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Отель - территория'
  },
  {
    id: 5,
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1560185127-c67dc9a32e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Номер - гостиная'
  },
  {
    id: 6,
    category: 'surroundings',
    src: 'https://images.unsplash.com/photo-1636389155761-810de99a44d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Окрестности - море'
  },
  {
    id: 7,
    category: 'hotel',
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Отель - холл'
  },
  {
    id: 8,
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Номер - ванная'
  },
  {
    id: 9,
    category: 'surroundings',
    src: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Окрестности - горы'
  },
  {
    id: 10,
    category: 'hotel',
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Отель - бассейн'
  },
  {
    id: 11,
    category: 'rooms',
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Номер - балкон'
  },
  {
    id: 12,
    category: 'surroundings',
    src: 'https://images.unsplash.com/photo-1589485257263-9d7beab5e4a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Окрестности - закат'
  },
];

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'hotel', label: 'Отель' },
  { id: 'rooms', label: 'Номера' },
  { id: 'surroundings', label: 'Окрестности' },
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
