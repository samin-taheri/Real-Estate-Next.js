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

  const [isOpen2, setIsOpen2] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [selectedOptionForMoney, setSelectedOptionForMoney] = useState<string>('option1');

  const [selectedOptionForContact, setSelectedOptionForContact] = useState<string>('option1');

  const handleOptionChangeForContact = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionForContact(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChangeForMoney = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionForMoney(event.target.value);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
    setStep(1); // Reset the step when closing the modal
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className='p-5'>
            <h1 className='text-xl font-semibold'>Real estate from developer from 35.000$</h1>
            <p className="text-l font-medium pt-4">Projects on the Black Sea coast with yield up to 100% per year</p>
            <p className="text-l font-medium  pt-4">Answer questions and recieve a PDF presentation</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className='text-xl font-semibold'>What is the purpose of ocquiring the property</h1>
            <select
              id="selectOption"
              name="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
              className="mt-7 mb-5 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            >
              <option value="option1">Real estate for living</option>
              <option value="option2">Real estate fo rinvestment</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className='text-xl font-semibold'>How much are you counting on?</h1>
            <select
              id="selectOption"
              name="selectOption"
              value={selectedOptionForMoney}
              onChange={handleSelectChangeForMoney}
              className="mt-7 mb-5 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            >
              <option value="option1">$35000 - $50000</option>
              <option value="option2">$50000 - $100000</option>
              <option value="option2">$100000 - $150000</option>
              <option value="option2">$150000 and more</option>
            </select>
          </div>
        );
        case 4:
        return (
          <div>
            <h1 className='text-xl font-semibold'>It is done! There is just one last step</h1>
            <p className="text-l font-medium pt-4">Leave a messanger or phone number for contact</p>
            <p className="text-l font-medium pt-4">You will be contacted by our manager with a ready-made offer for real estate</p>
            <select
              id="selectOption"
              name="selectOption"
              value={selectedOptionForMoney}
              onChange={handleSelectChangeForMoney}
              className="mt-7 mb-5 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            >
              <option value="option1">WhatsApp</option>
              <option value="option2">Viber</option>
              <option value="option2">Phone number</option>
            </select>
          </div>
        );
        case 5:
        return (
          <div>
            <h1 className='text-xl font-semibold'>It is done! 🤩</h1>
            <p className="text-l font-medium pt-4">Congratulations</p>
          </div>
        );
      default:
        return null;
    }
  };

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
      <button onClick={() => setIsOpen2(true)} className="mb-10 mr-4 px-20 py-3 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">Get Started</button>
      {isOpen2 && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: '600px', height: '370px' }}>
            <span className="close" onClick={closeModal2}>&times;</span>
            {renderContent()}
            {step < 5 && (
              <button className="px-10 py-2 mt-4 hover:yellow-500 hover:bg-yellow-500 bg-yellow-400 text-black rounded-lg" onClick={nextStep}>Next</button>
            )}
          </div>
        </div>
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
