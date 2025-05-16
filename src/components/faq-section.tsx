import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import { faqs } from "../data/landing-data";

export const FaqSection: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["0"]));
  
  return (
    <section id="faq" className="py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Find answers to common questions about our product and services.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion 
            selectedKeys={selectedKeys} 
            onSelectionChange={setSelectedKeys as any}
            variant="bordered"
            className="shadow-sm"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index.toString()} title={faq.question}>
                <p className="text-foreground-600">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};