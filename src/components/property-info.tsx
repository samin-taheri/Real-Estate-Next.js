import React from 'react';
import Button from './button';
import { PropertyInfoProps } from '@/types';
import { Link } from 'react-scroll';

const PropertyInfo: React.FC<PropertyInfoProps> = ({ title, description, image, button, to }) => {
    
  return (
    <div className="p-4 hover:shadow-xl shadow-lg-2 rounded-2xl post-card">
         <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-auto"
        />
      <h2 className="text-lg text-gray-700 font-medium title-font mb-2 mt-3 text-center">{title}</h2>
      <p className="leading-relaxed text-base text-center">{description}</p>
      <div className="flex justify-center p-6">
        <Link spy={true} smooth={true} offset={-70} duration={800} to={to}>
        <Button
          className="px-14 py-2 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">
          {button}
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default PropertyInfo;
