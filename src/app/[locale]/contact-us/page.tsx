"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/button';

const ContactUs: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto px-5 py-12 md:py-24 lg:py-32 flex flex-col items-center animate__animated animate__fadeInLeft">
          <div className="w-full lg:w-1/2 bg-white rounded-xl p-10 flex flex-col items-center shadow-lg-2">
            <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700">
              {t("contact-us-page-title")}
            </h1>
            <p className="mb-8 leading-relaxed">
              {t("contact-us-page-subtitle")}
            </p>
            <div className="mb-4 w-full lg:w-3/4">
              <input
                placeholder={t("your-email-placeholder")}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4 w-full lg:w-3/4">
              <textarea
                placeholder={t("your-message-placeholder")}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-40 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <Button className="text-white bg-yellow-500 border-0 py-2 px-24 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              {t("send-button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
