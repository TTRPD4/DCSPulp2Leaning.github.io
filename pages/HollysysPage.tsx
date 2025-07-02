
import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline';

const HoneywellPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full bg-white p-12 rounded-lg shadow-md">
      <BeakerIcon className="h-16 w-16 text-sky-400 mb-4" />
      <h1 className="text-3xl font-bold text-slate-700">Honeywell Experion PKS</h1>
      <p className="mt-4 text-lg text-slate-500">
        เนื้อหาสำหรับระบบ Honeywell กำลังอยู่ในระหว่างการพัฒนา กรุณากลับมาตรวจสอบอีกครั้งในภายหลัง
      </p>
    </div>
  );
};

export default HoneywellPage;
