import React, { useState } from 'react';
import { Play, Pause, Radio } from 'lucide-react';

const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    window.open('https://radiotatuapefm.radiostream321.com/', '_blank');
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark/95 border-t border-gray-800 backdrop-blur-sm z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Now Playing Info */}
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-primary rounded-lg flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
              <Radio className="w-6 h-6 text-light" />
            </div>
            <div>
              <h3 className="font-subheading text-light">Tatuapé FM</h3>
              <p className="text-sm text-gray-400">
                {isPlaying ? 'Tocando agora' : 'Rock Clássico 24/7'}
              </p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center space-x-6">
            <button
              onClick={handlePlayClick}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-light hover:bg-primary/90 transition-colors"
              aria-label={isPlaying ? 'Pausar' : 'Tocar'}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;