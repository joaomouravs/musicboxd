import { useState } from 'react';
import { 
  Swords, Crown, Skull, Wallet, Dices, PlayCircle, Trophy, 
  TrendingUp, Crosshair, Music, Flame, Lock, ChevronRight,
  CheckCircle2, XCircle
} from 'lucide-react';

interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  price?: number; 
  odds?: number;  
}

export function Battle() {
  const [coins, setCoins] = useState(1500);
  const [activeTab, setActiveTab] = useState<'arena' | 'throne' | 'tournament' | 'guillotine' | 'fantasy'>('arena');
  const [isBlind, setIsBlind] = useState(false);
  const [rouletteRule, setRouletteRule] = useState<string | null>(null);
  const [arenaVoted, setArenaVoted] = useState<string | null>(null);
  
  const rules = ["Qual escolheria para uma viagem noturna?", "Qual tem a melhor linha de baixo?", "Qual tem a pior capa, mas o melhor som?", "Qual o faria chorar mais rápido?"];

  const spinRoulette = () => {
    setRouletteRule("A girar...");
    setTimeout(() => setRouletteRule(rules[Math.floor(Math.random() * rules.length)]), 800);
  };

  const [betAmount] = useState(100);
  const [betPlaced, setBetPlaced] = useState<string | null>(null);

  const handleBet = (target: string) => {
    if (coins >= betAmount) {
      setCoins(coins - betAmount);
      setBetPlaced(target);
    }
  };

  const [eliminated] = useState<string[]>(['g2', 'g5']); 
  const [userGuillotineVote, setUserGuillotineVote] = useState<string | null>(null);

  const budget = 100;
  const [fantasyTeam, setFantasyTeam] = useState<Album[]>([]);
  const currentSpent = fantasyTeam.reduce((acc, curr) => acc + (curr.price || 0), 0);

  const toggleFantasyDraft = (album: Album) => {
    if (fantasyTeam.find(a => a.id === album.id)) {
      setFantasyTeam(fantasyTeam.filter(a => a.id !== album.id));
    } else if (currentSpent + (album.price || 0) <= budget && fantasyTeam.length < 5) {
      setFantasyTeam([...fantasyTeam, album]);
    }
  };

  const db: Album[] = [
    { id: '1', title: "Discovery", artist: "Daft Punk", cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg", price: 40, odds: 1.2 },
    { id: '2', title: "IGOR", artist: "Tyler, The Creator", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg", price: 30, odds: 2.5 },
    { id: '3', title: "Blonde", artist: "Frank Ocean", cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg", price: 50, odds: 1.1 },
    { id: '4', title: "St. Anger", artist: "Metallica", cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Metallica_-_St._Anger_cover.jpg", price: 5, odds: 15.0 },
    { id: '5', title: "DAMN.", artist: "Kendrick Lamar", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png", price: 35, odds: 1.8 }
  ];

  return (
    <main className="w-full min-h-screen pb-24 pt-8 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8">
        <div className="flex flex-col gap-6 border-b border-white/5 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-heading font-black text-white tracking-tight flex items-center gap-3">
                <Swords className="text-accent" size={32} /> A Batalha
              </h1>
              <p className="text-secondary font-body mt-1">Defenda os seus clássicos. Destrua os seus rivais.</p>
            </div>
            <div className="bg-surface/80 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-3 shadow-lg">
              <div className="bg-yellow-500/20 p-2 rounded-full"><Wallet className="text-yellow-500" size={20}/></div>
              <div className="flex flex-col"><span className="text-[10px] uppercase font-bold text-secondary">A sua Carteira</span><span className="text-xl font-black text-white leading-none">{coins} <span className="text-sm text-yellow-500">FC</span></span></div>
            </div>
          </div>
          <div className="flex gap-2 bg-black/40 p-1.5 rounded-full border border-white/10 overflow-x-auto scrollbar-hide">
            {[
              { id: 'arena', label: 'Coliseu 1v1', icon: Crosshair },
              { id: 'throne', label: 'O Trono', icon: Crown },
              { id: 'tournament', label: 'Torneio', icon: Trophy },
              { id: 'guillotine', label: 'A Guilhotina', icon: Skull },
              { id: 'fantasy', label: 'Fantasy Draft', icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === tab.id ? 'bg-accent text-white shadow-lg' : 'text-secondary hover:text-white hover:bg-white/5'}`}>
                  <Icon size={16}/> {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {activeTab === 'arena' && (
          <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500">
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              <button onClick={spinRoulette} className="bg-gradient-to-r from-purple-900/40 to-surface border border-purple-500/30 text-purple-300 hover:text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg"><Dices size={20}/> {rouletteRule ? 'Girar Novamente' : 'Roleta do Contexto'}</button>
              <button onClick={() => { setIsBlind(!isBlind); setArenaVoted(null); }} className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg ${isBlind ? 'bg-accent text-white border-accent' : 'bg-surface border-white/10 text-secondary hover:text-white'}`}>{isBlind ? <Lock size={20}/> : <PlayCircle size={20}/>} {isBlind ? 'Modo Cego: ON' : 'Batalha Cega'}</button>
            </div>
            {rouletteRule && <div className="bg-purple-900/20 border border-purple-500/50 px-8 py-4 rounded-2xl animate-in zoom-in-95"><h3 className="text-xl font-heading font-black text-purple-300 italic text-center">"{rouletteRule}"</h3></div>}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl mt-4">
              <button onClick={() => setArenaVoted('A')} className={`relative group w-full md:w-80 aspect-square rounded-3xl overflow-hidden border-4 transition-all duration-500 ${arenaVoted === 'A' ? 'border-accent scale-105 shadow-[0_0_50px_rgba(99,102,241,0.5)]' : arenaVoted === 'B' ? 'border-transparent opacity-30 scale-95 grayscale' : 'border-white/10 hover:border-white/30 hover:scale-105'}`}>
                <img src={db[0].cover} className={`w-full h-full object-cover transition-all duration-700 ${isBlind && !arenaVoted ? 'blur-2xl scale-125 grayscale' : 'blur-0'}`} />
                {isBlind && !arenaVoted && <div className="absolute inset-0 flex items-center justify-center"><PlayCircle size={64} className="text-white/80 drop-shadow-xl hover:scale-110 transition-transform" /></div>}
                <div className={`absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 transition-opacity ${isBlind && !arenaVoted ? 'opacity-0' : 'opacity-100'}`}><h3 className="text-2xl font-black text-white">{db[0].title}</h3><p className="text-secondary">{db[0].artist}</p></div>
                {arenaVoted && <div className="absolute top-4 left-4 bg-accent text-white font-black text-xl px-4 py-2 rounded-xl shadow-lg">{arenaVoted === 'A' ? '68%' : '32%'}</div>}
              </button>
              <div className="w-16 h-16 shrink-0 rounded-full bg-surface border border-white/10 flex items-center justify-center font-heading font-black text-2xl text-secondary italic shadow-xl z-10">VS</div>
              <button onClick={() => setArenaVoted('B')} className={`relative group w-full md:w-80 aspect-square rounded-3xl overflow-hidden border-4 transition-all duration-500 ${arenaVoted === 'B' ? 'border-accent scale-105 shadow-[0_0_50px_rgba(99,102,241,0.5)]' : arenaVoted === 'A' ? 'border-transparent opacity-30 scale-95 grayscale' : 'border-white/10 hover:border-white/30 hover:scale-105'}`}>
                <img src={db[1].cover} className={`w-full h-full object-cover transition-all duration-700 ${isBlind && !arenaVoted ? 'blur-2xl scale-125 grayscale' : 'blur-0'}`} />
                {isBlind && !arenaVoted && <div className="absolute inset-0 flex items-center justify-center"><PlayCircle size={64} className="text-white/80 drop-shadow-xl hover:scale-110 transition-transform" /></div>}
                <div className={`absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 transition-opacity ${isBlind && !arenaVoted ? 'opacity-0' : 'opacity-100'}`}><h3 className="text-2xl font-black text-white">{db[1].title}</h3><p className="text-secondary">{db[1].artist}</p></div>
                {arenaVoted && <div className="absolute top-4 left-4 bg-accent text-white font-black text-xl px-4 py-2 rounded-xl shadow-lg">{arenaVoted === 'B' ? '68%' : '32%'}</div>}
              </button>
            </div>
            {arenaVoted && <button onClick={() => {setArenaVoted(null); setIsBlind(false);}} className="mt-8 bg-white text-black px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Próxima Batalha <ChevronRight className="inline" size={18}/></button>}
          </div>
        )}

        {activeTab === 'throne' && (
          <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500 max-w-3xl mx-auto w-full">
            <div className="w-full bg-gradient-to-b from-yellow-900/30 to-surface border-2 border-yellow-500/50 rounded-3xl p-6 md:p-10 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.15)]">
              <Crown className="absolute -top-10 -right-10 w-64 h-64 text-yellow-500/10 rotate-12" />
              <div className="bg-yellow-500 text-black px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 mb-6 z-10 animate-pulse"><Flame size={14}/> Rei Atual (Reinando há 4h)</div>
              <div className="relative w-48 h-48 rounded-xl shadow-[0_0_40px_rgba(234,179,8,0.4)] border-4 border-yellow-500 z-10 overflow-hidden mb-6"><img src={db[2].cover} className="w-full h-full object-cover" /></div>
              <h2 className="text-3xl font-black text-white z-10">{db[2].title}</h2><p className="text-secondary z-10 mb-8">{db[2].artist}</p>
              <div className="w-full bg-black/60 p-6 rounded-2xl border border-white/10 z-10 flex flex-col items-center">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Mercado de Apostas</h3>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <button onClick={() => handleBet('king')} disabled={betPlaced !== null} className={`flex-1 p-4 rounded-xl border flex flex-col items-center transition-all ${betPlaced === 'king' ? 'bg-yellow-500 text-black border-yellow-400' : 'bg-surface border-white/10 hover:border-yellow-500 hover:bg-yellow-500/10'}`}><span className="font-bold text-lg mb-1">Apostar no Rei</span><span className="text-xs opacity-80">Odds: x{db[2].odds} (Seguro)</span></button>
                  <button onClick={() => handleBet('challenger')} disabled={betPlaced !== null} className={`flex-1 p-4 rounded-xl border flex flex-col items-center transition-all ${betPlaced === 'challenger' ? 'bg-red-500 text-white border-red-400' : 'bg-surface border-white/10 hover:border-red-500 hover:bg-red-500/10'}`}><span className="font-bold text-lg mb-1">Apostar no Desafiante</span><span className="text-xs opacity-80">Odds: x{db[3].odds} (Arriscado)</span></button>
                </div>
                {betPlaced && <div className="mt-4 text-green-400 font-bold flex items-center gap-2"><CheckCircle2 size={18}/> Aposta de {betAmount} FC registada!</div>}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tournament' && (
          <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500 w-full overflow-x-auto pb-10">
            <h2 className="text-2xl font-black text-white mb-4 italic text-center w-full">🏆 A Copa do Mundo do Hip-Hop</h2>
            <div className="flex items-center justify-center gap-8 min-w-[800px]">
              <div className="flex flex-col gap-8">
                <div className="bg-surface border border-accent/50 p-2 rounded-lg flex items-center gap-3 w-48"><img src={db[1].cover} className="w-10 h-10 rounded" /><span className="text-sm font-bold text-white">IGOR</span></div>
                <div className="bg-surface/30 border border-white/5 p-2 rounded-lg flex items-center gap-3 w-48 opacity-50"><div className="w-10 h-10 rounded bg-black/50" /><span className="text-sm font-bold text-white">The Chronic</span></div>
              </div>
              <div className="flex flex-col gap-32">
                <div className="bg-surface border border-accent/50 p-2 rounded-lg flex items-center gap-3 w-48 relative"><div className="absolute -left-8 top-1/2 w-8 h-0.5 bg-accent/50" /><img src={db[1].cover} className="w-10 h-10 rounded" /><span className="text-sm font-bold text-white">IGOR</span></div>
              </div>
              <div className="flex flex-col items-center gap-4 px-8"><Trophy size={48} className="text-yellow-500" /><div className="w-64 h-64 border-4 border-dashed border-yellow-500/30 rounded-2xl flex flex-col items-center justify-center"><Crown size={64} className="mb-4 opacity-50 text-yellow-500" /></div></div>
            </div>
          </div>
        )}

        {activeTab === 'guillotine' && (
          <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 w-full">
              {[...db, { id: 'g2', title: "Album 6", artist: "Art", cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg" }, { id: 'g5', title: "Album 7", artist: "Art", cover: "https://upload.wikimedia.org/wikipedia/en/f/f8/The_Weeknd_-_Starboy.png" }].map(album => {
                const isDead = eliminated.includes(album.id);
                return (
                  <button key={album.id} disabled={isDead} onClick={() => setUserGuillotineVote(album.id)} className={`relative w-full aspect-square rounded-2xl overflow-hidden border-4 transition-all ${isDead ? 'border-neutral-900 grayscale opacity-60' : userGuillotineVote === album.id ? 'border-red-500 scale-105' : 'border-transparent hover:border-red-500/50'}`}>
                    <img src={album.cover} className="w-full h-full object-cover" />
                    {isDead && <div className="absolute inset-0 flex items-center justify-center bg-black/60"><XCircle size={64} className="text-red-500 opacity-80" /></div>}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'fantasy' && (
          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            <div className="bg-surface border border-white/5 rounded-3xl p-6 md:p-8 sticky top-20 z-20 shadow-2xl backdrop-blur-xl">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                 <div><h2 className="text-2xl font-black text-white flex items-center gap-2"><TrendingUp className="text-green-500"/> Draft da Gravadora</h2></div>
                 <div className="flex flex-col items-end"><span className="text-xs font-bold uppercase text-secondary tracking-widest">Orçamento</span><span className={`text-3xl font-black ${currentSpent > budget ? 'text-red-500' : 'text-green-400'}`}>${budget - currentSpent}</span></div>
               </div>
               <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden flex"><div className={`h-full transition-all duration-500 ${currentSpent > budget ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${Math.min((currentSpent / budget) * 100, 100)}%` }} /></div>
               <div className="grid grid-cols-5 gap-2 md:gap-4 mt-6">
                 {[0,1,2,3,4].map(i => <div key={i} className={`aspect-square rounded-xl border-2 flex items-center justify-center overflow-hidden transition-all ${fantasyTeam[i] ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : 'border-dashed border-white/20 bg-black/20'}`}>{fantasyTeam[i] ? <img src={fantasyTeam[i].cover} className="w-full h-full object-cover" /> : <Music className="text-white/20" />}</div>)}
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {db.map(album => {
                const isSelected = fantasyTeam.some(a => a.id === album.id);
                const canAfford = currentSpent + (album.price || 0) <= budget;
                return (
                  <button key={album.id} onClick={() => toggleFantasyDraft(album)} disabled={!isSelected && (!canAfford || fantasyTeam.length >= 5)} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${isSelected ? 'bg-green-900/20 border-green-500/50' : !canAfford && fantasyTeam.length < 5 ? 'opacity-40 border-red-500/20 cursor-not-allowed' : 'bg-surface border-white/5 hover:border-white/20'}`}>
                    <img src={album.cover} className="w-16 h-16 rounded-lg shadow-md border border-white/10" />
                    <div className="flex flex-col flex-1"><span className="font-bold text-white text-lg">{album.title}</span><span className="text-xs text-secondary">{album.artist}</span></div>
                    <div className={`font-black text-xl ${isSelected ? 'text-green-400' : 'text-white'}`}>${album.price}</div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}