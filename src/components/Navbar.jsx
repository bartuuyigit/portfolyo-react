import { Moon, Sun } from 'lucide-react';

const Navbar = ({ tema, temaDegistir }) => (
  <nav className={`sticky top-0 z-10 flex justify-between items-center p-5 md:px-10 border-b transition-colors duration-300 ${tema === 'karanlik' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}>
    <div className="text-xl font-bold tracking-wider">
      <span className="text-blue-600">PORT</span>FOLYO.
    </div>
    <button 
      onClick={temaDegistir}
      className={`p-2 rounded-full transition-all duration-300 ${tema === 'karanlik' ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
    >
      {tema === 'karanlik' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  </nav>
);

export default Navbar;