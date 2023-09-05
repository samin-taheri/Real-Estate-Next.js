import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import MyModal from './modal';

interface RightMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const RightMenu: React.FC<RightMenuProps> = ({ isOpen, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleItemClick = (item: string) => {
    // Handle the click event for menu items here
    console.log(`Clicked on: ${item}`);
  };

  const menuClassName = isOpen
    ? 'fixed top-0 right-0 h-full w-80 bg-white transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl pt-20'
    : 'fixed top-0 right-0 h-full w-0 bg-white transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl pt-20';

  return (
    <div className={menuClassName}>
      <div className="w-80 p-4">
      {children}
      <ul className="menu-bar">
        <li className="menu-item flex items-center">
          <FontAwesomeIcon icon={faSquareCheck} className="menu-icon mr-2" onClick={() => handleItemClick('Item 1')}/>Residential Property
        </li>
        <li className="menu-item flex items-center">
          <FontAwesomeIcon icon={faListAlt} className="menu-icon mr-2" onClick={() => handleItemClick('Item 2')}/>Blog
        </li>
        <li className="menu-item flex items-center">
          <FontAwesomeIcon icon={faMessage} className="menu-icon mr-2" onClick={() => handleItemClick('Item 3')}/>Contact
        </li>
      </ul>
      <div className="pt-64 pl-5">
      <div className="flex justify-center">
      <button onClick={openModal} className="mb-10 mr-4 px-20 py-3 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">Get Started</button>
      <MyModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <p>Real estate from developer in Batumi from 35.000$ </p>
        <div className="flex justify-center">
      <button className="mt-10 px-20 py-2 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">Begin</button>
      </div>
      </MyModal>
      </div>
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800 text-sm">Head Office: Oba District, 14.
        <br className="lg:block hidden"/>Street Alanya, Antalya/Turkey</a>
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
