
import React from 'react';

export interface HotspotInfo {
  id: number;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  position: {
    top: string;
    left: string;
  };
}
