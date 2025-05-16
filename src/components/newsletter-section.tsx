import React from "react";
import { Input, Button, Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { newsletterSignup } from "../data/landing-data";
import { addToast } from "@heroui/react";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      addToast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        severity: "danger",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");

      addToast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        severity: "success",
      });
    }, 1500);
  };

  return (
    <section className="bg-content2 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Card shadow="md" className="overflow-hidden">
          <CardBody className="p-8 md:p-12">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">{newsletterSignup.heading}</h2>
                <p className="mb-6 text-foreground-600">{newsletterSignup.subtext}</p>

                <div className="hidden md:block">
                  <Icon icon="lucide:mail" className="text-6xl text-primary opacity-80" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {isSubmitted ? (
                  <motion.div
                    className="p-6 text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 p-4">
                      <Icon icon="lucide:check" className="text-3xl text-success" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
                    <p className="text-foreground-600">
                      You've been successfully subscribed to our newsletter.
                    </p>
                    <Button
                      color="primary"
                      variant="light"
                      className="mt-4"
                      onPress={() => setIsSubmitted(false)}
                    >
                      Subscribe Another Email
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder={newsletterSignup.placeholder}
                      value={email}
                      onValueChange={setEmail}
                      variant="bordered"
                      radius="sm"
                      isRequired
                    />
                    <Button
                      type="submit"
                      color="primary"
                      className="w-full"
                      size="lg"
                      isLoading={isLoading}
                    >
                      {newsletterSignup.buttonText}
                    </Button>
                    <p className="text-center text-xs text-foreground-500">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
