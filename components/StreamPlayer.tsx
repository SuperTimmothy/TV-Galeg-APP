import React from 'react';

interface StreamPlayerProps {
  isDark?: boolean;
}

const StreamPlayer: React.FC<StreamPlayerProps> = ({ isDark = true }) => {
  const streamUrl = "https://player.jmvstream.com/lvw/GPA8ciSJuQRwC7v9imW4NZW0wsMGd2";

  return (
    <div className="flex flex-col gap-8">
      {/* Container do Iframe com bordas arredondadas e sombra */}
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

      {/* Detalhe estético inferior */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-current opacity-10 mx-auto">
           <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
           <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} opacity-50`}></div>
           <div className={`h-1.5 w-1.5 rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'} opacity-25`}></div>
        </div>
        <h2 className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
          Emissão Digital de Alta Qualidade
        </h2>
      </div>
    </div>
  );
};

export default StreamPlayer;