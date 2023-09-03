import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  onClick: () => void;
  isOpen: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, onClick, isOpen }) => {
  return (
    <div className="mr-2.5 w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 hover:bg-yellow-200 animate__animated animate__fadeInRight">
    <div
      className={`cursor-pointer transition-colors duration-300 ${
        isOpen ? 'text-gray-700 hover:text-gray-800' : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
    </div>
  );
};

export default Icon;
