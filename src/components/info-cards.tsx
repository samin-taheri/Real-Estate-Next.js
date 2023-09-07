import React from 'react';

interface ColoredCardsProps {
  title: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<ColoredCardsProps> = ({ title, icon }) => {
  return (
    <div className="bg-white p-4 hover:shadow-xl shadow-md rounded-lg justify-center items-center flex-col">
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-100 text-yellow-500 mb-4 ml-14 hover:bg-yellow-300 align-middle">
        <div className="w-6 h-6">{icon}</div>
      </div>
      <h2 className="flex flex-col justify-center items-center text-center text-lg text-gray-700 font-medium title-font mb-2">{title}</h2>
    </div>
  );
};

export default InfoCard;
