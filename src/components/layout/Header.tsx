"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollY = useMotionValue(0);
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollY.set(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 py-4",
          isScrolled && "py-3"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="absolute inset-0 border-b border-border/50 bg-background/80 backdrop-blur-md"
          style={{ opacity: headerOpacity }}
        />
        <Container className="relative">
          <div className="flex items-center justify-between">
            <Logo />

            <Navigation />

            <div className="flex items-center gap-4">
              <Button
                href="/contact"
                variant="outline"
                size="md"
                className="hidden lg:inline-flex"
              >
                Book a Strategy Call
              </Button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}
