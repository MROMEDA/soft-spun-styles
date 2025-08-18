import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import InspirationSection from "@/components/InspirationSection";
import ProductCategories from "@/components/ProductCategories";
import YarnRecommendSection from "@/components/YarnRecommendSection";
import BrandLogos from "@/components/BrandLogos";
import KnittingTutorialSection from "@/components/KnittingTutorialSection";
import YarnStitchDivider from "@/components/YarnStitchDivider";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <YarnStitchDivider />
        <InspirationSection />
        <YarnStitchDivider />
        <ProductCategories />
        <YarnStitchDivider />
        <YarnRecommendSection />
        <YarnStitchDivider />
        <BrandLogos />
        <YarnStitchDivider />
        <KnittingTutorialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;