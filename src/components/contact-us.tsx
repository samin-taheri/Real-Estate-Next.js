
"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const ContactUs: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font relative" id='contact-us'>
      <div className="text-center">
        <h1 className="sm:text-4xl text-2xl font-semibold pt-10 title-font text-gray-700">
          {t("come-to-our-office")}
        </h1>
      </div>
      <div className="container px-8 sm:px-8 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-full md:w-full sm:w-full bg-gray-300 rounded-xl overflow-hidden p-10 sm:p-40 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 shadow-md rounded-xl sm:top-28 sm:right-24">
            <div className="lg:w-1/2 md:w-1/2 px-6">
              <h2 className="title-font tracking-widest text-gray-900 text-sm font-medium pl-2">
                {t("address-title")}
              </h2>
              <p className="mt-1 pl-2">{t("address")}</p>
            </div>
            <div className="lg:w-1/2 md:w-full px-6 mt-4 md:mt-0">
              <h2 className="title-font tracking-widest text-gray-900 text-sm font-medium pl-2">
                {t("email-title")}
              </h2>
              <a className="text-yellow-500 leading-relaxed pl-2">info@jasminehomex.com</a>
              <h2 className="title-font tracking-widest text-gray-900 text-sm font-medium pl-2 mt-4">
                {t("phone-title")}
              </h2>
              <p className="leading-relaxed pl-2">+905077525816</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
