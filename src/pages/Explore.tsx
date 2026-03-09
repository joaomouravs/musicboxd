import { useState } from 'react';
import { 
  Sparkles, CloudMoon, Zap, HelpCircle, 
  Wind, Radio, Users, FlaskConical, ChevronRight,
  Trophy, Flame, Swords, ArrowRight, GitMerge, Star,
  Crown, Activity, PlayCircle, Headphones, Ticket, TrendingUp,
  Network, Database, GitCommit, ArrowDown, MoveRight
} from 'lucide-react';

export function Explore() {
  const [activeTab, setActiveTab] = useState('descobrir'); 
  const [isRevealed, setIsRevealed] = useState(false);

  const tabs = [
    { id: 'descobrir', label: 'Descobrir', icon: Sparkles },
    { id: 'social', label: 'Social & Feed', icon: Users },
    { id: 'aovivo', label: 'Ao Vivo', icon: Radio },
    { id: 'lab', label: 'O Laboratório', icon: FlaskConical },
  ];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex flex-col gap-8">
      
      {/* CABEÇALHO E NAVEGAÇÃO POR ABAS */}
      <header className="flex flex-col gap-6 border-b border-white/5 pb-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight mb-2">
            Explorar
          </h1>
          <p className="text-secondary font-body text-base md:text-lg">
            Navegue por sensações, fuja do algoritmo e descubra o inesperado.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all whitespace-nowrap ${
                  isActive 
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' 
                    : 'bg-surface border border-white/5 text-secondary hover:text-primary hover:bg-white/5'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* ========================================= */}
      {/* ABA 1: DESCOBRIR                          */}
      {/* ========================================= */}
      {activeTab === 'descobrir' && (
        <div className="flex flex-col gap-12 md:gap-16 animate-in fade-in duration-500">
          
          <section className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-surface border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 group">
            <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#0f172a]" />
            <div className="relative flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold font-heading uppercase tracking-wider mb-4 border border-indigo-500/30">
                <CloudMoon size={14} /> Vibe de Domingo à Noite
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Para fechar o fim de semana</h2>
              <p className="text-indigo-200/80 font-body text-sm md:text-base max-w-xl mb-6">
                O amanhã já espreita. Desacelere a mente com batidas *downtempo*, R&B noturno e texturas de Jazz criadas para as altas horas da noite.
              </p>
              <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-full font-bold font-body text-sm transition-all shadow-lg shadow-indigo-500/20">
                Ouvir a Seleção Noturna
              </button>
            </div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 grid grid-cols-2 grid-rows-2 gap-2 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img src="https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg" className="w-full h-full object-cover rounded-tl-xl rounded-br-xl shadow-lg opacity-80 hover:opacity-100 transition-opacity" alt="Stevie" />
              <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg" className="w-full h-full object-cover rounded-tr-xl rounded-bl-xl shadow-lg opacity-80 hover:opacity-100 transition-opacity" alt="Radiohead" />
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <section className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-primary border-b border-white/5 pb-2">Aura Sonora</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 h-full">
                <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-surface/30 border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 blur-[2px] group-hover:blur-md transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]" />
                  <span className="font-heading text-xs uppercase font-bold text-primary group-hover:text-red-400">Energia Neon</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-surface/30 border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 blur-[2px] group-hover:blur-md transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]" />
                  <span className="font-heading text-xs uppercase font-bold text-primary group-hover:text-blue-400">Melancolia</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-surface/30 border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 blur-[2px] group-hover:blur-md transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
                  <span className="font-heading text-xs uppercase font-bold text-primary group-hover:text-green-400">Orgânico</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-surface/30 border border-white/5 hover:bg-white/5 transition-all group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-900 to-black blur-[2px] group-hover:blur-md transition-all shadow-[0_0_20px_rgba(88,28,135,0.3)]" />
                  <span className="font-heading text-xs uppercase font-bold text-primary group-hover:text-purple-400">Sombrio</span>
                </button>
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-primary border-b border-white/5 pb-2">Teste Cego</h2>
              <div className="flex bg-surface/40 border border-white/10 rounded-2xl p-4 md:p-6 gap-6 items-center h-full relative overflow-hidden">
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-xl overflow-hidden shadow-2xl">
                  <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Neutral_Milk_Hotel_-_In_the_Aeroplane_Over_the_Sea.jpg" alt="Mystery Album" className={`w-full h-full object-cover transition-all duration-1000 ${isRevealed ? 'blur-0 scale-100' : 'blur-xl scale-125 grayscale'}`} />
                  {!isRevealed && <div className="absolute inset-0 flex items-center justify-center"><HelpCircle size={48} className="text-white/50 drop-shadow-xl" /></div>}
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  {!isRevealed ? (
                    <>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-body text-secondary border border-white/10">#AcústicoEstranho</span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 text-xs font-body text-secondary border border-white/10">#ClássicoIndie</span>
                      </div>
                      <button onClick={() => setIsRevealed(true)} className="bg-white text-black px-6 py-2.5 rounded-full font-bold font-body text-sm hover:bg-gray-200 transition-colors w-fit">Revelar Álbum</button>
                    </>
                  ) : (
                    <div className="animate-in fade-in duration-700">
                      <h3 className="text-2xl font-heading font-bold text-primary mb-1">In the Aeroplane Over the Sea</h3>
                      <button className="text-accent flex items-center gap-1 text-sm font-bold mt-2 hover:text-white transition-colors">Avaliar agora <ChevronRight size={16} /></button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/5 pt-8">
            <div className="md:col-span-2 relative rounded-2xl bg-gradient-to-r from-red-900/40 to-black border border-red-500/20 p-6 md:p-8 flex flex-col items-start justify-center overflow-hidden group">
              <Zap className="absolute -right-10 -bottom-10 w-64 h-64 text-red-500/10 group-hover:scale-110 transition-transform duration-700 rotate-12" strokeWidth={1} />
              <div className="relative z-10">
                <h3 className="flex items-center gap-2 text-2xl font-heading font-black text-red-400 mb-2">
                  <Zap size={24} fill="currentColor" /> Destrua seu Algoritmo
                </h3>
                <p className="text-secondary font-body text-sm md:text-base mb-6 max-w-md">
                  A plataforma detectou que você ouve muito "Hip-Hop Alternativo". Que tal sair da zona de conforto com algo brutalmente diferente?
                </p>
                <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-xl font-bold font-body text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
                  Gerar Antítese Musical
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-transparent p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/[0.02] transition-colors">
              <div className="p-4 rounded-full bg-white/5 text-primary/60">
                <Wind size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary/80 mb-1">Limpador de Paladar</h3>
                <p className="text-xs font-body text-secondary mb-4">Fadiga auditiva? Reinicie seus ouvidos com texturas ambientes.</p>
                <button className="border border-white/10 text-primary/80 px-4 py-2 rounded-full font-body text-xs hover:bg-white/10 transition-colors">
                  Iniciar Sessão Zen
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* ========================================= */}
      {/* ABA 2: SOCIAL & FEED                      */}
      {/* ========================================= */}
      {activeTab === 'social' && (
        <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-500">
           <div className="w-full relative rounded-2xl bg-gradient-to-r from-yellow-900/40 via-yellow-600/10 to-transparent border border-yellow-500/30 p-4 md:p-6 flex items-center gap-4 md:gap-6 shadow-[0_0_30px_rgba(234,179,8,0.1)] overflow-hidden group cursor-pointer">
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-500/20 to-transparent blur-2xl group-hover:from-yellow-500/30 transition-all" />
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-lg overflow-hidden border-2 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" className="w-full h-full object-cover" alt="Discovery" />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black p-1 rounded-full"><Crown size={14} /></div>
            </div>
            <div className="flex-1 z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-yellow-400 font-heading font-bold text-xs uppercase tracking-wider animate-pulse">🚨 Promoção de Tier</span>
              </div>
              <p className="text-primary font-body text-sm md:text-base">
                <strong>@marina_sounds</strong> acabou de elevar <span className="text-yellow-400 font-bold">Discovery</span> para o glorioso <strong>S-Tier</strong>!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-1 flex flex-col gap-6">
              
              <div className="bg-surface/40 border border-orange-500/20 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden">
                <Flame className="absolute -right-4 -top-4 w-32 h-32 text-orange-500/10" strokeWidth={1} />
                <div className="flex items-center gap-2 text-orange-500 mb-2"><Activity size={18} /><h3 className="font-heading font-bold text-sm uppercase tracking-wide">Radar de Obsessão</h3></div>
                <div className="flex items-center gap-4 z-10">
                  <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg" className="w-14 h-14 rounded shadow-lg" alt="Igor" />
                  <div><p className="text-primary font-body text-sm leading-tight"><strong>@lucas_dev</strong> ouviu <em>IGOR</em> <strong>14 vezes</strong> nas últimas 48 horas.</p></div>
                </div>
              </div>

              <div className="bg-surface/40 border border-purple-500/20 rounded-2xl p-5 flex items-center gap-4 group cursor-pointer hover:bg-surface/60 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50 group-hover:scale-110 transition-transform"><Trophy size={20} className="text-purple-400" /></div>
                <div><p className="text-xs text-purple-400 font-heading uppercase font-bold mb-0.5">Nova Conquista</p><p className="text-primary font-body text-sm"><strong>@joaovitor</strong> desbloqueou <span className="text-purple-300 font-bold">Mestre do Jazz</span>.</p></div>
              </div>

              <div className="bg-surface/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-accent mb-2"><GitMerge size={18} /><h3 className="font-heading font-bold text-sm uppercase tracking-wide">Efeito Borboleta</h3></div>
                <p className="text-secondary font-body text-xs mb-3">Sua resenha gerou uma reação em cadeia:</p>
                <div className="flex items-center justify-between px-2">
                  <div className="flex flex-col items-center gap-1"><img src="https://images.unsplash.com/photo-1618609377864-6a5f65ce5737?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-accent" alt="Você" /><span className="text-[10px] text-primary">Você</span></div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-accent to-blue-500 mx-2 relative"><div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-surface px-1"><ArrowRight size={12} className="text-secondary" /></div></div>
                  <div className="flex flex-col items-center gap-1"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border border-blue-500" alt="Ana" /><span className="text-[10px] text-primary">Ana (Ouviu hoje)</span></div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-2 flex flex-col h-full">
              <div className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
                <div className="flex items-center justify-between mb-8 z-10">
                  <div className="flex items-center gap-2 text-red-400"><Swords size={20} /><h3 className="font-heading font-black text-lg uppercase tracking-wider">O Debate da Semana</h3></div>
                  <span className="text-xs font-body text-secondary bg-white/5 px-3 py-1 rounded-full">Hot Take</span>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 flex-1 z-10">
                  <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3 flex-1">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border border-accent" alt="User" />
                    <div className="flex text-accent"><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/></div>
                    <p className="text-primary font-body text-sm italic">"A maior obra-prima do século. Produção impecável e letras profundas."</p>
                    <span className="text-xs text-secondary font-bold">@carlos_m</span>
                  </div>
                  <div className="relative shrink-0 flex flex-col items-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl shadow-2xl overflow-hidden border-2 border-white/10 z-10"><img src="https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg" className="w-full h-full object-cover" alt="RAM" /></div>
                    <div className="absolute top-1/2 -translate-y-1/2 bg-background border border-white/10 w-12 h-12 rounded-full flex items-center justify-center font-heading font-black text-xl italic text-primary z-20 shadow-xl">VS</div>
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 flex-1">
                    <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full border border-red-500" alt="User" />
                    <div className="flex text-red-500"><Star size={14} fill="currentColor"/><Star size={14} className="opacity-30"/><Star size={14} className="opacity-30"/><Star size={14} className="opacity-30"/><Star size={14} className="opacity-30"/></div>
                    <p className="text-primary font-body text-sm italic">"Comercial demais. Abandonaram a essência eletrônica para fazer pop genérico."</p>
                    <span className="text-xs text-secondary font-bold">@sofia_r</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================= */}
      {/* ABA 3: AO VIVO                            */}
      {/* ========================================= */}
      {activeTab === 'aovivo' && (
        <div className="flex flex-col gap-8 md:gap-12 animate-in fade-in duration-500">
          
          <section className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900/60 to-black border border-emerald-500/30 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 group">
            <Radio className="absolute -right-10 -bottom-10 w-64 h-64 text-emerald-500/10 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
            <div className="relative flex-1 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-heading uppercase tracking-wider mb-4 border border-emerald-500/30 animate-pulse">
                <Radio size={14} /> Ao Vivo Agora
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-2">Rádio Pirata: O Ouro do Trip-Hop</h2>
              <p className="text-emerald-100/80 font-body text-sm md:text-base max-w-xl mb-4">
                <strong>@DJ_Shadowfax</strong> está a transmitir clássicos obscuros de Bristol. Junte-se a 24 ouvintes na sala e partilhe a *vibe*.
              </p>
              <div className="flex items-center gap-4 mb-6 bg-black/40 p-3 rounded-xl border border-white/5 w-fit">
                <div className="w-10 h-10 rounded overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e9/Massive_Attack_-_Mezzanine.png" alt="Playing" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">A Tocar Agora</span>
                  <span className="text-sm font-body text-primary font-medium">Teardrop - Massive Attack</span>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold font-body text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2">
                <Headphones size={18} /> Entrar na Sala
              </button>
            </div>
            <div className="relative shrink-0 text-center z-10 hidden md:block">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-3">
                 <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="DJ" />
              </div>
              <span className="text-sm font-bold text-emerald-300">@DJ_Shadowfax</span>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2">
              <PlayCircle className="text-accent" size={20} />
              <h2 className="text-xl md:text-2xl font-heading font-bold">Agora na Vitrola</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { user: 'Ana', track: 'Pink + White', artist: 'Frank Ocean', cover: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg' },
                { user: 'Carlos', track: 'DNA.', artist: 'Kendrick Lamar', cover: 'https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png' },
                { user: 'Maria', track: 'Brat', artist: 'Charli xcx', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Charli_XCX_-_Brat.png/220px-Charli_XCX_-_Brat.png' },
                { user: 'João', track: 'Get Lucky', artist: 'Daft Punk', cover: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-surface/30 p-3 rounded-xl border border-white/5 hover:bg-surface/50 transition-colors cursor-pointer group">
                  <div className="relative w-12 h-12 rounded overflow-hidden shrink-0">
                    <img src={item.cover} alt={item.track} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-wider">{item.user} está ouvindo</span>
                    <span className="text-sm font-heading font-bold text-primary truncate">{item.track}</span>
                    <span className="text-xs font-body text-secondary truncate">{item.artist}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-primary border-b border-white/5 pb-2"><Ticket className="text-blue-400" size={20} /><h3 className="text-lg font-heading font-bold">Clube do Disco</h3></div>
              <div className="flex items-center gap-6 mt-2">
                <div className="w-24 h-24 rounded-lg shadow-xl overflow-hidden shrink-0"><img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" alt="Dark Side" className="w-full h-full object-cover" /></div>
                <div className="flex flex-col">
                  <span className="text-blue-400 font-bold text-xs uppercase mb-1">Hoje às 21:00</span>
                  <h4 className="text-lg font-heading font-bold text-primary">The Dark Side of the Moon</h4>
                  <p className="text-sm text-secondary font-body mb-3">Audição sincronizada. Aperte o play junto com a comunidade.</p>
                  <button className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-2 rounded-full text-xs font-bold w-fit hover:bg-blue-600/30 transition-colors">Confirmar Presença</button>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-primary"><TrendingUp className="text-accent" size={20} /><h3 className="text-lg font-heading font-bold">Cápsula de Apostas</h3></div>
                <span className="text-xs bg-white/5 px-2 py-1 rounded-md text-secondary">Dropa sexta</span>
              </div>
              <p className="text-sm text-primary font-body font-medium">O próximo álbum do <strong>The Weeknd</strong> vai ser...</p>
              <div className="flex flex-col gap-2 mt-2">
                <button className="relative w-full bg-white/5 border border-white/10 p-3 rounded-lg text-left overflow-hidden group hover:border-accent/50 transition-colors">
                  <div className="absolute left-0 top-0 bottom-0 bg-accent/20 w-[70%] z-0" />
                  <span className="relative z-10 text-sm font-bold text-primary flex justify-between">Obra-prima <span className="text-accent">70%</span></span>
                </button>
                <button className="relative w-full bg-white/5 border border-white/10 p-3 rounded-lg text-left overflow-hidden group hover:border-red-500/50 transition-colors">
                  <div className="absolute left-0 top-0 bottom-0 bg-red-500/20 w-[10%] z-0" />
                  <span className="relative z-10 text-sm font-bold text-primary flex justify-between">Flop <span className="text-red-400">10%</span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================= */}
      {/* ABA 4: O LABORATÓRIO                      */}
      {/* ========================================= */}
      {activeTab === 'lab' && (
        <div className="flex flex-col gap-8 md:gap-12 animate-in fade-in duration-500">
          
          <div className="bg-surface/30 border border-white/10 rounded-2xl p-6 md:p-8 flex items-center justify-between">
             <div>
               <h2 className="text-xl md:text-2xl font-heading font-bold text-primary flex items-center gap-2">
                 <FlaskConical className="text-accent" /> Bem-vindo ao Laboratório
               </h2>
               <p className="text-secondary font-body mt-2 text-sm md:text-base">
                 Visualização avançada de dados musicais. Explore as conexões ocultas da indústria.
               </p>
             </div>
          </div>

          <div className="bg-[#050505] border border-white/5 rounded-3xl p-6 md:p-10 relative overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center group">
            <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
               <h3 className="text-lg md:text-xl font-heading font-bold text-white flex items-center gap-2">
                 <Network className="text-blue-400" /> Constelação Sonora
               </h3>
               <p className="text-xs text-secondary mt-1 uppercase tracking-widest">Grafo de Produção</p>
            </div>

            <div className="relative w-full max-w-2xl aspect-square md:aspect-video mt-10 md:mt-0">
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                 <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                 <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                 <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
                 <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer hover:scale-110 transition-transform">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rick_Rubin_2016.jpg/800px-Rick_Rubin_2016.jpg" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]" alt="Rick Rubin" />
                 <span className="mt-2 text-xs font-bold text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/10">Rick Rubin</span>
              </div>

              <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform group/node">
                 <img src="https://upload.wikimedia.org/wikipedia/en/3/31/Red_Hot_Chili_Peppers_-_Blood_Sugar_Sex_Magik.jpg" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 group-hover/node:border-blue-400 transition-colors shadow-lg" alt="BSSM" />
                 <span className="mt-2 text-[10px] text-secondary opacity-0 group-hover/node:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded">Blood Sugar Sex Magik</span>
              </div>

              <div className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform group/node">
                 <img src="https://upload.wikimedia.org/wikipedia/en/8/87/Johnny_Cash_-_American_IV_-_The_Man_Comes_Around.jpg" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 group-hover/node:border-blue-400 transition-colors shadow-lg" alt="Cash" />
                 <span className="mt-2 text-[10px] text-secondary opacity-0 group-hover/node:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded">American IV</span>
              </div>

              <div className="absolute top-[80%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform group/node">
                 <img src="https://upload.wikimedia.org/wikipedia/en/6/64/SystemoftheDownToxicityalbumcover.jpg" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 group-hover/node:border-blue-400 transition-colors shadow-lg" alt="SOAD" />
                 <span className="mt-2 text-[10px] text-secondary opacity-0 group-hover/node:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded">Toxicity</span>
              </div>

              <div className="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform group/node">
                 <img src="https://upload.wikimedia.org/wikipedia/en/2/22/Jay-Z_-_The_Black_Album.jpg" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/20 group-hover/node:border-blue-400 transition-colors shadow-lg" alt="Jay-Z" />
                 <span className="mt-2 text-[10px] text-secondary opacity-0 group-hover/node:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded">The Black Album</span>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 items-center">
                <div className="w-full flex items-center gap-2 text-primary border-b border-white/5 pb-3">
                  <Database className="text-purple-400" size={20} />
                  <h3 className="text-lg font-heading font-bold">Cofre de Samples</h3>
                </div>

                <div className="flex flex-col items-center gap-4 w-full max-w-xs">
                  <div className="flex items-center gap-4 w-full bg-white/5 border border-white/10 p-3 rounded-xl">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Daft_Punk_-_Discovery.jpg" className="w-12 h-12 rounded shadow" alt="Discovery" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-primary truncate">Harder, Better, Faster...</span>
                      <span className="text-xs text-secondary">Daft Punk (2001)</span>
                    </div>
                  </div>

                  <ArrowDown size={20} className="text-purple-400/50" />

                  <div className="flex items-center gap-4 w-full bg-purple-900/20 border border-purple-500/30 p-3 rounded-xl">
                    <img src="https://upload.wikimedia.org/wikipedia/en/2/2d/Cola_Bottle_Baby_Edwin_Birdsong.jpg" className="w-12 h-12 rounded shadow" alt="Edwin" />
                    <div className="flex flex-col">
                      <span className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-0.5">Sample Original</span>
                      <span className="text-sm font-bold text-white truncate">Cola Bottle Baby</span>
                      <span className="text-xs text-purple-200/70">Edwin Birdsong (1979)</span>
                    </div>
                  </div>
                </div>
             </div>

             <div className="bg-surface border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div className="w-full flex items-center gap-2 text-primary border-b border-white/5 pb-3">
                  <GitCommit className="text-green-400" size={20} />
                  <h3 className="text-lg font-heading font-bold">6 Graus de Separação</h3>
                </div>

                <p className="text-xs text-secondary text-center">Conectando <strong>Paul McCartney</strong> a <strong>Kendrick Lamar</strong></p>

                <div className="flex flex-col gap-2 relative mt-4">
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-green-500/20 via-green-500/50 to-green-500/20" />
                  
                  <div className="flex items-center gap-4 z-10 relative">
                    <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface shadow-lg overflow-hidden shrink-0"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Paul_McCartney_2021_%28cropped%29.jpg/800px-Paul_McCartney_2021_%28cropped%29.jpg" className="w-full h-full object-cover" alt="Paul" /></div>
                    <span className="text-sm font-bold text-primary">Paul McCartney</span>
                  </div>
                  
                  <div className="pl-14 py-1 text-xs text-green-400/80 italic flex items-center gap-2"><MoveRight size={12}/> Tocou em "FourFiveSeconds" com...</div>

                  <div className="flex items-center gap-4 z-10 relative">
                    <div className="w-12 h-12 rounded-full border-2 border-surface bg-surface shadow-lg overflow-hidden shrink-0"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg/800px-Kanye_West_at_the_2009_Tribeca_Film_Festival-2_%28cropped%29.jpg" className="w-full h-full object-cover" alt="Kanye" /></div>
                    <span className="text-sm font-bold text-primary">Kanye West</span>
                  </div>

                  <div className="pl-14 py-1 text-xs text-green-400/80 italic flex items-center gap-2"><MoveRight size={12}/> Produziu e cantou em "No More Parties in LA" com...</div>

                  <div className="flex items-center gap-4 z-10 relative">
                    <div className="w-12 h-12 rounded-full border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)] overflow-hidden shrink-0"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg/800px-Pulitzer2018-portraits-kendrick-lamar.jpg" className="w-full h-full object-cover" alt="Kendrick" /></div>
                    <span className="text-sm font-bold text-white">Kendrick Lamar</span>
                  </div>
                </div>
             </div>

          </div>
        </div>
      )}

    </main>
  );
}