
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, CheckBadgeIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const SystemCard: React.FC<{
  badge: string;
  imageSrc: string;
  title: string;
  description: string;
  linkTo: string;
}> = ({ badge, imageSrc, title, description, linkTo }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full">{badge}</div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4 h-20">{description}</p>
      <Link to={linkTo} className="font-semibold text-sky-600 hover:text-sky-800 transition-colors flex items-center group">
        เรียนรู้เพิ่มเติม <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </Link>
    </div>
  </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="bg-slate-50 p-6 rounded-lg flex items-start space-x-4">
        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-violet-100 text-violet-600">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
            <p className="text-slate-600 mt-1">{description}</p>
        </div>
    </div>
);


const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
          ระบบ DCS ยอดนิยม 3 ระบบ
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          ศึกษาบทเรียนระบบควบคุมแบบกระจายที่ใช้กันอย่างแพร่หลายในอุตสาหกรรม พร้อมรูปภาพและการอธิบายองค์ประกอบแบบเข้าใจได้ง่าย
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SystemCard
          badge="ระบบที่ 1"
          imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
          title="Honeywell Experion PKS"
          description="ระบบควบคุมแบบกระจายของ Honeywell ที่ใช้ในอุตสาหกรรมปิโตรเคมี"
          linkTo="/honeywell"
        />
        <SystemCard
          badge="ระบบที่ 2"
          imageSrc="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200&auto=format&fit=crop"
          title="Yokogawa CENTUM VP"
          description="ระบบควบคุมที่มีความเสถียรสูงของ Yokogawa สำหรับอุตสาหกรรมต่างๆ"
          linkTo="/yokogawa"
        />
        <SystemCard
          badge="ระบบที่ 3"
          imageSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
          title="ABB System 800xA"
          description="ระบบควบคุมแบบบูรณาการของ ABB ที่รวมทุกระบบเข้าด้วยกัน"
          linkTo="/abb-system"
        />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">คุณสมบัติของสื่อการเรียนรู้</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
              <FeatureCard 
                icon={<BookOpenIcon className="h-6 w-6"/>} 
                title="เนื้อหาครบถ้วน"
                description="ข้อมูลละเอียดเกี่ยวกับระบบ DCS แต่ละประเภท"
              />
              <FeatureCard 
                icon={<CheckBadgeIcon className="h-6 w-6"/>} 
                title="เข้าใจได้ง่าย"
                description="คลิกที่รูปภาพเพื่อดูรายละเอียดองค์ประกอบ"
              />
              <FeatureCard 
                icon={<ArrowRightCircleIcon className="h-6 w-6"/>} 
                title="ใช้งานง่าย"
                description="อินเทอร์เฟซที่เรียบง่าย เหมาะสำหรับการเรียนรู้"
              />
          </div>
      </div>
    </div>
  );
};

export default HomePage;
