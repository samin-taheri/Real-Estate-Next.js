import Image from "next/image";
import { appWithTranslation } from "next-i18next";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TableSection from "@/components/table-section";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <Content />
      <TableSection/>
      <Feature />
    </main>
  );
}
