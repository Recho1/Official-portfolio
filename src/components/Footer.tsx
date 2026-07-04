import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-[#c9a84c]/10 py-6 sm:py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#8a86a0] text-center sm:text-left">
          © 2025 Acio Racheal · Software & AI Engineer
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <a 
            href="mailto:rachealacio501@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Racheal%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding..." 
            className="text-xs text-[#8a86a0] hover:text-[#c9a84c] transition-colors flex items-center gap-1.5"
          >
            <MdEmail size={14} /> 
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
