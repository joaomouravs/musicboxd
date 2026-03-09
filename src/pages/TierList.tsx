import { useState } from 'react';
import { 
  Trophy, Skull, Camera, Activity, Wand2, Users, 
  EyeOff, Crosshair, Sparkles, Download, ShieldAlert,
  Flame, CheckCircle2, Disc3, Move, LayoutGrid
} from 'lucide-react';

// Tipagem para os nossos álbuns
interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  hotTake?: boolean; // Para o Scanner de Polêmicas
}

export function TierList() {
  // 1. Estados de Navegação (Os 4 Modos)
  const [activeMode, setActiveMode] = useState<'classic' | 'blind' | 'matrix' | 'coop'>('classic');
  
  // 2. Estados dos "Poderes" (Modo Clássico)
  const [clashActive, setClashActive] = useState(false);
  const [showXRay, setShowXRay] = useState(false);
  const [posterMode, setPosterMode] = useState(false);

  // 3. O nosso "Cesto" de álbuns não classificados
  const [pool, setPool] = useState<Album[]>([
    { id: '1', title: "Discovery", artist: "Daft Punk", cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg", hotTake: false },
    { id: '2', title: "IGOR", artist: "Tyler, The Creator", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg", hotTake: false },
    { id: '3', title: "Blonde", artist: "Frank Ocean", cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg", hotTake: false },
    { id: '4', title: "St. Anger", artist: "Metallica", cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Metallica_-_St._Anger_cover.jpg", hotTake: true }, // Polêmico!
    { id: '5', title: "DAMN.", artist: "Kendrick Lamar", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png", hotTake: false }
  ]);

  // 4. As Linhas da Tier List (Incluindo o Cemitério no F)
  const [tiers, setTiers] = useState<{ [key: string]: Album[] }>({
    'S': [], 'A': [], 'B': [], 'C': [], 'F': []
  });

  // Drag and Drop Logic
  const handleDragStart = (e: React.DragEvent, albumId: string, sourceTier: string) => {
    e.dataTransfer.setData('albumId', albumId);
    e.dataTransfer.setData('sourceTier', sourceTier);
  };

  const handleDrop = (e: React.DragEvent, targetTier: string) => {
    e.preventDefault();
    const albumId = e.dataTransfer.getData('albumId');
    const sourceTier = e.dataTransfer.getData('sourceTier');

    if (sourceTier === targetTier) return;

    // Encontrar o álbum
    let albumToMove: Album | undefined;
    if (sourceTier === 'pool') {
      albumToMove = pool.find(a => a.id === albumId);
      if (albumToMove) setPool(pool.filter(a => a.id !== albumId));
    } else {
      albumToMove = tiers[sourceTier].find(a => a.id === albumId);
      if (albumToMove) {
        setTiers({ ...tiers, [sourceTier]: tiers[sourceTier].filter(a => a.id !== albumId) });
      }
    }

    // Adicionar ao novo tier
    if (albumToMove) {
      if (targetTier === 'pool') {
        setPool([...pool, albumToMove]);
      } else {
        setTiers({ ...tiers, [targetTier]: [...tiers[targetTier], albumToMove] });
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  // Simulação do Gerador de Discografia
  const generateDiscography = () => {
    setPool([
      { id: 'k1', title: "The College Dropout", artist: "Kanye West", cover: "https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg", hotTake: false },
      { id: 'k2', title: "Yeezus", artist: "Kanye West", cover: "https://upload.wikimedia.org/wikipedia/en/0/03/Yeezus_album_cover.png", hotTake: true },
      { id: 'k3', title: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", cover: "https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg", hotTake: false }
    ]);
    setTiers({ 'S': [], 'A': [], 'B': [], 'C': [], 'F': [] });
  };

  return (
    <main className="w-full min-h-screen pb-24 pt-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8">
        
        {/* CABEÇALHO E SELETOR DE MODOS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-6">
          <div>
            <h1 className="text-4xl font-heading font-black text-white tracking-tight flex items-center gap-3">
              <Trophy className="text-yellow-500" size={32} /> O Panteão
            </h1>
            <p className="text-secondary font-body mt-1">Sistematize o caos. Classifique a sua história musical.</p>
          </div>

          <div className="flex gap-2 bg-black/40 p-1.5 rounded-full border border-white/10 w-full md:w-auto overflow-x-auto scrollbar-hide">
            <button onClick={() => setActiveMode('classic')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeMode === 'classic' ? 'bg-accent text-white shadow-lg' : 'text-secondary hover:text-white hover:bg-white/5'}`}><LayoutGrid size={16}/> Clássico</button>
            <button onClick={() => setActiveMode('blind')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeMode === 'blind' ? 'bg-accent text-white shadow-lg' : 'text-secondary hover:text-white hover:bg-white/5'}`}><EyeOff size={16}/> Às Cegas</button>
            <button onClick={() => setActiveMode('matrix')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeMode === 'matrix' ? 'bg-accent text-white shadow-lg' : 'text-secondary hover:text-white hover:bg-white/5'}`}><Crosshair size={16}/> Matriz 2D</button>
            <button onClick={() => setActiveMode('coop')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeMode === 'coop' ? 'bg-accent text-white shadow-lg' : 'text-secondary hover:text-white hover:bg-white/5'}`}><Users size={16}/> Guerra Civil</button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODO CLÁSSICO: A TIER LIST PRINCIPAL COM OS SUPER PODERES                 */}
        {/* ========================================================================= */}
        {activeMode === 'classic' && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            
            {/* BARRA DE FERRAMENTAS (Os 4 Poderes) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button onClick={() => setClashActive(!clashActive)} className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${clashActive ? 'bg-red-900/20 border-red-500/50 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'bg-surface border-white/5 text-secondary hover:border-white/20'}`}>
                <Activity size={24} /> <span className="text-xs font-bold uppercase text-center">Scanner de Polêmicas</span>
              </button>
              <button onClick={generateDiscography} className="p-4 rounded-2xl bg-surface border border-white/5 text-secondary hover:text-blue-400 hover:border-blue-500/50 transition-all flex flex-col items-center justify-center gap-2 group">
                <Disc3 size={24} className="group-hover:animate-spin" /> <span className="text-xs font-bold uppercase text-center">Modo Discografia</span>
              </button>
              <button onClick={() => setShowXRay(true)} className="p-4 rounded-2xl bg-surface border border-white/5 text-secondary hover:text-purple-400 hover:border-purple-500/50 transition-all flex flex-col items-center justify-center gap-2">
                <Wand2 size={24} /> <span className="text-xs font-bold uppercase text-center">Raio-X Psicológico</span>
              </button>
              <button onClick={() => setPosterMode(true)} className="p-4 rounded-2xl bg-surface border border-white/5 text-secondary hover:text-green-400 hover:border-green-500/50 transition-all flex flex-col items-center justify-center gap-2">
                <Camera size={24} /> <span className="text-xs font-bold uppercase text-center">Exportar Poster</span>
              </button>
            </div>

            {/* A TIER LIST */}
            <div className={`flex flex-col rounded-3xl overflow-hidden border ${posterMode ? 'border-accent shadow-[0_0_50px_rgba(99,102,241,0.3)] ring-4 ring-accent/20' : 'border-white/10'}`}>
              
              {/* TIER S */}
              <div className="flex w-full min-h-[120px] bg-black/40 border-b border-white/5" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'S')}>
                <div className="w-24 md:w-32 bg-yellow-500/20 border-r border-yellow-500/30 flex items-center justify-center shrink-0 shadow-[inset_-10px_0_20px_rgba(234,179,8,0.1)]">
                  <span className="text-4xl font-black text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">S</span>
                </div>
                <div className="flex-1 p-4 flex flex-wrap gap-4 items-center">
                  {tiers['S'].map(album => (
                    <AlbumCard key={album.id} album={album} tier="S" clash={clashActive} onDragStart={handleDragStart} />
                  ))}
                </div>
              </div>

              {/* TIER A */}
              <div className="flex w-full min-h-[120px] bg-black/40 border-b border-white/5" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'A')}>
                <div className="w-24 md:w-32 bg-red-500/20 border-r border-red-500/30 flex items-center justify-center shrink-0">
                  <span className="text-4xl font-black text-red-500">A</span>
                </div>
                <div className="flex-1 p-4 flex flex-wrap gap-4 items-center">{tiers['A'].map(album => <AlbumCard key={album.id} album={album} tier="A" clash={clashActive} onDragStart={handleDragStart} />)}</div>
              </div>

              {/* TIER B */}
              <div className="flex w-full min-h-[120px] bg-black/40 border-b border-white/5" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'B')}>
                <div className="w-24 md:w-32 bg-orange-500/20 border-r border-orange-500/30 flex items-center justify-center shrink-0">
                  <span className="text-4xl font-black text-orange-500">B</span>
                </div>
                <div className="flex-1 p-4 flex flex-wrap gap-4 items-center">{tiers['B'].map(album => <AlbumCard key={album.id} album={album} tier="B" clash={clashActive} onDragStart={handleDragStart} />)}</div>
              </div>

              {/* TIER C */}
              <div className="flex w-full min-h-[120px] bg-black/40 border-b border-white/5" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'C')}>
                <div className="w-24 md:w-32 bg-green-500/20 border-r border-green-500/30 flex items-center justify-center shrink-0">
                  <span className="text-4xl font-black text-green-500">C</span>
                </div>
                <div className="flex-1 p-4 flex flex-wrap gap-4 items-center">{tiers['C'].map(album => <AlbumCard key={album.id} album={album} tier="C" clash={clashActive} onDragStart={handleDragStart} />)}</div>
              </div>

              {/* TIER F (O CEMITÉRIO) */}
              <div className="flex w-full min-h-[120px] bg-[#0a0a0a] relative overflow-hidden group" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'F')}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 pointer-events-none" />
                <div className="w-24 md:w-32 bg-neutral-900 border-r border-neutral-800 flex flex-col items-center justify-center shrink-0 z-10">
                  <Skull className="text-neutral-600 mb-1" size={24} />
                  <span className="text-xl font-black text-neutral-600">LIXO</span>
                </div>
                <div className="flex-1 p-4 flex flex-wrap gap-4 items-center z-10">
                  {tiers['F'].map(album => (
                    <div key={album.id} className="relative group cursor-grab active:cursor-grabbing grayscale contrast-125 brightness-50 sepia-[.3] hover:grayscale-0 transition-all duration-500" draggable onDragStart={(e) => handleDragStart(e, album.id, 'F')}>
                      <img src={album.cover} className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-2xl border-2 border-neutral-800" alt={album.title} />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"><Skull className="text-white drop-shadow-lg" size={32}/></div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* O CESTO DE ÁLBUNS (Drag Source) */}
            <div className="bg-surface/50 border border-white/10 rounded-3xl p-6 md:p-8" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'pool')}>
              <h3 className="font-heading font-bold text-secondary mb-4 flex items-center gap-2"><Move size={18}/> Arraste os álbuns para classificar</h3>
              <div className="flex flex-wrap gap-4 min-h-[100px] items-center">
                {pool.length === 0 ? (
                  <span className="text-secondary/50 italic w-full text-center">O cesto está vazio.</span>
                ) : (
                  pool.map(album => <AlbumCard key={album.id} album={album} tier="pool" clash={false} onDragStart={handleDragStart} />)
                )}
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* OUTROS MODOS (Visuais Demonstrativos)                                     */}
        {/* ========================================================================= */}
        
        {/* RANKING ÀS CEGAS */}
        {activeMode === 'blind' && (
          <div className="flex flex-col items-center justify-center gap-8 py-12 animate-in zoom-in-95 duration-500">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-heading font-black text-white">Ranking às Cegas</h2>
              <p className="text-secondary">Onde você coloca este álbum (1 a 10)? Não pode mudar depois!</p>
            </div>
            
            <div className="relative w-64 h-64 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.4)] border-4 border-accent overflow-hidden animate-pulse">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg" className="w-full h-full object-cover" alt="Mystery" />
              <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-md p-3 text-center"><span className="font-bold text-white">Random Access Memories</span></div>
            </div>

            <div className="grid grid-cols-5 gap-4 w-full max-w-2xl mt-8">
              {[1,2,3,4,5,6,7,8,9,10].map(num => (
                <button key={num} className="bg-surface border border-white/10 hover:border-accent hover:bg-accent/20 text-white font-black text-2xl h-16 rounded-xl transition-all shadow-lg flex items-center justify-center">
                  {num}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MATRIZ 2D */}
        {activeMode === 'matrix' && (
          <div className="flex flex-col items-center gap-6 py-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Matriz de Alinhamento</h2>
            <div className="relative w-full max-w-3xl aspect-square border-2 border-white/10 bg-surface/30 rounded-3xl overflow-hidden">
              {/* Eixos */}
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-white/20 -translate-y-1/2" />
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20 -translate-x-1/2" />
              
              {/* Labels */}
              <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-secondary uppercase bg-background px-3 py-1 rounded-full">Feliz / Eufórico</span>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold text-secondary uppercase bg-background px-3 py-1 rounded-full">Triste / Melancólico</span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-secondary uppercase bg-background px-3 py-1 rounded-full origin-center">Experimental</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-xs font-bold text-secondary uppercase bg-background px-3 py-1 rounded-full origin-center">Pop Comercial</span>

              {/* Álbuns Posicionados Manualmente (Simulação) */}
              <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" className="absolute top-[20%] right-[20%] w-16 h-16 rounded-lg shadow-2xl border-2 border-accent hover:scale-125 transition-transform cursor-pointer" alt="Discovery" />
              <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg" className="absolute bottom-[30%] left-[30%] w-16 h-16 rounded-lg shadow-2xl border-2 border-pink-500 hover:scale-125 transition-transform cursor-pointer" alt="Igor" />
            </div>
          </div>
        )}

        {/* GUERRA CIVIL (CO-OP) */}
        {activeMode === 'coop' && (
          <div className="flex flex-col items-center justify-center gap-6 py-20 text-center animate-in fade-in duration-500">
            <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center border-4 border-red-500/50 mb-4 animate-pulse">
              <ShieldAlert className="text-red-500" size={48} />
            </div>
            <h2 className="text-3xl font-heading font-black text-white">Guerra Civil (Multiplayer)</h2>
            <p className="text-secondary max-w-md">Convide um amigo para construírem uma Tier List em tempo real. Se discordarem num álbum, a capa será <strong>partida ao meio</strong>.</p>
            <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center gap-3 mt-4">
              <Users size={20} /> Gerar Link de Convite
            </button>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* MODAL: RAIO-X PSICOLÓGICO                                                 */}
      {/* ========================================================================= */}
      {showXRay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-surface border border-purple-500/30 rounded-3xl p-8 max-w-md w-full relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_50px_rgba(168,85,247,0.2)]">
            <Wand2 className="absolute -top-10 -right-10 w-48 h-48 text-purple-500/10 rotate-12" />
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500 mb-6 z-10"><Sparkles className="text-purple-400" size={32} /></div>
            <h2 className="text-2xl font-heading font-black text-white mb-2 z-10">O seu Diagnóstico</h2>
            <p className="text-sm text-secondary mb-6 z-10">Analisámos os álbuns que colocou no topo (Nível S).</p>
            <div className="bg-black/40 border border-white/5 rounded-xl p-5 w-full z-10 mb-6">
              <p className="text-purple-300 font-bold mb-2 text-lg">"Nostalgia Eletrónica Crónica"</p>
              <p className="text-sm text-primary">Você gravita em torno de batidas sintéticas perfeitas e coros vocais processados. A sua mente prefere o estúdio ao som ao vivo.</p>
            </div>
            <button onClick={() => setShowXRay(false)} className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold w-full z-10 hover:bg-purple-500 transition-colors">Aceitar a Verdade</button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: EXPORTAÇÃO DE POSTER                                               */}
      {/* ========================================================================= */}
      {posterMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in zoom-in-95">
           <div className="flex flex-col items-center gap-6 max-w-lg w-full">
             <div className="w-full aspect-[4/5] bg-gradient-to-br from-indigo-900 to-black rounded-2xl border-4 border-white/10 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                {/* Poster Content */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 blur-[100px] rounded-full" />
                <div className="z-10">
                  <h3 className="font-heading font-black text-4xl text-white tracking-tighter leading-none mb-1">MY TOP TIER</h3>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs">@lucas_dev • 2024</p>
                </div>
                <div className="z-10 grid grid-cols-3 gap-2 mt-8">
                   <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" className="w-full aspect-square rounded shadow-lg" />
                   <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" className="w-full aspect-square rounded shadow-lg" />
                   <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg" className="w-full aspect-square rounded shadow-lg" />
                </div>
                <div className="z-10 text-center mt-auto pt-8 border-t border-white/20">
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.3em]">Created with MusicBoxd</p>
                </div>
             </div>
             <div className="flex gap-4 w-full">
               <button onClick={() => setPosterMode(false)} className="flex-1 bg-surface border border-white/10 text-white py-3 rounded-xl font-bold hover:bg-white/5">Fechar</button>
               <button className="flex-[2] bg-accent text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.5)]"><Download size={18}/> Salvar Imagem</button>
             </div>
           </div>
        </div>
      )}

    </main>
  );
}

// Componente Auxiliar: O Card do Álbum (Com física e scanner de polêmicas embutido)
function AlbumCard({ album, tier, clash, onDragStart }: { album: Album, tier: string, clash: boolean, onDragStart: (e: React.DragEvent, id: string, tier: string) => void }) {
  // A Lógica do Scanner: Se o álbum for "Hot Take" e estiver no Tier S ou A, ele brilha a vermelho.
  const isControversial = clash && album.hotTake && (tier === 'S' || tier === 'A');
  const isConsensus = clash && !album.hotTake && (tier === 'S' || tier === 'A');

  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, album.id, tier)}
      className={`relative group cursor-grab active:cursor-grabbing w-20 h-20 md:w-24 md:h-24 rounded-lg perspective-[1000px] z-10 transition-all duration-300
        ${isControversial ? 'shadow-[0_0_30px_rgba(239,68,68,0.8)] scale-110 z-20' : ''}
        ${isConsensus ? 'shadow-[0_0_30px_rgba(34,197,94,0.5)]' : ''}
      `}
    >
      <div className={`w-full h-full rounded-lg shadow-xl transition-transform duration-500 transform-gpu group-hover:-translate-y-4 group-hover:rotate-x-12 group-hover:rotate-z-2 overflow-hidden border-2 
        ${isControversial ? 'border-red-500' : isConsensus ? 'border-green-500' : 'border-white/10'}`}>
        <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
      </div>
      
      {/* Ícone de Polêmica flutuante */}
      {isControversial && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white p-1 rounded-full shadow-lg animate-bounce">
          <Flame size={14} />
        </div>
      )}
      {isConsensus && (
        <div className="absolute -top-3 -right-3 bg-green-500 text-white p-1 rounded-full shadow-lg">
          <CheckCircle2 size={14} />
        </div>
      )}
    </div>
  );
}