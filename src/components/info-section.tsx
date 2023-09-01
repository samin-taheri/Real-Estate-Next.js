// components/InfoSection.tsx
import React, { ReactNode } from 'react';

interface InfoSectionProps {
  children: ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ children }) => {
  return (
    <InfoSection>
        {children}
      </InfoSection>
  );
};

export default InfoSection;
