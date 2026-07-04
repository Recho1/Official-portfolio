'use client';

import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <footer className="border-t border-[#c9a84c]/10 py-6 px-4 md:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8a86a0] text-center md:text-left">
            © 2025 Acio Racheal · Software & AI Engineer
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <button
              onClick={() => setIsFormOpen(true)}
              className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <MdEmail className="w-4 h-4" />
              <span>Email</span>
            </button>
            <a 
              href="https://github.com/Recho1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/racheal-acio-a70730398" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Footer;
