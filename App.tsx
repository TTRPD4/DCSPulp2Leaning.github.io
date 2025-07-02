import React from 'react';
import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AbbAc450Page from './pages/AbbAc450Page';
import SupconPage from './pages/SupconPage';
import HollysysPage from './pages/HollysysPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans bg-slate-100 text-slate-800">
        <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="text-xl font-bold text-sky-700 hover:text-sky-900 transition-colors">
                DCS Learning Portal
              </NavLink>
              <div className="flex items-center space-x-2 md:space-x-4">
                <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                  หน้าหลัก
                </NavLink>
                <NavLink to="/honeywell" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                  Honeywell
                </NavLink>
                <NavLink to="/yokogawa" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                  Yokogawa
                </NavLink>
                <NavLink to="/abb-system" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-sky-100 text-sky-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                  ABB 800xA
                </NavLink>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/honeywell" element={<HollysysPage />} />
            <Route path="/yokogawa" element={<SupconPage />} />
            <Route path="/abb-system" element={<AbbAc450Page />} />
          </Routes>
        </main>

        <footer className="bg-slate-800 text-slate-300 py-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} DCS Learning Portal. All Rights Reserved.</p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
