import { useState } from 'react';
import ContractPage from './components/ContractPage';
import PhotoGrid from './components/PhotoGrid';
import QuizPage from './components/QuizPage';
import fotoPerfil from './assets//2.jpg';

export type Stage = 'contract' | 'photos' | 'quiz';

function App() {
  const [stage, setStage] = useState<Stage>('contract');

  return (
    <div>
      {/* Topo do Orkut */}
      <header className="orkut-header">
        <div className="header-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <h1 className="orkut-logo">orkut</h1>
            <nav className="orkut-nav">
              <span>Página inicial</span>
              <span style={{ fontWeight: 'bold' }}>Perfil</span>
              <span>Recados</span>
              <span>Comunidades</span>
            </nav>
          </div>
          <div className="user-menu">
            <span style={{ fontWeight: 'bold' }}>Larissa</span> | <span style={{ color: '#A00' }}>sair</span>
          </div>
        </div>
      </header>

      {/* Sub-barra de Endereço */}
      <div className="orkut-sub-bar">
        <div className="header-container">
          <div>http://www.orkut.com/Profile?uid=larissa_e_bruno</div>
          <div style={{ fontWeight: 'bold', color: '#003399' }}>3 anos e 6 meses de parceria</div>
        </div>
      </div>

      {/* Layout Grid Centralizado */}
      <main className="main-layout">
        
        {/* Sidebar Esquerda */}
        <aside className="profile-sidebar">
          <div className="profile-avatar-box">
            {/* Trocamos a div de placeholder pela imagem real */}
            <img 
              src={fotoPerfil} 
              alt="Larissa e Bruno" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', // Faz com que a imagem preencha o quadrado sem distorcer
                display: 'block'
              }} 
            />
          </div>
          <h2 className="sidebar-name">Larissa</h2>
          <p className="sidebar-location">São Paulo, Brasil</p>
          
          <div className="profile-info-list">
            <div><strong>status:</strong> Minha vida 🧡</div>
            <div><strong>quem sou eu:</strong> fã de plantas e dogs</div>
            <div><strong>comunidades:</strong> Bora ver Filme e ficar de Dengo!</div>
          </div>
        </aside>

        {/* Conteúdo Dinâmico à Direita */}
        <section>
          {stage === 'contract' && (
            <ContractPage onRenew={() => setStage('photos')} />
          )}
          
          {/* Deixei mapeado para as próximas telas puxarem as caixas padrão também */}
          {stage === 'photos' && (
            <PhotoGrid onGoToQuiz={() => setStage('quiz')} />
          )}

          {stage === 'quiz' && (
            <QuizPage onReset={() => setStage('contract')} />
          )}
        </section>
      </main>

      <footer className="orkut-footer">
        Feito com carinho para comemorar nossa data • orkut.com LLC © 2026
      </footer>
    </div>
  );
}

export default App;