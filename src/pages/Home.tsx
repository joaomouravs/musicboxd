import { useState } from 'react';
import { 
  BarChart3, Target, Zap, 
  Disc3, SlidersHorizontal, UserPlus, ShieldAlert,
  PlayCircle, CheckCircle2, TrendingUp, Sparkles,
  History
} from 'lucide-react';

// 1. Interface que permite à Home receber a função de mudar de página
interface HomeProps {
  onNavigate?: (route: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  // Estado para o Mood Slider
  const [moodLevel, setMoodLevel] = useState(50);
  
  // Estado para o Scroll Camaleão (Fundo muda com o hover)
  const [themeColor, setThemeColor] = useState('from-background to-background');

  const getMoodText = () => {
    if (moodLevel < 30) return "Zona de Conforto";
    if (moodLevel > 70) return "Descoberta Selvagem";
    return "Equilíbrio Perfeito";
  };

  return (
    <main className={`w-full min-h-screen transition-colors duration-1000 bg-gradient-to-b ${themeColor} pb-24 md:pb-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12 flex flex-col gap-8 md:gap-12">

        {/* ========================================================= */}
        {/* 1. HERO: DNA Sonoro + Audio-Reativo + Ecossistema         */}
        {/* ========================================================= */}
        <section className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center group shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.15),_transparent_70%)] opacity-80" />
          
          {/* Visualizador Audio-Reativo */}
          <div className="absolute bottom-0 w-full flex items-end justify-center gap-1 px-4 md:px-10 opacity-20 group-hover:opacity-40 transition-opacity">
            {[...Array(window.innerWidth < 768 ? 30 : 60)].map((_, i) => (
              <div 
                key={i} 
                className="w-full bg-accent rounded-t-full animate-pulse" 
                style={{ 
                  height: `${Math.random() * 80 + 20}px`, 
                  animationDuration: `${Math.random() * 0.8 + 0.5}s`,
                  animationDelay: `${Math.random() * 2}s` 
                }} 
              />
            ))}
          </div>

          {/* O Ecossistema (Órbitas) */}
          <div className="relative z-10 w-full h-full flex items-center justify-center scale-75 md:scale-100">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-accent shadow-[0_0_60px_rgba(99,102,241,0.5)] z-20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618609377864-6a5f65ce5737?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Sua Foto" />
            </div>

            <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] border border-white/5 rounded-full animate-[spin_25s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            {/* Amigos em Órbita */}
            <div className="absolute top-10 left-[20%] md:left-[30%] group/planet cursor-pointer z-30">
              <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-white/20 hover:scale-125 transition-transform" alt="Friend" />
            </div>
            <div className="absolute bottom-20 right-[15%] md:right-[25%] group/planet cursor-pointer z-30">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/20 hover:scale-125 transition-transform" alt="Friend" />
            </div>
          </div>

          <div className="absolute top-6 left-6 flex items-center gap-2 text-white/30 text-[10px] font-heading font-bold uppercase tracking-[0.2em]">
            <Sparkles size={14} className="text-accent" /> DNA Sonoro v1.0
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. JUKEBOX REATIVA                                        */}
        {/* ========================================================= */}
        <section className="w-full max-w-xl mx-auto -mt-16 md:-mt-24 relative z-40 bg-surface/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-white font-heading font-black italic text-sm md:text-base">
            <SlidersHorizontal size={18} className="text-accent" /> JUKEBOX REATIVA
          </div>
          
          <div className="w-full">
            <input 
              type="range" min="0" max="100" 
              value={moodLevel} onChange={(e) => setMoodLevel(Number(e.target.value))} 
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-accent" 
            />
            <div className="flex justify-between mt-3">
               <span className="text-[9px] uppercase font-bold text-secondary tracking-widest">Conforto</span>
               <span className="text-xs md:text-sm font-heading font-bold text-accent animate-pulse">{getMoodText()}</span>
               <span className="text-[9px] uppercase font-bold text-secondary tracking-widest">Caos</span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. DASHBOARD                                              */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-surface border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
            <BarChart3 className="absolute -right-6 -bottom-6 w-24 h-24 text-accent/5 group-hover:scale-110 transition-transform" />
            <div className="flex items-center gap-2 text-accent mb-3"><Zap size={16} fill="currentColor" /><h3 className="text-[10px] font-bold uppercase tracking-widest">Mini-Wrapped</h3></div>
            <p className="text-3xl font-heading font-black text-white">Top 3%</p>
            <p className="text-xs text-secondary font-body mt-1">Ouvinte de elite de <strong>Tyler, The Creator</strong>.</p>
          </div>

          <div className="bg-surface border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
             <Target className="absolute -right-6 -bottom-6 w-24 h-24 text-accent/5 group-hover:rotate-12 transition-transform" />
             <div className="flex items-center gap-2 text-accent mb-3"><TrendingUp size={16} /><h3 className="text-[10px] font-bold uppercase tracking-widest">Tastemaker</h3></div>
             <p className="text-3xl font-heading font-black text-white">42</p>
             <p className="text-xs text-secondary font-body mt-1">Novas conexões geradas pelas suas resenhas.</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/10 to-surface border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
             <History size={18} className="text-indigo-400 mb-3" />
             <p className="text-[10px] text-secondary font-bold uppercase mb-2 tracking-widest">Cápsula do Tempo</p>
             <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl border border-white/5">
                <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" className="w-10 h-10 rounded" alt="History" />
                <div className="flex flex-col"><span className="text-xs font-bold text-white">Discovery</span><span className="text-[9px] text-accent uppercase">Há 1 ano</span></div>
             </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. MISSÕES E AFINIDADE                                    */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gradient-to-r from-yellow-900/10 to-surface border border-yellow-500/20 rounded-2xl p-6 md:p-8 flex items-center justify-between group">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-yellow-500 mb-1"><ShieldAlert size={16} /><h3 className="text-[10px] font-bold uppercase tracking-widest">Bounty Board</h3></div>
              <h4 className="text-xl font-heading font-black text-white">Mestre de Bristol</h4>
              <p className="text-xs text-secondary font-body max-w-[200px] md:max-w-xs">Avalie álbuns de Trip-Hop para ganhar recompensas.</p>
              <div className="w-32 md:w-48 bg-black/40 h-1.5 rounded-full mt-3 overflow-hidden"><div className="bg-yellow-500 w-[66%] h-full" /></div>
            </div>
            <Disc3 size={48} className="text-yellow-500/20 group-hover:rotate-180 transition-transform duration-1000" />
          </div>

          <div className="bg-surface border border-white/5 rounded-2xl p-6 md:p-8 flex items-center gap-4 md:gap-6">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/100?u=1" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-surface shadow-lg" alt="User 1"/>
              <img src="https://i.pravatar.cc/100?u=2" className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-surface shadow-lg" alt="User 2"/>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-pink-500"><UserPlus size={16} /><h3 className="text-[10px] font-bold uppercase tracking-widest">Afinidade</h3></div>
              <p className="text-xs md:text-sm text-primary font-body mt-1"><strong>@marina_sounds</strong> combina 94% com você.</p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. CAIXOTE DE VINIS 3D                                    */}
        {/* ========================================================= */}
        <section className="flex flex-col gap-6 pt-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-black text-white italic">O CAIXOTE</h2>
              <p className="text-xs md:text-sm text-secondary font-body">Sua prateleira física com curadoria inteligente.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {[
              { title: "IGOR", artist: "Tyler", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg", color: "from-pink-900/30" },
              { title: "RAM", artist: "Daft Punk", cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg", color: "from-blue-900/30" },
              { title: "Brat", artist: "Charli xcx", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Charli_XCX_-_Brat.png/220px-Charli_XCX_-_Brat.png", color: "from-lime-900/30" },
              { title: "DAMN.", artist: "Kendrick", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png", color: "from-red-900/30" },
              { title: "Discovery", artist: "Daft Punk", cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg", color: "from-yellow-900/30" }
            ].map((album, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setThemeColor(album.color)}
                onMouseLeave={() => setThemeColor('from-background to-background')}
                // 2. A MAGIA ACONTECE AQUI: Navegar para a página do álbum ao clicar!
                onClick={() => onNavigate && onNavigate('album')}
                className="group relative perspective-[1000px] cursor-pointer h-56 md:h-72 flex flex-col items-center justify-end"
              >
                <div className="hidden md:flex absolute w-[90%] aspect-square rounded-full bg-[#111] border-[4px] border-[#222] shadow-inner top-0 transition-all duration-500 transform-gpu group-hover:-translate-y-16 group-hover:rotate-12 z-10 items-center justify-center">
                   <div className="w-1/3 h-1/3 rounded-full border border-white/5 overflow-hidden opacity-40"><img src={album.cover} className="w-full h-full object-cover blur-sm" /></div>
                </div>

                <div className="relative w-full aspect-square rounded-xl shadow-xl md:shadow-2xl transition-all duration-500 transform-gpu group-hover:rotate-x-12 md:group-hover:-translate-y-4 group-hover:scale-105 z-20 border border-white/10 overflow-hidden bg-surface">
                   <img src={album.cover} className="w-full h-full object-cover" alt={album.title} />
                   <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <PlayCircle size={24} className="text-white hover:text-accent transition-colors" />
                      <CheckCircle2 size={24} className="text-white hover:text-green-500 transition-colors" />
                   </div>
                </div>

                <div className="mt-3 text-center group-hover:opacity-40 transition-opacity">
                   <p className="text-[11px] md:text-sm font-bold text-white leading-tight truncate w-full px-1">{album.title}</p>
                   <p className="text-[9px] text-secondary font-body uppercase tracking-tighter">{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}