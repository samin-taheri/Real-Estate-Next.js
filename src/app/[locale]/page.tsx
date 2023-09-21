"use client";
import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TableSection from "@/components/table-section";
import RealEstatePage from "@/components/real-estate";
import ColoredCardsList from "@/components/colored-cards-list";
import PropertyInfoList from "@/components/property-info-list";
import Subscribe from "@/components/subscribe";
import BenefitsOfWorking from "@/components/benefits-of-working";
import ResidenceInfo from "@/components/residence-info";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import DisplayYoutube from "@/components/display-youtube";
import Hero from "@/components/hero";

export default async function Home() {

  return (
    <main>
      <HeroSection />
      <Content />
      <RealEstatePage/>
      <ResidenceInfo />
      <BenefitsOfWorking/>
      <PropertyInfoList/>
      <ColoredCardsList/>
      <Subscribe/>
      <TableSection/>
      <AboutUs/>
      <DisplayYoutube/>
      <ContactUs/>
      <Feature />
    </main>
  );
}
