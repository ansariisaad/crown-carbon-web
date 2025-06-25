import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OngoingWorkSection } from "@/components/sections/ongoing-work-section";
import { ProductsSection } from "@/components/sections/products-section";
import { WhyUsSection } from "@/components/sections/why-us-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <OngoingWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
