import { useRef } from 'react';
import gsap from 'gsap';

// Tipagem dos dados que o card vai receber
interface AlbumCardProps {
  title: string;
  artist: string;
  year: string;
  coverUrl: string;
}

export function AlbumCard({ title, artist, year, coverUrl }: AlbumCardProps) {
  // Referência para o GSAP saber qual elemento animar
  const cardRef = useRef<HTMLDivElement>(null);

  // Animação de entrada (quando o mouse passa por cima)
  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -8, // Sobe 8 pixels
      boxShadow: '0px 12px 24px -10px rgba(99, 102, 241, 0.4)', // Sombra com brilho (roxo/azul)
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  // Animação de saída (quando o mouse sai)
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0, // Volta para a posição original
      boxShadow: '0px 0px 0px 0px rgba(99, 102, 241, 0)', // Tira a sombra
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // Aqui está a mágica do Glassmorphism do Tailwind:
      // bg-white/5 (fundo 5% branco) + backdrop-blur-md (desfoque do fundo) + border-white/10 (borda sutil)
      className="w-[220px] p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer flex flex-col gap-3 transition-colors hover:bg-white/10"
    >
      {/* Container da Capa do Álbum */}
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-surface">
        <img 
          src={coverUrl} 
          alt={`Capa do álbum ${title}`} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Textos (Título, Artista e Ano) */}
      <div className="flex flex-col px-1">
        <h3 className="text-primary font-heading font-bold text-base truncate">
          {title}
        </h3>
        <p className="text-secondary font-body text-sm truncate">
          {artist} • {year}
        </p>
      </div>
    </div>
  );
}