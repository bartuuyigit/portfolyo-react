import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ tema }) => (
  <footer id="iletisim" className={`py-10 text-center border-t transition-colors duration-300 ${tema === 'karanlik' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
    <div className="flex justify-center gap-6 mb-6">
      <a href="https://github.com/bartuuyigit" target="_blank" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
        <Github size={24} />
      </a>
      <a href="https://www.linkedin.com/in/bartu-yigit-995928351/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
        <Linkedin size={24} />
      </a>
      <a href="mailto:bartu.yigit.7@hotmail.com" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
        <Mail size={24} />
      </a>
    </div>
    <p className="opacity-60 text-sm">
      © Bartu Yiğit 2026 Tüm hakları saklıdır.
    </p>
  </footer>
);

export default Footer;