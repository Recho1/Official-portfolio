'use client';

import { useState } from 'react';

const videoProjects = [
  {
    id: 'video-1',
    title: 'ARIA — Market Research Agent',
    subtitle: 'Multi-Agent AI System',
    category: 'video',
    description: 'Watch ARIA coordinate 4 specialist agents for market research. Production-grade multi-agent AI system using LangGraph ReAct.',
    tags: ['LangGraph', 'LangSmith', 'Agentic RAG', 'MCP'],
    videoId: 'tjyQSA0E09Y', // <--- This is YOUR video ID
  },
  {
    id: 'video-2',
    title: 'Mayondo — Inventory & Sales System',
    subtitle: 'Full-Stack Web Application',
    category: 'video',
    description: 'Walkthrough of the wood & furniture management system. Track sales, stock levels, and inventory movements in real-time.',
    tags: ['Django', 'PostgreSQL', 'Python', 'Render'],
    videoId: 'YOUR_MAYONDO_VIDEO_ID', // Replace when you upload Mayondo
  },
];

const VideoGallery = ({ filter }: { filter: string }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = filter === 'all' 
    ? videoProjects 
    : videoProjects.filter(p => p.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filtered.map((project) => {
        const isHovered = hoveredId === project.id;
        const embedUrl = `https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.videoId}&playsinline=1`;
        const thumbnailUrl = `https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`;

        return (
          <div
            key={project.id}
            className="group"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Video Container */}
            <div className="relative aspect-video bg-[#0a0e1a] rounded-xl overflow-hidden border border-[#c9a84c]/20">
              
              {/* YouTube iframe - only loads when hovered */}
              {isHovered ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                  loading="lazy"
                />
              ) : (
                /* Thumbnail when not hovered */
                <div className="w-full h-full relative">
                  <img
                    src={thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if maxresdefault doesn't exist
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                    }}
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#c9a84c] flex items-center justify-center shadow-[0_0_40px_rgba(201,168,76,0.3)]">
                      <span className="text-2xl text-[#0a0e1a] ml-1">▶</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom info - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                <h4 className="text-sm font-medium text-[#f5f0e8]">{project.title}</h4>
                <p className="text-xs text-[#c9a84c]">{project.subtitle}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#8a86a0] mt-3 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span key={`${project.id}-${tag}`} className="text-xs px-3 py-1 border border-[#c9a84c]/20 text-[#c9a84c]/70 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoGallery;
