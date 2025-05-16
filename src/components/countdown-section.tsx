import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { specialOffer } from "../data/landing-data";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>({ hours: 24, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +specialOffer.endTime - +new Date();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section className="bg-gradient-to-r from-primary-800 to-primary-600 px-4 py-16 text-white dark:from-primary-200 dark:to-primary-400 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{specialOffer.title}</h2>
          <p className="mx-auto mb-8 max-w-2xl">{specialOffer.description}</p>

          <div className="mb-8 flex justify-center gap-4">
            {Object.entries(timeLeft).map(([key, value]) => (
              <motion.div
                key={key}
                className="flex flex-col items-center"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Card className="flex h-20 w-20 items-center justify-center bg-white text-primary-800 dark:text-primary-200">
                  <CardBody className="flex items-center justify-center p-0">
                    <span className="text-3xl font-bold">{formatTime(value)}</span>
                  </CardBody>
                </Card>
                <span className="mt-2 text-sm capitalize">{key}</span>
              </motion.div>
            ))}
          </div>

          <Button color="warning" size="lg" className="font-medium" variant="shadow">
            Claim Offer Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
