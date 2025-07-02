import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import type { HotspotInfo } from '../types';
import Hotspot from '../components/Hotspot';
import DetailModal from '../components/DetailModal';

// ====================================================================================
// ===== USER EDITABLE SECTION 1: Main System Image ===================================
// ====================================================================================
// Replace this URL with the path to your main diagram of the ABB System 800xA.
const mainSystemImageUrl = "https://picsum.photos/seed/abb-800xa/1200/800";
// ====================================================================================


// ====================================================================================
// ===== USER EDITABLE SECTION 2: Component & Hotspot Data ============================
// ====================================================================================
// INSTRUCTIONS:
// - Edit this list to define the components of your system.
// - 'id': A unique number for each component.
// - 'title': The component's name (e.g., "FCS Controller").
// - 'description': A short description of the component.
// - 'imageSrc': A URL for an image of the component.
// - 'position': 'top' and 'left' percentages to place the hotspot on the main image.
// ====================================================================================
const hotspotData: HotspotInfo[] = [
  {
    id: 1,
    title: "FCS Controller",
    description: "Field Control Station สำหรับการควบคุมในระดับสนาม (Field Level Control) มีความสามารถในการประมวลผลสูงและเชื่อถือได้",
    imageSrc: "https://picsum.photos/seed/fcs/400/300",
    position: { top: '55%', left: '32%' },
  },
  {
    id: 2,
    title: "HMI Station",
    description: "Human Machine Interface หรือ Aspect Station เป็นส่วนแสดงผลและสั่งการสำหรับผู้ปฏิบัติงาน (Operator)",
    imageSrc: "https://picsum.photos/seed/hmi/400/300",
    position: { top: '25%', left: '65%' },
  },
  {
    id: 3,
    title: "Safety System (AC 800M HI)",
    description: "ระบบควบคุมความปลอดภัย (Safety Instrumented System - SIS) ที่ได้รับการรับรองมาตรฐาน SIL 3",
    imageSrc: "https://picsum.photos/seed/safety/400/300",
    position: { top: '75%', left: '45%' },
  },
  {
    id: 4,
    title: "System Network",
    description: "เครือข่ายการสื่อสารหลักของระบบ 800xA ใช้โปรโตคอลความเร็วสูงเพื่อให้การแลกเปลี่ยนข้อมูลเป็นไปอย่างมีประสิทธิภาพ",
    imageSrc: "https://picsum.photos/seed/network/400/300",
    position: { top: '60%', left: '80%' },
  },
];


const AbbSystem800xAPage: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotInfo | null>(null);

  const handleHotspotClick = (hotspotId: number) => {
    const hotspot = hotspotData.find(h => h.id === hotspotId);
    if (hotspot) {
      setSelectedHotspot(hotspot);
    }
  };

  const handleCloseModal = () => {
    setSelectedHotspot(null);
  }

  return (
    <>
      <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-inner animate-fade-in">
          <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors group text-sm font-medium">
                  <ArrowLeftIcon className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  กลับไปหน้าหลัก
              </Link>
          </div>

          <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">ระบบ ABB System 800xA</h1>
              <p className="mt-3 text-lg text-slate-600 max-w-4xl">
                  ระบบควบคุมแบบบูรณาการของ ABB ที่รวมทุกระบบย่อยในการควบคุมและสั่งการไว้ในแพลตฟอร์มเดียว
              </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
              <div className="flex items-start space-x-4">
                  <InformationCircleIcon className="h-8 w-8 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                      <h2 className="text-2xl font-bold text-slate-800">ภาพรวมระบบ</h2>
                      <p className="mt-2 text-slate-600">
                          ABB System 800xA เป็นมากกว่า DCS (Distributed Control System) แต่เป็นแพลตฟอร์มที่สามารถทำงานร่วมกับระบบไฟฟ้า, ระบบความปลอดภัย, และสินทรัพย์อื่นๆได้ ช่วยให้เห็นภาพรวม, เพิ่มประสิทธิภาพการผลิต, และลดความเสี่ยงในการดำเนินงาน
                      </p>
                  </div>
              </div>
          </div>

          <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">องค์ประกอบของระบบ</h3>
              <p className="text-slate-600 mb-6">คลิกที่จุดสีน้ำเงิน <span className="inline-block align-middle h-3 w-3 rounded-full bg-sky-500 animate-pulse-dot"></span> บนรูปภาพเพื่อดูรายละเอียดองค์ประกอบ</p>
              
              <div className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden border-4 border-white mb-12">
                  <img 
                    src={mainSystemImageUrl}
                    alt="ABB System 800xA Layout" 
                    className="w-full h-auto bg-gray-200"
                  />
                  {hotspotData.map((hotspot) => (
                    <Hotspot
                      key={hotspot.id}
                      position={hotspot.position}
                      onClick={() => handleHotspotClick(hotspot.id)}
                      title={hotspot.title}
                    />
                  ))}
              </div>
          </div>
      </div>

      {selectedHotspot && (
        <DetailModal hotspot={selectedHotspot} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default AbbSystem800xAPage;
