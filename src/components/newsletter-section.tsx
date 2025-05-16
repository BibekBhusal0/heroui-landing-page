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
    
    if (!email || !email.includes('@')) {
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
    <section className="py-24 px-4 md:px-8 bg-content2">
      <div className="max-w-4xl mx-auto">
        <Card shadow="md" className="overflow-hidden">
          <CardBody className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{newsletterSignup.heading}</h2>
                <p className="text-foreground-600 mb-6">{newsletterSignup.subtext}</p>
                
                <div className="hidden md:block">
                  <Icon icon="lucide:mail" className="text-primary text-6xl opacity-80" />
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
                    className="text-center p-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-success/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon icon="lucide:check" className="text-success text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
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
                    <p className="text-xs text-foreground-500 text-center">
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