import React from 'react';
import { OtherCountriesCardProps } from '@/types';

const OtherCountriesCard: React.FC<OtherCountriesCardProps> = ({
    backgroundImage,
    title,
    description,
    customWidth =64,
    customHeight =64
}) => {

  return (
    <div className={`relative ${customWidth} ${customHeight} bg-cover bg-center rounded-xl overflow-hidden`}>
      {/* Background image */}
      <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-black bg-opacity-50 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default OtherCountriesCard;
