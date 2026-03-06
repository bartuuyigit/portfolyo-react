import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typeStep, setTypeStep] = useState(0);

  useEffect(() => {
    let timer;
    if (isHovered && typeStep < 8) {
      timer = setTimeout(() => setTypeStep(prev => prev + 1), 150);
    } else if (!isHovered) {
      setTypeStep(0);
    }
    return () => clearTimeout(timer);
  }, [isHovered, typeStep]);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[75vh] py-20 px-5 md:px-10 max-w-6xl mx-auto gap-12">
      
      <div className="flex-1 text-center md:text-left space-y-7 max-w-2xl">
        <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm md:text-base">
          Merhaba, Ben Bartu
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Yazılım <br/> Geliştiricisi.
        </h1>
        
        <p className="text-lg md:text-xl opacity-80 max-w-lg mx-auto md:mx-0 leading-relaxed">
          React ve modern web teknolojileri kullanarak kullanıcı dostu, duyarlı ve performanslı web arayüzleri inşa ediyorum.
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
          <a href="#iletisim" className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
            Bana Ulaşın
          </a>
          <a href="#projeler" className="px-8 py-4 border border-gray-300 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all dark:border-gray-700 hover:-translate-y-1">
            Projeleri İncele
          </a>
        </div>
      </div>

      <div 
        className="flex-1 flex justify-center w-full mt-10 md:mt-0 relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

        <div className="relative w-full max-w-lg bg-[#0F172A] border border-slate-800 rounded-xl shadow-2xl overflow-hidden transform md:-rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 text-left min-h-[350px]">
          
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/60 bg-[#0F172A]">
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-sm text-slate-400 font-mono">bartu.config.js</span>
          </div>

          <div className="relative p-6 font-mono text-sm md:text-base leading-loose text-slate-300 min-h-[300px]">
            {!isHovered && typeStep === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 transition-opacity duration-300">
                <Code2 size={40} className="mb-3 animate-pulse opacity-50" />
                <p className="text-sm font-sans tracking-widest uppercase opacity-60">Kodu Yazdırmak İçin Üzerine Gel</p>
              </div>
            )}

            {typeStep >= 1 && <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-yellow-500">=</span> <span className="text-yellow-500">{'{'}</span></p>}
            {typeStep >= 2 && <p className="ml-6"><span className="text-slate-400">name:</span> <span className="text-emerald-400">'Bartu Yiğit'</span>,</p>}
            {typeStep >= 3 && <p className="ml-6"><span className="text-slate-400">stack:</span> <span className="text-yellow-500">[</span><span className="text-emerald-400">'React'</span>, <span className="text-emerald-400">'CSS'</span><span className="text-yellow-500">]</span>,</p>}
            {typeStep >= 4 && <p className="ml-6"><span className="text-slate-400">focus:</span> <span className="text-emerald-400">'Performance & Clean Code'</span>,</p>}
            {typeStep >= 5 && <p className="ml-6"><span className="text-slate-400">status:</span> <span className="text-emerald-400">'Building Future'</span></p>}
            {typeStep >= 6 && <p><span className="text-yellow-500">{'}'}</span></p>}
            {typeStep >= 7 && <br/>}
            {typeStep >= 8 && <p><span className="text-purple-400">export default</span> <span className="text-blue-300">developer</span>;</p>}

            {isHovered && (
              <div className="mt-1 flex items-center">
                <span className="w-2.5 h-5 bg-slate-400 animate-pulse block"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;