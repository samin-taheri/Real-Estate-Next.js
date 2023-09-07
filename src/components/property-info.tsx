// components/PropertyInfo.tsx
import React from 'react';
import Button from './button';

interface PropertyInfoProps {
  title: string;
  description: string;
  image: string;
  button: string;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ title, description, image, button }) => {
    
  return (
    <div className="p-4 hover:shadow-xl shadow-lg rounded-2xl">
         <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-auto"
        />
      <h2 className="text-lg text-gray-700 font-medium title-font mb-2 mt-3 text-center">{title}</h2>
      <p className="leading-relaxed text-base text-center">{description}</p>
      <div className="flex justify-center p-6">
      <Button
        className="px-14 py-2 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">
        {button}
      </Button>
      </div>
    </div>
  );
};

export default PropertyInfo;
