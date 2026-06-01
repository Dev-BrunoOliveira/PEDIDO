import React from 'react';

interface MusicPlayerModalProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
}

const MusicPlayerModal: React.FC<MusicPlayerModalProps> = ({ isPlaying, onTogglePlay, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#E5EDF5] border-4 border-[#003399] p-5 max-w-xs w-full rounded shadow-2xl text-center">
        <div className="bg-[#003399] text-white font-bold p-1 -mx-5 -mt-5 mb-4 text-sm uppercase tracking-wide">
          Orkut Media Player 1.0
        </div>
        
        <p className="text-sm font-bold text-gray-700 mb-2">Tocando Agora:</p>
        <p className="text-sm italic text-[#E65C00] font-black mb-4">KAMAUU - MANGO 🥭</p>

        <div className="flex flex-col gap-2">
          <button
            onClick={onTogglePlay}
            className={`py-2 px-4 font-bold text-white rounded border-b-4 ${
              isPlaying 
                ? 'bg-[#CC0000] border-[#880000] hover:bg-[#DD0000]' 
                : 'bg-[#008000] border-[#005500] hover:bg-[#009900]'
            }`}
          >
            {isPlaying ? '⏸ PAUSAR MÚSICA' : '▶ DAR PLAY'}
          </button>
          
          <button
            onClick={onClose}
            className="text-xs text-gray-500 hover:underline mt-2"
          >
            Fechar janela [x]
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerModal;