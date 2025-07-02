
import React from 'react';

interface HotspotProps {
  position: { top: string; left: string };
  onClick: () => void;
  title: string;
}

const Hotspot: React.FC<HotspotProps> = ({ position, onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="absolute group"
      style={{ top: position.top, left: position.left }}
      aria-label={`Details for ${title}`}
    >
      <div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full animate-pulse-dot opacity-75"></div>
      <div className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-sky-500 rounded-full border-2 border-white"></div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {title}
      </div>
    </button>
  );
};

export default Hotspot;
