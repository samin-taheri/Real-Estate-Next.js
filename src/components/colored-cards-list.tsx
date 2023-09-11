"use client";
import React from 'react';
import ColoredCards from './colored-cards';
import {useTranslations} from 'next-intl';

const ColoredCardsList: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font" id="section2">
      <div className="container px-5 py-16 mx-auto">
      
        <div className="container p-6 flex-wrap">
          <div className="grid lg:grid-cols-3 md:grid-col-1 gap-6">
            <ColoredCards
              backgroundColor='rgba(199, 229, 225530, 0.5)'
              title={t("colored-card-title-1")}
              description={t("colored-card-subtitle-1")}
              link={t("colored-card-button-1")}
              linkColor='rgba(0, 90, 255, 0.68)'
            />
            <ColoredCards
              backgroundColor='rgba(208, 248, 177, 0.5)'
              title={t("colored-card-title-2")}
              description={t("colored-card-subtitle-2")}
              link={t("colored-card-button-2")}
              linkColor='rgba(50, 133, 16, 0.68)'
            />
            <ColoredCards
              backgroundColor='rgba(246, 221, 204, 0.5)'
              title={t("colored-card-title-3")}
              description={t("colored-card-subtitle-3")}
              link={t("colored-card-button-3")}
              linkColor='rgba(217, 95, 0, 0.68)'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsList;

