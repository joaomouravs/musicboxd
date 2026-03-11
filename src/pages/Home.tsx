import { useState, useEffect } from 'react';
import { getNewReleases } from '../services/api';
import { 
  Heart, MessageSquare, Share2, Star, Disc3, 
  Flame, PlayCircle, MoreHorizontal, Sparkles,
  Coffee, Target, BarChart, UserCheck, Crown, History, Box, Loader
} from 'lucide-react';

interface HomeProps {
  onNavigate: (route: string) => void;
  onSelectAlbum: (album: any) => void;
}

export function Home({ onNavigate, onSelectAlbum }: HomeProps) {
  const [spotifyReleases, setSpotifyReleases] = useState<any[]>([]);
  const [isLoadingAPI, setIsLoadingAPI] = useState(true);
  const [activeTab, setActiveTab] = useState('global');

  const [isDigging, setIsDigging] = useState(false);
  const [dugAlbum, setDugAlbum] = useState<any>(null);

  // BUSCAR DADOS REAIS AO SPOTIFY
  useEffect(() => {
    async function fetchSpotify() {
      setIsLoadingAPI(true);
      const releases = await getNewReleases();
      setSpotifyReleases(releases);
      setIsLoadingAPI(false);
    }
    fetchSpotify();
  }, []);

  // FUNÇÃO DO "CAIXOTE" (Com imagem segura)
  const handleDigCrate = () => {
    setIsDigging(true);
    setDugAlbum(null);
    setTimeout(() => {
      setDugAlbum({
        name: "Madvillainy",
        artists: [{ name: "Madvillain" }],
        images: [{ url: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4b5?w=300&q=80" }],
        release_date: "2004",
      });
      setIsDigging(false);
    }, 1500);
  };

  // DADOS DA COMUNIDADE (Com imagens seguras do Unsplash)
  const communityFeed = [
    {
      id: 101,
      user: "@marina_sounds",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      album: "In Rainbows",
      artist: "Radiohead",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80",
      rating: 5,
      text: "Dez anos depois e este álbum continua a soar como se tivesse vindo do futuro. A percussão em 'Weird Fishes' é a prova de que a perfeição existe. Escuta obrigatória para quem gosta de texturas analógicas.",
      likes: 342,
      comments: 45,
      time: "Há 2 horas",
      mockData: { name: "In Rainbows", artists: [{ name: "Radiohead" }], images: [{ url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&q=80" }] }
    },
    {
      id: 102,
      user: "@joaovux",
      avatar: "https://i.pravatar.cc/150?img=11",
      album: "Discovery",
      artist: "Daft Punk",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80",
      rating: 4.5,
      text: "A transição de 'Aerodynamic' para 'Digital Love' mudou a minha química cerebral. O ápice do French Touch.",
      likes: 128,
      comments: 12,
      time: "Há 5 horas",
      mockData: { name: "Discovery", artists: [{ name: "Daft Punk" }], images: [{ url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80" }] }
    }
  ];

  return (
    <main className="w-full min-h-screen pb-24 pt-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
        
        {/* HEADER DO FEED */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-heading font-black text-white tracking-tight">Feed Global</h1>
            <p className="text-secondary text-sm mt-1">Descubra o que a comunidade está a ouvir hoje.</p>
          </div>
          <div className="flex bg-surface border border-white/10 p-1 rounded-full w-fit">
            <button onClick={() => setActiveTab('following')} className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'following' ? 'bg-white/10 text-white' : 'text-secondary hover:text-white'}`}>A Seguir</button>
            <button onClick={() => setActiveTab('global')} className={`px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg ${activeTab === 'global' ? 'bg-accent text-white' : 'text-secondary hover:text-white'}`}>Global</button>
          </div>
        </header>

        {/* LAYOUT EM GRELHA */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* ================= COLUNA PRINCIPAL ================= */}
          <div className="xl:col-span-2 flex flex-col gap-8">
            
            {/* SPOTIFY RADAR */}
            <section className="bg-gradient-to-r from-surface to-indigo-950/30 border border-white/5 rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none"><Sparkles size={100} /></div>
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <Disc3 className="text-accent animate-[spin_3s_linear_infinite]" size={20} />
                <h2 className="text-lg font-heading font-black text-white">Radar Spotify: Lançamentos</h2>
              </div>

              {isLoadingAPI ? (
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {[1, 2, 3, 4].map((skeleton) => (
                    <div key={skeleton} className="min-w-[140px] flex flex-col gap-3 animate-pulse">
                      <div className="w-full aspect-square bg-white/5 rounded-2xl" />
                      <div className="w-3/4 h-4 bg-white/5 rounded" />
                      <div className="w-1/2 h-3 bg-white/5 rounded" />
                    </div>
                  ))}
                </div>
              ) : spotifyReleases.length > 0 ? (
                <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide snap-x">
                  {spotifyReleases.map((album) => (
                    <div key={album.id} onClick={() => onSelectAlbum(album)} className="min-w-[140px] max-w-[140px] flex flex-col gap-3 snap-start group cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl aspect-square shadow-lg border border-white/10 group-hover:border-accent/50 transition-colors">
                        {/* Imagens Reais do Spotify! */}
                        <img src={album.images[0]?.url || album.images[1]?.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={album.name} />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><PlayCircle size={32} className="text-white" /></div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white truncate group-hover:text-accent transition-colors">{album.name}</h3>
                        <p className="text-[10px] text-secondary truncate">{album.artists[0]?.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-secondary">Nenhum lançamento encontrado no momento.</p>
              )}
            </section>

            {/* BOUNTY BOARD */}
            <section className="bg-gradient-to-br from-amber-950/40 to-surface border border-amber-500/30 rounded-[2rem] p-6 shadow-xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-amber-500">
                  <Target size={20} />
                  <h2 className="text-lg font-heading font-black">Bounty Board</h2>
                </div>
                <span className="text-[10px] bg-amber-500/20 text-amber-400 font-bold px-2 py-1 rounded-full uppercase tracking-wider">Missão Semanal</span>
              </div>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&q=80" className="w-16 h-16 rounded-xl shadow-lg border border-amber-500/20 object-cover" alt="Brat" />
                <div className="flex-1">
                  <h3 className="text-white font-bold">Procura-se: Resenhas Críticas</h3>
                  <p className="text-xs text-secondary mt-1">A comunidade precisa de mais 12 resenhas detalhadas para estabelecer o consenso de 'BRAT'.</p>
                </div>
                <button className="bg-amber-500 text-black hover:bg-amber-400 px-4 py-2 rounded-full font-black text-xs transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  REIVINDICAR XP
                </button>
              </div>
            </section>

            {/* FEED DA COMUNIDADE */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="text-orange-500" size={20} />
                <h2 className="text-lg font-heading font-black text-white">Em Alta na Comunidade</h2>
              </div>
              {communityFeed.map((review) => (
                <article key={review.id} className="bg-surface border border-white/5 rounded-[2rem] p-6 shadow-xl hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3 cursor-pointer">
                      <img src={review.avatar} className="w-12 h-12 rounded-full border border-white/10 object-cover" alt="Avatar"/>
                      <div>
                        <h4 className="text-base font-bold text-white hover:text-accent transition-colors">{review.user}</h4>
                        <span className="text-xs text-secondary">{review.time}</span>
                      </div>
                    </div>
                    <button className="text-secondary hover:text-white p-2"><MoreHorizontal size={20} /></button>
                  </div>
                  <div onClick={() => onSelectAlbum(review.mockData)} className="bg-black/40 border border-white/5 rounded-2xl p-4 flex gap-4 cursor-pointer hover:bg-black/60 hover:border-white/20 transition-all mb-4 group">
                    <img src={review.cover} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shadow-lg object-cover group-hover:scale-105 transition-transform duration-300" alt={review.album} />
                    <div className="flex flex-col justify-center flex-1 overflow-hidden">
                      <h3 className="text-lg sm:text-xl font-black text-white truncate group-hover:text-accent transition-colors">{review.album}</h3>
                      <p className="text-sm text-secondary truncate">{review.artist}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex text-yellow-500">
                          {[...Array(Math.floor(review.rating))].map((_, i) => <Star key={i} size={14} fill="currentColor"/>)}
                          {review.rating % 1 !== 0 && <Star size={14} fill="currentColor" className="opacity-50"/>}
                        </div>
                        <span className="text-xs font-bold text-white bg-white/10 px-2 py-0.5 rounded-md">{review.rating}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed mb-6 font-body">{review.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-6">
                      <button className="flex items-center gap-2 text-secondary hover:text-red-400 transition-colors font-bold text-sm"><Heart size={18} /> {review.likes}</button>
                      <button className="flex items-center gap-2 text-secondary hover:text-blue-400 transition-colors font-bold text-sm"><MessageSquare size={18} /> {review.comments}</button>
                    </div>
                    <button className="text-secondary hover:text-white transition-colors"><Share2 size={18} /></button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ================= COLUNA LATERAL (WIDGETS) ================= */}
          <aside className="flex flex-col gap-6">
            
            {/* JUKEBOX */}
            <div className="bg-gradient-to-b from-indigo-900/50 to-surface border border-indigo-500/30 p-6 rounded-[2rem] shadow-xl text-center relative overflow-hidden">
              <div className="flex items-center justify-center gap-2 text-indigo-300 text-xs font-black uppercase tracking-widest mb-4">
                <Coffee size={16} /> Manhã em Belford Roxo
              </div>
              <div className="w-24 h-24 mx-auto bg-black rounded-full border-4 border-indigo-500/50 flex items-center justify-center relative mb-4">
                 <div className="w-full h-full rounded-full border border-indigo-400/20 absolute animate-[spin_4s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
                 <div className="w-8 h-8 bg-indigo-500/20 rounded-full" />
              </div>
              <h3 className="text-white font-black text-lg">A Jukebox da Cidade</h3>
              <p className="text-xs text-secondary mt-1 mb-4">Sintonizada com a aura matinal. Um toque de MPB e Neo-Soul.</p>
              <button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white py-3 rounded-xl font-bold text-sm transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                SINCRONIZAR VIBE
              </button>
            </div>

            {/* MINI WRAPPED */}
            <div className="bg-surface border border-white/5 p-6 rounded-[2rem] shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <BarChart className="text-green-400" size={20} />
                <h2 className="text-lg font-heading font-black text-white">Mini Wrapped</h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-black/40 p-3 rounded-xl flex justify-between items-center border border-white/5">
                  <span className="text-xs text-secondary font-bold">Tempo de Escuta</span>
                  <span className="text-white font-black">14.2 Horas</span>
                </div>
                <div className="bg-black/40 p-3 rounded-xl flex justify-between items-center border border-white/5">
                  <span className="text-xs text-secondary font-bold">Top Género</span>
                  <span className="text-green-400 font-black text-sm bg-green-500/10 px-2 py-1 rounded-md">Post-Punk</span>
                </div>
              </div>
            </div>

            {/* O CAIXOTE */}
            <div className="bg-surface border border-white/5 p-6 rounded-[2rem] shadow-xl relative group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-pink-500">
                  <Box size={20} />
                  <h2 className="text-lg font-heading font-black text-white">O Caixote</h2>
                </div>
              </div>
              <p className="text-xs text-secondary mb-4">Mergulhe os dedos no pó e encontre uma joia obscura aleatória.</p>
              
              {!dugAlbum ? (
                <button 
                  onClick={handleDigCrate}
                  disabled={isDigging}
                  className="w-full border-2 border-dashed border-pink-500/50 hover:border-pink-500 hover:bg-pink-500/10 text-pink-400 py-6 rounded-2xl font-black transition-all flex flex-col items-center justify-center gap-2"
                >
                  {isDigging ? <Loader className="animate-spin" size={24} /> : <Box size={24} />}
                  {isDigging ? "A GARIMPAR..." : "GARIMPAR VINIL"}
                </button>
              ) : (
                <div className="animate-in zoom-in duration-300 flex flex-col items-center text-center">
                  <img 
                    src={dugAlbum.images[0].url} 
                    onClick={() => onSelectAlbum(dugAlbum)}
                    className="w-32 h-32 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.3)] mb-3 cursor-pointer hover:scale-105 transition-transform object-cover" 
                    alt="Dug Album"
                  />
                  <h3 className="text-white font-black text-sm">{dugAlbum.name}</h3>
                  <p className="text-xs text-secondary mb-3">{dugAlbum.artists[0].name}</p>
                  <button onClick={() => setDugAlbum(null)} className="text-[10px] text-secondary hover:text-white underline">Garimpar outro</button>
                </div>
              )}
            </div>

            {/* AFINIDADE */}
            <div className="bg-gradient-to-br from-fuchsia-950/30 to-surface border border-fuchsia-500/30 p-6 rounded-[2rem] shadow-xl">
               <div className="flex items-center gap-2 mb-4">
                 <UserCheck className="text-fuchsia-400" size={20} />
                 <h2 className="text-lg font-heading font-black text-white">Sincronia Perfeita</h2>
               </div>
               <div className="flex items-center gap-4 bg-black/40 p-3 rounded-xl border border-white/5">
                 <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80" className="w-12 h-12 rounded-full border-2 border-fuchsia-500 object-cover" alt="User" />
                 <div className="flex-1">
                   <h3 className="text-white font-bold text-sm">@vinyl_head</h3>
                   <p className="text-xs text-secondary">Afinidade Sonora: <span className="text-fuchsia-400 font-black">94%</span></p>
                 </div>
               </div>
            </div>

            {/* TASTEMAKER */}
            <div className="bg-surface border border-white/5 p-6 rounded-[2rem] shadow-xl">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2">
                   <Crown className="text-yellow-500" size={20} />
                   <h2 className="text-lg font-heading font-black text-white">Tastemaker</h2>
                 </div>
               </div>
               <p className="text-xs text-white/80 italic mb-3 border-l-2 border-yellow-500 pl-3">
                 "A produção neste projeto redefiniu o que consideramos Pop Eletrónico em 2024."
               </p>
               <div className="flex items-center gap-2">
                 <img src="https://i.pravatar.cc/150?img=5" className="w-6 h-6 rounded-full" alt="Curator" />
                 <span className="text-xs font-bold text-secondary">@curator_x</span>
               </div>
            </div>

            {/* CÁPSULA DO TEMPO */}
            <div className="bg-surface border border-white/5 p-6 rounded-[2rem] shadow-xl opacity-80 hover:opacity-100 transition-opacity">
               <div className="flex items-center gap-2 mb-4">
                 <History className="text-blue-400" size={20} />
                 <h2 className="text-lg font-heading font-black text-white">Cápsula do Tempo</h2>
               </div>
               <div className="flex gap-3 items-center">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&q=80" className="w-12 h-12 rounded-md object-cover" alt="Time Capsule" />
                 <div>
                   <p className="text-xs text-secondary">Exatamente há 1 ano,</p>
                   <p className="text-sm font-bold text-white">Você deu 5★ a isto.</p>
                 </div>
               </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}