// components/InfoSection.tsx
import React, { ReactNode } from 'react';

interface InfoSectionProps {
  children: ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ children }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="bg-white relative flex flex-wrap py-3 rounded-2xl shadow-xl mx-5">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
