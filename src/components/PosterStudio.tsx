'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaTimes } from "react-icons/fa";

const posterProjects = [
  {
    id: 'poster-1',
    title: 'AI Bias',
    subtitle: 'Poster Design',
    category: 'posters',
    description: 'Visual exploration of AI bias and fairness in machine learning',
    details: 'A thought-provoking poster design exploring the concept of bias in artificial intelligence systems, highlighting the importance of fairness and ethical AI development.',
    tags: ['AI Ethics', 'Poster'],
    image: '/images/posters/poster1.png',
  },
  {
    id: 'poster-2',
    title: 'Golden Lemon',
    subtitle: 'Brand Identity',
    category: 'posters',
    description: 'Brand identity and visual design for Golden Lemon',
    details: 'Complete brand identity including logo design, color palette, typography, and visual elements for the Golden Lemon brand.',
    tags: ['Branding', 'Design'],
    image: '/images/posters/poster2.png',
  },
  {
    id: 'poster-3',
    title: 'Hostel',
    subtitle: 'Poster Design',
    category: 'posters',
    description: 'Visual design for a hostel accommodation brand',
    details: 'A vibrant poster design for a hostel brand, capturing the essence of community, comfort, and adventure in accommodation.',
    tags: ['Poster', 'Hospitality'],
    image: '/images/posters/poster3.png',
  },
  {
    id: 'poster-4',
    title: 'Zesty',
    subtitle: 'Brand Identity',
    category: 'posters',
    description: 'Brand identity and visual design for Zesty',
    details: 'A fresh and vibrant brand identity for Zesty, featuring modern design elements, color psychology, and visual storytelling.',
    tags: ['Branding', 'Design'],
    image: '/images/posters/poster4.png',
  },
];

const PosterStudio = ({ filter }: { filter: string }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === 'all' 
    ? posterProjects 
    : posterProjects.filter(p => p.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filtered.map((project) => (
        <div
          key={project.id}
          className="group"
        >
          {/* Framed Poster */}
          <div 
            className="relative aspect-video bg-[#141b2d] rounded-xl overflow-hidden border border-[#c9a84c]/20 shadow-lg shadow-black/30 cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.1)]"
            onClick={() => setExpanded(expanded === project.id ? null : project.id)}
          >
            {/* Poster Image - using object-contain to show full image */}
            <div className="relative w-full h-full flex items-center justify-center bg-[#0a0e1a]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Overlay with title on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="text-xl font-medium text-[#f5f0e8]">{project.title}</h4>
                <p className="text-sm text-[#c9a84c]">{project.subtitle}</p>
              </div>
            </div>

            {/* Frame effect - subtle border glow */}
            <div className="absolute inset-0 border-2 border-[#c9a84c]/0 group-hover:border-[#c9a84c]/30 transition-all duration-300 rounded-xl"></div>

            {/* Magnifying Glass */}
            <div className="absolute top-4 right-4 bg-[#c9a84c]/10 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#c9a84c]/20 z-10">
              <FaSearch className="w-4 h-4 text-[#c9a84c]" />
            </div>

            {/* Drop shadow effect */}
            <div className="absolute -inset-2 bg-[#c9a84c]/5 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Expanded Details */}
          {expanded === project.id && (
            <div className="mt-4 p-5 bg-[#141b2d] border border-[#c9a84c]/30 rounded-xl">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-base font-medium text-[#c9a84c]">{project.title}</h4>
                  <p className="text-sm text-[#8a86a0]">{project.subtitle}</p>
                </div>
                <button 
                  onClick={() => setExpanded(null)}
                  className="text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-[#f5f0e8] mt-3 leading-relaxed">{project.details}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span key={`${project.id}-${tag}`} className="text-xs px-3 py-1 border border-[#c9a84c]/20 text-[#c9a84c]/70 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={`${project.id}-tag-${tag}`} className="text-xs px-3 py-1 border border-[#c9a84c]/20 text-[#c9a84c]/50 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PosterStudio;
