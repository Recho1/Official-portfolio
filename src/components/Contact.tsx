import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailLink from "./EmailLink";

const Contact = () => {
  return (
    <div>
      <div className="mb-8">
        <p className="section-label">Get in Touch</p>
        <div className="gold-line"></div>
        <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8]">
          Let's <span className="text-[#c9a84c]">Connect</span>
        </h2>
        <p className="text-sm text-[#8a86a0] mt-2 max-w-xl">
          Have a project in mind or want to collaborate? Reach out and let's build something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Email Card */}
        <EmailLink email="rachealacio501@gmail.com">
          <div className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)] block cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors flex-shrink-0">
                <MdEmail className="w-6 h-6 text-[#c9a84c]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-[#8a86a0]">Email</p>
                <p className="text-sm text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors truncate">rachealacio501@gmail.com</p>
              </div>
            </div>
          </div>
        </EmailLink>

        {/* GitHub Card */}
        <a 
          href="https://github.com/Recho1"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)] block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors flex-shrink-0">
              <FaGithub className="w-6 h-6 text-[#c9a84c]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[#8a86a0]">GitHub</p>
              <p className="text-sm text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors truncate">@Recho1</p>
            </div>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://www.linkedin.com/in/racheal-acio-a70730398"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)] block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors flex-shrink-0">
              <FaLinkedin className="w-6 h-6 text-[#c9a84c]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-[#8a86a0]">LinkedIn</p>
              <p className="text-sm text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors truncate">Racheal Acio</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
