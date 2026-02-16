
import React from 'react';
import { Tv, Search, User, Bell, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass px-4 md:px-8 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Tv className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
            TV GALEGA <span className="font-light">DIGITAL</span>
          </h1>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
        <a href="#" className="text-white hover:text-blue-400 transition-colors">Ao Vivo</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Programação</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Notícias</a>
        <a href="#" className="hover:text-blue-400 transition-colors">A Carta</a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-700 rounded-full transition-colors hidden sm:block">
          <Search className="w-5 h-5 text-slate-300" />
        </button>
        <button className="p-2 hover:bg-slate-700 rounded-full transition-colors relative">
          <Bell className="w-5 h-5 text-slate-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-slate-900"></span>
        </button>
        <div className="h-8 w-px bg-slate-700 mx-2 hidden sm:block"></div>
        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-full transition-colors border border-slate-700">
          <User className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Entrar</span>
        </button>
        <button className="md:hidden p-2 hover:bg-slate-700 rounded-lg">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
