import React from 'react';
import { ExternalLink } from 'lucide-react';

interface StreamPlayerProps {
  isDark?: boolean;
}

const StreamPlayer: React.FC<StreamPlayerProps> = ({ isDark = true }) => {
  const streamUrl = "https://player.jmvstream.com/lvw/GPA8ciSJuQRwC7v9imW4NZW0wsMGd2";
  const websiteUrl = "https://galegasc.com.br/";

  return (
    <div className="flex flex-col gap-8">
      {/* Container do Iframe com bordas arredondadas e sombra profunda */}
      <div className={`relative rounded-[2rem] overflow-hidden transition-all duration-500 shadow-2xl ${
        isDark 
        ? 'bg-black border border-white/5 ring-1 ring-white/10 shadow-black/50' 
        : 'bg-slate-200 border border-slate-200 shadow-slate-300/50 ring-1 ring-slate-300'
      }`}>
        <div className="stream-container">
          <iframe 
            src={streamUrl} 
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen 
            title="TV Galega Live Stream"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Detalhe estético inferior e Botão de Redirecionamento */}
      <div className="text-center flex flex-col items-center space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-current opacity-10 mx-auto">
             <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
             <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} opacity-50`}></div>
             <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} opacity-25`}></div>
          </div>
          <h2 className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            A IMAGEM DA CIDADE
          </h2>
        </div>

        {/* Botão configurado para abrir no navegador padrão (Android/iOS) */}
        <a 
          href={websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl group ${
            isDark 
            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/40' 
            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
          }`}
        >
          <span>VISITAR SITE OFICIAL</span>
          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default StreamPlayer;