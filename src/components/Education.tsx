import { FaGraduationCap, FaLaptop, FaSchool } from "react-icons/fa";
import { GiCrown, GiNotebook } from "react-icons/gi";
import { IoDocumentText } from "react-icons/io5";
import { MdPalette } from "react-icons/md";

const Education = () => {
  const education = [
    {
      institution: 'Turing College',
      cert: 'Certificate in Software and AI Engineering',
      year: '2025 – 2026 · Completed',
      icon: FaGraduationCap,
      dotColor: 'border-[#c9a84c]/30 bg-[#c9a84c]/10',
    },
    {
      institution: 'Refactory Academy',
      cert: 'Certificate in Software Engineering with Python',
      year: '2025 · Completed',
      icon: FaLaptop,
      dotColor: 'border-[#c9a84c]/30 bg-[#c9a84c]/10',
    },
    {
      institution: 'Christ The King Girls Secondary School',
      cert: 'UACE & UCE',
      year: '2018 – 2024 · Completed',
      icon: FaSchool,
      dotColor: 'border-[#c9a84c]/30 bg-[#c9a84c]/10',
    },
  ];

  const achievements = [
    {
      title: 'Head Girl',
      institution: 'Christ The King Girls Secondary School',
      description: 'Elected to serve as Head Girl, demonstrating exemplary leadership, discipline, and accountability. Acted as the primary liaison between students and school management, and represented the school at official functions.',
      icon: GiCrown,
    },
    {
      title: 'Information Prefect',
      institution: 'Christ The King Girls Secondary School',
      description: 'Appointed to manage school-wide communications, disseminating accurate and timely information to students and overseeing all official announcements and notice boards.',
      icon: GiNotebook,
    },
    {
      title: 'Soft Skills Certificate',
      institution: 'BrighterMonday',
      description: 'Completed professional development training covering workplace communication, teamwork, problem-solving, and personal effectiveness.',
      icon: IoDocumentText,
    },
    {
      title: 'Graphic Design',
      institution: 'Self-Taught',
      description: 'Independently acquired graphic design skills applied to visual materials and UI mockups.',
      icon: MdPalette,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Education */}
      <div>
        <div className="mb-8">
          <p className="section-label">Education</p>
          <div className="gold-line"></div>
          <h2 className="text-2xl font-light text-[#f5f0e8]">
            Academic <span className="text-[#c9a84c]">Journey</span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 ${item.dotColor}`}>
                  <Icon className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#f5f0e8]">{item.institution}</h4>
                  <p className="text-sm text-[#8a86a0]">{item.cert}</p>
                  <p className="text-xs text-[#c9a84c] mt-0.5">{item.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Achievements */}
      <div>
        <div className="mb-8">
          <p className="section-label">Achievements</p>
          <div className="gold-line"></div>
          <h2 className="text-2xl font-light text-[#f5f0e8]">
            Leadership &amp; <span className="text-[#c9a84c]">Certificates</span>
          </h2>
        </div>

        <div className="space-y-5">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#f5f0e8]">{item.title}</h4>
                    <p className="text-xs text-[#c9a84c] mb-1.5">{item.institution}</p>
                    <p className="text-xs text-[#8a86a0] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
