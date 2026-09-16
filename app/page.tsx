import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import SpecialOffers from "@/components/SpecialOffers";
import BenefitsStrip from "@/components/BenefitsStrip";
import BestSellingProducts from "@/components/BestSellingProducts";
import HowItWorks from "@/components/HowItWorks";
import StoreSection from "@/components/StoreSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Website Content */}
      <main className="min-h-screen bg-white">
        <Hero />

        <Categories />

        <SpecialOffers />

        <BenefitsStrip />

        <BestSellingProducts />

        <HowItWorks />

        <StoreSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}