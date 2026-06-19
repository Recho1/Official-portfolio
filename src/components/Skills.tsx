const Skills = () => {
  const skillGroups = [
    {
      label: "AI & Machine Learning",
      skills: [
        "LangChain",
        "LangGraph",
        "LangSmith",
        "Agentic RAG",
        "AI Agents",
        "Deep Learning Fundamentals",
        "NLP",
      ],
      core: true,
    },
    {
      label: "Languages & Frameworks",
      skills: ["Python", "Django", "React", "Next.js", "Streamlit", "HTML", "CSS"],
      core: false,
    },
    {
      label: "Databases & Tools",
      skills: [
        "Supabase / PostgreSQL",
        "SQLite",
        "ChromaDB",
        "REST APIs",
        "Git & GitHub",
      ],
      core: false,
    },
    {
      label: "Soft skills",
      skills: [
        "Communication",
        "Problem solving",
        "Critical thinking",
        "Teamwork",
        "Innovation",
        "Self-driven",
      ],
      core: false,
    },
  ];

  return (
    <section id="skills" className="py-12 border-t border-[#e4e2db]">
      <h2 className="section-label">Skills</h2>

      {skillGroups.map((group) => (
        <div key={group.label} className="mb-6 last:mb-0">
          <h3 className="text-xs font-medium text-[#6b6965] mb-2.5">
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className={group.core ? "skill-tag-core" : "skill-tag"}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
