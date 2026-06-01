import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { NatureStatsSection } from "@/components/home/NatureStatsSection";
import { IdentifySection } from "@/components/home/IdentifySection";
import { PreviewSection } from "@/components/home/PreviewSection";
import { SeasonalSection } from "@/components/home/SeasonalSection";
import { CTASection } from "@/components/home/CTASection";
import { BirdAndInsectSection } from "@/components/home/BirdAndInsectSection";
import { HeroStructuredData } from "@/components/seo/HeroStructuredData";
import { HelmetSEO } from "@/components/seo/HelmetSEO";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

const Home = () => {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <div className="min-h-screen bg-background">
      <HelmetSEO
        title="Camp Monarch | Create a Wildlife Habitat at Home"
        description="Learn how to turn your yard into habitat for monarchs, pollinators, birds, and local wildlife with practical guides, native plant ideas, and seasonal actions."
        canonical="/"
        ogImage="https://ampautsc.github.io/camp-monarch-website/og-home.jpg"
        ogType="website"
        structuredData={[organizationSchema, websiteSchema]}
      />
      <HeroStructuredData />
      <Header />
      <main>
        <HeroSection />
        <NatureStatsSection />
        <IdentifySection />
        <PreviewSection />
        <BirdAndInsectSection />
        <SeasonalSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
