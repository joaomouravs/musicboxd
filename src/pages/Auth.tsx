import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Disc3, Music, Headset, Github } from 'lucide-react';

interface AuthProps {
  onNavigate: (route: string) => void;
}

export function Auth({ onNavigate }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);

  // Função para simular o clique de entrar e mandar o utilizador para a Home
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('home');
  };

  return (
    <div className="min-h-screen w-full flex bg-background font-body">
      
      {/* LADO ESQUERDO: Imagem e Branding (Oculto em ecrãs muito pequenos) */}
      <div className="hidden lg:flex flex-1 relative bg-black items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 opacity-80" />
        <img 
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop" 
          alt="Concert" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        />
        
        <div className="relative z-20 flex flex-col items-center text-center px-12">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-accent/30 shadow-[0_0_50px_rgba(99,102,241,0.5)]">
            <Disc3 size={48} className="text-accent animate-[spin_10s_linear_infinite]" />
          </div>
          <h1 className="text-5xl font-heading font-black text-white mb-6 tracking-tight">
            O Seu Panteão<br/><span className="text-accent">Musical.</span>
          </h1>
          <p className="text-lg text-secondary max-w-md leading-relaxed">
            Registe cada nota, debata clássicos e descubra a sua próxima obsessão sonora junto da maior comunidade de audiófilos do mundo.
          </p>
        </div>
      </div>

      {/* LADO DIREITO: O Formulário */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 relative overflow-hidden bg-surface/30">
        {/* Efeito de brilho no fundo */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Logo para Mobile */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex items-center gap-2 font-heading font-black text-2xl tracking-tighter">
              <Disc3 className="text-accent animate-[spin_3s_linear_infinite]" size={28} />
              <span>Music<span className="text-accent">Boxd</span></span>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-black text-white mb-2">
              {isLogin ? 'Bem-vindo de volta' : 'Comece a sua jornada'}
            </h2>
            <p className="text-secondary text-sm">
              {isLogin ? 'Sintonia estabelecida. Entre na sua conta.' : 'Crie o seu perfil e expanda o seu universo sonoro.'}
            </p>
          </div>

          {/* Botões Sociais */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all">
              <Github size={18} /> GitHub
            </button>
            <button className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all">
              <Headset size={18} /> Spotify
            </button>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">OU</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <form onSubmit={handleAuth} className="flex flex-col gap-4">
            
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  placeholder="Nome de utilizador" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="O seu melhor e-mail" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-secondary group-focus-within:text-accent transition-colors">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="Senha (mínimo 8 caracteres)" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {isLogin && (
              <div className="flex justify-end mt-[-8px]">
                <button type="button" className="text-xs text-accent hover:text-indigo-400 font-bold">Esqueceu a senha?</button>
              </div>
            )}

            <button type="submit" className="w-full bg-accent hover:bg-indigo-500 text-white font-black py-4 rounded-xl mt-4 flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-[0.98]">
              {isLogin ? 'ENTRAR NO SISTEMA' : 'CRIAR CONTA'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-secondary text-sm">
              {isLogin ? "Ainda não tem o seu passe VIP? " : "Já tem a sua credencial? "}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="text-white font-bold hover:text-accent transition-colors underline decoration-accent/50 underline-offset-4"
              >
                {isLogin ? 'Registe-se aqui.' : 'Entre aqui.'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}