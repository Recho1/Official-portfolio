'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProjectTheory from '@/components/ProjectTheory';
import VideoGallery from '@/components/VideoGallery';
import PosterStudio from '@/components/PosterStudio';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0e1a]">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#c9a84c]/10 scroll-mt-16">
          <About />
        </section>

        {/* Filter Bar */}
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 border-t border-[#c9a84c]/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-[#8a86a0] tracking-[0.2em] uppercase">
                Explore Projects
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'theory', 'video', 'posters'].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`chip ${filter === item ? 'chip-active' : ''}`}
                >
                  {item === 'all' ? 'All' : 
                   item === 'theory' ? 'Theory' :
                   item === 'video' ? 'Video' : 'Posters'}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Theory Section */}
        {(filter === 'all' || filter === 'theory') && (
          <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-16 border-t border-[#c9a84c]/10 scroll-mt-16">
            <div className="mb-12">
              <p className="section-label">Project Theory</p>
              <div className="gold-line"></div>
              <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8]">
                Architecture &amp; <span className="text-[#c9a84c]">Design</span>
              </h2>
              <p className="text-sm text-[#8a86a0] mt-2 max-w-2xl">
                Deep dive into the architecture, challenges, and outcomes of each project
              </p>
            </div>
            <ProjectTheory />
          </section>
        )}

        {/* Live Demo Section - Video Gallery */}
        {(filter === 'all' || filter === 'video') && (
          <section id="gallery" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#c9a84c]/10 scroll-mt-16">
            <div className="mb-12">
              <p className="section-label">Live Demo</p>
              <div className="gold-line"></div>
              <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8]">
                Motion <span className="text-[#c9a84c]">Gallery</span>
              </h2>
              <p className="text-sm text-[#8a86a0] mt-2 max-w-2xl">
                Hover for preview · Click for demo — Watch my AI agents and applications in action
              </p>
            </div>
            <VideoGallery filter={filter === 'all' ? 'all' : 'video'} />
          </section>
        )}

        {/* Poster Studio Section */}
        {(filter === 'all' || filter === 'posters') && (
          <section id="posters" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#c9a84c]/10 scroll-mt-16">
            <div className="mb-12">
              <p className="section-label">Design Showcase</p>
              <div className="gold-line"></div>
              <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8]">
                Still <span className="text-[#c9a84c]">Studio</span>
              </h2>
              <p className="text-sm text-[#8a86a0] mt-2 max-w-2xl">
                Click to expand · View details — UI/UX designs and visual architecture
              </p>
            </div>
            <PosterStudio filter={filter === 'all' ? 'all' : 'posters'} />
          </section>
        )}

        {/* Education Section */}
        <section id="education" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#c9a84c]/10 scroll-mt-16">
          <Education />
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-[#c9a84c]/10 scroll-mt-16">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="border-t border-[#c9a84c]/10 py-8 px-6 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#8a86a0]">
              © 2025 Acio Racheal · Software & AI Engineer
            </p>
            <div className="flex gap-6">
              <a href="mailto:rachealacio501@gmail.com" className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors">
                Email
              </a>
              <a href="https://github.com/Recho1" target="_blank" rel="noopener" className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/racheal-acio-a70730398" target="_blank" rel="noopener" className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
