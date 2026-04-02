import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import WorkflowSection from "@/components/landing/WorkflowSection";
import ProductLayers from "@/components/landing/ProductLayers";
import PrinciplesSection from "@/components/landing/PrinciplesSection";
import SafetyPath from "@/components/landing/SafetyPath";
import ProductPreview from "@/components/landing/ProductPreview";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <FeaturesSection />
    <PortfolioSection />
    <WorkflowSection />
    <ProductLayers />
    <PrinciplesSection />
    <SafetyPath />
    <ProductPreview />
    <DifferentiationSection />
    <RoadmapSection />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;
