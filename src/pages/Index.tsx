import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SystemSection from "@/components/landing/EntityModelSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import ArtifactsSection from "@/components/landing/ArtifactsSection";
import PrinciplesSection from "@/components/landing/PrinciplesSection";
import ProductPreview from "@/components/landing/ProductPreview";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <SystemSection />
    <ArchitectureSection />
    <WorkflowSection />
    <ProductPreview />
    <ArtifactsSection />
    <PrinciplesSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
