import React from "react";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { hero } from "../data/landing-data";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <motion.h1
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {hero.headline}
          </motion.h1>

          {hero.subtext && (
            <motion.p
              className="max-w-md text-lg text-foreground-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {hero.subtext}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Button
              color="primary"
              size="lg"
              radius="md"
              href={hero.cta.link}
              className="text-base font-medium"
            >
              {hero.cta.text}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={hero.image}
              alt="Product showcase"
              className="h-auto w-full object-cover"
              width={600}
              height={400}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
          />

          <motion.div
            className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-secondary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
