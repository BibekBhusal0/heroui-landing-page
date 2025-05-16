import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import { testimonials } from "../data/landing-data";
import { Icon } from "@iconify/react";

export const TestimonialsSection: React.FC = () => {
  const renderStars = (starCount?: number) => {
    const filledStars = starCount !== undefined ? starCount : 5;
    // const outlinedStars = 5 - filledStars;

    return [...Array(5)].map((_, i) => {
      if (i < filledStars) {
        return <Icon key={i} icon="solar:star-bold" className="text-lg text-warning" />;
      } else {
        return <Icon key={i} icon="solar:star-linear" className="text-lg text-warning" />;
      }
    });
  };

  return (
    <section id="testimonials" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-2xl text-foreground-600">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full" shadow="sm">
                <CardBody className="flex flex-col gap-4 p-6">
                  {
                    testimonial.stars &&

                    <div className="mb-2 flex items-center gap-2">
                      {renderStars(testimonial.stars)}
                    </div>
                  }

                  <p className="italic text-foreground-600">"{testimonial.text}"</p>

                  <div className="mt-4 flex items-center gap-4">
                    <Avatar src={testimonial.image} alt={testimonial.name} size="md" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      {testimonial.role && <p className="text-sm text-foreground-500">{testimonial.role}</p>}
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
