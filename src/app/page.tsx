import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TableSection from "@/components/table-section";
import RealEstatePage from "@/components/real-estate";
import ColoredCardsList from "@/components/colored-cards-list";
import InfoCardsList from "@/components/info-cards-list";
import PropertyInfoList from "@/components/property-info-list";
import Subscribe from "@/components/subscribe";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <Content />
      <InfoCardsList/>
      <PropertyInfoList/>
      <ColoredCardsList/>
      <TableSection/>
      <RealEstatePage/>
      <Subscribe/>
      <Feature />
    </main>
  );
}
