"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const ContactUs: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row">
          <div className="lg:w-2/3 md:w-full bg-white rounded-xl shadow-lg-2 overflow-hidden sm:mr-10 p-10 mt-8 md:mt-0 tems-center" style={{ marginBottom: '2rem' }}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {t("contact-us-page-title")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {t("contact-us-page-subtitle")}
            </p>
            <div className="mb-4">
              <input
                placeholder={t("your-name-placeholder")}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder={t("your-email-placeholder")}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder={t("your-message-placeholder")}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              {t("send-button")}
            </button>
          </div>

          <div className="lg:w-1/3 md:w-full bg-white rounded-xl tems-center shadow-lg-2 overflow-hidden p-5 flex" style={{ marginBottom: '2rem' }}>
            <div className="px-6">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font pt-5">
              {t("contact-us-page-details")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {t("contact-us-page-details-subtitle")}
            </p>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm mb-1 font-medium pt-5">
                {t("address-title")}
              </h2>
              <p className="mt-1">{t("address")}</p>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm mb-1 font-medium pt-5">
                {t("email-title")}
              </h2>
              <a className="text-yellow-500 leading-relaxed">
                info@jasminehomex.com
              </a>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm mb-1 font-medium pt-5">
                {t("phone-title")}
              </h2>
              <p className="leading-relaxed">+905077525816</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
