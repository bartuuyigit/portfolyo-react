import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [tema, setTema] = useState('karanlik');

  const temaDegistir = () => {
    setTema(tema === 'aydinlik' ? 'karanlik' : 'aydinlik');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${tema === 'karanlik' ? 'bg-[#0a0a0a] text-gray-100' : 'bg-white text-gray-900'}`}>
      <Navbar tema={tema} temaDegistir={temaDegistir} />
      <main>
        <Hero />
        <Skills tema={tema} />
        <Projects tema={tema} />
      </main>
      <Footer tema={tema} />
    </div>
  );
}