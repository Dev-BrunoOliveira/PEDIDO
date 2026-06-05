import React, { useState } from "react";
import MusicPlayerModal from "./MusicPlayerModal";

import foto1 from "../assets/1.jpg";
import foto2 from "../assets/2.jpg";
import foto3 from "../assets/3.jpg";
import foto4 from "../assets/4.jpg";
import foto5 from "../assets/5.jpg";
import foto6 from "../assets/6.jpg";
import foto7 from "../assets/7.jpg";
import foto8 from "../assets/8.jpg";
import foto9 from "../assets/9.jpg";

interface PhotoGridProps {
  onGoToQuiz: () => void;
}

const fotos = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
];

const PhotoGrid: React.FC<PhotoGridProps> = ({ onGoToQuiz }) => {
  const [showModal, setShowModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoId = "Zw_y3Kj_Sa8";

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${
    isPlaying ? "1" : "0"
  }&start=24&enablejsapi=1`;

  return (
    <div className="photo-grid-container">
      {/* Player oculto */}
      <div className="youtube-hidden">
        {isPlaying && (
          <iframe
            id="youtube-audio"
            width="1"
            height="1"
            src={embedUrl}
            title="KAMAUU - MANGO"
            allow="autoplay; encrypted-media"
          />
        )}
      </div>

      {/* Cabeçalho */}
      <div className="photo-grid-header">
        <span className="photo-grid-title">
          ✨ Que o nosso amor dure para sempre ✨
        </span>
      </div>

      {/* Grid de Fotos */}
      <div className="photos-grid">
        {fotos.map((src, index) => (
          <div key={index} className="photo-item">
            <img
              src={src}
              alt={`Momento nosso ${index + 1}`}
              className="photo-image"
            />

            <div className="photo-caption">
              Foto {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Botão próxima página */}
      <div className="next-page-container">
        <button
          onClick={onGoToQuiz}
          className="next-page-btn"
        >
          Próxima Página (Nosso Quiz) 
        </button>
      </div>

      {/* Modal da música */}
      {showModal && (
        <MusicPlayerModal
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default PhotoGrid;