"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import BenefitCard from '@/components/benefit-card';

const AboutUs: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-rectangle bg-cover bg-center">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-md text-yellow-500 tracking-widest font-medium title-font mb-1 animate__animated animate__fadeInDown">{t("about-us-page-subheader")}</h2>
        <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700 animate__animated animate__fadeInDown">{t("about-us-page-header")}</h1>
      </div>
      <div className="container p-6 flex-wrap">
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 pb-5">
            <BenefitCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>
              }
              title={t("about-us-title-1")}
              description={t("about-us-subtitle-1")}
            />
            <BenefitCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>              
              }
              title={t("about-us-title-2")}
              description={t("about-us-subtitle-2")}
            />
            <BenefitCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>              
              }
              title={t("about-us-title-3")}
              description={t("about-us-subtitle-3")}
            />
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">+ 2900</h2>
              <p className="leading-relaxed">{t("housing-sales")}</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">+810</h2>
              <p className="leading-relaxed">{t("partner-and-agency")}</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">+8700</h2>
              <p className="leading-relaxed">{t("happy-customer")}</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">+14</h2>
              <p className="leading-relaxed">{t("construction-project")}</p>
            </div>
          </div>
        </div>
    </div>
    </div>
  </section>
  );
};

export default AboutUs;

