import React from "react";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { motion } from "framer-motion";
import { headerButtons, navLinks } from "../data/landing-data";
import ThemeSwitch from "./theme-switch";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {

  return (
    <HeroNavbar
      isBordered
      isBlurred
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-md"
      shouldHideOnScroll={false}
    >
      <NavbarBrand>
        <motion.p
          className="text-xl font-bold text-inherit"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ACME
        </motion.p>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.name} isActive={activeSection === link.href.substring(1)}>
            <Link
              color={activeSection === link.href.substring(1) ? "primary" : "foreground"}
              href={link.href}
              className="relative"
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
        {headerButtons.map((button, index) => (
          <NavbarItem key={`${button.text}-${index}`} className="hidden sm:flex">
            <Button as={Link} color='primary' variant={button.variant} href={button.href}>{button.text}</Button>
          </NavbarItem>
        ))}
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent>

      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link.name}-${index}`}>
            <Link
              color={activeSection === link.href.substring(1) ? "primary" : "foreground"}
              className="w-full"
              href={link.href}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className='gap-2 flex flex-col'>
          {headerButtons.map((button, index) => (
            <NavbarItem key={`${button.text}-${index}`} className="">
              <Button as={Link} color='primary' variant={button.variant} href={button.href}>{button.text}</Button>
            </NavbarItem>
          ))}
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
};
