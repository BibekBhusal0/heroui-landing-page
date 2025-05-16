import React from "react";
import { Button, ToastProvider } from "@heroui/react";
import { motion } from "framer-motion";

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

      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <Button
          color="primary"
          variant="shadow"
          size="lg"
          radius="full"
          onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="shadow-lg"
        >
          Back to Top
        </Button>
      </motion.div>
    </div>
  );
};

export default App;
