import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Radio } from 'lucide-react';

interface RadioPlayerProps {
  streamUrl: string;
}

const RadioPlayer: React.FC<RadioPlayerProps> = ({ streamUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark/95 border-t border-gray-800 backdrop-blur-sm z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Now Playing Info */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Radio className="w-6 h-6 text-light" />
            </div>
            <div>
              <h3 className="font-subheading text-light">Tatuapé FM</h3>
              <p className="text-sm text-gray-400">Rock Clássico 24/7</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex items-center space-x-6">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-light hover:bg-primary/90 transition-colors"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-gray-400 hover:text-highlight"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 accent-primary"
              />
            </div>
          </div>

          {/* Audio Element */}
          <audio
            ref={audioRef}
            src={streamUrl}
            preload="none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;