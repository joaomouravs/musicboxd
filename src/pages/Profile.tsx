import { useState } from 'react';
import { 
  Settings, Edit3, MapPin, Calendar, Award, Activity, Zap, 
  Music, TrendingDown, EyeOff, History, X, Shield, 
  Disc3, Flame, Droplet, Globe, Clock, AlignLeft, BarChart2, 
  Heart, MessageSquare, Share2, Layers, Star 
} from 'lucide-react';

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'reviews' | 'eras'>('reviews');
  
  const [userProfile, setUserProfile] = useState({
    name: 'Lucas Desenvolvedor',
    username: '@lucas_dev',
    bio: 'Programador de dia, audiófilo de madrugada. Em busca do sample perfeito e da transição impecável.',
    location: 'Rio de Janeiro, Brasil',
    joined: 'Fevereiro 2024',
    stats: { reviews: 412, followers: '1.2k', lists: 24 }
  });

  const myReviews = [
    {
      id: 1, album: "Random Access Memories", artist: "Daft Punk", cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg", rating: 5, frame: 'vaporwave', text: "Uma obra-prima que une o passado e o futuro. O solo em Giorgio by Moroder é transcendente.", date: "Há 2 dias", emojis: "🤯🕺✨", likes: 24, comments: 5
    },
    {
      id: 2, album: "St. Anger", artist: "Metallica", cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Metallica_-_St._Anger_cover.jpg", rating: 2, frame: 'grunge', text: "Eu tentei gostar, juro. Mas aquela bateria soa como uma lata de lixo.", date: "Há 1 semana", emojis: "🗑️🥁💢", likes: 12, comments: 82
    },
    {
      id: 3, album: "Blonde", artist: "Frank Ocean", cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg", rating: 4.5, frame: 'minimalist', text: "Íntimo, minimalista e emocionante. Frank Ocean mapeia sentimentos puros.", date: "Há 2 semanas", emojis: "🌧️🌊💔", likes: 89, comments: 14
    }
  ];

  return (
    <main className="w-full min-h-screen pb-20">
      
      <div className="w-full h-64 md:h-80 relative bg-surface overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop" alt="Cover" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" />
        <button onClick={() => setIsEditing(true)} className="absolute top-6 right-6 md:top-8 md:right-8 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full font-bold font-body text-sm flex items-center gap-2 transition-all shadow-lg">
          <Settings size={16} /> Editar Perfil
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-20 -mt-24 md:-mt-32">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end mb-12">
          
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-background bg-surface overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1618609377864-6a5f65ce5737?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="absolute -bottom-2 md:bottom-2 -right-4 md:-right-6 z-20 bg-gradient-to-r from-amber-600 to-orange-500 p-1 rounded-lg shadow-xl border-2 border-background transform rotate-12 hover:rotate-0 transition-transform cursor-help">
               <div className="bg-background/90 text-amber-500 text-[10px] md:text-xs font-heading font-black uppercase px-2 py-1 rounded flex items-center gap-1">
                 <History size={12}/> O Arqueólogo
               </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 pb-4">
            <h1 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight">{userProfile.name}</h1>
            <p className="text-accent font-body font-bold text-base md:text-lg mb-3">{userProfile.username}</p>
            <p className="text-secondary font-body max-w-2xl mb-4">{userProfile.bio}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-body text-secondary/70">
              <span className="flex items-center gap-1"><MapPin size={14} /> {userProfile.location}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> Entrou em {userProfile.joined}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase flex items-center gap-1"><Award size={12}/> Pioneiro</span>
              <span className="bg-blue-500/10 border border-blue-500/30 text-blue-500 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase flex items-center gap-1"><Flame size={12}/> Tastemaker</span>
            </div>
          </div>

          <div className="flex gap-6 pb-4 md:px-8">
             <div className="flex flex-col items-center"><span className="text-2xl font-black text-white font-heading">{userProfile.stats.reviews}</span><span className="text-xs text-secondary font-body uppercase tracking-wider">Resenhas</span></div>
             <div className="flex flex-col items-center"><span className="text-2xl font-black text-white font-heading">{userProfile.stats.followers}</span><span className="text-xs text-secondary font-body uppercase tracking-wider">Seguidores</span></div>
             <div className="flex flex-col items-center"><span className="text-2xl font-black text-white font-heading">{userProfile.stats.lists}</span><span className="text-xs text-secondary font-body uppercase tracking-wider">Listas</span></div>
          </div>
        </div>

        <section className="mt-8 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
            <Shield className="text-accent" size={20} />
            <h2 className="text-xl md:text-2xl font-heading font-bold">O Santuário (Top 4)</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Kid A", artist: "Radiohead", cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead.kida.albumart.cover.jpg" },
              { title: "Discovery", artist: "Daft Punk", cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" },
              { title: "Madvillainy", artist: "Madvillain", cover: "https://upload.wikimedia.org/wikipedia/en/5/5e/Madvillainy_cover.jpg" },
              { title: "Vespertine", artist: "Björk", cover: "https://upload.wikimedia.org/wikipedia/en/0/00/Bj%C3%B6rk_-_Vespertine_album_cover.png" }
            ].map((album, i) => (
              <div key={i} className="group relative perspective-[1000px] cursor-pointer h-48 md:h-64 flex flex-col items-center">
                <div className="absolute w-[80%] aspect-square rounded-full bg-[#111] border-4 border-[#222] shadow-inner top-4 transition-all duration-500 transform-gpu group-hover:-translate-y-12 md:group-hover:-translate-y-16 group-hover:rotate-12 z-10 flex items-center justify-center">
                   <div className="w-1/3 h-1/3 rounded-full border-2 border-white/10 overflow-hidden opacity-50"><img src={album.cover} className="w-full h-full object-cover blur-sm"/></div>
                </div>
                <div className="relative w-full aspect-square rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500 transform-gpu group-hover:rotate-x-12 group-hover:-translate-y-2 group-hover:scale-105 z-20 border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%] duration-1000" />
                  <img src={album.cover} alt={album.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-sm font-bold text-white leading-tight">{album.title}</p>
                  <p className="text-xs text-secondary">{album.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <section className="bg-surface/30 border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center relative overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2 z-20 mb-6"><Droplet size={18} className="text-purple-400"/> Aura Musical</h3>
            <div className="relative w-40 h-40 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-xl opacity-50 group-hover:opacity-80 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-bl from-purple-500 via-pink-600 to-blue-600 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] animate-[spin_8s_linear_infinite] shadow-2xl" />
              <div className="absolute inset-6 bg-black/40 rounded-full backdrop-blur-sm flex items-center justify-center flex-col">
                <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Sintético</span>
                <span className="text-lg font-black text-white font-heading">Melancólico</span>
              </div>
            </div>
            <p className="text-xs text-secondary font-body mt-6 z-20">Aura atual reflete texturas eletrônicas combinadas com atmosferas introspectivas.</p>
          </section>

          <section className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col gap-6">
            <h3 className="text-lg font-heading font-bold flex items-center gap-2"><Activity className="text-green-400" size={18} /> Espectro Acústico</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5"><div className="flex justify-between text-xs font-bold text-white"><span><Flame size={12} className="inline text-red-400"/> Energia</span><span>75%</span></div><div className="w-full h-1.5 bg-black/40 rounded-full"><div className="bg-red-500 w-[75%] h-full rounded-full" /></div></div>
              <div className="flex flex-col gap-1.5"><div className="flex justify-between text-xs font-bold text-white"><span><Zap size={12} className="inline text-yellow-400"/> Valência</span><span>30%</span></div><div className="w-full h-1.5 bg-black/40 rounded-full"><div className="bg-yellow-500 w-[30%] h-full rounded-full" /></div></div>
              <div className="flex flex-col gap-1.5"><div className="flex justify-between text-xs font-bold text-white"><span><Music size={12} className="inline text-blue-400"/> Acústica</span><span>15%</span></div><div className="w-full h-1.5 bg-black/40 rounded-full"><div className="bg-blue-500 w-[15%] h-full rounded-full" /></div></div>
            </div>
            <p className="text-[10px] text-secondary">BPM Médio: 118. Foco em som processado.</p>
          </section>

          <section className="bg-gradient-to-br from-blue-900/20 to-surface border border-blue-500/20 rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-heading font-bold flex items-center gap-2 text-blue-400"><Clock size={18} /> Relógio Sonoro</h3>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-dashed border-blue-500/30 flex items-center justify-center relative">
                 <div className="absolute top-0 w-1 h-4 bg-blue-500" />
                 <div className="absolute bottom-0 w-1 h-4 bg-white/20" />
                 <span className="text-xs font-bold text-white text-center">Coruja<br/>Noturna</span>
              </div>
            </div>
            <p className="text-[10px] text-secondary text-center">70% das suas escutas ocorrem entre 00h e 04h.</p>
          </section>

          <section className="bg-gradient-to-r from-red-900/20 to-surface border border-red-500/20 rounded-3xl p-6 flex flex-col gap-4 group">
            <h3 className="text-lg font-heading font-bold flex items-center gap-2 text-red-400"><TrendingDown size={18} /> O Cofre</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded shadow-xl overflow-hidden shrink-0 border border-white/10 group-hover:scale-105 transition-transform"><img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" className="w-full h-full object-cover" /></div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold text-red-400 uppercase">Não entendeu o hype</span>
                <h4 className="text-sm font-bold text-white">Dark Side of the Moon</h4>
                <div className="flex gap-3 mt-1 text-xs">
                  <span className="text-red-400 font-black">Você: 1.5<Star size={10} className="inline" fill="currentColor"/></span>
                  <span className="text-white/50">|</span>
                  <span className="text-white font-black">Comun.: 4.8<Star size={10} className="inline" fill="currentColor"/></span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface border border-white/10 rounded-3xl p-6 flex flex-col justify-center gap-3">
            <h3 className="text-lg font-heading font-bold flex items-center gap-2 text-secondary"><EyeOff size={18} /> Ponto Cego</h3>
            <p className="text-xs text-primary">Você possui <strong>0 resenhas de Jazz</strong>. Sugerimos expandir os horizontes com:</p>
            <div className="flex items-center gap-3 bg-white/5 p-2 rounded-lg border border-white/5 w-fit">
              <img src="https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg" className="w-8 h-8 rounded" />
              <div className="flex flex-col"><span className="text-[10px] font-bold text-white">Kind of Blue</span><span className="text-[9px] text-secondary">Miles Davis</span></div>
            </div>
          </section>

          <section className="bg-surface border border-white/5 rounded-3xl p-6 flex flex-col justify-between gap-4">
             <div>
               <h3 className="text-sm font-heading font-bold flex items-center gap-2 mb-2"><BarChart2 size={14} className="text-accent" /> Décadas Favoritas</h3>
               <div className="flex items-end gap-2 h-16 border-b border-white/10 pb-1">
                 {[ { d: '70s', v: 20 }, { d: '80s', v: 40 }, { d: '90s', v: 80 }, { d: '00s', v: 100 }, { d: '10s', v: 60 }].map(dec => (
                   <div key={dec.d} className="flex-1 flex flex-col items-center justify-end gap-1">
                     <div className="w-full bg-accent/80 rounded-t-sm" style={{ height: `${dec.v}%` }} />
                     <span className="text-[8px] text-secondary">{dec.d}</span>
                   </div>
                 ))}
               </div>
             </div>
             <div className="flex items-center justify-between border-t border-white/5 pt-2">
               <h3 className="text-xs font-heading font-bold flex items-center gap-2"><Globe size={12} className="text-green-400" /> Top Região</h3>
               <span className="text-xs font-bold text-white">Reino Unido (45%)</span>
             </div>
          </section>

          <section className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-surface to-black border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            <div className="flex flex-col z-10">
              <h3 className="text-lg font-heading font-bold flex items-center gap-2 text-white mb-2"><AlignLeft size={18} /> DNA Lírico</h3>
              <p className="text-xs text-secondary max-w-sm">Os temas que mais aparecem nos álbuns que avaliou com nota máxima.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 z-10 font-heading">
              <span className="text-4xl font-black text-white/90">Solidão</span><span className="text-2xl font-bold text-accent">Cidade</span><span className="text-lg font-medium text-purple-400">Futuro</span><span className="text-3xl font-black text-white/50">Tempo</span><span className="text-xl font-bold text-red-400">Amor</span><span className="text-sm font-medium text-secondary">Espaço</span>
            </div>
          </section>
        </div>

        <div className="mt-16 flex flex-col gap-10">
          <div className="flex items-center gap-8 border-b border-white/5 pb-4 overflow-x-auto scrollbar-hide">
            <button onClick={() => setActiveTab('reviews')} className={`text-sm font-black uppercase tracking-widest transition-all relative pb-2 whitespace-nowrap ${activeTab === 'reviews' ? 'text-white' : 'text-secondary hover:text-white'}`}>
              Resenhas ({userProfile.stats.reviews})
              {activeTab === 'reviews' && <div className="absolute -bottom-[1px] left-0 right-0 h-1 bg-accent" />}
            </button>
            <button onClick={() => setActiveTab('eras')} className={`text-sm font-black uppercase tracking-widest transition-all relative pb-2 whitespace-nowrap ${activeTab === 'eras' ? 'text-white' : 'text-secondary hover:text-white'}`}>
              Linha do Tempo (Eras)
              {activeTab === 'eras' && <div className="absolute -bottom-[1px] left-0 right-0 h-1 bg-accent" />}
            </button>
          </div>

          {activeTab === 'reviews' && (
            <div className="flex flex-col gap-8">
              {myReviews.map((review) => (
                <article key={review.id} className={`relative p-8 rounded-[3rem] border overflow-hidden transition-all hover:scale-[1.01] shadow-2xl ${review.frame === 'vaporwave' ? 'bg-gradient-to-br from-pink-900/20 to-blue-900/20 border-pink-500/30' : ''} ${review.frame === 'grunge' ? 'bg-[#0a0a0a] border-neutral-800' : ''} ${review.frame === 'minimalist' ? 'bg-surface border-white/5' : ''}`}>
                  {review.frame === 'grunge' && <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />}
                  {review.frame === 'vaporwave' && <div className="absolute -top-32 -right-32 w-80 h-80 bg-pink-500/10 blur-[120px] rounded-full" />}

                  <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    <div className="flex flex-col items-center gap-4 shrink-0">
                      <div className="relative group/cover">
                        <img src={review.cover} className={`w-32 h-32 rounded-2xl shadow-2xl border transition-all duration-500 group-hover/cover:rotate-2 ${review.frame === 'grunge' ? 'border-neutral-700 grayscale' : 'border-white/10'}`} alt={review.album} />
                        <div className="absolute -bottom-2 -right-2 bg-background border border-white/10 p-2 rounded-lg shadow-xl"><Disc3 size={16} className={`animate-spin-slow ${review.frame === 'vaporwave' ? 'text-pink-400' : 'text-accent'}`} /></div>
                      </div>
                      <div className="flex text-accent gap-0.5">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill={review.rating >= s ? "currentColor" : "none"} className={review.rating >= s ? "drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "opacity-10"} />)}
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className={`text-2xl font-black ${review.frame === 'vaporwave' ? 'text-pink-300' : 'text-white'}`}>{review.album}</h3>
                          <p className="text-secondary font-bold text-lg">{review.artist}</p>
                        </div>
                        <span className="text-[10px] font-black text-secondary uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">{review.date}</span>
                      </div>
                      <p className={`font-body text-base leading-relaxed mb-8 italic ${review.frame === 'minimalist' ? 'text-primary' : 'text-white/90'}`}>"{review.text}"</p>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <span className="text-4xl">{review.emojis}</span>
                        <div className="flex gap-6">
                          <button className="flex items-center gap-2 text-xs font-black text-secondary hover:text-red-400"><Heart size={20}/> {review.likes}</button>
                          <button className="flex items-center gap-2 text-xs font-black text-secondary hover:text-accent"><MessageSquare size={20}/> {review.comments}</button>
                          <button className="flex items-center gap-2 text-xs font-black text-secondary hover:text-white"><Layers size={20}/> Ver Álbum</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {activeTab === 'eras' && (
            <div className="flex flex-col gap-0 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />
              <div className="relative pl-24 py-8">
                <div className="absolute left-[26px] top-12 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2 block">Era Atual (2024)</span>
                <h3 className="text-3xl font-black text-white mb-4">Fase Obscura & Eletrônica</h3>
                <div className="flex gap-4"><img src="https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg" className="w-16 h-16 rounded-lg" /><img src="https://upload.wikimedia.org/wikipedia/en/b/b5/Radiohead.kida.albumart.cover.jpg" className="w-16 h-16 rounded-lg" /></div>
              </div>
            </div>
          )}
        </div>

      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsEditing(false)} />
          <div className="relative w-full max-w-xl bg-surface border border-white/10 rounded-3xl p-8 z-10">
            <button onClick={() => setIsEditing(false)} className="absolute top-6 right-6 text-secondary"><X size={24} /></button>
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-2"><Edit3 className="text-accent" /> Editar Perfil</h2>
            <div className="flex flex-col gap-4">
              <input type="text" value={userProfile.name} onChange={(e) => setUserProfile({...userProfile, name: e.target.value})} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white" />
              <textarea value={userProfile.bio} onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})} className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white resize-none" rows={3} />
              <button onClick={() => setIsEditing(false)} className="bg-accent text-white px-8 py-3 rounded-full font-bold mt-4">Guardar</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}