import React from "react";

interface MusicPlayerModalProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
}

const MusicPlayerModal: React.FC<MusicPlayerModalProps> = ({
  isPlaying,
  onTogglePlay,
  onClose,
}) => {
  return (
    <div className="music-modal-overlay">
      <div className="music-modal">
        <div className="music-modal-header">
          Orkut Media Player 1.0
        </div>

        <p className="music-modal-label">
          Tocando Agora:
        </p>

        <p className="music-modal-song">
          KAMAUU - MANGO 🥭
        </p>

        <div className="music-modal-actions">
          <button
            onClick={onTogglePlay}
            className={
              isPlaying
                ? "music-btn music-btn-pause"
                : "music-btn music-btn-play"
            }
          >
            {isPlaying ? "⏸ PAUSAR MÚSICA" : "▶ DAR PLAY"}
          </button>

          <button
            onClick={onClose}
            className="music-modal-close"
          >
            Fechar janela [x]
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerModal;