"use client";
import React from 'react';
import InfoSection from './info-section';
import Table from './table';
import {useTranslations} from 'next-intl';

const TableSection: React.FC = () => {
  const t = useTranslations('Index');

  return (
    <section className="text-gray-600 body-font px-24" id="section4">
      <div className="text-center">
        <h1 className="sm:text-4xl text-2xl font-semibold pt-10 title-font text-gray-700">
          {t("table-header-1")}
          <br/>{t("table-header-2")}
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
