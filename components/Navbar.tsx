"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Download } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* ----- Logo ----- */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all" />
            <div className="relative bg-primary text-primary-foreground p-1.5 rounded-md">
              <Code2 className="h-4 w-4" />
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight">
            <span className="text-foreground">Abdul</span>
            <span className="text-primary">Basit</span>
          </span>
        </Link>

        {/* ----- Desktop Navigation ----- */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ----- Desktop CTA ----- */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/resume.pdf" target="_blank">
            <Button
              variant="outline"
              size="sm"
              className="border-border hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Hire Me
            </Button>
          </Link>
        </div>

        {/* ----- Mobile Menu Button ----- */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ----- Mobile Menu ----- */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Button
                  size="sm"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Hire Me
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}