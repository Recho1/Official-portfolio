const ProjectTheory = () => {
  const projects = [
    {
      id: 1,
      title: 'ARIA — Market Research Agent',
      subtitle: 'Multi-Agent AI System',
      description: 'Architected a production-grade multi-agent AI system using LangGraph ReAct, coordinating 4 specialist agents in parallel across competitive intelligence, market sizing, trend analysis, and risk assessment. Implemented Agentic RAG with Supabase pgvector and OpenAI embeddings for domain-specific knowledge retrieval; integrated LangSmith for real-time observability of agent runs, tool calls, token usage, and latency.',
      tech: ['LangGraph', 'LangSmith', 'Agentic RAG', 'Supabase', 'OpenAI', 'Python', 'MCP', 'Next.js'],
      architecture: '4 parallel agents + feedback learning loop + persistent memory + MCP integration',
      challenge: 'Coordinating multiple agents while maintaining response quality and reducing API costs',
      outcome: '40% reduction in redundant API calls, 25% improvement in response accuracy',
    },
    {
      id: 2,
      title: 'Analytics Platform',
      subtitle: 'Autonomous Business Intelligence',
      description: 'Built an autonomous data analyst agent that ingests sales data, identifies trends, and generates actionable business insights without manual intervention. Implemented natural-language querying enabling non-technical stakeholders to interrogate sales data conversationally and receive structured, data-backed reports.',
      tech: ['LangChain', 'LangGraph', 'Supabase', 'PostgreSQL', 'Streamlit', 'Render'],
      architecture: 'Data ingestion → NLU layer → Vector search → Insight generation → Dashboard',
      challenge: 'Translating complex data queries into natural language while maintaining accuracy',
      outcome: 'Reduced data analysis time from hours to minutes for non-technical users',
    },
    {
      id: 3,
      title: 'Mayondo — Inventory & Sales System',
      subtitle: 'Full-Stack Web Application',
      description: 'Built and shipped a full-stack responsive web application to track sales transactions, stock levels, and inventory movements. Designed database schemas with Django ORM and PostgreSQL, supporting real-time stock updates, low-stock alerts, and sales reporting. Developed an interactive dashboard for monitoring revenue trends and top-selling products.',
      tech: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Render'],
      architecture: 'CRUD operations → Inventory tracking → Sales analytics → Reporting dashboard',
      challenge: 'Building a scalable inventory system with real-time stock updates for a growing business',
      outcome: 'Reduced manual record-keeping by 80% and improved inventory accuracy',
    },
    {
      id: 4,
      title: 'Interview Practice Application',
      subtitle: 'AI-Powered Interview Simulation',
      description: 'AI-powered interview simulation platform leveraging LLMs for realistic interview scenarios with real-time, context-aware feedback to improve communication skills and confidence. Implemented user-centric interactions for continuous improvement.',
      tech: ['LLMs', 'Python', 'Streamlit', 'Real-time feedback'],
      architecture: 'LLM engine → Scenario generation → User interaction → Real-time feedback loop',
      challenge: 'Creating realistic interview scenarios with adaptive difficulty levels',
      outcome: 'Users reported 60% improvement in interview confidence after 3 sessions',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-6 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]"
        >
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-lg font-medium text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-[#c9a84c] tracking-wider uppercase mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-[#8a86a0] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 border border-[#c9a84c]/20 text-[#c9a84c]/70 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Architecture & Details */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#c9a84c]/10">
            <div>
              <p className="text-[10px] text-[#8a86a0] uppercase tracking-wider">Architecture</p>
              <p className="text-xs text-[#f5f0e8] mt-0.5">{project.architecture}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8a86a0] uppercase tracking-wider">Challenge</p>
              <p className="text-xs text-[#f5f0e8] mt-0.5">{project.challenge}</p>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-[#c9a84c]/10">
            <p className="text-[10px] text-[#c9a84c] uppercase tracking-wider">Outcome</p>
            <p className="text-xs text-[#f5f0e8] mt-0.5">{project.outcome}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTheory;
