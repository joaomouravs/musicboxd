import { useState } from 'react';
import { 
  Star, Heart, ListPlus, Share2, PlayCircle, 
  Activity, Music, ChevronRight, Search, Lock, 
  Unlock, Network, History, CloudRain, Thermometer, 
  TrendingUp, Target, Shuffle, BookOpen, Users, 
  CheckCircle2, ThumbsUp, Clock, MessageCircle, User 
} from 'lucide-react';
import { ReviewModal } from '../components/ReviewModal';

export function Album() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState('disco');
  
  // Estado para o Detetive de Samples
  const [expandedTrack, setExpandedTrack] = useState<number | null>(null);

  // Estado para Resenhas Interativas
  const [reviews, setReviews] = useState([
    { id: 1, name: "Lucas Dev", user: "@lucas", avatar: "https://i.pravatar.cc/150?u=1", rating: 5, text: "Uma carta de amor à música analógica. A produção em 'Giorgio by Moroder' mudou a forma como eu entendo sintetizadores.", likes: 1204, isLiked: false, comments: 48 },
    { id: 2, name: "Marina", user: "@marina_sounds", avatar: "https://i.pravatar.cc/150?u=2", rating: 4.5, text: "Comercial, mas perfeito. Pop eletrônico refinado ao nível mais alto. A coesão deste projeto é absurda.", likes: 892, isLiked: false, comments: 12 }
  ]);

  const albumData = {
    title: "Random Access Memories",
    artist: "Daft Punk",
    year: "2013",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg",
    color: "from-yellow-900/40"
  };

  const handleLikeReview = (id: number) => {
    setReviews(reviews.map(review => {
      if (review.id === id) {
        return { ...review, isLiked: !review.isLiked, likes: review.isLiked ? review.likes - 1 : review.likes + 1 };
      }
      return review;
    }));
  };

  const tabs = [
    { id: 'disco', label: 'O Disco & Comunidade', icon: Disc },
    { id: 'dados', label: 'Análise de Dados', icon: BarChart2 },
    { id: 'lore', label: 'Lore & Jornada', icon: BookOpen },
  ];

  function Disc(props: any) { return <div className="w-4 h-4 rounded-full border-2 border-current" {...props} /> }
  function BarChart2(props: any) { return <Activity {...props} /> }

  return (
    <main className="w-full min-h-screen pb-20">
      
      {/* HEADER IMERSIVO */}
      <div className={`w-full relative bg-gradient-to-b ${albumData.color} to-background pt-8 md:pt-16 pb-8 md:pb-12 px-4 sm:px-6 md:px-8 border-b border-white/5 transition-colors duration-1000`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[80px] z-0" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-end">
          
          <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 group perspective-[1000px]">
            <div className="absolute w-[90%] aspect-square rounded-full bg-[#111] border-[4px] border-[#222] shadow-inner top-0 transition-all duration-700 transform-gpu group-hover:-translate-y-12 group-hover:rotate-12 z-10 flex items-center justify-center -right-4">
              <div className="w-1/3 h-1/3 rounded-full border border-white/10 opacity-40"><img src={albumData.cover} className="w-full h-full object-cover blur-sm"/></div>
            </div>
            <div className="relative w-full h-full rounded-xl shadow-2xl transition-all duration-500 transform-gpu group-hover:rotate-x-12 group-hover:-translate-y-2 z-20 overflow-hidden border border-white/10">
              <img src={albumData.cover} alt={albumData.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight mb-2 leading-tight">{albumData.title}</h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 text-sm md:text-lg font-body font-bold text-secondary mb-6">
              <span className="text-white hover:text-accent cursor-pointer transition-colors">{albumData.artist}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" /><span>{albumData.year}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" /><span>74 min</span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
              <button onClick={() => setIsModalOpen(true)} className="bg-accent hover:bg-accent/80 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold font-body text-sm md:text-base transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2">
                <Star size={18} fill="currentColor" /> Avaliar
              </button>
              <div className="flex items-center gap-1 md:gap-2 bg-black/40 p-1.5 rounded-full border border-white/10">
                <button onClick={() => setIsLiked(!isLiked)} className={`p-2 rounded-full transition-colors ${isLiked ? 'bg-red-500/20 text-red-500' : 'text-secondary hover:text-white hover:bg-white/10'}`}>
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
                <button className="p-2 rounded-full text-secondary hover:text-white hover:bg-white/10 transition-colors"><ListPlus size={20} /></button>
                <button className="p-2 rounded-full text-secondary hover:text-white hover:bg-white/10 transition-colors"><Share2 size={20} /></button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-4xl font-heading font-black text-white leading-none">4.8</p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">124k resenhas</p>
              </div>
              <Star size={48} className="text-yellow-400" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-white/5 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-white/10 text-white border border-white/20 shadow-lg' : 'bg-transparent text-secondary hover:text-white hover:bg-white/5'}`}>
                <Icon size={16} /> {tab.label}
              </button>
            );
          })}
        </div>

        <div className="py-8">
          
          {/* ABA 1: O DISCO */}
          {activeTab === 'disco' && (
            <div className="flex flex-col gap-10 animate-in fade-in duration-500">
              
              <section className="bg-surface border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary"><Activity size={20} className="text-blue-400"/><h2 className="text-xl font-heading font-bold">A Curva de Tensão (Pacing)</h2></div>
                <p className="text-xs text-secondary mb-2">A montanha-russa de energia do álbum, da faixa 1 à 13.</p>
                <div className="relative w-full h-24 flex items-end justify-between gap-1 group">
                   {[40, 50, 80, 30, 70, 90, 45, 100, 60, 40, 85, 30, 50].map((h, i) => (
                     <div key={i} className="w-full bg-gradient-to-t from-blue-900/40 to-blue-400/80 rounded-t-sm hover:from-blue-600 hover:to-cyan-400 transition-all duration-300 relative" style={{ height: `${h}%` }}>
                       <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 font-bold">{h}%</span>
                     </div>
                   ))}
                   <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                     <path d="M0,60 Q10,50 15,20 T30,70 T45,10 T60,55 T70,0 T85,40 T100,50" fill="none" stroke="rgba(99,102,241,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke" className="drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                   </svg>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <section className="flex flex-col gap-4">
                  <h2 className="text-2xl font-heading font-bold text-white border-b border-white/5 pb-2 flex items-center gap-2"><Music size={20}/> Tracklist & Samples</h2>
                  <div className="flex flex-col gap-1">
                    {[
                      { num: 1, title: "Give Life Back to Music", time: "4:34", sample: null },
                      { num: 2, title: "The Game of Love", time: "5:22", sample: null },
                      { num: 3, title: "Giorgio by Moroder", time: "9:04", sample: { title: "Entrevista Original", artist: "Giorgio Moroder", year: "2012" } },
                      { num: 4, title: "Within", time: "3:48", sample: null },
                      { num: 5, title: "Instant Crush", time: "5:38", sample: null },
                      { num: 6, title: "Lose Yourself to Dance", time: "5:53", sample: null },
                      { num: 7, title: "Touch", time: "8:18", sample: null },
                      { num: 8, title: "Get Lucky", time: "6:09", sample: null },
                      { num: 9, title: "Contact", time: "6:21", sample: { title: "We Ride Tonight", artist: "The Sherbs", year: "1981" } },
                    ].map((track) => (
                      <div key={track.num} className="flex flex-col bg-surface/10 rounded-lg border border-transparent hover:border-white/5 transition-all overflow-hidden">
                        <div 
                          className="group flex items-center justify-between p-3 cursor-pointer"
                          onClick={() => track.sample && setExpandedTrack(expandedTrack === track.num ? null : track.num)}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-secondary/50 font-bold w-4 text-right group-hover:hidden">{track.num}</span>
                            <PlayCircle size={16} className="text-accent hidden group-hover:block w-4" />
                            <span className={`font-body font-medium ${expandedTrack === track.num ? 'text-accent' : 'text-primary'}`}>{track.title}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            {track.sample && (
                              <button className={`p-1 rounded transition-colors ${expandedTrack === track.num ? 'bg-purple-500/20 text-purple-400' : 'text-secondary hover:text-purple-400'}`} title="Contém Sample">
                                {expandedTrack === track.num ? <Unlock size={14} /> : <Lock size={14} />}
                              </button>
                            )}
                            <span className="text-sm text-secondary">{track.time}</span>
                          </div>
                        </div>

                        {track.sample && expandedTrack === track.num && (
                          <div className="bg-purple-900/10 border-t border-purple-500/20 p-4 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex items-center gap-2 text-purple-400 mb-2"><Search size={14}/><span className="text-[10px] font-bold uppercase tracking-widest">DNA da Produção</span></div>
                            <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl border border-white/5 w-fit">
                              <div className="w-10 h-10 rounded bg-surface border border-white/10 flex items-center justify-center text-secondary shrink-0"><Disc size={20}/></div>
                              <div className="flex flex-col">
                                <span className="text-xs text-secondary">Contém interpolação de:</span>
                                <span className="text-sm font-bold text-white">{track.sample.title}</span>
                                <span className="text-[10px] text-purple-300">{track.sample.artist} ({track.sample.year})</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2"><Users size={20}/> Comunidade</h2>
                    <button className="text-accent text-sm font-bold hover:text-white transition-colors flex items-center gap-1">Filtrar <ChevronRight size={16}/></button>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-surface/30 border border-white/5 rounded-2xl p-5 flex gap-4 transition-colors hover:bg-surface/50">
                        <img src={review.avatar} className="w-10 h-10 rounded-full border border-white/10 shrink-0 mt-1" alt={review.name} />
                        <div className="flex flex-col w-full">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-white text-sm">{review.name}</span>
                            <div className="flex text-accent"><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill="currentColor"/><Star size={10} fill={review.rating === 5 ? "currentColor" : "none"}/></div>
                          </div>
                          <p className="text-sm text-primary font-body mb-3">{review.text}</p>
                          <div className="flex items-center gap-4 border-t border-white/5 pt-3">
                            <button 
                              onClick={() => handleLikeReview(review.id)}
                              className={`flex items-center gap-1.5 text-xs font-bold transition-all ${review.isLiked ? 'text-blue-400 scale-105' : 'text-secondary hover:text-blue-400'}`}
                            >
                              <ThumbsUp size={14} fill={review.isLiked ? "currentColor" : "none"} /> 
                              {review.likes}
                            </button>
                            <button className="flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-white transition-colors">
                              <MessageCircle size={14} /> {review.comments}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}

          {/* ABA 2: ANÁLISE DE DADOS */}
          {activeTab === 'dados' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
              
              <div className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-4 lg:col-span-2 relative overflow-hidden group">
                 <TrendingUp className="absolute -right-10 -top-10 w-48 h-48 text-green-500/5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-sm font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2 z-10">Gráfico de Maturação</h3>
                 <div className="flex items-center gap-4 mb-2 z-10">
                   <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-500/30">Envelheceu como Vinho</div>
                   <p className="text-xs text-primary">A nota média subiu de 3.8 (2013) para 4.8 (Hoje).</p>
                 </div>
                 <div className="relative w-full h-32 mt-4 z-10 flex items-end">
                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <path d="M0,80 Q25,75 50,40 T100,10" fill="none" stroke="#22c55e" strokeWidth="3" className="drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                     <path d="M0,80 Q25,75 50,40 T100,10 L100,100 L0,100 Z" fill="url(#grad)" opacity="0.2" />
                     <defs><linearGradient id="grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22c55e"/><stop offset="100%" stopColor="transparent"/></linearGradient></defs>
                   </svg>
                   <span className="absolute bottom-0 left-0 text-[10px] text-secondary">2013</span>
                   <span className="absolute top-0 right-0 text-[10px] text-green-400 font-bold">Hoje (4.8)</span>
                 </div>
              </div>

              <div className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden">
                <Target className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/5" />
                <h3 className="text-sm font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2">Radar de Coesão</h3>
                <div className="flex flex-col items-center justify-center flex-1 z-10">
                  <span className="text-2xl font-black text-white text-center leading-tight mb-2">Obra-Prima<br/>Coesa</span>
                  <p className="text-xs text-secondary text-center">Desvio padrão minúsculo entre as faixas. Nenhuma música recebeu nota abaixo de 4.0.</p>
                  <div className="w-full bg-black/40 h-2 rounded-full mt-4 overflow-hidden flex">
                     <div className="bg-yellow-500 h-full w-[10%]" title="Faixas Média" />
                     <div className="bg-green-500 h-full w-[90%]" title="Faixas Excelentes" />
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-4 lg:col-span-2">
                <h3 className="text-sm font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2"><Thermometer size={16}/> Arco Emocional (Letras)</h3>
                <p className="text-xs text-primary mb-2">Análise de sentimento baseada no vocabulário das faixas.</p>
                <div className="w-full h-8 rounded-lg overflow-hidden flex cursor-help" title="Do nostálgico ao eufórico">
                   <div className="bg-blue-600 h-full w-[20%]" />
                   <div className="bg-indigo-500 h-full w-[30%]" />
                   <div className="bg-orange-500 h-full w-[20%]" />
                   <div className="bg-yellow-400 h-full w-[30%]" />
                </div>
                <div className="flex justify-between text-[10px] text-secondary font-bold uppercase">
                  <span>Início Introspectivo</span>
                  <span>Final Eufórico</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-3">
                  <h3 className="text-[10px] font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2"><BookOpen size={14}/> Teste do Poeta</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Minimalista</span>
                    <span className="text-xs text-accent">54 Palavras Únicas</span>
                  </div>
                  <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden"><div className="bg-accent h-full w-[15%]" /></div>
                  <p className="text-[10px] text-secondary">Foco total na produção sonora em vez de narrativa lírica.</p>
                </div>

                <div className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-3">
                  <h3 className="text-[10px] font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2"><CloudRain size={14}/> Matriz de Contexto</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs px-2.5 py-1 rounded-md flex items-center gap-1"><Clock size={12}/> Madrugada</span>
                    <span className="bg-yellow-900/30 border border-yellow-500/30 text-yellow-300 text-xs px-2.5 py-1 rounded-md flex items-center gap-1"><Activity size={12}/> Viagem de Carro</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ABA 3: LORE & JORNADA */}
          {activeTab === 'lore' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-500">
              
              <div className="bg-[#050505] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden min-h-[400px]">
                <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2 z-20"><Network size={20} className="text-blue-400"/> Árvore Genealógica</h3>
                <p className="text-xs text-secondary mb-8 z-20">A linha do tempo sonora deste projeto.</p>
                
                <div className="relative flex-1 w-full flex items-center justify-center">
                   <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                     <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                     <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                     <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgba(234,179,8,0.4)" strokeWidth="3" />
                   </svg>
                   
                   <div className="absolute top-[10%] left-[20%] -translate-x-1/2 flex flex-col items-center z-10 group cursor-pointer">
                     <img src="https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg" className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-blue-400 transition-colors" alt="Stevie" />
                     <span className="text-[10px] text-secondary mt-1 bg-black/80 px-2 rounded">Inspirado por</span>
                   </div>
                   
                   <div className="absolute top-[10%] left-[80%] -translate-x-1/2 flex flex-col items-center z-10 group cursor-pointer">
                     <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Chic_-_Risque.jpg" className="w-12 h-12 rounded-full border-2 border-white/20 group-hover:border-blue-400 transition-colors" alt="Chic" />
                     <span className="text-[10px] text-secondary mt-1 bg-black/80 px-2 rounded">Inspirado por</span>
                   </div>

                   <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                     <img src={albumData.cover} className="w-20 h-20 rounded-full border-4 border-accent shadow-[0_0_30px_rgba(99,102,241,0.5)]" alt="RAM" />
                   </div>

                   <div className="absolute top-[85%] left-[50%] -translate-x-1/2 flex flex-col items-center z-10 group cursor-pointer">
                     <img src="https://upload.wikimedia.org/wikipedia/en/f/f8/The_Weeknd_-_Starboy.png" className="w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-yellow-400 transition-colors shadow-lg" alt="Starboy" />
                     <span className="text-[10px] text-yellow-400 font-bold mt-1 bg-black/80 px-2 rounded">Inspirou</span>
                   </div>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2 flex items-center gap-2"><Shuffle size={16}/> O Mix Perfeito (Crossfade)</h3>
                  <p className="text-xs text-primary mb-2">O algoritmo sugere estas faixas para uma transição de BPM perfeita:</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl border border-white/5 hover:border-accent/50 cursor-pointer transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/en/2/22/Jay-Z_-_The_Black_Album.jpg" className="w-10 h-10 rounded shrink-0" alt="Mix 1" />
                      <div className="flex flex-col"><span className="text-sm font-bold text-white">Dirt Off Your Shoulder</span><span className="text-[10px] text-secondary">Jay-Z • Match: 98%</span></div>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl border border-white/5 hover:border-accent/50 cursor-pointer transition-colors">
                      <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" className="w-10 h-10 rounded shrink-0" alt="Mix 2" />
                      <div className="flex flex-col"><span className="text-sm font-bold text-white">Pink + White</span><span className="text-[10px] text-secondary">Frank Ocean • Match: 92%</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-900/20 to-surface border border-indigo-500/20 rounded-3xl p-6 flex flex-col gap-4 relative overflow-hidden">
                  <History className="absolute -right-4 -bottom-4 w-24 h-24 text-indigo-500/10" />
                  <h3 className="text-sm font-heading font-bold text-indigo-300 uppercase tracking-widest border-b border-indigo-500/20 pb-2 flex items-center gap-2 z-10"><User size={16}/> A Sua Jornada</h3>
                  
                  <div className="flex flex-col gap-4 mt-2 relative z-10">
                    <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-indigo-500/30" />
                    
                    <div className="flex gap-4 relative">
                      <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"><CheckCircle2 size={12} className="text-white"/></div>
                      <div className="flex flex-col"><span className="text-[10px] text-indigo-300 font-bold uppercase">Hoje</span><span className="text-sm text-white">Você reavaliou para 5★</span></div>
                    </div>
                    <div className="flex gap-4 relative opacity-60 hover:opacity-100 transition-opacity">
                      <div className="w-5 h-5 rounded-full bg-surface border-2 border-indigo-500 shrink-0" />
                      <div className="flex flex-col"><span className="text-[10px] text-secondary uppercase">Mai 2023</span><span className="text-sm text-primary">Primeira Audição (Nota: 4.0)</span></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface border border-white/5 rounded-3xl p-6 lg:col-span-2">
                <h3 className="text-sm font-heading font-bold text-secondary uppercase tracking-widest border-b border-white/5 pb-2 mb-4">Liner Notes (Ficha Técnica)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col bg-white/5 p-3 rounded-lg border border-white/5"><span className="text-[10px] text-secondary uppercase">Produção Principal</span><span className="text-sm font-bold text-white">Thomas Bangalter</span></div>
                  <div className="flex flex-col bg-white/5 p-3 rounded-lg border border-white/5"><span className="text-[10px] text-secondary uppercase">Guitarras Base</span><span className="text-sm font-bold text-white cursor-pointer hover:text-accent">Nile Rodgers</span></div>
                  <div className="flex flex-col bg-white/5 p-3 rounded-lg border border-white/5"><span className="text-[10px] text-secondary uppercase">Sintetizadores</span><span className="text-sm font-bold text-white cursor-pointer hover:text-accent">Giorgio Moroder</span></div>
                  <div className="flex flex-col bg-white/5 p-3 rounded-lg border border-white/5"><span className="text-[10px] text-secondary uppercase">Masterização</span><span className="text-sm font-bold text-white">Bob Ludwig</span></div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} albumTitle={albumData.title} />
    </main>
  );
}