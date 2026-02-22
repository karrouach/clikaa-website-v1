"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { menuSlide, menuLinkSlide, smoothEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background lg:hidden"
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="p-2 text-foreground transition-colors hover:text-muted"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-12 flex-1">
                <ul className="space-y-6">
                  {NAVIGATION.map((item, index) => (
                    <motion.li
                      key={item.href}
                      custom={index}
                      variants={menuLinkSlide}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-4xl font-semibold transition-colors",
                          pathname === item.href
                            ? "text-foreground"
                            : "text-muted hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    custom={NAVIGATION.length}
                    variants={menuLinkSlide}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Link
                      href="/contact"
                      className={cn(
                        "block text-4xl font-semibold transition-colors",
                        pathname === "/contact"
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      )}
                    >
                      Contact
                    </Link>
                  </motion.li>
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: smoothEasing }}
                className="border-t border-border pt-8"
              >
                <p className="mb-4 text-sm text-muted">Follow us</p>
                <SocialLinks />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
