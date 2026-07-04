import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-[#c9a84c]/10 py-6 px-4 md:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#8a86a0] text-center md:text-left">
          © 2025 Acio Racheal · Software & AI Engineer
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a 
            href="mailto:rachealacio501@gmail.com" 
            className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors flex items-center gap-1.5"
          >
            <MdEmail className="w-4 h-4" />
            <span>Email</span>
          </a>
          <a 
            href="https://github.com/Recho1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/racheal-acio-a70730398" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
