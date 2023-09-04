"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./right-menu";
import Icon from "./icon";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'; 
import Navigation from "./navigation";
import ContactInfo from "./contact-info";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation("common");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(faEllipsis);
  const scrollPosition = useScrollPosition();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  const openMenu = () => {
    setMenuOpen(true);
    setCurrentIcon(faXmark); 
    document.body.classList.add('disable-scroll');
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCurrentIcon(faEllipsis); 
    document.body.classList.remove('disable-scroll');
  };

  return (
    <header className="text-gray-600 body-font">
        <div className={isMenuOpen ? 'disable-scroll' : ''}>
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img className="w-30 h-30" alt="hero" src="https://jasminehomex.com/images/logo.gif"/>
      <Navigation/>
      <div>
      <div className="flex items-center mb-3 md:mb-0" ref={menuRef} tabIndex={-1}>
          <Menu isOpen={isMenuOpen} onClose={closeMenu}>
            </Menu>
            <Icon
            icon={currentIcon}
            onClick={isMenuOpen ? closeMenu : openMenu}
            isOpen={isMenuOpen}
          />
        <ContactInfo/>
        </div>
        </div>
    </div>
    </div>
  </header>
  );
};

export default Header;
