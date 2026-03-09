import { useState } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  // Resultados falsos para testarmos o visual do dropdown
  const mockResults = [
    { id: '1', type: 'album', title: 'Random Access Memories', artist: 'Daft Punk', img: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Random_Access_Memories.jpg' },
    { id: '2', type: 'artist', title: 'Daft Punk', subtitle: 'Artista', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Daft_Punk_in_2013.jpg/800px-Daft_Punk_in_2013.jpg' },
  ];

  return (
    <div className="flex-1 max-w-md mx-8 relative">
      {/* Container do Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-secondary" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busque álbuns, artistas..."
          className="w-full bg-surface/50 border border-white/10 rounded-full py-2 pl-10 pr-10 text-sm font-body text-primary placeholder:text-secondary focus:outline-none focus:border-accent/50 focus:bg-surface/80 transition-all"
        />

        {/* Botão de limpar a busca (só aparece se tiver texto) */}
        {query.length > 0 && (
          <button 
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-secondary hover:text-primary transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Dropdown de Resultados (Aparece apenas quando o usuário digita algo) */}
      {query.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col">
          <div className="px-4 py-2 border-b border-white/5 bg-white/5">
            <span className="text-xs font-heading font-medium text-secondary uppercase tracking-wider">
              Resultados para "{query}"
            </span>
          </div>
          
          <div className="max-h-[300px] overflow-y-auto">
            {mockResults.map((result) => (
              <div 
                key={result.id} 
                className="flex items-center gap-3 p-3 hover:bg-white/5 cursor-pointer transition-colors"
              >
                {/* Imagem redonda para artista, quadrada para álbum */}
                <img 
                  src={result.img} 
                  alt={result.title} 
                  className={`w-10 h-10 object-cover ${result.type === 'artist' ? 'rounded-full' : 'rounded-md'}`}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-body font-medium text-primary">{result.title}</span>
                  <span className="text-xs font-body text-secondary">
                    {result.type === 'album' ? result.artist : result.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}