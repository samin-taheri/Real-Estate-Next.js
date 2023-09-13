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
        className="mr-7 hover:text-yellow-600 hover:underline"
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
        className="mr-7 hover:text-yellow-600 hover:underline"
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
        className="mr-7 hover:text-yellow-600 hover:underline"
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
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        {t("contact")} 
      </Link>
      <Link
        activeClass="active"
        href='/footer'
        to="footer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        {t("other-contries")} 
      </Link>
      </nav>
  );
};

export default Navigation;