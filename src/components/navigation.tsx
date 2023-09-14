import { Link } from 'react-scroll';
import React from "react";
import {useTranslations} from 'next-intl';

const Navigation = () => {
  const t = useTranslations('Index');
  return (
    <nav className="flex flex-wrap items-center text-base justify-center">
      <Link
        activeClass="active"
        href='/citizenship'
        to="citizenship"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-500"
      >
        {t("citizenship")}
      </Link>
      <Link
        activeClass="active"
        href='/property'
        to="property"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-500"
      >
       {t("property")} 
      </Link>
      <Link
        activeClass="active"
        href='/about-us'
        to="about-us"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-500"
      >
        {t("about-us")} 
      </Link>
      <Link
        activeClass="active"
        href='/contact-us'
        to="contact-us"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-500"
      >
        {t("contact")} 
      </Link>
      <Link
        activeClass="active"
        href='/subscribe'
        to="subscribe"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-500"
      >
        {t("subscribe")} 
      </Link>
      </nav>
  );
};

export default Navigation;