"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./right-menu";
import Icon from "./icon";
import { faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./navigation";
import ContactInfo from "./contact-info";
import Link from "next/link";
import Popover from "./popover";

const Header = () => {
  const [currentIcon, setCurrentIcon] = useState(faEllipsis);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);
    setCurrentIcon(faXmark);
    document.body.classList.add("disable-scroll");
  };

  const closeMenu = () => {
    setIsOpen(false);
    setCurrentIcon(faEllipsis);
    document.body.classList.remove("disable-scroll");
  };

  return (
    <header className="text-gray-600 body-font justify-between header">
      {/* <div className={isMenuOpen ? "disable-scroll" : ""}> */}
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center md:justify-around sm:justify-around">
        <Link href="/">
          <img
            className="w-30 h-30 sm:pb-4 pb-2 pt-2"
            alt="hero"
            src="https://jasminehomex.com/images/logo.gif"
          />
          </Link>
          <Navigation />
          <div>
            <div
              className="flex items-center mb-5 sm:justify-center md:justify-center sm:pt-4 md:pt-4 pt-4"
              ref={menuRef}
              tabIndex={-1}
            >
              {/* <Menu isOpen={isMenuOpen} onClose={closeMenu}></Menu> */}
              <Icon
                icon={currentIcon}
                onClick={isOpen ? closeMenu : openMenu}
                isOpen={isOpen}
              />
              {isOpen && (
                <Popover isOpen={isOpen} onClose={closeMenu}/>
                )}
              <ContactInfo />
            </div>
          </div>
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
