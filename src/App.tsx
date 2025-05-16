import React from "react";
import { ToastProvider } from "@heroui/react";

// Components
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CountdownSection } from "./components/countdown-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { CtaSection } from "./components/cta-section";
import { NewsletterSection } from "./components/newsletter-section";
import { Footer } from "./components/footer";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState<string>("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ToastProvider />
      <Navbar activeSection={activeSection} />

      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CountdownSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <NewsletterSection />
      </main>

      <Footer />


    </div>
  );
};

export default App;
