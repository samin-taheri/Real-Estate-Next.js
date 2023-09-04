import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Feature from "@/components/feature";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TableSection from "@/components/table-section";
import RealEstatePage from "@/components/real-estate";

export default function Home() {

  return (
    <main>
      <HeroSection />
      <Content />
      <TableSection/>
      <Feature />
      <RealEstatePage/>
    </main>
  );
}
