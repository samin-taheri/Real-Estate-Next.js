"use client";
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { any } from 'zod';

const OurServices: React.FC = () => {

  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto px-4 py-8 lg:py-24">
          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700 animate__animated animate__fadeInDown">
              {t("our-services")}
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4">
          <div className="p-8 lg:w-full md:w-full sm:w-full">
          <div className="h-full flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-right">
            <div className="flex-grow sm:pl-4 mr-10">
              <h2 className="title-font font-medium text-lg text-gray-900 pb-5 text-right">{t("our-services-title-1")}</h2>
              <p className="mb-4 text-right">{t("our-services-subtitle-1-1")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-1-2")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-1-3")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-1-4")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-1-5")} ✓</p>
            </div>
            <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 w-1/2 pt-5" src="/bg-34.jpg"/>
          </div>
        </div>
        <div className="p-8 lg:w-full md:w-full sm:w-full">
          <div className="h-full flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center mb-4 w-1/2 pb-5" src="/bg-32.jpg"/>
            <div className="flex-grow sm:pl-4 ml-10">
              <h2 className="title-font font-medium text-lg text-gray-900 pb-5 text-left">{t("our-services-title-2")}</h2>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-2-1")}</p>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-2-2")}</p>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-2-3")}</p>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-2-4")}</p>
            </div>
          </div>
        </div>
        <div className="p-8 lg:w-full md:w-full sm:w-full">
          <div className="h-full flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-right">
            <div className="flex-grow sm:pl-4 mr-10">
              <h2 className="title-font font-medium text-lg text-gray-900 pb-5 text-right">{t("our-services-title-3")}</h2>
              <p className="mb-4 text-right">{t("our-services-subtitle-3-1")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-3-2")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-3-3")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-3-4")} ✓</p>
            </div>
            <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 w-1/2" src="/bg-33.jpg"/>
          </div>
        </div>
        <div className="p-8 lg:w-full md:w-full sm:w-full">
          <div className="h-full flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 w-1/2 pb-5" src="/bg-31.jpg"/>
            <div className="flex-grow sm:pl-4 ml-10">
              <h2 className="title-font font-medium text-lg text-gray-900 pb-5 text-left">{t("our-services-title-4")}</h2>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-4-1")}</p>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-4-2")}</p>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-4-3")}</p>
              <p className="mb-4 text-left">✓ {t("our-services-subtitle-4-4")}</p>
            </div>
          </div>
        </div>
        <div className="p-8 lg:w-full md:w-full sm:w-full">
          <div className="h-full flex md:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-right">
            <div className="flex-grow sm:pl-4 mr-10">
              <h2 className="title-font font-medium text-lg text-gray-900 pb-5 text-right">{t("our-services-title-5")}</h2>
              <p className="mb-4 text-right">{t("our-services-subtitle-5-1")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-5-2")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-5-3")} ✓</p>
              <p className="mb-4 text-right">{t("our-services-subtitle-5-4")} ✓</p>
            </div>
            <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 w-1/2 pt-5" src="/bg-35.jpg"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
  );
};

export default OurServices;


{/* <span classNameName="bg-yellow-100 text-yellow-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" classNameName="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span> */}
