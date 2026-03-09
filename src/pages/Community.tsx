import { useState } from 'react';
import { 
  Heart, MessageSquare, Share2, MoreHorizontal, Star, Flame, 
  TrendingUp, PlayCircle, Lock, Radio, LayoutGrid, HelpCircle, 
  Award, CloudRain, Headphones, Gavel, CheckCircle2, XCircle
} from 'lucide-react';

export function Community() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const [battleVotes, setBattleVotes] = useState<{ [key: number]: string }>({});
  const [blindTestGuess, setBlindTestGuess] = useState<{ [key: number]: string }>({});
  const [revealedTests, setRevealedTests] = useState<{ [key: number]: boolean }>({});
  const [tribunalVotes, setTribunalVotes] = useState<{ [key: number]: string }>({});

  const [posts] = useState([
    {
      id: 1,
      type: 'review',
      user: { name: "Marina Sounds", handle: "@marina_sounds", avatar: "https://i.pravatar.cc/150?u=12", badge: "Ouvinte Pioneira" },
      album: { title: "Blonde", artist: "Frank Ocean", cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" },
      rating: 5,
      vibes: [{ icon: CloudRain, label: "Chuva" }, { icon: Headphones, label: "Isolamento" }],
      content: "Ainda me lembro do dia em que isto saiu. A produção é irreal. Naquele momento exato onde a batida muda, o mundo para.",
      timestamp_mention: { time: "02:14", track: "Nights" },
      time: "2h atrás", likes: 342, comments: 12, isHotTake: false
    },
    {
      id: 2,
      type: 'battle',
      user: { name: "Lucas Dev", handle: "@lucas", avatar: "https://i.pravatar.cc/150?u=1" },
      title: "O Debate Definitivo do Daft Punk",
      optionA: { title: "Discovery", cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg", percent: 68 },
      optionB: { title: "RAM", cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg", percent: 32 },
      time: "3h atrás", likes: 128, comments: 45
    },
    {
      id: 3,
      type: 'live_react',
      user: { name: "Pedro Crítico", handle: "@pedro_critics", avatar: "https://i.pravatar.cc/150?u=8" },
      album: { title: "IGOR", artist: "Tyler, The Creator", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg" },
      reactions: [
        { track: "IGOR'S THEME", time: "00:45", text: "Esse sintetizador distorcido assustou-me, mas eu amei." },
        { track: "EARFQUAKE", time: "01:20", text: "O verso do Playboi Carti é ininteligível e perfeito." },
        { track: "NEW MAGIC WAND", time: "02:10", text: "Okay, isto é o pico absoluto da produção dele." }
      ],
      time: "4h atrás", likes: 89, comments: 5
    },
    {
      id: 4,
      type: 'tribunal',
      user: { name: "Carlos M.", handle: "@carlos_m", avatar: "https://i.pravatar.cc/150?u=5" },
      album: { title: "St. Anger", artist: "Metallica", cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Metallica_-_St._Anger_cover.jpg" },
      content: "Eu vou dizer a verdade que ninguém tem coragem: o som de caixa de bateria de metal é genial e capta a raiva crua da banda na época. 5 Estrelas.",
      time: "5h atrás", likes: 45, comments: 120, isHotTake: true
    },
    {
      id: 5,
      type: 'prediction',
      user: { name: "Ana Silva", handle: "@ana_indie", avatar: "https://i.pravatar.cc/150?u=9" },
      artist: "The Weeknd",
      releaseDate: "Sexta-feira",
      predictionText: "Aposto que vai voltar ao som sombrio do Trilogy. Nota prevista: 4.5★",
      time: "6h atrás", likes: 210, comments: 8
    },
    {
      id: 6,
      type: 'party',
      user: { name: "Clube do Vinil", handle: "@vinil_club", avatar: "https://i.pravatar.cc/150?u=15" },
      album: { title: "Dark Side of the Moon", artist: "Pink Floyd", cover: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" },
      status: "Ao Vivo Agora",
      listeners: 142,
      time: "Agora", likes: 0, comments: 0
    },
    {
      id: 7,
      type: 'chain',
      user: { name: "Beat Maker", handle: "@beats_101", avatar: "https://i.pravatar.cc/150?u=22" },
      content: "A evolução perfeita de um sample através das décadas:",
      chain: [
        { title: "Harder, Better...", artist: "Daft Punk (2001)", cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" },
        { title: "Cola Bottle Baby", artist: "Edwin Birdsong (1979)", cover: "https://upload.wikimedia.org/wikipedia/en/2/2d/Cola_Bottle_Baby_Edwin_Birdsong.jpg" }
      ],
      time: "8h atrás", likes: 512, comments: 23
    },
    {
      id: 8,
      type: 'moodboard',
      user: { name: "Sofia", handle: "@sofia_aesthetics", avatar: "https://i.pravatar.cc/150?u=31" },
      title: "Chorar no autocarro a olhar para a janela 🌧️🚌",
      covers: [
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        "https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg",
        "https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg",
        "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg"
      ],
      time: "10h atrás", likes: 890, comments: 41
    },
    {
      id: 9,
      type: 'blind_test',
      user: { name: "Trivia Master", handle: "@music_trivia", avatar: "https://i.pravatar.cc/150?u=40" },
      cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png",
      answer: "damn",
      clue: "Ganhador do Prêmio Pulitzer.",
      time: "12h atrás", likes: 300, comments: 85
    }
  ]);

  const filteredPosts = posts.filter(post => {
    if (activeFilter === 'hottakes') return post.isHotTake;
    return true;
  });

  return (
    <main className="w-full min-h-screen pb-20 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 gap-4">
            <h1 className="text-3xl font-heading font-black text-white tracking-tight">O Feed</h1>
            <div className="flex gap-2 bg-black/40 p-1 rounded-full border border-white/10 w-fit overflow-x-auto scrollbar-hide">
              <button onClick={() => setActiveFilter('all')} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeFilter === 'all' ? 'bg-white/10 text-white' : 'text-secondary hover:text-white'}`}>Para Você</button>
              <button onClick={() => setActiveFilter('following')} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeFilter === 'following' ? 'bg-white/10 text-white' : 'text-secondary hover:text-white'}`}>Seguindo</button>
              <button onClick={() => setActiveFilter('hottakes')} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${activeFilter === 'hottakes' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'text-orange-400 hover:bg-orange-500/10'}`}><Flame size={14}/> Hot Takes</button>
            </div>
          </div>

          <div className="flex flex-col gap-8 animate-in fade-in duration-500">
            {filteredPosts.map((post) => (
              <article key={post.id} className={`bg-surface border ${post.isHotTake ? 'border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : 'border-white/5'} rounded-3xl p-5 md:p-6 transition-colors shadow-lg`}>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3 cursor-pointer group">
                    <img src={post.user.avatar} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-transparent group-hover:border-accent transition-colors" alt={post.user.name} />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white group-hover:text-accent transition-colors">{post.user.name}</span>
                        {post.user.badge && <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 text-[9px] uppercase font-bold px-2 py-0.5 rounded flex items-center gap-1"><Award size={10}/> {post.user.badge}</span>}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-secondary">
                        <span>{post.user.handle}</span><span>•</span><span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-secondary hover:text-white transition-colors p-1"><MoreHorizontal size={20} /></button>
                </div>

                {post.type === 'review' && post.album && (
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                      <img src={post.album.cover} className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-md border border-white/10" alt="Capa" />
                      <div className="flex flex-col">
                        <span className="font-heading font-bold text-white text-lg">{post.album.title}</span>
                        <div className="flex text-accent mb-2">{[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor"/>)}</div>
                        
                        {post.vibes && (
                          <div className="flex gap-2 mb-2">
                            {post.vibes.map((v, i) => { const Icon = v.icon; return <span key={i} className="bg-blue-900/30 border border-blue-500/30 text-blue-300 text-[10px] px-2 py-1 rounded flex items-center gap-1"><Icon size={10}/> {v.label}</span> })}
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-primary font-body">{post.content}</p>
                    
                    {post.timestamp_mention && (
                      <button className="flex items-center gap-2 bg-black/40 border border-white/10 p-2 rounded-lg w-fit hover:border-accent/50 transition-colors group">
                        <div className="bg-accent text-white p-1.5 rounded-full group-hover:scale-110 transition-transform"><PlayCircle size={14} fill="currentColor" /></div>
                        <div className="flex flex-col text-left"><span className="text-[10px] text-accent font-bold uppercase">{post.timestamp_mention.time}</span><span className="text-xs text-white">{post.timestamp_mention.track}</span></div>
                      </button>
                    )}
                  </div>
                )}

                {post.type === 'battle' && post.optionA && post.optionB && (
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading font-black text-xl text-white text-center italic">"{post.title}"</h3>
                    <div className="flex items-center justify-center gap-4 md:gap-8">
                      <button onClick={() => setBattleVotes({...battleVotes, [post.id]: 'A'})} className={`relative group w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 transition-all ${battleVotes[post.id] === 'A' ? 'border-accent scale-105' : 'border-transparent hover:border-white/20'}`}>
                        <img src={post.optionA.cover} className="w-full h-full object-cover" />
                        {battleVotes[post.id] && <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-black text-3xl text-white">{post.optionA.percent}%</div>}
                      </button>
                      <span className="font-heading font-black text-2xl text-secondary italic">VS</span>
                      <button onClick={() => setBattleVotes({...battleVotes, [post.id]: 'B'})} className={`relative group w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 transition-all ${battleVotes[post.id] === 'B' ? 'border-accent scale-105' : 'border-transparent hover:border-white/20'}`}>
                        <img src={post.optionB.cover} className="w-full h-full object-cover" />
                        {battleVotes[post.id] && <div className="absolute inset-0 bg-black/60 flex items-center justify-center font-black text-3xl text-white">{post.optionB.percent}%</div>}
                      </button>
                    </div>
                  </div>
                )}

                {post.type === 'live_react' && post.reactions && post.album && (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                      <img src={post.album.cover} className="w-10 h-10 rounded shadow" />
                      <div><span className="text-xs text-accent font-bold uppercase tracking-wider">Sessão de Escuta</span><h3 className="text-sm font-bold text-white">{post.album.title}</h3></div>
                    </div>
                    <div className="flex flex-col gap-4 relative pl-4 mt-2">
                      <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-white/10" />
                      {post.reactions.map((react, i) => (
                        <div key={i} className="flex gap-4 relative z-10">
                          <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                          <div className="flex flex-col bg-black/30 p-3 rounded-xl border border-white/5 flex-1">
                            <div className="flex justify-between items-center mb-1"><span className="text-xs font-bold text-white">{react.track}</span><span className="text-[10px] text-secondary bg-white/5 px-2 py-0.5 rounded">{react.time}</span></div>
                            <p className="text-sm text-primary font-body">{react.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {post.type === 'tribunal' && post.album && (
                  <div className="flex flex-col gap-4 bg-[#1a1311] border border-orange-900/30 p-5 rounded-2xl relative overflow-hidden">
                    <Gavel className="absolute -right-4 -top-4 w-24 h-24 text-orange-500/5 rotate-12" />
                    <div className="flex items-center gap-2 text-orange-500 mb-2 z-10"><Gavel size={18}/><span className="text-xs font-bold uppercase tracking-widest">O Tribunal Musical</span></div>
                    <div className="flex gap-4 z-10">
                      <img src={post.album.cover} className="w-20 h-20 rounded shadow-xl border border-white/10 shrink-0" />
                      <p className="text-sm text-orange-100/90 font-body italic">"{post.content}"</p>
                    </div>
                    <div className="flex gap-4 mt-2 z-10">
                      <button onClick={() => setTribunalVotes({...tribunalVotes, [post.id]: 'absolved'})} className={`flex-1 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${tribunalVotes[post.id] === 'absolved' ? 'bg-green-600/20 text-green-400 border border-green-500/50' : 'bg-black/40 text-secondary hover:text-white border border-white/5'}`}><CheckCircle2 size={16}/> Absolvido</button>
                      <button onClick={() => setTribunalVotes({...tribunalVotes, [post.id]: 'guilty'})} className={`flex-1 py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all ${tribunalVotes[post.id] === 'guilty' ? 'bg-red-600/20 text-red-400 border border-red-500/50' : 'bg-black/40 text-secondary hover:text-white border border-white/5'}`}><XCircle size={16}/> Culpado</button>
                    </div>
                  </div>
                )}

                {post.type === 'prediction' && (
                  <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/10 mb-2"><Lock size={20} className="text-blue-400" /></div>
                    <h3 className="font-heading font-bold text-white">Cápsula Trancada: {post.artist}</h3>
                    <p className="text-xs text-secondary">Abre nesta {post.releaseDate}</p>
                    <div className="w-full bg-black/40 p-3 rounded-lg border border-white/5 mt-2 blur-sm select-none opacity-50 text-sm">Aposto que vai voltar ao som... 4.5 estrelas.</div>
                  </div>
                )}

                {post.type === 'party' && post.album && (
                  <div className="bg-gradient-to-r from-red-900/40 to-black border border-red-500/40 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group">
                    <Radio className="absolute -right-10 -bottom-10 w-48 h-48 text-red-500/10 group-hover:scale-110 transition-transform" />
                    <img src={post.album.cover} className="w-24 h-24 rounded-full border-4 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-[spin_10s_linear_infinite]" />
                    <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 flex-1">
                      <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full animate-pulse flex items-center gap-1 mb-2"><Radio size={10}/> {post.status}</span>
                      <h3 className="font-heading font-bold text-white text-xl">{post.album.title}</h3>
                      <p className="text-xs text-secondary mb-4">{post.listeners} ouvintes na sala</p>
                      <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full text-sm font-bold transition-colors w-full md:w-auto">Entrar na Sessão</button>
                    </div>
                  </div>
                )}

                {post.type === 'chain' && post.chain && (
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-primary font-body">{post.content}</p>
                    <div className="flex flex-col gap-2 relative pl-6 mt-2">
                      <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent to-purple-500" />
                      {post.chain.map((link, i) => (
                        <div key={i} className="flex items-center gap-4 bg-black/30 p-2 rounded-xl border border-white/5 w-fit relative z-10 hover:bg-white/5 transition-colors cursor-pointer">
                          <img src={link.cover} className="w-10 h-10 rounded shrink-0" />
                          <div className="flex flex-col"><span className="text-sm font-bold text-white">{link.title}</span><span className="text-[10px] text-secondary">{link.artist}</span></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {post.type === 'moodboard' && post.covers && (
                  <div className="flex flex-col gap-3">
                    <h3 className="font-heading font-bold text-white text-lg">{post.title}</h3>
                    <div className="grid grid-cols-2 gap-2 aspect-square max-w-sm rounded-xl overflow-hidden border border-white/10">
                      {post.covers.map((cover, i) => <img key={i} src={cover} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" />)}
                    </div>
                    <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2 rounded-lg text-sm font-bold mt-2 transition-colors flex items-center justify-center gap-2 max-w-sm"><LayoutGrid size={16}/> Roubar a Vibe</button>
                  </div>
                )}

                {post.type === 'blind_test' && (
                  <div className="flex flex-col gap-4 bg-surface/50 border border-white/10 p-5 rounded-2xl text-center items-center">
                    <div className="flex items-center gap-2 text-accent mb-2"><HelpCircle size={18}/><span className="text-xs font-bold uppercase tracking-widest">Adivinhe o Álbum</span></div>
                    <div className="w-48 h-48 rounded-xl overflow-hidden border border-white/20 relative">
                       <img src={post.cover} className={`w-full h-full object-cover transition-all duration-1000 ${revealedTests[post.id] ? 'blur-0' : 'blur-xl scale-125'}`} />
                       {!revealedTests[post.id] && <div className="absolute inset-0 flex items-center justify-center"><HelpCircle size={40} className="text-white/50 drop-shadow-xl" /></div>}
                    </div>
                    {!revealedTests[post.id] ? (
                      <div className="flex flex-col gap-3 w-full max-w-xs mt-2">
                        <span className="text-xs text-secondary italic">Dica: {post.clue}</span>
                        <div className="flex gap-2">
                          <input type="text" placeholder="Nome do álbum..." value={blindTestGuess[post.id] || ''} onChange={(e) => setBlindTestGuess({...blindTestGuess, [post.id]: e.target.value})} className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-accent" />
                          <button onClick={() => setRevealedTests({...revealedTests, [post.id]: true})} className="bg-accent text-white px-4 rounded-lg text-sm font-bold">Tentar</button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 text-green-400 font-bold flex items-center gap-2"><CheckCircle2 size={16}/> Revelado: DAMN. (Kendrick Lamar)</div>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-6 border-t border-white/5 pt-4 mt-4">
                  <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-red-400 transition-colors"><Heart size={16}/> {post.likes}</button>
                  <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-accent transition-colors"><MessageSquare size={16}/> {post.comments}</button>
                  <button className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-white transition-colors ml-auto"><Share2 size={16}/> Partilhar</button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="hidden lg:flex w-80 flex-col gap-6 shrink-0">
          <div className="bg-gradient-to-br from-orange-900/20 to-surface border border-orange-500/20 rounded-3xl p-6">
            <h3 className="font-heading font-bold text-white flex items-center gap-2 mb-4"><Flame className="text-orange-500" size={18} /> Em Alta Agora</h3>
            <div className="flex flex-col gap-4">
              {[
                { title: "Brat", artist: "Charli xcx", cover: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Charli_XCX_-_Brat.png/220px-Charli_XCX_-_Brat.png", reviews: "2.4k" },
                { title: "DAMN.", artist: "Kendrick Lamar", cover: "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png", reviews: "1.8k" }
              ].map((album, i) => (
                <div key={i} className="flex items-center gap-3 cursor-pointer group">
                  <img src={album.cover} className="w-12 h-12 rounded-lg border border-white/10 group-hover:border-orange-500/50 transition-colors" alt={album.title} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white leading-tight">{album.title}</span>
                    <span className="text-[10px] text-orange-400 mt-0.5 flex items-center gap-1"><TrendingUp size={10}/> {album.reviews} resenhas hoje</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}