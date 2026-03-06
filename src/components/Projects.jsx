import { Code2, ExternalLink } from 'lucide-react';
import { projeVerileri } from '../data';

const Projects = ({ tema }) => (
  <section id="projeler" className="py-20 px-5 md:px-10 max-w-6xl mx-auto">
    <h3 className="text-3xl font-bold mb-12 text-center">Öne Çıkan Projeler</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projeVerileri.map((proje) => (
        <div 
          key={proje.id} 
          className={`flex flex-col h-full rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${tema === 'karanlik' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-md'}`}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
              <Code2 size={24} />
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {proje.teknoloji}
            </span>
          </div>
          <h4 className="text-xl font-bold mb-3">{proje.isim}</h4>
          <p className="opacity-75 mb-6 flex-grow">{proje.aciklama}</p>
          <a href={proje.link} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors dark:text-blue-400 dark:hover:text-blue-300 mt-auto">
            Projeyi İncele <ExternalLink size={16} />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;