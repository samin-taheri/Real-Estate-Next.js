"use client";
import React from 'react';
import MultipleChoiceQuestion from './multi-selection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {useTranslations} from 'next-intl';
import { CatalogPopupProps } from '@/types';

const CatalogPopup: React.FC<CatalogPopupProps> = ({ onClose }) => {
  const t = useTranslations('Index');

  return (
    <div className="popup-overlay">
      <div className="popup-content" style={{ width: '1000px', height: '660px' }}>
        <span className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="text-center">
          <h1 className="text-2xl font-semibold title-font text-gray-700 pb-4">{t("popup-title")}</h1>
          <h2 className="leading-relaxed pb-4">{t("popup-subtitle-1")}
            <br/>{t("popup-subtitle-2")}
          </h2>
        </div>
        <MultipleChoiceQuestion />
      </div>
    </div>
  );
};

export default CatalogPopup;
