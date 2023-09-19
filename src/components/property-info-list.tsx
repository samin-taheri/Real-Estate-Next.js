"use client";
import React from 'react';
import PropertyInfo from './property-info';
import {useTranslations} from 'next-intl';

const PropertyInfoList: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font" id="section2">
      <div className="container px-5 py-8 mx-auto">
      
        <div className="container p-6 flex-wrap">
          <div className="grid lg:grid-cols-3 md:geid-cols-1 gap-6">
            <PropertyInfo
              title={t("property-info-title-1")}
              description={t("property-info-subtitle-1")}
              image= "/bg-14.jpg"
              button={t("property-info-button-1")}
              to="property"
            />
            <PropertyInfo
              title={t("property-info-title-2")}
              description={t("property-info-subtitle-2")}
              image= "/bg-23.jpg"
              button={t("property-info-button-2")}
              to="property"
            />
            <PropertyInfo
              title={t("property-info-title-3")}
              description={t("property-info-subtitle-3")}
              image= "/bg-22.jpg"
              button={t("property-info-button-3")}
              to="property"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfoList;

