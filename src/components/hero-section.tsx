'use client';
import React, { useState } from 'react';
import CatalogPopup from './catalog-popup';
import Button from './button';
import {useTranslations} from 'next-intl';

const HeroSection: React.FC = () => {
  const t = useTranslations('Index');

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="text-gray-600 body-font" id="hero">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto flex xl:px-20 md:px-4 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700 animate__animated animate__fadeInLeft">{t("title")}</h1>
            <p className="mb-8 leading-relaxed animate__animated animate__fadeInLeft">{t("subtitle")}</p>
            <div className="flex justify-center">
              <Button
                onClick={openPopup}
                className="px-16 py-3 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 animate__animated animate__fadeInLeft">{t("get-started")}
              </Button>
              {isPopupOpen && <CatalogPopup onClose={closePopup} />}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/bg-4.jpg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
