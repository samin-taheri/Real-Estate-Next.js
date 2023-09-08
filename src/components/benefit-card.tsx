import React from 'react';
import { BenefitCardProps } from './interfaces';

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 hover:shadow-xl hover:bg-yellow-100 shadow-lg-2 rounded-2xl animate__animated animate__fadeInUp">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
        {icon}
      </div>
      <h2 className="text-lg text-gray-700 font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  );
};

export default BenefitCard;
