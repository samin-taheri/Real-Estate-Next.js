"use client";
import AccordionItem from '@/components/accordion-item';
import React from 'react';
import {useTranslations} from 'next-intl';

const Questions: React.FC = () => {
  const t = useTranslations('Index');

  return (

    <section className="text-gray-600 body-font" id="hero">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto flex xl:px-20 md:px-4 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-left">
            <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-4 text-gray-700 animate__animated animate__fadeInLeft">{t("faq-title")}</h1>
            <p className="mb-10 leading-relaxed animate__animated animate__fadeInLeft">{t("faq-subtitle")}</p>
            <div>
            <AccordionItem
              question={t("faq-question-1")}
              answer={t("faq-answer-1")}
            />
            <AccordionItem
              question={t("faq-question-2")}
              answer={t("faq-answer-2")}
            />
            <AccordionItem
              question={t("faq-question-3")}
              answer={t("faq-answer-3")}
            />
            <AccordionItem
              question={t("faq-question-4")}
              answer={t("faq-answer-4")}
            />
            <AccordionItem
              question={t("faq-question-5")}
              answer={t("faq-answer-5")}
            />
            <AccordionItem
              question={t("faq-question-6")}
              answer={t("faq-answer-6")}
            />
            <AccordionItem
              question={t("faq-question-7")}
              answer={t("faq-answer-7")}
            />
            <AccordionItem
              question={t("faq-question-8")}
              answer={t("faq-answer-8")}
            />
            <AccordionItem
              question={t("faq-question-9")}
              answer={t("faq-answer-9")}
            />
            <AccordionItem
              question={t("faq-question-10")}
              answer={t("faq-answer-10")}
            />
            <AccordionItem
              question={t("faq-question-11")}
              answer={t("faq-answer-11")}
            />
            <AccordionItem
              question={t("faq-question-12")}
              answer={t("faq-answer-12")}
            />
            <AccordionItem
              question={t("faq-question-13")}
              answer={t("faq-answer-13")}
            />
            <AccordionItem
              question={t("faq-question-14")}
              answer={t("faq-answer-14")}
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default Questions;
