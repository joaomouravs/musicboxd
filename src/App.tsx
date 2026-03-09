import { useState } from 'react';

// Importação dos Componentes Globais
import { Navbar } from './components/Navbar';
import { ReviewModal } from './components/ReviewModal';

// Importação das Páginas
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Community } from './pages/Community'; // <-- A nossa nova página de Feed!
import { Profile } from './pages/Profile';
import { Album } from './pages/Album';

// (Certifique-se de que estes ficheiros existem na pasta pages, mesmo que vazios)
import { TierList } from './pages/TierList';
import { Battle } from './pages/Battle';

export function App() {
  // Estado que controla qual página o utilizador está a ver
  const [currentRoute, setCurrentRoute] = useState('home');
  
  // Estado global para o modal de avaliação
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  // Função para renderizar a aba correta
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        // Passamos o onNavigate para a Home para podermos clicar num disco e ir para o Álbum
        return <Home onNavigate={setCurrentRoute} />;
      case 'explore':
        return <Explore />;
      case 'community':
        return <Community />;
      case 'profile':
        return <Profile />;
      case 'tierlist':
        return <TierList />;
      case 'battle':
        return <Battle />;
      case 'album':
        return <Album />;
      default:
        return <Home onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-white font-body selection:bg-accent/30">
      
      {/* A nossa Navbar que agora já controla todas as rotas */}
      <Navbar 
        currentRoute={currentRoute} 
        onNavigate={setCurrentRoute} 
        openReviewModal={() => setIsReviewModalOpen(true)} 
      />
      
      {/* O conteúdo principal que muda consoante o menu */}
      <main className="animate-in fade-in duration-500">
        {renderPage()}
      </main>

      {/* O nosso Modal Global que sobrepõe qualquer página */}
      {isReviewModalOpen && (
        <ReviewModal onClose={() => setIsReviewModalOpen(false)} />
      )}
      
    </div>
  );
}