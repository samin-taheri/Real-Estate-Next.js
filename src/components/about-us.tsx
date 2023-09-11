"use client";
import React from "react";
import InfoSection from "./info-section";
import Button from "./button";
import {useTranslations} from 'next-intl';

const Subscribe = () => {
  const t = useTranslations('Index');
  return(
    <section className="text-gray-600 body-font">
    <InfoSection>
    <div className="lg:w-1/2 px-6 lg:mt-0">
      <img className="w-18 h-18" alt="hero" src="/bg-22.jpg"/>
      </div>
      <div className="lg:w-1/2 px-6 py-3">
      <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-yellow-500 bg-yellow-100 ml-5">{t("about-us-subheader")}</span>
        <h2 className="m-5 title-font text-4xl font-semibold text-gray-700">{t("about-us-title")}</h2>
        <p className="m-5">{t("about-us-subtitle")}</p>
        <div className="flex">
        <div className="flex m-5">
        <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
           <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        </div>
            <div className="justify-row">
                <h2 className="ml-4 title-font text-4xl font-semibold text-gray-700">55K</h2>
                <p className="ml-4 mt-4">{t("about-us-satisfied-people")}</p>
            </div>
            </div>
            <div className="flex m-5">
            <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            </div>
            <div className="justify-row">
                <h2 className="ml-4 title-font text-4xl font-semibold text-gray-700">11K</h2>
                <p className="ml-4 mt-4">{t("about-us-verified-property")}</p>
            </div>
            </div>
        </div>
        <div className="mb-5 mt-3 flex w-full md:justify-start justify-center items-end">
      <Button
        className="inline-flex ml-5 text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">{t("about-us-button")}
      </Button>
    </div>
      </div>
      </InfoSection>
  </section>
  )
};

export default Subscribe;