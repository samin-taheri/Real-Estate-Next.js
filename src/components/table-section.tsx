// TableSection.tsx
import React from 'react';
import InfoSection from './info-section';
import Table from './table';

const TableSection: React.FC = () => {
  return (
    <section className="text-gray-600 body-font" id="section4">
      <div className="text-center">
        <h1 className="sm:text-4xl text-2xl font-semibold pt-10 title-font text-gray-700">
          Comparison of the advantages of obtaining
          <br className="hidden lg:inline-block" />residence permit and citizenship by
          <br className="hidden lg:inline-block" />purchasing real estate
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-24 h-1 rounded-full bg-yellow-500 inline-flex"></div>
        </div>
      </div>
      <InfoSection>
        <div className="lg:w-5/6 w-full mx-auto overflow-auto mb-10">
          <Table />
        </div>
      </InfoSection>
    </section>
  );
};

export default TableSection;
