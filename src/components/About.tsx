const About = () => {
  const competencies = [
    'Leadership',
    'Responsibility & Accountability',
    'Effective Communication',
    'Decision Making',
    'Innovation & Creativity',
    'Problem Solving',
    'Teamwork',
    'Critical Thinking',
    'Self-Driven',
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Luo', level: 'Fluent' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      {/* Left: Summary */}
      <div className="lg:col-span-2">
        <div className="mb-6">
          <p className="section-label">About Me</p>
          <div className="gold-line"></div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8] mb-4">
          Building <span className="text-[#c9a84c]">Intelligent Systems</span> &amp; 
          <br />Full-Stack Applications
        </h2>
        
        <div className="space-y-4 text-sm text-[#8a86a0] leading-relaxed max-w-2xl">
          <p>
            Results-driven Software and AI Engineer with hands-on experience building full-stack web 
            applications, intelligent agents, and data-driven systems. Proficient in Python, Django, JavaScript, 
            Next.js, LangChain, LangGraph, LangSmith, and Agentic Retrieval-Augmented Generation (RAG).
          </p>
          <p>
            Knowledgeable in Deep Learning fundamentals and Natural Language Processing (NLP). Skilled at 
            designing scalable architectures, building RESTful APIs, orchestrating multi-step AI workflows, 
            and integrating modern AI tooling including MCP (Model Context Protocol).
          </p>
          <p>
            A fast learner who adapts quickly to new technologies, committed to continuous growth and 
            delivering production-ready solutions that drive real-world impact.
          </p>
        </div>

        {/* Languages */}
        <div className="mt-6">
          <p className="text-xs text-[#c9a84c] tracking-[0.15em] uppercase mb-2">Languages</p>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <span key={lang.name} className="text-sm text-[#f5f0e8]">
                {lang.name} <span className="text-[#8a86a0] text-xs">· {lang.level}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Core Competencies */}
      <div>
        <div className="mb-6">
          <p className="section-label">Core Competencies</p>
          <div className="gold-line"></div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {competencies.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-xs border border-[#c9a84c]/20 rounded-full text-[#c9a84c]/80 hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
