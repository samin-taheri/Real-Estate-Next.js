"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { RightMenuProps } from '@/types';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

const RightMenu: React.FC<RightMenuProps> = ({ isOpen, children }) => {
  const t = useTranslations('Index');

  const handleItemClick = (item: string) => {
    console.log(`Clicked on: ${item}`);
  };

  const menuClassName = isOpen
    ? 'fixed top-0 right-0 h-full w-96 bg-white transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl pt-20'
    : 'fixed top-0 right-0 h-full w-0 bg-white transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl pt-20';

  return (
    <div className={menuClassName}>
      <div className="w-96 p-4">
      {children}
      <ul className="menu-bar">
        <li className="menu-item flex items-center">
          <FontAwesomeIcon icon={faSquareCheck} className="menu-icon mr-2" onClick={() => handleItemClick('Item 1')}/>{t("menu1")}
        </li>
        <li className="menu-item flex items-center">
          <FontAwesomeIcon icon={faListAlt} className="menu-icon mr-2" onClick={() => handleItemClick('Item 2')}/>
          <Link href="/pages/about">{t("menu2")}</Link>
        </li>
        <li className="menu-item flex items-center">
          <FontAwesomeIcon icon={faMessage} className="menu-icon mr-2" onClick={() => handleItemClick('Item 3')}/>{t("menu3")}
        </li>
      </ul>
      <div className="pt-80 pl-5">
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800 text-sm"></a>{t("address")}
        </li>  
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800 text-sm">+905077525816</a>
        </li>
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800 text-sm">info@jasminehomex.com</a>
        </li>
      </div>
      </div>
    </div>
  );
};

export default RightMenu;
