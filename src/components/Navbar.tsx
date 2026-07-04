'use client';

import { useState } from "react";
import { MdEmail } from "react-icons/md";
import EmailLink from "./EmailLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-[#c9a84c]/10 px-4 sm:px-6 h-16 flex items-center justify-between">
      <a href="#" className="flex items-center gap-2 sm:gap-3 group">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center group-hover:border-[#c9a84c] transition-colors">
          <span className="text-[#c9a84c] text-xs sm:text-sm font-light">AR</span>
        </div>
        <span className="font-light tracking-widest text-[#f5f0e8] text-xs sm:text-sm">
          <span className="text-[#c9a84c]">/</span> ACIO RACHEAL
        </span>
      </a>

      <ul className="hidden md:flex gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a 
              href={link.href} 
              className="nav-link"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <EmailLink email="rachealacio501@gmail.com">
        <span className="hidden md:flex items-center gap-2 text-xs text-[#c9a84c] border border-[#c9a84c]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all duration-300 cursor-pointer">
          <MdEmail className="w-4 h-4" />
          Get in Touch
        </span>
      </EmailLink>

      <button
        className="md:hidden text-[#f5f0e8] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0a0e1a] border-b border-[#c9a84c]/10 p-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-sm"
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-[#c9a84c]/10">
              <EmailLink email="rachealacio501@gmail.com">
                <span className="inline-flex items-center gap-2 text-xs text-[#c9a84c] border border-[#c9a84c]/30 px-4 py-2 rounded-full hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all duration-300 cursor-pointer">
                  <MdEmail className="w-4 h-4" />
                  Contact
                </span>
              </EmailLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
