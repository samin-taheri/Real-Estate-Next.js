import React from 'react';
import MultipleChoiceQuestion from './multi-selection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CatalogPopupProps {
  onClose: () => void;
}

const CatalogPopup: React.FC<CatalogPopupProps> = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="bg-white p-10 rounded-xl shadow-lg z-1001">
        <span className="modal-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold title-font text-gray-700 pb-4">
            Looking for an apartment in Turkey?
          </h1>
          <h2 className="leading-relaxed pb-4">
            Admiring the sea from the window of your apartment in Alanya is a reality.
            <br />Answer 6 questions and get the best deals.
          </h2>
        </div>
        <MultipleChoiceQuestion />
      </div>
    </div>
  );
};

export default CatalogPopup;
