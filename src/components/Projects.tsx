const Projects = () => {
  const projects = [
    {
      title: "ARIA — Market Research Agent",
      description:
        "Production-grade multi-agent AI system using LangGraph ReAct, coordinating 4 specialist agents across competitive intelligence, market sizing, trend analysis, and risk assessment. Implemented Agentic RAG with Supabase pgvector and OpenAI embeddings, with real-time observability via LangSmith and a feedback-driven learning loop.",
      tags: ["LangGraph", "LangSmith", "Agentic RAG", "Supabase", "OpenAI", "Python"],
      featured: true,
      badge: "Featured",
      badgeColor: "bg-[#E1F5EE] text-[#0F6E56] border-[#9FE1CB]",
    },
    {
      title: "Infera — Business Data Analyst Agent",
      description:
        "Autonomous AI agent for analysing business data, generating insights, and surfacing actionable intelligence from structured datasets. Enables non-technical users to make data-driven decisions through natural language interactions.",
      tags: ["LangChain", "Python", "Data Analysis", "AI Agents", "LLMs"],
      featured: false,
      badge: "AI Agent",
      badgeColor: "bg-[#EEEDFE] text-[#3C3489] border-[#AFA9EC]",
    },
    {
      title: "Mayondo Wood & Furniture System",
      description:
        "Business management system for tracking sales and stock for a wood and furniture company. Features inventory management, sales recording, and stock-level monitoring to streamline operations and reduce manual record-keeping.",
      tags: ["Python", "Django", "SQLite", "HTML", "CSS"],
      featured: false,
      badge: "Full-stack",
      badgeColor: "bg-[#FAEEDA] text-[#BA7517] border-[#FAC775]",
    },
    {
      title: "Interview Practice Application",
      description:
        "AI-powered interview simulation platform leveraging LLMs for realistic interview scenarios with real-time, context-aware feedback to improve communication skills and confidence.",
      tags: ["LLMs", "Python", "Streamlit", "Real-time feedback"],
      featured: false,
      badge: "AI",
      badgeColor: "bg-[#EEEDFE] text-[#3C3489] border-[#AFA9EC]",
    },
  ];

  return (
    <section id="projects" className="py-12 border-t border-[#e4e2db]">
      <h2 className="section-label">Projects</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`bg-white border rounded-xl p-5 mb-3.5 transition-all duration-200 hover:border-[#7F77DD] hover:-translate-y-0.5 ${
            project.featured ? "border-[#AFA9EC]" : "border-[#e4e2db]"
          }`}
        >
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3 className="text-[15px] font-semibold">{project.title}</h3>
            <span
              className={`text-[11px] px-2.5 py-0.5 rounded-full border whitespace-nowrap ${project.badgeColor}`}
            >
              {project.badge}
            </span>
          </div>
          <p className="text-sm text-[#6b6965] leading-relaxed mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#f9f8f5] text-[#6b6965] border border-[#e4e2db]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
