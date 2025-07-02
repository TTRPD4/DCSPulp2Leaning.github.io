
import React, { useEffect } from 'react';
import type { HotspotInfo } from '../types';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface DetailModalProps {
  hotspot: HotspotInfo;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ hotspot, onClose }) => {
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 id="modal-title" className="text-2xl font-bold text-sky-800">{hotspot.title}</h2>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
            aria-label="Close details"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </header>

        <div className="p-6 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-slate-700 mb-2 border-b pb-2">Component Details</h3>
              <div className="text-slate-600 space-y-4">
                {hotspot.description}
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold text-slate-700 mb-2 border-b pb-2 w-full text-center">Component Image</h3>
              <div className="mt-2 w-full aspect-w-4 aspect-h-3 bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src={hotspot.imageSrc} 
                  alt={hotspot.title} 
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
               <p className="text-xs text-slate-400 mt-2">
                This is a placeholder image. You can replace it in AbbAc450Page.tsx.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
