import { Code2 } from 'lucide-react';
import { yetenekler } from '../data';

const Skills = ({ tema }) => (
  <section className={`py-16 px-5 md:px-10 transition-colors duration-300 ${tema === 'karanlik' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Code2 className="text-blue-600"/> Yeteneklerim
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {yetenekler.map((yetenek, index) => (
          <span 
            key={index} 
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm border transition-all hover:scale-105 ${tema === 'karanlik' ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-700'}`}
          >
            {yetenek}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;