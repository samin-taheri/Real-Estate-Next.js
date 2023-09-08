import React from 'react';
import {ColoredCardsProps} from './interfaces'

const ColoredCards: React.FC<ColoredCardsProps> = ({ title, description, backgroundColor, link, linkColor }) => {
    const CardStyle = {
        backgroundColor: backgroundColor || 'rgba(255, 255, 255, 1)',
      }; 
      const LinkStyle = {
        color: linkColor || 'rgba(255, 255, 255, 1)',
      };
  return (
    <div className="p-4 hover:shadow-lg rounded-2xl border-2 border-gray-600" style={CardStyle}>
      <h2 className="text-lg text-gray-700 font-medium title-font mb-2">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
      <p style={LinkStyle} className="leading-relaxed text-base pt-4">{link}</p>
    </div>
  );
};

export default ColoredCards;
