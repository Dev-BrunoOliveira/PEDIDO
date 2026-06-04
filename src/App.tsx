import { useState } from "react";
import ContractPage from "./components/ContractPage";
import PhotoGrid from "./components/PhotoGrid";
import QuizPage from "./components/QuizPage";
import fotoPerfil from "./assets/2.jpg";

export type Stage = "contract" | "photos" | "quiz";

function App() {
  const [stage, setStage] = useState<Stage>("contract");

  return (
    <div>
      {/* Topo do Orkut */}
      <header className="orkut-header">
        <div className="header-container">
          <div className="header-left">
            <h1 className="orkut-logo">orkut</h1>

            <nav className="orkut-nav">
              <span>Página inicial</span>
              <span className="nav-active">Perfil</span>
              <span>Recados</span>
              <span>Comunidades</span>
            </nav>
          </div>

          <div className="user-menu">
            <span className="user-name">Larissa</span>
            {" | "}
            <span className="logout-link">sair</span>
          </div>
        </div>
      </header>

      {/* Barra de endereço */}
      <div className="orkut-sub-bar">
        <div className="header-container">
          <div>
            http://www.orkut.com/Profile?uid=larissa_e_bruno
          </div>

          <div className="relationship-time">
            3 anos e 6 meses de parceria
          </div>
        </div>
      </div>

      {/* Layout principal */}
      <main className="main-layout">
        <aside className="profile-sidebar">
          <div className="profile-avatar-box">
            <img
              src={fotoPerfil}
              alt="Larissa e Bruno"
              className="profile-avatar"
            />
          </div>

          <h2 className="sidebar-name">Larissa</h2>

          <p className="sidebar-location">
            São Paulo, Brasil
          </p>

          <div className="profile-info-list">
            <div>
              <strong>status:</strong> Minha vida 🧡
            </div>

            <div>
              <strong>quem sou eu:</strong> fã de plantas e dogs
            </div>

            <div>
              <strong>comunidades:</strong> Bora ver Filme e ficar de Dengo!
            </div>
          </div>
        </aside>

        <section>
          {stage === "contract" && (
            <ContractPage
              onRenew={() => setStage("photos")}
            />
          )}

          {stage === "photos" && (
            <PhotoGrid
              onGoToQuiz={() => setStage("quiz")}
            />
          )}

          {stage === "quiz" && (
            <QuizPage
              onReset={() => setStage("contract")}
            />
          )}
        </section>
      </main>

      <footer className="orkut-footer">
        Feito com carinho para comemorar nossa data •
        orkut.com LLC © 2026
      </footer>
    </div>
  );
}

export default App;