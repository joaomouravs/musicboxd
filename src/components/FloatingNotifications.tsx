import { useState } from 'react';
import { 
  Bell, X, Swords, Radio, TrendingUp, Flame, Trophy, 
  MapPin, Sparkles, ShieldAlert, Hourglass, Zap, CheckCircle2, XCircle
} from 'lucide-react';

export function FloatingNotifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BOTÃO FLUTUANTE (O Sino) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-surface border border-white/10 p-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:scale-110 transition-transform group"
      >
        <div className="relative">
          <Bell size={24} className="text-white group-hover:text-accent transition-colors" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-surface animate-bounce">
            10
          </span>
        </div>
      </button>

      {/* PAINEL LATERAL (Drawer) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Fundo escuro que fecha ao clicar */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* O Painel em si */}
          <aside className="relative w-full max-w-md h-full bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            
            <header className="flex items-center justify-between p-6 border-b border-white/10 bg-surface/50 backdrop-blur-md">
              <h2 className="text-xl font-heading font-black text-white flex items-center gap-2">
                <Bell className="text-accent" size={20} /> Central de Ecos
              </h2>
              <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-white bg-white/5 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-hide pb-24">
              
              {/* 10. DROP SURPRESA (Glitch / Pânico) */}
              <div className="bg-black border-2 border-green-500/50 p-4 rounded-2xl flex flex-col gap-3 relative overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.15)] group cursor-pointer">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay animate-pulse" />
                <div className="flex items-center gap-2 text-green-400 font-black text-xs uppercase tracking-widest relative z-10">
                  <Zap size={16} className="animate-pulse" /> ALERTA DE SISTEMA
                </div>
                <p className="text-sm text-white font-heading font-bold relative z-10 leading-tight">
                  DROP SURPRESA! Kendrick Lamar acabou de lançar um álbum não anunciado. A comunidade está em chamas. Junte-se ao caos agora.
                </p>
              </div>

              {/* 6. RADAR DA BAIXADA (Sincronia Geográfica) */}
              <div className="bg-gradient-to-br from-surface to-blue-900/20 border border-blue-500/30 p-4 rounded-2xl flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                    <MapPin size={16} /> Sincronia Local
                  </div>
                  <span className="text-[10px] text-secondary">Agora</span>
                </div>
                <p className="text-sm text-white font-body relative z-10">
                  Alguém a 5km de si, em Belford Roxo, também está a mergulhar no Trip-Hop nesta noite de segunda-feira.
                </p>
                <button className="text-xs font-bold text-blue-400 hover:text-white w-fit border border-blue-500/30 px-3 py-1 rounded-full relative z-10 transition-colors">
                  Ver Perfil
                </button>
              </div>

              {/* 1. CENTRAL DE DESAFIOS (Batalhas) */}
              <div className="bg-gradient-to-r from-red-950/40 to-blue-950/40 border border-white/10 p-4 rounded-2xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
                  <Swords size={16} className="text-accent" /> Desafio na Arena
                </div>
                <p className="text-sm text-white font-body">
                  <strong>@marina_sounds</strong> desafiou o seu álbum favorito. Ela diz que 'Kid A' é sobrestimado.
                </p>
                <div className="flex gap-2 mt-1">
                  <button className="flex-1 bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white text-xs font-black py-2 rounded-lg flex items-center justify-center gap-1 transition-colors"><Swords size={14}/> ACEITAR</button>
                  <button className="flex-1 bg-white/5 text-secondary hover:text-white text-xs font-black py-2 rounded-lg transition-colors">IGNORAR</button>
                </div>
              </div>

              {/* 7. VIBE SHIFT (Mudança de Aura) */}
              <div className="bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-md p-4 rounded-2xl flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 mix-blend-overlay" />
                <div className="flex items-center gap-2 text-pink-300 font-bold text-xs uppercase tracking-widest relative z-10">
                  <Sparkles size={16} /> Detenção de Vibe Shift
                </div>
                <p className="text-sm text-white font-body relative z-10">
                  A sua Aura Musical está a transitar de <em>'Sintético'</em> para <em>'Acústico/Melancólico'</em>. Bem-vindo à sua nova Era Indie.
                </p>
              </div>

              {/* 2. SONIC MATCH (Almas Gémeas) */}
              <div className="bg-fuchsia-950/30 border border-fuchsia-500/30 p-4 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-fuchsia-400 font-bold text-xs uppercase tracking-widest">
                  <Radio size={16} /> Sonic Match
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" className="w-10 h-10 rounded-full border-2 border-fuchsia-500" alt="Avatar"/>
                  <p className="text-sm text-white font-body flex-1">
                    Você e <strong>@astrogirl</strong> foram os únicos a dar 5★ àquele álbum obscuro de Shoegaze hoje.
                  </p>
                </div>
              </div>

              {/* 8. DEFESA DE HONRA (Tier List) */}
              <div className="bg-orange-950/30 border border-orange-500/40 p-4 rounded-2xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest">
                  <ShieldAlert size={16} /> O seu Tier S sob ataque
                </div>
                <p className="text-sm text-white font-body">
                  A comunidade acabou de rebaixar 'St. Anger' para o Tier C. Vá para a arena e escreva uma resenha para defender a honra deste álbum!
                </p>
              </div>

              {/* 4. RIOT (Ecos de Polémica) */}
              <div className="bg-red-950/30 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)] p-4 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest">
                  <Flame size={16} /> ALARME DE MOTIM
                </div>
                <p className="text-sm text-white font-body">
                  A sua resenha dando 1.5★ a 'Dark Side of the Moon' causou um motim! (42 novos comentários na última hora).
                </p>
              </div>

              {/* 3. BOLSA DE HYPE */}
              <div className="bg-emerald-950/30 border border-emerald-500/30 p-4 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                  <TrendingUp size={16} /> Dividendos de Credibilidade
                </div>
                <p className="text-sm text-white font-body">
                  O álbum 'Long Season' que você avaliou o ano passado subiu 400% na Bolsa de Hype hoje. Você foi um pioneiro!
                </p>
              </div>

              {/* 5. VITRINE DE CONQUISTAS */}
              <div className="bg-yellow-950/30 border border-yellow-500/40 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden">
                <div className="bg-yellow-500/20 p-3 rounded-full shrink-0">
                  <Trophy size={20} className="text-yellow-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-yellow-500 uppercase">Conquista Desbloqueada</span>
                  <p className="text-sm text-white font-bold">O Vampiro 🦇</p>
                  <p className="text-xs text-secondary">Avaliou 10 álbuns entre as 02h e as 05h.</p>
                </div>
              </div>

              {/* 9. CÁPSULA DO TEMPO */}
              <div className="bg-surface border border-white/10 p-4 rounded-2xl flex flex-col gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest">
                  <Hourglass size={16} /> Eco de 1 Ano
                </div>
                <p className="text-sm text-white font-body">
                  Faz exatamente 1 ano que você considerou 'Brat' o álbum do ano. A poeira assentou. Ainda mantém as 5 estrelas?
                </p>
              </div>

            </div>
          </aside>
        </div>
      )}
    </>
  );
}