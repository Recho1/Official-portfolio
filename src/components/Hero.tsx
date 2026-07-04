'use client';

import { useState } from 'react';
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#141b2d] to-[#0a0e1a]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c9a84c]/5 blur-3xl"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
            <div className="flex-1 order-2 md:order-1">
              <div className="mb-4">
                <p className="text-xs text-[#c9a84c] tracking-[0.2em] uppercase">Software & AI Engineer</p>
                <p className="text-sm text-[#8a86a0]">Kampala, Uganda</p>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#f5f0e8] leading-[1.1]">
                <span className="text-[#c9a84c]">Acio</span> Racheal
              </h1>
              <div className="max-w-2xl mt-4">
                <p className="text-base text-[#8a86a0] leading-relaxed">
                  Engineering AI agents and full-stack applications. From autonomous research systems 
                  to intelligent business analytics — where code meets creativity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs border border-[#c9a84c] rounded-full text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all duration-300 cursor-pointer"
                >
                  <MdEmail className="w-4 h-4" />
                  Contact
                </button>
                <a href="https://github.com/Recho1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs border border-[#c9a84c] rounded-full text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all duration-300">
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/racheal-acio-a70730398" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-xs border border-[#c9a84c] rounded-full text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0e1a] transition-all duration-300">
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex-shrink-0">
              <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#c9a84c] shadow-[0_0_60px_rgba(201,168,76,0.2)] hover:shadow-[0_0_80px_rgba(201,168,76,0.3)] transition-shadow duration-500">
                <Image
                  src="/images/profile.png"
                  alt="Acio Racheal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Hero;
