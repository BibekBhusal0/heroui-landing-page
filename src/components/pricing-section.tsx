import React from "react";
import { Card, CardBody, CardHeader, CardFooter, Button, Chip, cn, Tabs, Tab } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { pricing } from "../data/landing-data";

export const PricingSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState("monthly");
  const isYearly = selectedTab === "yearly";

  return (
    <section id="pricing" className="bg-content1 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto mb-8 max-w-2xl text-foreground-600">
            Choose the plan that works best for you and your team.
          </p>

          <div className="mb-8 flex items-center justify-center gap-3">
            <Tabs selectedKey={selectedTab} onSelectionChange={(e) => setSelectedTab(e as string)}>
              <Tab value="monthly" key="monthly" title="Monthly" />
              <Tab
                value="yearly"
                key="yearly"
                title={
                  <>
                    Yearly
                    {pricing.yearly_message && (
                      <Chip color="success" variant="flat" className="ml-2 text-xs">
                        {pricing.yearly_message}
                      </Chip>
                    )}
                  </>
                }
              />
            </Tabs>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {plan.title === pricing.highlight?.title && (
                <div className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2 transform">
                  <Chip color="primary" variant="solid" className="px-4 py-1 text-sm">
                    {pricing.highlight?.message}
                  </Chip>
                </div>
              )}

              <Card
                className={cn(
                  "h-full",
                  plan.title === pricing.highlight?.title ? "border-2 border-primary shadow-lg" : ""
                )}
                shadow={plan.title === pricing.highlight?.title ? "md" : "sm"}
              >
                <CardHeader className="flex flex-col gap-2 pb-0">
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">
                      {isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="mb-1 text-sm text-foreground-500">
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </div>
                </CardHeader>

                <CardBody className="py-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon icon="lucide:check" className="text-lg text-success" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>

                <CardFooter>
                  <Button
                    color={plan.title === pricing.highlight?.title ? "primary" : "default"}
                    variant={plan.title === pricing.highlight?.title ? "solid" : "flat"}
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
