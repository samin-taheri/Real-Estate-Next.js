"use client";
import React from 'react';
import Button from './button';
import {useTranslations} from 'next-intl';

const CompletedQuiz: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <div>
    <div className='flex flex-col sm:flex-row md:flex-row'>
    <div className=" mb-10 md:justify-start justify-center items-end lg:w-1/2 md:w-1/2 sm:w-full" style={{maxWidth: '500px'}}>
    <h2 className="question-text pt-4 pb-5">{t("completed-quiz-title")}🤩</h2>

      <div className="pb-3">
        <input
          placeholder={t("your-name-placeholder")}
          type="text"
          id="hero-field"
          name="hero-field"
          className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="pb-3">
        <input
          placeholder={t("your-phone-placeholder")}
          type="text"
          id="hero-field"
          name="hero-field"
          className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="flex space-x-4 pb-5">
      <a
        href="https://wa.me/your-whatsapp-number"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button-2">WhatsApp
      </a>
      <a
        href="viber://add?number=your-viber-number"
        target="_blank"
        rel="noopener noreferrer"
        className="viber-button">Viber
      </a>
      <a
        href="https://t.me/your-telegram-username"
        target="_blank"
        rel="noopener noreferrer"
        className="telegram-button">Telegram
      </a>
    </div>
    <Button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
      {t("get-a-selection-button")}
    </Button>
      </div>
      <div className="question-container lg:w-1/2 md:w-1/2 sm:w-full sm:mt-0" style={{maxWidth: '450px'}}>
      <img src="/bg-29.jpg" alt="bg-29" className="w-full h-full hidden sm:block" />
      </div>
      </div>
  </div>
  );
};

export default CompletedQuiz;

