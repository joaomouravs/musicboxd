import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ReviewModal } from './components/ReviewModal';
import { FloatingNotifications } from './components/FloatingNotifications';

// Importação de todas as páginas
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Community } from './pages/Community';
import { TierList } from './pages/TierList';
import { Battle } from './pages/Battle';
import { Profile } from './pages/Profile';
import { Album } from './pages/Album';
import { Article } from './pages/Article'; // <-- A NOSSA NOVA REVISTA DE IA AQUI!

export function App() {
  // Estados globais da aplicação
  const [currentRoute, setCurrentRoute] = useState('auth');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  
  // O "Cérebro" que guarda o álbum que o utilizador escolheu
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  // Esconde a Navbar e as Notificações na tela de Login/Cadastro
  const showNavigation = currentRoute !== 'auth';

  // Função especial que guarda o álbum e muda a página ao mesmo tempo
  const handleSelectAlbum = (album: any) => {
    setSelectedAlbum(album);
    setCurrentRoute('album');
  };

  // Roteador manual que decide qual página mostrar
  const renderPage = () => {
    switch (currentRoute) {
      case 'auth': 
        return <Auth onNavigate={setCurrentRoute} />;
      case 'home': 
        return <Home onNavigate={setCurrentRoute} onSelectAlbum={handleSelectAlbum} />;
      case 'explore': 
        return <Explore onNavigate={setCurrentRoute} onSelectAlbum={handleSelectAlbum} />;
      case 'community': 
        return <Community />;
      case 'tierlist': 
        return <TierList />;
      case 'battle': 
        return <Battle />;
      case 'profile': 
        return <Profile />;
      case 'album': 
        return <Album albumData={selectedAlbum} onNavigate={setCurrentRoute} />;
      case 'article': 
        return <Article onNavigate={setCurrentRoute} />; // <-- A ROTA DO ARTIGO AQUI!
      default: 
        return <Auth onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-white font-body selection:bg-accent/30 relative">
      
      {/* Navegação de Topo (Oculta no Login) */}
      {showNavigation && (
        <Navbar 
          currentRoute={currentRoute} 
          onNavigate={setCurrentRoute} 
          openReviewModal={() => setIsReviewModalOpen(true)} 
        />
      )}

      {/* Conteúdo Dinâmico da Página Atual */}
      <main className="animate-in fade-in duration-500">
        {renderPage()}
      </main>

      {/* Modal de Escrever Resenha (Sobrepõe tudo) */}
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
      />

      {/* Sino de Notificações Lateral (Oculto no Login) */}
      {showNavigation && <FloatingNotifications />}
      
    </div>
  );
}

export default App;