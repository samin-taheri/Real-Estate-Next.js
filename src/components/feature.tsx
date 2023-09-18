"use client";
import React from 'react'
import InfoSection from './info-section'
import Button from './button';
import {useTranslations} from 'next-intl';

const Feature = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font" id="section3">
      <InfoSection>
        <div className="lg:w-1/2 px-6">
          <h2 className="m-5 title-font text-4xl font-semibold text-gray-700">{t("feature-title")}</h2>
          <p className="m-5">{t("feature-subtitle")}</p>
          <div className="mt-10 flex w-full md:justify-start justify-center items-end mb-7">
        <div className="relative ml-5 lg:w-full xl:w-1/2 w-2/4">
          <input placeholder={t("feature-placeholder")} type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <Button
          className="inline-flex ml-5 text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">{t("feature-button")}
        </Button>
      </div>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <img className="w-22 h-22" alt="hero" src="/bg-5.jpg"/>
        </div>
        </InfoSection>
    </section>
  );
}

export default Feature;