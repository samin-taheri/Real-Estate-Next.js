import React from 'react';
import { BenefitsOfWorkingCardProps } from '@/types';

const BenefitsOfWorkingCard: React.FC<BenefitsOfWorkingCardProps> = ({ icon, title, description, color }) => {
    const CardStyle = {
        backgroundColor: color || 'rgba(255, 255, 255, 1)',
      }; 
  return (
    <div className="transition-transform transform hover:scale-105 hover:shadow-xl rounded-2xl flex p-7 border-2 border-gray-600" style={CardStyle}>
      <div className='w-1/6'>
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full pt-2">
        {icon}
      </div>
      </div>
      <div className='w-5/6'>
      <h2 className="text-lg text-gray-700 font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
};

export default BenefitsOfWorkingCard;
