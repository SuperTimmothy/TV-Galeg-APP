
import React, { useState, useEffect } from 'react';
import StreamPlayer from './components/StreamPlayer';
import { Tv, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Sync background color with body for a seamless experience
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#020617' : '#f8fafc';
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isDark ? 'bg-[#020617] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Header */}
      <header className="p-6 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Tv className={`${isDark ? 'text-blue-500' : 'text-blue-600'} w-8 h-8`} />
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            TV Galega <span className={`font-light ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Ao Vivo</span>
          </h1>
        </div>

        <button 
          onClick={toggleTheme}
          className={`p-2.5 rounded-full transition-all duration-300 border ${
            isDark 
            ? 'bg-slate-800 border-slate-700 text-yellow-400 hover:bg-slate-700' 
            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm'
          }`}
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          <StreamPlayer isDark={isDark} />
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center">
        <p className={`${isDark ? 'text-slate-600' : 'text-slate-400'} text-xs font-medium uppercase tracking-widest`}>
          &copy; {new Date().getFullYear()} TV Galega Digital • Santiago de Compostela
        </p>
      </footer>
    </div>
  );
};

export default App;
