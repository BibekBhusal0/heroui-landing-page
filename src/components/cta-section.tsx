import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { ctaSection } from "../data/landing-data";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold">{ctaSection.text}</h2>
          
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Button 
              size="lg" 
              color="warning" 
              variant="shadow"
              href={ctaSection.button.link}
              className="font-medium text-lg px-8"
            >
              {ctaSection.button.text}
            </Button>
          </motion.div>
          
          <p className="text-white/80 max-w-lg mx-auto">
            No credit card required. Start your free trial today and see the difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};