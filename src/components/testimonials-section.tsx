import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import { testimonials } from "../data/landing-data";
import { Icon } from "@iconify/react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full" shadow="sm">
                <CardBody className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i} 
                        icon="lucide:star" 
                        className="text-warning text-lg" 
                      />
                    ))}
                  </div>
                  
                  <p className="text-foreground-600 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar
                      src={testimonial.image}
                      alt={testimonial.name}
                      size="md"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-foreground-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};