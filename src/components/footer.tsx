import React from "react";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { footer } from "../data/landing-data";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content3 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex flex-col gap-4">
              <div className="mb-4">
                <p className="font-bold text-xl">ACME</p>
              </div>
              <p className="text-foreground-600 text-sm">
                Creating innovative solutions for modern businesses.
              </p>
              <div className="flex gap-4 mt-4">
                {footer.socials.map((social, index) => (
                  <Link key={index} href={social.link} className="text-foreground-500 hover:text-primary">
                    <Icon icon={social.icon} className="text-xl" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footer.links.slice(0, 2).map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground-600 hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-foreground-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footer.links.slice(2).map((link) => (
                <li key={link}>
                  <Link href="#" className="text-foreground-600 hover:text-primary">
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-foreground-600 hover:text-primary">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground-600 hover:text-primary">
                  Licenses
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="col-span-1"
          >
            <h3 className="font-semibold mb-4">Contact</h3>
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
        
        <div className="mt-16 pt-8 border-t border-foreground-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground-500 text-sm">
              © {new Date().getFullYear()} ACME Inc. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-foreground-500 text-sm hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-foreground-500 text-sm hover:text-primary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};