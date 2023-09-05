import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal';

interface RightMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
const RightMenu: React.FC<RightMenuProps> = ({ isOpen, children }) => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [selectedOptionForMoney, setSelectedOptionForMoney] = useState<string>('option1');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChangeForMoney = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionForMoney(event.target.value);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
    setStep(1);
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleItemClick = (item: string) => {
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
      <button onClick={() => setIsOpen2(true)} className="mb-10 mr-4 px-20 py-3 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">Get Started</button>
      {isOpen2 && (
              <Modal
                closeModal={closeModal2}
                step={step}
                selectedOption={selectedOption}
                selectedOptionForMoney={selectedOptionForMoney}
                handleSelectChange={handleSelectChange}
                handleSelectChangeForMoney={handleSelectChangeForMoney}
                nextStep={nextStep}
              />
            )}
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
