import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a 
          href="mailto:rachealacio501@gmail.com"
          className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors">
              <MdEmail className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div>
              <p className="text-xs text-[#8a86a0]">Email</p>
              <p className="text-sm text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors">rachealacio501@gmail.com</p>
            </div>
          </div>
        </a>

        <a 
          href="https://github.com/Recho1"
          target="_blank"
          rel="noopener"
          className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors">
              <FaGithub className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div>
              <p className="text-xs text-[#8a86a0]">GitHub</p>
              <p className="text-sm text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors">@Recho1</p>
            </div>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/racheal-acio-a70730398"
          target="_blank"
          rel="noopener"
          className="group bg-[#141b2d] border border-[#c9a84c]/10 rounded-xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)]"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors">
              <FaLinkedin className="w-5 h-5 text-[#c9a84c]" />
            </div>
            <div>
              <p className="text-xs text-[#8a86a0]">LinkedIn</p>
              <p className="text-sm text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors">Racheal Acio</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
