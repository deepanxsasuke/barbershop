"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book", href: "/book" },
  { label: "Dashboard", href: "/dashboard" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glassmorphism !rounded-none !border-t-0 !border-l-0 !border-r-0 px-6 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">
              content_cut
            </span>
            <span className="font-playfair text-2xl font-bold text-gradient-gold">
              RoyalCuts
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-montserrat text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "text-primary bg-white/5"
                    : "text-white/70 hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/book" className="!py-2 !px-5 text-xs tracking-widest uppercase">
              Book Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 glassmorphism !rounded-none flex flex-col px-6 py-8 gap-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`font-montserrat text-sm font-semibold tracking-widest uppercase px-4 py-4 rounded-xl transition-all border ${
                pathname === link.href
                  ? "text-primary border-primary/30 bg-primary/5"
                  : "text-white/70 border-transparent hover:text-primary hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <Button href="/book" className="w-full !py-4 tracking-widest uppercase">
              Book Appointment
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 glassmorphism !rounded-t-2xl !rounded-b-none !border-b-0 flex justify-around items-center h-16 px-2">
        {[
          { icon: "home", label: "Home", href: "/" },
          { icon: "content_cut", label: "Services", href: "/services" },
          { icon: "event_note", label: "Book", href: "/book" },
          { icon: "person", label: "Profile", href: "/dashboard" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
              pathname === item.href ? "text-primary" : "text-white/50 hover:text-white"
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={
                pathname === item.href
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className="font-montserrat text-[10px] font-semibold uppercase tracking-wider">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}
