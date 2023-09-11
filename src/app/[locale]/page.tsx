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

export default function Home() {

  return (
    <main>
      <HeroSection />
      <Content />
      <ResidenceInfo />
      <BenefitsOfWorking/>
      <PropertyInfoList/>
      <ColoredCardsList/>
      <Subscribe/>
      <TableSection/>
      <RealEstatePage/>
      <AboutUs/>
      <Feature />
    </main>
  );
}