import React, { useState, useEffect } from 'react';
import StreamPlayer from './components/StreamPlayer';
import { Tv, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const isDark = theme === 'dark';
    document.body.style.backgroundColor = isDark ? '#020617' : '#f8fafc';
    document.body.style.color = isDark ? '#f8fafc' : '#0f172a';
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header Minimalista */}
      <header className="p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Tv className={`${isDark ? 'text-blue-500' : 'text-blue-600'} w-8 h-8`} />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight uppercase">
            TV Galega <span className={`font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Ao Vivo</span>
          </h1>
        </div>

        <button 
          onClick={toggleTheme}
          className={`p-2.5 rounded-full transition-all duration-300 border shadow-sm ${
            isDark 
            ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' 
            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
          aria-label="Alternar Tema"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>
      
      {/* Área Principal do Stream */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          <StreamPlayer isDark={isDark} />
        </div>
      </main>

      {/* Footer Finalizado */}
      <footer className="p-8 text-center">
        <div className={`h-px w-24 mx-auto mb-6 transition-colors duration-500 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
        <p className={`${isDark ? 'text-slate-600' : 'text-slate-400'} text-xs font-medium uppercase tracking-[0.2em]`}>
          &copy; {new Date().getFullYear()} TV Galega Digital • Santiago de Compostela
        </p>
      </footer>
    </div>
  );
};

export default App;