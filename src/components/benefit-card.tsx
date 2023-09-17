import React from 'react';
import { BenefitCardProps } from '@/types';

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 shadow-lg-2 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-yellow-50">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
        {icon}
      </div>
      <h2 className="text-lg text-gray-700 font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  );
};

export default BenefitCard;
