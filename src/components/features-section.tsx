import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { features, numbers } from "../data/landing-data";

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 md:px-8 bg-content1">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Everything you need to launch and grow your product, all in one place.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full" shadow="sm">
                <CardBody className="p-6 flex flex-col gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                    <Icon icon={feature.icon} className="text-primary text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {numbers.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon icon={item.icon} className="text-primary text-4xl mb-2" />
                <p className="text-foreground-600 text-lg">{item.title}</p>
                <motion.h3 
                  className="text-4xl font-bold text-primary"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  {item.number}
                </motion.h3>
                <p className="text-lg font-medium">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};