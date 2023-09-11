import React from "react";
import WhatsAppButton from "./whatsapp-button";
import ScrollToTopButton from "./scroll-to-top-button";
import {useTranslations} from 'next-intl';

const ContactInfo = () => {
  const t = useTranslations('Index');

  return(
    <div>
      <p className="ml-3 text-l text-gray-700 font-medium animate__animated animate__fadeInRight">+90 507 752 58 16</p>
      <p className="ml-3 text-xs text-gray-500 font-medium animate__animated animate__fadeInRight">{t("contact-info")}</p>
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
};

export default ContactInfo;