// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Kullanıcı Profili
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { ScreenId, AppState } from '../types/domain';

interface KullaniciProfiliProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
}

interface SessionLog {
  date: string;
  ip: string;
  module: string;
  status: string;
  statusType: 'success' | 'error';
}

const DEFAULT_SESSIONS: SessionLog[] = [
  { date: '2084.11.04 - 14:32', ip: '192.168.7.104', module: 'O2_Sirkülasyon_Ana', status: 'BAŞARILI', statusType: 'success' },
  { date: '2084.11.04 - 09:15', ip: '192.168.2.011', module: 'Reaktör_Kontrol_X', status: 'REDDEDİLDİ', statusType: 'error' },
  { date: '2084.11.03 - 22:45', ip: '192.168.7.104', module: 'Kişisel_Oda_Erişimi', status: 'BAŞARILI', statusType: 'success' },
  { date: '2084.11.03 - 08:00', ip: '192.168.1.005', module: 'Ana_Giriş_Portalı', status: 'BAŞARILI', statusType: 'success' },
];

export function KullaniciProfili({ currentScreen, onNavigate, state }: KullaniciProfiliProps) {
  const [profile, setProfile] = useState({
    name: 'Dr. Elias Vance',
    role: 'Kıdemli İstasyon Mühendisi',
    id: 'EV-8849-Omega',
    department: 'Yaşam Destek Sis.',
    location: 'Sektör-7 / Kat 4',
  });
  const [editingName, setEditingName] = useState(false);
  const [editNameValue, setEditNameValue] = useState(profile.name);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordUpdated, setPasswordUpdated] = useState(false);
  const [sessions] = useState<SessionLog[]>(DEFAULT_SESSIONS);
  const [avatarUpdated, setAvatarUpdated] = useState(false);

  const handleNameSave = () => {
    if (editNameValue.trim()) {
      setProfile(p => ({ ...p, name: editNameValue.trim() }));
    }
    setEditingName(false);
  };

  const handleAvatarUpdate = () => {
    setAvatarUpdated(true);
    setTimeout(() => setAvatarUpdated(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePasswordUpdate = () => {
    if (currentPassword.length >= 4 && newPassword.length >= 4) {
      setPasswordUpdated(true);
      setCurrentPassword('');
      setNewPassword('');
      setTimeout(() => setPasswordUpdated(false), 3000);
    } else {
      alert('Şifre en az 4 karakter olmalıdır.');
    }
  };

  const resources = state?.resources ?? { oxygen: 98.2, power: 85.0, water: 92.4, food: 92.0 };

  const navLinkClass = (screen: ScreenId) => {
    const base = 'flex items-center gap-md text-slate-500 hover:text-slate-300 px-6 py-3 hover:bg-slate-900 transition-all duration-150';
    if (currentScreen === screen) {
      return `${base} bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)]`;
    }
    return base;
  };

  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <aside className="hidden md:flex bg-slate-950 text-blue-600 dark:text-blue-500 font-inter text-sm font-medium tracking-tight fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] flex-col py-4 space-y-2 z-40">
      {/* Header */}
      <div className="px-6 mb-6 flex flex-col gap-xs">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-blue-500" style={{fontVariationSettings: "'FILL' 1"}}>hexagon</span>
      <span className="text-lg font-bold text-blue-500 tracking-wider">SEKTÖR-7</span>
      </div>
      <span className="text-xs text-slate-500 font-mono-tr">Operasyonel Durum: Aktif</span>
      </div>
      {/* Main Navigation Tabs */}
      <nav className="flex-1 flex flex-col space-y-1">
      <a className={navLinkClass('tasks')} href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined">assignment_late</span>
      <span>Görev Panosu</span>
      </a>
      <a className={navLinkClass('habitat')} href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined">architecture</span>
      <span>Habitat Tasarımı</span>
      </a>
      <a className={navLinkClass('crew')} href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined">groups</span>
      <span>Mürettebat</span>
      </a>
      <a className={navLinkClass('resources')} href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined">timeline</span>
      <span>Kaynaklar</span>
      </a>
      <a className={navLinkClass('stats')} href="?screen=stats" onClick={(e) => { e.preventDefault(); onNavigate('stats'); }}>
      <span className="material-symbols-outlined">bar_chart</span>
      <span>İstatistikler</span>
      </a>
      <a className={navLinkClass('alerts')} href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined">warning</span>
      <span>Uyarılar</span>
      </a>
      <a className={navLinkClass('settings')} href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined">settings</span>
      <span>Ayarlar</span>
      </a>
      </nav>
      {/* Footer Navigation Tabs */}
      <div className="mt-auto border-t border-slate-800/50 pt-4 flex flex-col space-y-1">
      <a className={navLinkClass('profile')} href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
      <span>Profil</span>
      </a>
      <a className="flex items-center gap-md text-slate-500 hover:text-slate-300 px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 h-full relative">
      {/* TopNavBar (Shared Component) */}
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 flex justify-between items-center text-blue-600 dark:text-blue-500 font-inter tracking-tighter text-xs font-bold uppercase transition-colors duration-200">
      {/* Brand Logo (Mobile mostly, or left anchor) */}
      <div className="flex items-center">
      <span className="text-xl font-black text-slate-100 tracking-widest">HABİTAT KONTROL</span>
      </div>
      {/* Central/Right Cluster */}
      <div className="flex items-center gap-lg">
      {/* Navigation Links / Telemetry */}
      <div className="hidden lg:flex items-center gap-md border-r border-slate-800 pr-lg">
      <span className="text-slate-400 hover:text-slate-200 cursor-pointer">O2: %{resources.oxygen.toFixed(0)}</span>
      <span className="text-slate-400 hover:text-slate-200 cursor-pointer">GÜÇ: %{resources.power.toFixed(0)}</span>
      <span className="text-slate-400 hover:text-slate-200 cursor-pointer">GIDA: %{resources.food.toFixed(0)}</span>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-sm">
      <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 rounded-DEFAULT transition-colors duration-200 flex items-center justify-center" onClick={() => onNavigate('alerts')} aria-label="Bildirimler">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-2 text-blue-400 border-b-2 border-blue-500 pb-1 flex items-center justify-center scale-95 opacity-80" onClick={() => onNavigate('profile')} aria-label="Profil">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Canvas / Profile Dashboard */}
      <main className="flex-1 overflow-y-auto mt-16 p-lg bg-surface">
      <div className="max-w-7xl mx-auto space-y-lg">
      {/* Page Header */}
      <div className="flex items-end justify-between border-b border-outline-variant pb-md">
      <div>
      <h1 className="font-display-tr text-display-tr text-on-background">Personel Dosyası</h1>
      <p className="font-mono-tr text-mono-tr text-on-surface-variant mt-xs">Kimlik Doğrulama Seviyesi: Alpha-1</p>
      </div>
      <div className="hidden sm:flex gap-sm">
      <button onClick={handlePrint} className="px-md py-sm rounded-DEFAULT border border-outline text-on-surface hover:bg-surface-container-highest transition-colors font-label-tr text-label-tr flex items-center gap-xs">
      <span className="material-symbols-outlined text-[16px]">print</span>
                                  DOSYAYI YAZDIR
                              </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
      {/* LEFT COLUMN: Identity Card (Spans 4 cols) */}
      <div className="lg:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col items-center text-center relative overflow-hidden glow-effect">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
      <div className="relative w-32 h-32 rounded-full border-2 border-primary-container p-1 mb-md">
      <div className="w-full h-full rounded-full overflow-hidden bg-surface-variant relative">
      {/* Detailed prompt for profile image */}
      <img alt="Profil fotoğrafı" className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity" data-alt="A striking portrait of a male aerospace engineer in his late 30s, viewed head-on in a deep space control facility. The lighting is high-contrast and dramatic, dominated by cool blue glows from off-screen monitors reflecting on his face against a pitch-black background. He wears a dark, utilitarian station uniform with subtle technical insignias. The overall aesthetic is gritty, cinematic, and highly technological, fitting a corporate minimalist sci-fi UI concept." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg4U9voMMY_zuAXYjPvBepJXF-gqyoZc-kubWlkr3x02CkioEZsjfy9jr8iTt9XQN6kfq582k8xxw2YzjYc__4v5LSMZpOisfNVwxi7vReAbJhl_GuGERU8dpkhnj572mQIFWaEAfoM1sRLhypnuj6zOaygTQY1j2WxeW33Oo0T9MHnZX6xWZxvCdRoe90cZQO9AWDAY2aLq_5XlL5b0V-g21v23FeDwQjR8gweHXQ5P8jZx-j834c2bEF7c8A2w9wjEo-BemliOw" />
      <button onClick={handleAvatarUpdate} className="absolute bottom-0 left-0 w-full bg-surface-container-highest/90 text-on-surface py-1 text-[10px] font-label-tr uppercase tracking-widest hover:text-primary transition-colors border-t border-outline-variant backdrop-blur-sm">
                                          {avatarUpdated ? 'GÜNCELLENDİ' : 'GÜNCELLE'}
                                      </button>
      </div>
      {/* Status Indicator */}
      <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#10b981] border-2 border-surface-container shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
      </div>
      {editingName ? (
        <div className="flex items-center gap-2 mb-xs">
          <input
            autoFocus
            className="bg-surface border border-outline-variant rounded px-2 py-1 text-on-surface font-headline-tr text-headline-tr focus:outline-none focus:border-primary"
            value={editNameValue}
            onChange={(e) => setEditNameValue(e.target.value)}
            onBlur={handleNameSave}
            onKeyDown={(e) => { if (e.key === 'Enter') handleNameSave(); }}
          />
        </div>
      ) : (
        <h2 onClick={() => { setEditingName(true); setEditNameValue(profile.name); }} className="font-headline-tr text-headline-tr text-on-background mb-xs cursor-pointer hover:text-primary transition-colors" title="Düzenlemek için tıklayın">{profile.name}</h2>
      )}
      <span className="font-title-tr text-title-tr text-secondary mb-md">{profile.role}</span>
      <div className="flex items-center gap-xs px-sm py-xs bg-primary-fixed-dim/10 border border-primary/30 rounded-DEFAULT text-primary font-mono-tr text-mono-tr mb-lg">
      <span className="material-symbols-outlined text-[14px]">verified_user</span>
                                  Sistem Erişimi: AKTİF
                              </div>
      <div className="w-full space-y-xs text-left border-t border-outline-variant pt-md">
      <div className="flex justify-between items-center py-xs">
      <span className="text-on-surface-variant font-mono-tr text-mono-tr">ID No:</span>
      <span className="text-on-surface font-body-tr text-body-tr">{profile.id}</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="text-on-surface-variant font-mono-tr text-mono-tr">Departman:</span>
      <span className="text-on-surface font-body-tr text-body-tr">{profile.department}</span>
      </div>
      <div className="flex justify-between items-center py-xs">
      <span className="text-on-surface-variant font-mono-tr text-mono-tr">Konum:</span>
      <span className="text-on-surface font-body-tr text-body-tr">{profile.location}</span>
      </div>
      </div>
      </div>
      {/* MIDDLE & RIGHT COLUMNS CONTAINER */}
      <div className="lg:col-span-8 flex flex-col gap-lg">
      {/* Top Row in Right Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg h-full">
      {/* Permissions Module */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col">
      <div className="flex items-center gap-sm mb-md pb-xs border-b border-outline-variant/50">
      <span className="material-symbols-outlined text-tertiary">admin_panel_settings</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">İstasyon Yetkileri</h3>
      </div>
      <div className="flex-1 flex flex-col gap-sm mt-xs overflow-y-auto pr-sm">
      {/* List Item */}
      <div className="flex items-center justify-between p-sm bg-surface-container-highest rounded-DEFAULT border border-transparent hover:border-outline-variant transition-colors">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px] text-primary">science</span>
      <span className="font-body-tr text-body-tr text-on-surface">Laboratuvar-A</span>
      </div>
      <span className="font-mono-tr text-[11px] px-2 py-1 rounded-DEFAULT bg-primary/20 text-primary uppercase tracking-widest border border-primary/20">Tam Erişim</span>
      </div>
      {/* List Item */}
      <div className="flex items-center justify-between p-sm bg-surface-container-highest rounded-DEFAULT border border-transparent hover:border-outline-variant transition-colors">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px] text-primary">power</span>
      <span className="font-body-tr text-body-tr text-on-surface">Ana Reaktör</span>
      </div>
      <span className="font-mono-tr text-[11px] px-2 py-1 rounded-DEFAULT bg-surface-variant text-on-surface-variant uppercase tracking-widest border border-outline-variant">Salt Okunur</span>
      </div>
      {/* List Item */}
      <div className="flex items-center justify-between p-sm bg-surface-container-highest rounded-DEFAULT border border-transparent hover:border-outline-variant transition-colors">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px] text-primary">air</span>
      <span className="font-body-tr text-body-tr text-on-surface">Oksijen Tesisatı</span>
      </div>
      <span className="font-mono-tr text-[11px] px-2 py-1 rounded-DEFAULT bg-primary/20 text-primary uppercase tracking-widest border border-primary/20">Tam Erişim</span>
      </div>
      {/* List Item */}
      <div className="flex items-center justify-between p-sm bg-surface-container-highest rounded-DEFAULT border border-transparent hover:border-outline-variant transition-colors opacity-50">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-[18px] text-error">lock</span>
      <span className="font-body-tr text-body-tr text-on-surface">Silah Sistemleri</span>
      </div>
      <span className="font-mono-tr text-[11px] px-2 py-1 rounded-DEFAULT bg-error-container text-on-error-container uppercase tracking-widest border border-error/30">Erişim Yok</span>
      </div>
      </div>
      </div>
      {/* Security / Password Module */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col relative overflow-hidden">
      {/* Glitch/Tech subtle background */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-container/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="flex items-center gap-sm mb-md pb-xs border-b border-outline-variant/50">
      <span className="material-symbols-outlined text-primary">key</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Güvenlik Protokolleri</h3>
      </div>
      <form className="flex-1 flex flex-col gap-md mt-xs relative z-10" onSubmit={(e) => { e.preventDefault(); handlePasswordUpdate(); }}>
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest">Mevcut Şifre Kodu</label>
      <input className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-md py-sm text-on-surface font-mono-tr text-mono-tr focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="••••••••" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest">Yeni Şifre Kodu</label>
      <input className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-md py-sm text-on-surface font-mono-tr text-mono-tr focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50" placeholder="••••••••" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </div>
      <div className="mt-auto pt-sm">
      <button className={`w-full bg-primary-container text-on-primary-container rounded-DEFAULT px-md py-sm font-label-tr text-label-tr uppercase tracking-widest hover:bg-inverse-primary transition-colors shadow-[0_0_10px_rgba(37,99,235,0.2)] hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center gap-sm ${passwordUpdated ? 'opacity-80' : ''}`} type="submit">
      <span className="material-symbols-outlined text-[18px]">{passwordUpdated ? 'check' : 'update'}</span>
                                                  {passwordUpdated ? 'KOD GÜNCELLENDİ' : 'KODU GÜNCELLE'}
                                              </button>
      </div>
      </form>
      </div>
      </div>
      {/* Bottom Wide Module: Telemetry / Activity */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-lg flex flex-col">
      <div className="flex items-center justify-between mb-md pb-xs border-b border-outline-variant/50">
      <div className="flex items-center gap-sm">
      <span className="material-symbols-outlined text-secondary">history</span>
      <h3 className="font-title-tr text-title-tr text-on-surface">Sistem Oturum Geçmişi</h3>
      </div>
      <span className="font-mono-tr text-[10px] text-on-surface-variant">SON 72 SAAT</span>
      </div>
      {/* Table-like structure for SaaS density */}
      <div className="w-full overflow-x-auto">
      <table className="w-full text-left font-mono-tr text-mono-tr border-collapse">
      <thead>
      <tr className="border-b border-outline-variant/50 text-on-surface-variant text-[11px] uppercase tracking-widest">
      <th className="py-sm px-xs font-normal">Tarih/Zaman</th>
      <th className="py-sm px-xs font-normal">Terminal IP</th>
      <th className="py-sm px-xs font-normal">Erişilen Modül</th>
      <th className="py-sm px-xs font-normal text-right">Durum</th>
      </tr>
      </thead>
      <tbody className="text-on-surface">
      {sessions.map((session, i) => (
        <tr key={i} className="border-b border-surface-variant hover:bg-surface-variant/30 transition-colors">
        <td className="py-sm px-xs text-secondary">{session.date}</td>
        <td className="py-sm px-xs">{session.ip}</td>
        <td className="py-sm px-xs">{session.module}</td>
        <td className={`py-sm px-xs text-right ${session.statusType === 'success' ? 'text-primary' : 'text-error'}`}>{session.status}</td>
        </tr>
      ))}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
