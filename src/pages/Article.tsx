import { ArrowLeft, Bot, Sparkles, Share2, Heart, MessageSquare, PlayCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { generateAlbumArticle } from '../services/api';

interface ArticleProps {
  onNavigate: (route: string) => void;
  albumData?: any; // Recebe os dados do álbum escolhido
}

export function Article({ onNavigate, albumData }: ArticleProps) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [articleContent, setArticleContent] = useState<string[]>([]);

  // Se não houver álbum selecionado, usamos um de fallback (ex: In Rainbows)
  const albumName = albumData?.name || "In Rainbows";
  const artistName = albumData?.artists?.[0]?.name || "Radiohead";
  const coverUrl = albumData?.images?.[0]?.url || "https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?w=1200&q=80";

  // EFEITO: Chamar a IA assim que a página abre
  useEffect(() => {
    async function fetchAIArticle() {
      setIsGenerating(true);
      // Chama a nossa API do Gemini
      const text = await generateAlbumArticle(albumName, artistName);
      
      // Divide o texto gigante que a IA cospe em parágrafos limpos
      const paragraphs = text.split('\n').filter((p: string) => p.trim().length > 0);
      setArticleContent(paragraphs);
      
      setIsGenerating(false);
    }
    
    fetchAIArticle();
  }, [albumName, artistName]);

  return (
    <div className="min-h-screen bg-background font-body pb-24 selection:bg-accent/30">
      
      {/* NAVEGAÇÃO SUPERIOR */}
      <div className="fixed top-0 w-full bg-gradient-to-b from-black/80 to-transparent z-50 p-6 flex justify-between items-center pointer-events-none">
        <button onClick={() => onNavigate('explore')} className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 transition-all hover:scale-105">
          <ArrowLeft size={18} /> Voltar
        </button>
        <div className="flex gap-2 pointer-events-auto">
          <button className="bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/10 text-white hover:text-red-400 transition-colors"><Heart size={18} /></button>
          <button className="bg-black/40 backdrop-blur-md p-3 rounded-full border border-white/10 text-white hover:text-blue-400 transition-colors"><Share2 size={18} /></button>
        </div>
      </div>

      {isGenerating ? (
        // TELA DE CARREGAMENTO DA IA
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 blur-[150px] rounded-full animate-pulse" />
          <Bot size={64} className="text-accent mb-6 animate-bounce" />
          <h2 className="text-2xl font-heading font-black text-white mb-2 text-center">A IA está a dissecar os arquivos...</h2>
          <p className="text-secondary font-bold flex items-center gap-2 text-center px-4">
            <Sparkles size={16} className="text-amber-400 animate-spin" />
            A escrever o editorial sobre '{albumName}' dos {artistName}.
          </p>
        </div>
      ) : (
        // ARTIGO COMPLETO GERADO
        <div className="animate-in fade-in duration-1000 slide-in-from-bottom-8">
          
          {/* HEADER GIGANTE (HERO) */}
          <header className="relative w-full h-[70vh] flex items-end justify-center pb-16">
            <div className="absolute inset-0 z-0">
              <img src={coverUrl} alt={albumName} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
              <div className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mb-6 shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <Bot size={14} /> Artigo Editorial IA
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight tracking-tighter mb-6 shadow-black drop-shadow-2xl">
                A Engenharia de<br/><span className="text-accent">{albumName}.</span>
              </h1>
              <p className="text-xl text-white/80 font-serif italic max-w-2xl">
                Um mergulho profundo na mente de {artistName} e no impacto cultural desta obra sonora.
              </p>
            </div>
          </header>

          {/* CORPO DO TEXTO (GERADO PELA IA) */}
          <article className="max-w-3xl mx-auto px-6 mt-12 text-lg text-white/80 font-body leading-relaxed flex flex-col gap-8">
            {articleContent.map((paragraph, index) => {
              // Damos um destaque visual incrível ao primeiro parágrafo
              if (index === 0) {
                return (
                  <p key={index} className="first-letter:text-7xl first-letter:font-heading first-letter:font-black first-letter:text-accent first-letter:mr-3 first-letter:float-left">
                    {paragraph}
                  </p>
                );
              }
              // Adicionamos um leitor de música falso a meio do artigo para dar estilo de revista
              if (index === 2) {
                return (
                  <div key={index} className="flex flex-col gap-8">
                    <div className="my-2 bg-surface border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-accent/50 transition-colors cursor-pointer">
                      <img src={coverUrl} className="w-12 h-12 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">Ouvir Faixa Principal</h4>
                        <p className="text-xs text-secondary">{artistName}</p>
                      </div>
                      <button className="text-accent hover:scale-110 transition-transform"><PlayCircle size={32} /></button>
                    </div>
                    <p>{paragraph}</p>
                  </div>
                );
              }
              // Parágrafos normais
              return <p key={index}>{paragraph}</p>;
            })}
          </article>

          {/* FOOTER DO ARTIGO */}
          <div className="max-w-3xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center">
            <h3 className="text-white font-black mb-4">O que achou desta análise do Gemini?</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-surface hover:bg-white/10 px-6 py-3 rounded-full text-sm font-bold transition-colors border border-white/5"><Heart size={18} /> Brilhante</button>
              <button className="flex items-center gap-2 bg-surface hover:bg-white/10 px-6 py-3 rounded-full text-sm font-bold transition-colors border border-white/5"><MessageSquare size={18} /> Discutir</button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}