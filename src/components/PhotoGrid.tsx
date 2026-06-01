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
    <div className="w-full max-w-2xl bg-white border-2 border-[#D4E2F4] p-4 rounded shadow-lg relative">

      {/* Player oculto */}
      <div className="hidden">
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
      <div className="bg-[#ECF3FC] border border-[#B4D2FF] p-2 mb-4 flex justify-between items-center">
        <span className="font-bold text-[#003399] text-sm">
          ✨ Dia da Nossa Mudança para nossa casa ✨
        </span>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#FF6600] text-white px-2 py-0.5 text-xs font-bold rounded border border-[#CC5200]"
        >
          🎵 Controlar Música
        </button>
      </div>

      {/* Grid de Fotos */}
      <div className="grid grid-cols-3 gap-3 bg-[#F4F8FC] p-3 border border-[#D4E2F4] rounded">
        {fotos.map((src, index) => (
          <div
            key={index}
            className="bg-white p-1.5 border border-[#CCD9E8] rounded shadow-sm hover:rotate-2 transition-transform duration-200"
          >
            <img
              src={src}
              alt={`Momento nosso ${index + 1}`}
              className="w-full h-28 object-cover rounded-sm grayscale-[20%] hover:grayscale-0"
            />

            <div className="text-[10px] text-center text-gray-400 mt-1 font-mono">
              Foto {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Botão próxima página */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onGoToQuiz}
          className="bg-[#A4CEFF] text-[#003399] hover:bg-[#B4D2FF] px-6 py-2 rounded font-bold border border-[#5B88C4] shadow-sm flex items-center gap-2"
        >
          Próxima Página (Nosso Quiz) →
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