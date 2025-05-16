import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Button, Switch, Badge } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { pricing } from "../data/landing-data";

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = React.useState(false);
  
  return (
    <section id="pricing" className="py-24 px-4 md:px-8 bg-content1">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-foreground-600 max-w-2xl mx-auto mb-8">
            Choose the plan that works best for you and your team.
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-primary' : 'text-foreground-600'}`}>Monthly</span>
            <Switch 
              isSelected={isYearly}
              onValueChange={setIsYearly}
              size="lg"
              color="primary"
            />
            <span className="flex items-center gap-2">
              <span className={`text-sm font-medium ${isYearly ? 'text-primary' : 'text-foreground-600'}`}>Yearly</span>
              {isYearly && (
                <Badge color="success" variant="flat" className="text-xs">
                  {pricing.yearly_message}
                </Badge>
              )}
            </span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge color="primary" variant="solid" className="px-4 py-1 text-sm">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}
                shadow={plan.popular ? "md" : "sm"}
              >
                <CardHeader className="flex flex-col gap-2 pb-0">
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-foreground-500 text-sm mb-1">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                </CardHeader>
                
                <CardBody className="py-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon icon="lucide:check" className="text-success text-lg" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                
                <CardFooter>
                  <Button 
                    color={plan.popular ? "primary" : "default"} 
                    variant={plan.popular ? "solid" : "flat"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};