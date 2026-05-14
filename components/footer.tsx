'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Footer Content */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-accent" />
              <span className="text-lg font-light tracking-tight">Hiranmayi</span>
            </div>
            <p className="text-sm font-light text-foreground/60">
              Crafting exceptional experiences through design and innovation.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-light uppercase tracking-widest text-foreground/80">
              Navigation
            </h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-light text-foreground/60 transition-colors hover:text-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-light uppercase tracking-widest text-foreground/80">
              Services
            </h3>
            <ul className="space-y-2">
              {['Design', 'Development', 'Branding', 'Consulting'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-light text-foreground/60 transition-colors hover:text-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-sm font-light uppercase tracking-widest text-foreground/80">
              Get in Touch
            </h3>
            <div className="space-y-2">
              <p className="text-sm font-light text-foreground/60">hello@lumino.design</p>
              <p className="text-sm font-light text-foreground/60">+1 (555) 123-4567</p>
              <div className="flex gap-4 pt-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs font-light text-foreground/60 transition-colors hover:text-accent"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-border" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row"
        >
          <p className="text-xs font-light text-foreground/50">
            © {currentYear} Hiranmayi. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs font-light text-foreground/50 transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-light text-foreground/50 transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
