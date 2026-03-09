import { useState } from 'react';
import { 
  X, Star, Headphones, Car, CloudRain, Moon, Dumbbell, 
  Flame, History, Zap, Sliders, Timer, Smile, Layout, 
  Repeat, SkipForward, Check, Sparkles
} from 'lucide-react';

interface ReviewModalProps {
  onClose: () => void;
  isOpen?: boolean;
  albumTitle?: string;
}

export function ReviewModal({ onClose, isOpen, albumTitle }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isRevisiting, setIsRevisiting] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null);
  const [longevity, setLongevity] = useState(50);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [topTracks, setTopTracks] = useState<string[]>([]);
  const [selectedFrame, setSelectedFrame] = useState('minimalist');
  const [verdict, setVerdict] = useState<'repeat' | 'skip' | null>(null);
  const [emojis, setEmojis] = useState("");

  const vibes = [
    { id: 'headphones', icon: Headphones, label: 'Solo' },
    { id: 'car', icon: Car, label: 'Viagem' },
    { id: 'rain', icon: CloudRain, label: 'Chuva' },
    { id: 'night', icon: Moon, label: 'Madrugada' },
    { id: 'gym', icon: Dumbbell, label: 'Foco' },
  ];

  const tags = ["Atemporal", "Inovador", "Produção Sólida", "Letras Cruas", "Viciante"];
  const mockTracks = ["Giorgio by Moroder", "Instant Crush", "Get Lucky", "Touch", "Contact"];
  const isHotTake = rating > 0 && rating <= 2 && albumTitle === "Random Access Memories";

  if (isOpen === false) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        
        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-heading font-black text-white flex items-center gap-2"><Zap className="text-accent" size={20} /> Avaliar Disco</h2>
            <button onClick={() => setIsRevisiting(!isRevisiting)} className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${isRevisiting ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/5 text-secondary border border-white/10'}`}>
              <History size={12} /> {isRevisiting ? 'Reavaliação' : 'Primeira Audição'}
            </button>
          </div>
          <button onClick={onClose} className="p-2 text-secondary hover:text-white transition-colors"><X size={24} /></button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar flex flex-col gap-10">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onMouseEnter={() => setHoveredRating(star)} onMouseLeave={() => setHoveredRating(0)} onClick={() => setRating(star)} className="transition-transform active:scale-90">
                    <Star size={48} fill={(hoveredRating || rating) >= star ? "currentColor" : "none"} className={(hoveredRating || rating) >= star ? "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]" : "text-white/10"} />
                  </button>
                ))}
              </div>
              {isHotTake && <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-2 animate-bounce"><Flame size={12} /> Alerta de Hot Take! Defenda a sua opinião.</div>}
            </div>
            <input type="text" defaultValue={albumTitle} placeholder="Pesquisar álbum..." className="w-full max-w-md bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-center text-xl font-heading font-bold text-white focus:outline-none focus:border-accent transition-all mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-2"><Headphones size={12}/> Contexto da Audição</label>
              <div className="flex gap-2">
                {vibes.map((vibe) => {
                  const Icon = vibe.icon;
                  return (
                    <button key={vibe.id} onClick={() => setSelectedVibe(vibe.id)} className={`flex-1 aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transition-all border ${selectedVibe === vibe.id ? 'bg-accent/20 border-accent text-white shadow-lg' : 'bg-black/20 border-white/5 text-secondary hover:border-white/20'}`}>
                      <Icon size={20} /><span className="text-[9px] font-bold uppercase">{vibe.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-2"><Smile size={12}/> TL;DR em Emojis</label>
              <input type="text" maxLength={3} placeholder="Ex: 🤯🕺🔥" value={emojis} onChange={(e) => setEmojis(e.target.value)} className="w-full bg-black/40 border border-white/10 rounded-2xl px-4 py-4 text-3xl text-center focus:outline-none focus:border-accent transition-all" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-[2rem] p-6 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-2"><Sliders size={12}/> DNA Sónico</label>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5"><div className="flex justify-between text-[10px] font-bold text-primary"><span>Orgânico</span><span>Sintético</span></div><input type="range" className="w-full h-1 bg-black/40 rounded-full appearance-none accent-accent cursor-pointer" /></div>
                  <div className="flex flex-col gap-1.5"><div className="flex justify-between text-[10px] font-bold text-primary"><span>Calmo</span><span>Caótico</span></div><input type="range" className="w-full h-1 bg-black/40 rounded-full appearance-none accent-accent cursor-pointer" /></div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-2"><Timer size={12}/> Longevidade</label>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-[10px] font-bold text-primary"><span>Passageira</span><span>Clássico Eterno</span></div>
                  <input type="range" value={longevity} onChange={(e) => setLongevity(Number(e.target.value))} className="w-full h-1.5 bg-black/40 rounded-full appearance-none accent-purple-500 cursor-pointer" />
                  <p className="text-[10px] text-center text-purple-400 font-bold uppercase">{longevity > 70 ? 'Cápsula do Tempo Garantida' : 'Ouve enquanto é quente'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">O que define este álbum?</label>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <button key={tag} onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])} className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${selectedTags.includes(tag) ? 'bg-white text-black border-white' : 'bg-transparent text-secondary border-white/10 hover:border-white/30'}`}>{tag}</button>
              ))}
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">Pódio de Faixas (Top 3)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {mockTracks.map(track => (
                  <button key={track} onClick={() => setTopTracks(prev => prev.includes(track) ? prev.filter(t => t !== track) : prev.length < 3 ? [...prev, track] : prev)} className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium transition-all ${topTracks.includes(track) ? 'bg-accent/10 border-accent text-white' : 'bg-black/20 border-white/5 text-primary hover:border-white/20'}`}>
                    {track} {topTracks.includes(track) && <Check size={14} className="text-accent"/>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] flex items-center gap-2"><Layout size={12}/> Estética da Resenha</label>
              <div className="flex gap-2">
                {['minimalist', 'vaporwave', 'grunge'].map(frame => (
                  <button key={frame} onClick={() => setSelectedFrame(frame)} className={`flex-1 py-3 rounded-xl border text-[9px] font-black uppercase tracking-tighter transition-all ${selectedFrame === frame ? 'bg-white text-black border-white shadow-xl scale-105' : 'bg-black/20 border-white/5 text-secondary'}`}>{frame}</button>
                ))}
              </div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-3xl p-4 flex flex-col gap-3">
              <label className="text-[10px] font-black text-center text-secondary uppercase tracking-[0.2em]">Veredito Final</label>
              <div className="flex gap-2">
                <button onClick={() => setVerdict('repeat')} className={`flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all ${verdict === 'repeat' ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]' : 'bg-white/5 text-secondary hover:text-white'}`}><Repeat size={18} /> <span className="text-[9px] font-bold">REPEAT</span></button>
                <button onClick={() => setVerdict('skip')} className={`flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 transition-all ${verdict === 'skip' ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 'bg-white/5 text-secondary hover:text-white'}`}><SkipForward size={18} /> <span className="text-[9px] font-bold">SKIP</span></button>
              </div>
            </div>
          </div>

          <textarea placeholder="Escreva a sua resenha épica aqui..." className="w-full bg-white/5 border border-white/5 rounded-3xl p-6 text-primary font-body text-sm min-h-[150px] focus:outline-none focus:border-accent transition-all resize-none" />
        </div>
        
        <div className="p-8 border-t border-white/5 bg-black/20 flex justify-end gap-4 shrink-0">
          <button onClick={onClose} className="px-6 py-3 rounded-full text-secondary hover:text-white font-bold text-sm transition-colors">Cancelar</button>
          <button className="bg-accent hover:bg-accent/80 text-white px-10 py-3 rounded-full font-black text-sm transition-all shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center gap-2 group">
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform"/> PUBLICAR RESENHA
          </button>
        </div>
      </div>
    </div>
  );
}