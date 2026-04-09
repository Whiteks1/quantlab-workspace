import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProductDefinitionSection from "@/components/landing/EntityModelSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import PrinciplesSection from "@/components/landing/PrinciplesSection";
import ProductPreview from "@/components/landing/ProductPreview";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProductDefinitionSection />
    <WorkflowSection />
    <ProductPreview />
    <PrinciplesSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
