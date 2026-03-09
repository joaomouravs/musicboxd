import { Music, Home, Compass, User, Layers, Swords, Search, Plus, Users } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  openReviewModal: () => void;
}

export function Navbar({ currentRoute, onNavigate, openReviewModal }: NavbarProps) {
  // Lista de navegação com todas as nossas funcionalidades
  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'explore', label: 'Explorar', icon: Compass },
    { id: 'community', label: 'Comunidade', icon: Users },
    { id: 'tierlist', label: 'Tier List', icon: Layers },
    { id: 'battle', label: 'Batalha', icon: Swords },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* NAVBAR SUPERIOR (Desktop & Topo do Mobile)                */}
      {/* ========================================================= */}
      <nav className="w-full bg-surface/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between gap-2 md:gap-4">
          
          {/* LOGOTIPO */}
          <div 
            className="flex items-center gap-2 text-accent cursor-pointer group shrink-0" 
            onClick={() => onNavigate('home')}
          >
            {/* Correção: Usando className para o tamanho responsivo */}
            <Music strokeWidth={2.5} className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
            <span className="font-heading font-black text-lg md:text-xl tracking-tight text-white hidden sm:block">
              Music<span className="text-accent">Boxd</span>
            </span>
          </div>

          {/* LINKS DE NAVEGAÇÃO - Visíveis apenas em ecrãs grandes (LG) */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentRoute === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-3 xl:px-4 py-2 rounded-full font-body text-sm font-bold transition-all ${
                    isActive ? 'bg-white/10 text-white shadow-inner' : 'text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* PESQUISA E BOTÃO AVALIAR */}
          <div className="flex items-center gap-2 md:gap-4 ml-auto lg:ml-0">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={16} />
              <input 
                type="text" 
                placeholder="Pesquisar álbuns..." 
                className="bg-black/40 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm font-body text-white focus:outline-none focus:border-accent transition-all w-32 xl:w-64"
              />
            </div>

            <button 
              onClick={openReviewModal}
              className="bg-accent hover:bg-accent/80 text-white p-2 md:px-5 md:py-2 rounded-full font-bold font-body text-sm transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center gap-2 shrink-0"
            >
              <Plus size={20} />
              <span className="hidden sm:block">Avaliar</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* NAVBAR INFERIOR (Mobile / Tablets)                        */}
      {/* ========================================================= */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-lg border-t border-white/5 z-40 px-2 sm:px-6 h-16 flex items-center justify-between pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentRoute === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 p-2 transition-colors flex-1 ${
                isActive ? 'text-accent' : 'text-secondary hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? "animate-in zoom-in duration-200" : ""} />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase truncate w-full text-center">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}