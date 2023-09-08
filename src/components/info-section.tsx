import React, { ReactNode } from 'react';
import {InfoSectionProps} from './interfaces';

const InfoSection: React.FC<InfoSectionProps> = ({ children }) => {
  return (
    <div className="container px-5 py-24 mb-10 mx-auto">
      <div className="bg-white relative flex flex-wrap py-3 rounded-2xl shadow-lg-2 mx-5">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
