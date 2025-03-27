
import React from 'react';
import RoomCard, { RoomType } from './RoomCard';
import { cn } from '@/lib/utils';

interface RoomCategoryProps {
  title: string;
  rooms: RoomType[];
  rowDisplay?: number; // Number of rooms to display in a row
}

const RoomCategory: React.FC<RoomCategoryProps> = ({ 
  title, 
  rooms, 
  rowDisplay = 2 // Default to 2 rooms per row on desktop
}) => {
  // Determine the grid columns class based on rowDisplay
  const getGridClass = () => {
    switch(rowDisplay) {
      case 3:
        return 'grid grid-cols-1 md:grid-cols-3';
      default:
        return 'grid grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-sea-800 mb-8 text-center">
        {title}
      </h2>
      
      <div className={cn(getGridClass(), 'gap-8')}>
        {rooms.map((room, idx) => (
          <div key={room.id} className="h-full">
            <RoomCard room={room} index={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCategory;
