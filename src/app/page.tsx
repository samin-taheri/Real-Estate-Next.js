import Image from "next/image";
import { appWithTranslation } from "next-i18next";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Table from "@/components/table";
import Card from "@/components/card";
import Map from "@/components/map";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Table/>
      <Map/>
      <Feature />
      <Card/>
    </main>
  );
}
