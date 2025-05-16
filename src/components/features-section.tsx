import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { features, numbers } from "../data/landing-data";

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="bg-content1 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Powerful Features</h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Everything you need to launch and grow your product, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full" shadow="sm">
                <CardBody className="flex flex-col gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 p-3">
                    <Icon icon={feature.icon} className="text-2xl text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-foreground-600">{feature.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
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
                <Icon icon={item.icon} className="mb-2 text-4xl text-primary" />
                <p className="text-lg text-foreground-600">{item.title}</p>
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
