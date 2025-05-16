import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";
import { faqs } from "../data/landing-data";

export const FaqSection: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["0"]));

  return (
    <section id="faq" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
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
