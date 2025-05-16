import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { footer } from "../data/landing-data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content3 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex flex-col gap-4">
              <div className="mb-4">
                <p className="text-xl font-bold">ACME</p>
              </div>
              <p className="text-sm text-foreground-600">
                Creating innovative solutions for modern businesses.
              </p>
              <div className="mt-4 flex gap-4">
                {footer.socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    className="text-foreground-500 hover:text-primary"
                  >
                    {social.icon && <Icon icon={social.icon} className="text-xl" />}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {footer.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="col-span-1"
            >
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-foreground-600 hover:text-primary">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground-600">
                <Icon icon="lucide:map-pin" className="text-primary" />
                {footer.contact.location}
              </li>
              <li className="flex items-center gap-2 text-foreground-600">
                <Icon icon="lucide:phone" className="text-primary" />
                {footer.contact.phone}
              </li>
              <li className="flex items-center gap-2 text-foreground-600">
                <Icon icon="lucide:mail" className="text-primary" />
                {footer.contact.email}
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-foreground-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-foreground-500">{footer.copyright}</p>
            <div className="mt-4 flex gap-4 md:mt-0">
              {footer.additionalLinks?.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-sm text-foreground-500 hover:text-primary"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
