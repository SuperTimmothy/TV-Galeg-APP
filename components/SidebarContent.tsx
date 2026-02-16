
import React from 'react';
import { Clock, Calendar, ChevronRight, TrendingUp } from 'lucide-react';
import { NewsItem, ScheduleItem } from '../types';

interface SidebarContentProps {
  news: NewsItem[];
  schedule: ScheduleItem[];
  loading: boolean;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ news, schedule, loading }) => {
  return (
    <aside className="flex flex-col gap-6 lg:w-96">
      {/* Schedule Section */}
      <section className="glass rounded-2xl p-5 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 font-bold text-white">
            <Calendar className="w-4 h-4 text-blue-400" />
            Programação
          </h3>
          <button className="text-xs text-blue-400 hover:underline">Ver tudo</button>
        </div>
        
        <div className="space-y-4">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse flex gap-4">
                <div className="w-12 h-6 bg-slate-700 rounded"></div>
                <div className="flex-1 h-12 bg-slate-700 rounded"></div>
              </div>
            ))
          ) : (
            schedule.map((item, idx) => (
              <div key={idx} className={`flex gap-4 group cursor-pointer ${item.isLive ? 'relative' : ''}`}>
                <div className="text-sm font-mono text-slate-500 pt-1 w-12">{item.time}</div>
                <div className={`flex-1 p-3 rounded-xl transition-all ${item.isLive ? 'bg-blue-600/10 border border-blue-500/30' : 'hover:bg-white/5 border border-transparent'}`}>
                  <h4 className={`text-sm font-bold ${item.isLive ? 'text-blue-400' : 'text-slate-200'}`}>
                    {item.program}
                    {item.isLive && <span className="ml-2 text-[10px] text-white bg-red-600 px-1 rounded">AO VIVO</span>}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-1 mt-1">{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="glass rounded-2xl p-5 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 font-bold text-white">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            Últimas Notícias
          </h3>
        </div>

        <div className="space-y-4">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse space-y-2">
                <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2"></div>
              </div>
            ))
          ) : (
            news.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{item.category}</span>
                <h4 className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2 mt-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span className="text-[10px] text-slate-500">{item.time}</span>
                </div>
                <div className="mt-3 border-b border-slate-700/50 group-last:border-0"></div>
              </div>
            ))
          )}
        </div>
        
        <button className="w-full mt-4 py-3 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-all border border-slate-700/50 flex items-center justify-center gap-2 group">
          Mais Notícias
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </aside>
  );
};

export default SidebarContent;
