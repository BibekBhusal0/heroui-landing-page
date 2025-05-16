import React from "react";
import { Button, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { hero } from "../data/landing-data";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {hero.headline}
          </motion.h1>
          
          <motion.p 
            className="text-lg text-foreground-600 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {hero.subtext}
          </motion.p>
          
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
              className="font-medium text-base"
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
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={hero.image}
              alt="Product showcase"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent pointer-events-none"></div>
          </div>
          
          <motion.div 
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
          />
          
          <motion.div 
            className="absolute -top-6 -left-6 w-16 h-16 bg-secondary rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};