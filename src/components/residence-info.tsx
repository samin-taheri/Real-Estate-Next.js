"use client";
import React from 'react';
import InfoSection from './info-section';
import {useTranslations} from 'next-intl';

const ResidenceInfo: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font" id='section3'>
    <InfoSection>
      <div className="lg:w-1/2 px-6 py-3">
      <h2 className="m-10 title-font text-4xl font-semibold text-gray-700">{t("residence-info-title")}</h2>
      <p className="m-10">{t("residence-info-subtitle")}</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <img className="w-22 h-22" alt="hero" src="/bg-12.jpg"/>
      </div>
      </InfoSection>
    </section>
  );
};

export default ResidenceInfo;
