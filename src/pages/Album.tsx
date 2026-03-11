import { 
  Star, Clock, Calendar, Disc3, Play, Heart, 
  MessageSquare, Share2, ArrowLeft, ExternalLink 
} from 'lucide-react';

interface AlbumProps {
  albumData: any;
  onNavigate: (route: string) => void;
}

export function Album({ albumData, onNavigate }: AlbumProps) {
  // Extração dos dados dinâmicos da API do Spotify (com fallback para caso algo falhe)
  const coverUrl = albumData?.images?.[0]?.url || "https://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead.kida.albumart.cover.jpg";
  const albumName = albumData?.name || "Kid A";
  const artistName = albumData?.artists?.[0]?.name || "Radiohead";
  const releaseYear = albumData?.release_date?.substring(0, 4) || "2000";
  const totalTracks = albumData?.total_tracks || 10;
  const spotifyLink = albumData?.external_urls?.spotify || "#";

  return (
    <div className="min-h-screen bg-background pb-24 font-body relative">
      
      {/* BACKGROUND DESFOCADO COM A CAPA DO ÁLBUM REAL */}
      <div className="absolute top-0 left-0 right-0 h-[80vh] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
        <img 
          src={coverUrl} 
          alt="Background Blur" 
          className="w-full h-full object-cover blur-[100px] opacity-30 scale-110" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8">
        
        {/* BOTÃO VOLTAR */}
        <button 
          onClick={() => onNavigate('explore')} 
          className="flex items-center gap-2 text-secondary hover:text-white font-bold transition-colors w-fit mb-8 bg-black/20 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md"
        >
          <ArrowLeft size={18} /> Voltar à Pesquisa
        </button>

        {/* HERO SECTION DO ÁLBUM */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-end mb-16 relative z-10">
          {/* Capa Gigante */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl backdrop-blur-sm z-20">
               <button className="bg-accent text-white p-4 rounded-full hover:scale-110 transition-transform">
                 <Play size={32} fill="currentColor" />
               </button>
            </div>
            <img 
              src={coverUrl} 
              alt={albumName} 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 object-cover relative z-10"
            />
          </div>

          {/* Informações do Álbum */}
          <div className="flex-1 text-center md:text-left flex flex-col gap-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-accent font-black tracking-widest uppercase text-xs">
              <Disc3 size={16} className="animate-[spin_4s_linear_infinite]" />
              <span>Álbum • {releaseYear}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-tight tracking-tighter">
              {albumName}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold text-secondary font-serif">
              {artistName}
            </h2>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-6">
              <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-black flex items-center gap-2 transition-transform active:scale-95">
                <Star size={20} fill="currentColor" /> AVALIAR
              </button>
              <button className="bg-surface hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-full font-bold flex items-center gap-2 transition-colors">
                <Heart size={20} /> Guardar
              </button>
              <a 
                href={spotifyLink} 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#1DB954]/20 hover:bg-[#1DB954]/30 border border-[#1DB954]/50 text-[#1DB954] px-6 py-4 rounded-full font-bold flex items-center gap-2 transition-colors"
              >
                <ExternalLink size={20} /> Spotify
              </a>
            </div>
          </div>
        </div>

        {/* ESTATÍSTICAS DA COMUNIDADE */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 relative z-10">
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Média Global</span>
            <div className="flex items-end gap-1"><span className="text-4xl font-black text-white">4.8</span><span className="text-secondary mb-1">/5</span></div>
            <div className="flex text-yellow-500"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor" className="opacity-50"/></div>
          </div>
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Resenhas</span>
            <span className="text-4xl font-black text-white">12.4k</span>
            <MessageSquare size={16} className="text-secondary mt-1" />
          </div>
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Faixas</span>
            <span className="text-4xl font-black text-white">{totalTracks}</span>
            <Disc3 size={16} className="text-secondary mt-1" />
          </div>
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-center">
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Duração Est.</span>
            <span className="text-4xl font-black text-white">45m</span>
            <Clock size={16} className="text-secondary mt-1" />
          </div>
        </div>

        {/* FEED DE RESENHAS (Mock visual para preencher a página) */}
        <div className="flex flex-col gap-6 relative z-10">
          <h3 className="text-2xl font-heading font-black text-white flex items-center gap-2">
            <MessageSquare className="text-accent" /> O que a comunidade diz
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Review 1 */}
            <div className="bg-surface border border-white/5 p-6 rounded-3xl flex flex-col gap-4 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-10 h-10 rounded-full" />
                  <div>
                    <h4 className="text-sm font-bold text-white">@astrogirl</h4>
                    <div className="flex text-yellow-500 mt-1"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/></div>
                  </div>
                </div>
                <span className="text-xs text-secondary">Há 2 horas</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-body">
                Isto não é apenas um álbum, é uma experiência religiosa. A forma como a produção envolve os teus ouvidos na faixa 3 é algo que eu nunca vou superar. Masterpiece.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <button className="flex items-center gap-1 text-xs text-secondary hover:text-red-400 font-bold"><Heart size={14}/> 1.2k</button>
                <button className="flex items-center gap-1 text-xs text-secondary hover:text-white font-bold"><MessageSquare size={14}/> 42</button>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-surface border border-white/5 p-6 rounded-3xl flex flex-col gap-4 hover:border-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-pink-500 flex items-center justify-center font-black">L</div>
                  <div>
                    <h4 className="text-sm font-bold text-white">@lucas_dev</h4>
                    <div className="flex text-yellow-500 mt-1"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} className="text-secondary opacity-50"/><Star size={10} className="text-secondary opacity-50"/></div>
                  </div>
                </div>
                <span className="text-xs text-secondary">Há 5 horas</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-body">
                A primeira metade é incrível, mas perde um bocado a energia no final. Ainda assim, uma produção técnica muito sólida.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <button className="flex items-center gap-1 text-xs text-secondary hover:text-red-400 font-bold"><Heart size={14}/> 340</button>
                <button className="flex items-center gap-1 text-xs text-secondary hover:text-white font-bold"><MessageSquare size={14}/> 12</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}