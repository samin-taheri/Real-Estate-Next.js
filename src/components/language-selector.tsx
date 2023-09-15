// components/LanguageSelector.tsx
import React from 'react';

interface Language {
  code: string;
  label: string;
  image: string;
}

interface LanguageSelectorProps {
  languages: Language[];
  currentLanguage: string;
  onChangeLanguage: (code: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ languages, currentLanguage, onChangeLanguage }) => {
  return (
    <div className="flex items-center space-x-2">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => onChangeLanguage(language.code)}
          className={`${
            currentLanguage === language.code
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } hover:bg-blue-600 px-2 py-1 rounded-md flex items-center space-x-1`}
        >
          <img
            src={language.image}
            alt={language.label}
            className="w-4 h-4 rounded"
          />
          <span>{language.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
