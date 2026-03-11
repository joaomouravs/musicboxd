import { useState, useEffect } from 'react';
import { searchSpotify, getNewReleases } from '../services/api';
import { 
  Search, TrendingUp, TrendingDown, Zap, FlaskConical, 
  Radio, Flame, ArrowRight, Shuffle, Disc3, AlertTriangle, 
  Sun, ListMusic, GitCommit, BookOpen, Activity, PlayCircle,
  Sparkles, Target, Calendar, Layers, Star, Plus, CheckCircle2, Bot 
} from 'lucide-react';

interface ExploreProps {
  onNavigate: (route: string) => void;
  onSelectAlbum: (album: any) => void;
}

export function Explore({ onNavigate, onSelectAlbum }: ExploreProps) {
  // --- ESTADOS DA API ---
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [radarReleases, setRadarReleases] = useState<any[]>([]);
  const [isLoadingRadar, setIsLoadingRadar] = useState(true);

  // --- ESTADOS DE INTERAÇÃO (Botões Menores) ---
  const [toastMessage, setToastMessage] = useState('');
  const [activeHotTake, setActiveHotTake] = useState(0);
  const [comfortZoneBroken, setComfortZoneBroken] = useState(false);
  const [isMixing, setIsMixing] = useState(false);
  const [mixedResult, setMixedResult] = useState(false);
  const [timeYear, setTimeYear] = useState(1991);
  const [pathRevealed, setPathRevealed] = useState(0);

  // Função para dar feedback visual em todos os botões pequenos
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // 1. EFEITO: Pesquisa Dinâmica do Spotify (Debounce)
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const delaySearch = setTimeout(async () => {
      setIsSearching(true);
      const data = await searchSpotify(searchQuery);
      if (data && data.albums && data.albums.items) {
        setSearchResults(data.albums.items);
      } else {
        setSearchResults([]);
      }
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  // 2. EFEITO: Carregar o Radar de Lançamentos com dados reais do Spotify
  useEffect(() => {
    async function loadRadar() {
      setIsLoadingRadar(true);
      const releases = await getNewReleases();
      setRadarReleases(releases);
      setIsLoadingRadar(false);
    }
    loadRadar();
  }, []);

  // 3. EFEITO: Hot Takes (Radar ao Vivo)
  const hotTakes = [
    "🚨 @marina_sounds deu 0.5★ a Abbey Road: 'Apenas uma boyband glorificada.'",
    "🔥 @lucas_dev deu 5★ à OST do Shrek: 'Produção imaculada e atemporal.'",
    "⚠️ @joaovux abaixou a nota de RAM do Daft Punk para 2.5★."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHotTake((prev) => (prev + 1) % hotTakes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hotTakes.length]);

  // --- DADOS MOCKADOS (Com Imagens HD do Unsplash e Gatilhos Prontos) ---
  const hypeMarket = [
    { id: 1, title: "BRAT", artist: "Charli XCX", cover: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80", trend: "up", percent: "+420%", mockData: { name: "BRAT", artists: [{ name: "Charli XCX" }], images: [{ url: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80" }] } },
    { id: 2, title: "The Rise and Fall...", artist: "Chappell Roan", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80", trend: "up", percent: "+215%", mockData: { name: "The Rise and Fall...", artists: [{ name: "Chappell Roan" }], images: [{ url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80" }] } },
    { id: 3, title: "Vultures 1", artist: "Kanye West", cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80", trend: "down", percent: "-85%", mockData: { name: "Vultures 1", artists: [{ name: "Kanye West" }], images: [{ url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80" }] } },
  ];

  const joiaPerdidaData = { name: "Long Season", artists: [{ name: "Fishmans" }], images: [{ url: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4b5?w=300&q=80" }] };
  const quebraBolhasData = { name: "Fleet Foxes", artists: [{ name: "Fleet Foxes" }], images: [{ url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&q=80" }] };
  const alquimiaData = { name: "Sunbather", artists: [{ name: "Deafheaven" }], images: [{ url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300&q=80" }] };
  const nesteDiaData = { name: "The Joshua Tree", artists: [{ name: "U2" }], images: [{ url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&q=80" }] };

  return (
    <main className="w-full min-h-screen pb-24 pt-8 bg-background overflow-x-hidden relative">
      
      {/* TOAST SYSTEM (Feedback visual para os botões) */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] bg-accent text-white px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(99,102,241,0.5)] animate-in slide-in-from-top-4 fade-in duration-300">
          <CheckCircle2 size={18} /> {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8">
        
        {/* HEADER & SEARCH REAL */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full group z-50">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-surface border border-white/10 rounded-full overflow-hidden focus-within:border-accent focus-within:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all">
              <div className="pl-6 text-accent"><Search size={24} /></div>
              <input 
                type="text" 
                placeholder="Pesquise por álbuns de verdade no Spotify..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none py-5 px-4 text-sm md:text-lg font-heading font-bold text-white focus:outline-none placeholder:text-white/30"
              />
            </div>

            {/* CAIXA DE RESULTADOS DO SPOTIFY */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in slide-in-from-top-4">
                {isSearching ? (
                  <div className="p-8 flex items-center justify-center gap-3 text-secondary font-bold">
                    <Disc3 className="animate-spin text-accent" size={24} /> A pesquisar no Catálogo Global...
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="flex flex-col max-h-[400px] overflow-y-auto scrollbar-hide p-2">
                    {searchResults.map((album) => (
                      <div key={album.id} onClick={() => onSelectAlbum(album)} className="flex items-center gap-4 p-4 hover:bg-surface rounded-2xl transition-colors cursor-pointer group">
                        <img src={album.images[0]?.url || album.images[1]?.url} className="w-14 h-14 rounded-lg shadow-lg object-cover group-hover:scale-105 transition-transform" alt={album.name} />
                        <div className="flex-1">
                          <h4 className="text-white font-black text-lg truncate leading-tight">{album.name}</h4>
                          <p className="text-secondary text-sm font-bold truncate mt-1">{album.artists[0]?.name} • <span className="text-white/40">{album.release_date.substring(0, 4)}</span></p>
                        </div>
                        <button className="bg-white/5 group-hover:bg-accent text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300">
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center flex flex-col items-center gap-2">
                    <span className="text-4xl">🫙</span>
                    <p className="text-secondary font-bold">Nenhum álbum encontrado para "{searchQuery}".</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-3 flex items-center gap-4 overflow-hidden relative">
            <div className="flex items-center gap-2 text-red-500 font-black uppercase tracking-widest text-xs shrink-0 z-10 bg-background/50 px-2 rounded backdrop-blur-sm">
              <Flame size={16} className="animate-pulse" /> Radar Ao Vivo
            </div>
            <div className="flex-1 whitespace-nowrap overflow-hidden relative">
              <p key={activeHotTake} className="text-sm font-bold text-red-100 animate-in slide-in-from-bottom-4 fade-in duration-500">{hotTakes[activeHotTake]}</p>
            </div>
          </div>
        </div>

        {/* TRILHA SONORA DO CLIMA (ATUALIZADO PARA TERÇA-FEIRA DE MANHÃ) */}
        <section className="relative w-full bg-gradient-to-br from-amber-900/40 via-orange-900/20 to-background border border-amber-500/20 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
          <div className="absolute top-10 right-20 w-32 h-32 bg-amber-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-amber-400/30 transition-colors" />
          
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-widest text-xs mb-4">
              <Sun size={16} /> Atmosfera Atual
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-4">
              Terça-feira de manhã na Baixada Fluminense?
            </h2>
            <p className="text-amber-100/80 font-body text-base md:text-lg">
              O clima pede um Bossa Nova suave ou um Indie Acústico para começar o dia. Dê play nesta seleção matinal perfeita para acompanhar o café.
            </p>
            <button onClick={() => showToast('A reproduzir: Playlist Matinal ☕')} className="mt-6 bg-white text-amber-950 hover:bg-amber-50 px-6 py-3 rounded-full font-black text-sm flex items-center gap-2 transition-transform active:scale-95 shadow-lg">
              <PlayCircle size={18} /> OUVIR AGORA
            </button>
          </div>
          <div className="relative z-10 shrink-0 hidden md:block">
            <div className="w-48 h-48 rounded-full border-4 border-amber-500/30 flex items-center justify-center p-2 relative animate-[spin_20s_linear_infinite]">
              <div className="w-full h-full rounded-full border border-amber-400/50 flex items-center justify-center relative">
                 <Disc3 size={100} className="text-amber-300/50" />
              </div>
            </div>
          </div>
        </section>

        {/* LINHA 1: BOLSA DE HYPE & JOIA PERDIDA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <section className="bg-surface border border-white/5 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 lg:col-span-2 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none"><Activity size={120} /></div>
            <div className="flex items-center justify-between relative z-10">
              <h2 className="text-2xl font-heading font-black text-white flex items-center gap-2"><TrendingUp className="text-green-400" /> Bolsa de Hype</h2>
              <span className="text-[10px] font-bold text-secondary uppercase bg-white/5 px-3 py-1 rounded-full">Atualizado agora</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
              {hypeMarket.map((album) => (
                <div key={album.id} onClick={() => onSelectAlbum(album.mockData)} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col gap-4 hover:border-white/20 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start">
                    <img src={album.cover} className="w-16 h-16 rounded-xl shadow-lg group-hover:scale-105 transition-transform object-cover" alt={album.title} />
                    <div className={`flex items-center gap-1 text-xs font-black px-2 py-1 rounded-lg ${album.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {album.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {album.percent}
                    </div>
                  </div>
                  <div><h3 className="text-base font-bold text-white truncate">{album.title}</h3><p className="text-xs text-secondary truncate">{album.artist}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section onClick={() => onSelectAlbum(joiaPerdidaData)} className="bg-gradient-to-tr from-emerald-950/50 to-surface border border-emerald-500/30 rounded-[2rem] p-6 lg:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group col-span-1 shadow-[0_0_30px_rgba(16,185,129,0.05)] cursor-pointer">
             <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
             <div className="flex items-center gap-2 text-emerald-400 mb-4 z-10">
               <Sparkles size={20} className="animate-pulse" />
               <h2 className="text-xl font-heading font-black">Joia Perdida</h2>
             </div>
             <div className="relative z-10 transform transition-transform group-hover:scale-105 group-hover:-rotate-2">
               <img src={joiaPerdidaData.images[0].url} className="w-32 h-32 rounded-lg shadow-2xl border-2 border-emerald-500/50 object-cover" alt="Long Season" />
               <div className="absolute -bottom-3 -right-3 bg-emerald-900 border border-emerald-500 text-emerald-400 text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1">
                 <Star size={10} fill="currentColor"/> 4.9
               </div>
             </div>
             <div className="mt-6 z-10">
               <h3 className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors">Long Season</h3>
               <p className="text-xs text-secondary">Fishmans • 1996 • Dream Pop</p>
             </div>
          </section>
        </div>

        {/* LINHA 2: RADAR DE LANÇAMENTOS (LIGADO À API) & QUEBRA-BOLHAS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <section className="bg-surface border border-white/5 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 col-span-1 lg:col-span-2 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-heading font-black text-white flex items-center gap-2">
                <Target className="text-blue-400" /> Radar de Lançamentos
              </h2>
              <span className="text-[10px] text-blue-400 font-bold uppercase bg-blue-500/10 px-3 py-1 rounded-full flex items-center gap-1">
                <Radio size={12} className="animate-pulse" /> Ao Vivo do Spotify
              </span>
            </div>
            
            {isLoadingRadar ? (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="min-w-[140px] flex flex-col gap-3 animate-pulse"><div className="w-full aspect-square bg-white/5 rounded-2xl" /><div className="w-3/4 h-4 bg-white/5 rounded" /></div>
                ))}
              </div>
            ) : (
              <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x">
                {radarReleases.map((album) => (
                  <div key={album.id} onClick={() => onSelectAlbum(album)} className="min-w-[140px] max-w-[140px] flex flex-col gap-3 snap-start group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl aspect-square shadow-lg border border-white/5 group-hover:border-blue-500/50 transition-colors">
                      <img src={album.images[0]?.url || album.images[1]?.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={album.name} />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <PlayCircle size={32} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white truncate group-hover:text-blue-400 transition-colors">{album.name}</h3>
                      <p className="text-[10px] text-secondary truncate">{album.artists[0]?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="bg-gradient-to-br from-indigo-900/40 to-surface border border-indigo-500/30 rounded-[2rem] p-6 lg:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group col-span-1">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            {!comfortZoneBroken ? (
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-2"><AlertTriangle size={32} className="text-indigo-400" /></div>
                <div><h2 className="text-xl font-heading font-black text-white">Quebra-Bolhas</h2><p className="text-xs text-secondary mt-2 max-w-[200px]">O seu DNA é 70% Sintético. Clique para ouvir o oposto.</p></div>
                <button onClick={() => setComfortZoneBroken(true)} className="mt-4 bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-full font-black text-sm transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2 active:scale-95"><Zap size={16} fill="currentColor" /> DESTRUIR ALGORITMO</button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 relative z-10 animate-in zoom-in duration-500">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">A Sua Nova Obsessão</span>
                <img src={quebraBolhasData.images[0].url} onClick={() => onSelectAlbum(quebraBolhasData)} className="w-32 h-32 rounded-2xl shadow-2xl border-4 border-indigo-500/30 cursor-pointer hover:scale-105 transition-transform object-cover" alt="Fleet Foxes" />
                <div><h3 className="text-xl font-black text-white cursor-pointer hover:text-indigo-400" onClick={() => onSelectAlbum(quebraBolhasData)}>Fleet Foxes</h3><p className="text-xs text-secondary">Folk Acústico • 2008</p></div>
                <button onClick={() => setComfortZoneBroken(false)} className="text-xs text-secondary hover:text-white underline mt-2">Restaurar Bolha</button>
              </div>
            )}
          </section>
        </div>

        {/* LINHA 3: ALQUIMIA SONORA & NESTE DIA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <section className="bg-surface border border-white/5 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 col-span-1 lg:col-span-2 shadow-xl">
            <div className="flex items-center gap-2"><FlaskConical className="text-pink-500" size={24} /><h2 className="text-2xl font-heading font-black text-white">Alquimia Sonora</h2></div>
            <p className="text-sm text-secondary font-body -mt-4">Misture dois géneros incompatíveis e veja o resultado.</p>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full bg-black/40 p-6 rounded-3xl border border-white/5">
              <select className="flex-1 w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-pink-500 text-center"><option>Bossa Nova</option><option>Jazz</option></select>
              <div className="bg-pink-500/20 p-3 rounded-full shrink-0"><Shuffle className="text-pink-500" size={20} /></div>
              <select className="flex-1 w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-pink-500 text-center"><option>Metal Industrial</option><option>Hyperpop</option></select>
              <button onClick={() => { setIsMixing(true); setMixedResult(false); setTimeout(() => { setIsMixing(false); setMixedResult(true); }, 1500); }} disabled={isMixing} className="w-full md:w-auto bg-pink-500 hover:bg-pink-400 disabled:bg-pink-900/50 text-white px-8 py-3 rounded-xl font-black transition-all shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                {isMixing ? 'A MISTURAR...' : 'FUNDIR'}
              </button>
            </div>
            {mixedResult && (
              <div onClick={() => onSelectAlbum(alquimiaData)} className="mt-2 flex items-center gap-4 bg-pink-950/20 border border-pink-500/20 p-4 rounded-2xl animate-in slide-in-from-top-4 fade-in duration-500 cursor-pointer hover:bg-pink-900/30 transition-colors group">
                <img src={alquimiaData.images[0].url} className="w-16 h-16 rounded-lg object-cover" alt="Sunbather" />
                <div className="flex-1"><span className="text-[10px] font-black text-pink-400 uppercase tracking-widest">Resultado da Mutação:</span><h3 className="text-lg font-black text-white group-hover:text-pink-300 transition-colors">Sunbather - Deafheaven</h3></div>
                <button className="hidden sm:flex text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors p-2 border border-pink-500/30 rounded-full"><ArrowRight size={20} /></button>
              </div>
            )}
          </section>

          <section onClick={() => onSelectAlbum(nesteDiaData)} className="bg-surface border border-white/5 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center text-center shadow-xl relative overflow-hidden group cursor-pointer hover:border-white/10 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"><Calendar size={100} className="text-white" /></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white/10 p-2 rounded-full mb-4">
                <Calendar size={20} className="text-white" />
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Neste Dia na História</span>
              <h2 className="text-3xl font-heading font-black text-white mb-6">10 de Março</h2>
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <img src={nesteDiaData.images[0].url} className="w-40 h-40 rounded-xl shadow-2xl mx-auto object-cover" alt="The Joshua Tree" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-black text-white group-hover:text-accent transition-colors">The Joshua Tree</h3>
                <p className="text-xs text-secondary mt-1 max-w-[200px] mx-auto">Faz exatamente 39 anos que os U2 lançaram este marco do Rock Alternativo.</p>
              </div>
            </div>
          </section>
        </div>

        {/* LINHA 4: MIXTAPE E 6 GRAUS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <section className="bg-[#1a1a1a] border-4 border-[#333] rounded-[2rem] p-6 lg:p-8 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-xl font-heading font-black text-white mb-2 flex items-center gap-2"><ListMusic className="text-yellow-500" /> Mixtape da Comunidade</h2>
            <p className="text-xs text-secondary mb-8">Tema de Hoje: "Limpar a casa no Domingo"</p>
            <div className="w-64 h-40 bg-white/90 rounded-xl border-8 border-gray-300 relative shadow-inner flex flex-col p-4 justify-between transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="w-full h-8 bg-gray-200 border-b-2 border-gray-300 flex items-center justify-center font-heading font-bold text-gray-800 italic" style={{ fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>Domingueira 🧹</div>
              <div className="flex justify-center gap-12 mt-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-gray-400 flex items-center justify-center animate-[spin_4s_linear_infinite]"><div className="w-3 h-3 bg-white rounded-full"/></div>
                <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-gray-400 flex items-center justify-center animate-[spin_4s_linear_infinite]"><div className="w-3 h-3 bg-white rounded-full"/></div>
              </div>
            </div>
            <button onClick={() => showToast('Adicionado à sua Mixtape com sucesso!')} className="mt-8 bg-yellow-500 text-black px-6 py-2 rounded-full font-black text-sm hover:bg-yellow-400 transition-colors flex items-center gap-2">
               <Plus size={16} /> ADICIONAR FAIXA
            </button>
          </section>

          <section className="bg-surface border border-white/5 rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 shadow-xl">
            <h2 className="text-xl font-heading font-black text-white flex items-center gap-2"><GitCommit className="text-emerald-400" /> Os 6 Graus de Separação</h2>
            <p className="text-sm text-secondary -mt-4">Encontre a ligação: <strong>Taylor Swift</strong> até ao <strong>Slipknot</strong>.</p>
            <div className="flex flex-col gap-0 mt-4 relative">
              <div className="absolute left-[19px] top-4 bottom-4 w-1 bg-white/5" />
              {['Taylor Swift', 'Jack Antonoff', 'Lorde', 'David Bowie', 'Trent Reznor', 'Slipknot'].map((artist, idx) => (
                <div key={idx} className="flex items-center gap-4 py-2 relative">
                  <button onClick={() => { setPathRevealed(idx); showToast(`Ligação ${idx + 1} revelada!`); }} className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors ${idx <= pathRevealed ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-surface border-2 border-white/10 text-secondary hover:border-emerald-500 hover:text-emerald-500'}`}>
                    {idx + 1}
                  </button>
                  <span className={`font-bold transition-opacity ${idx <= pathRevealed ? 'text-white opacity-100' : 'text-secondary opacity-30 blur-[2px]'}`}>{artist}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SECÇÃO FINAL: O CORTE DO DIRETOR */}
        <section className="w-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent pointer-events-none" />
          <div className="flex-1 flex flex-col z-10">
            <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-xs mb-4"><BookOpen size={16} /> O Corte do Diretor</div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6 font-serif tracking-tight">
              A Engenharia de 'In Rainbows'.
            </h2>
            <p className="text-white/70 font-body text-lg mb-8 leading-relaxed max-w-lg">
              Mergulhe no estúdio com os Radiohead. Descubra como a bateria foi gravada num hospital abandonado e como a banda redefiniu o lançamento na internet.
            </p>
           <button onClick={() => onNavigate('article')} className="bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold transition-all w-fit flex items-center gap-2">
  <Bot size={18} /> Gerar Mergulho com IA
</button>
          </div>
          <div 
            className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 z-10 perspective-[1000px] cursor-pointer"
            onClick={() => onSelectAlbum({ name: "In Rainbows", artists: [{ name: "Radiohead" }], images: [{ url: "https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?w=300&q=80" }] })}
          >
            <img src="https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?w=300&q=80" className="w-full h-full object-cover rounded-xl shadow-2xl transform-gpu rotate-y-[-15deg] group-hover:rotate-y-0 transition-transform duration-700" alt="In Rainbows" />
          </div>
        </section>

      </div>
    </main>
  );
}