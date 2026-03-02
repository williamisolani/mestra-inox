import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import SolutionsSection from "@/components/SolutionsSection";
import CustomProjectsSection from "@/components/CustomProjectsSection";
import InoxSection from "@/components/InoxSection";
import SegmentsSection from "@/components/SegmentsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <WhySection />
      <SolutionsSection />
      <CustomProjectsSection />
      <InoxSection />
      <SegmentsSection />
      <GallerySection />
      <ContactSection />
    </main>
    <FooterSection />
  </>
);

export default Index;
