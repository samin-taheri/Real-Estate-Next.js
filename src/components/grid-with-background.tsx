import React, { ReactNode } from 'react';

interface GridWithBackgroundProps {
  backgroundImage: string;
  children: ReactNode;
  width?: string; // Add width prop
  height?: string; // Add height prop
}

const GridWithBackground: React.FC<GridWithBackgroundProps> = ({ backgroundImage, children, width, height }) => {
   
  return (

   <div className="p-1 rounded-xl">
   <img src={backgroundImage} alt={backgroundImage} className="w-full h-full object-cover rounded-xl" />
   <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
     <h2 className="text-xl font-semibold">{children}</h2>
   </div>
 </div>
  );
};

export default GridWithBackground;
