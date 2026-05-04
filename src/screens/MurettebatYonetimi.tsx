// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Mürettebat Yönetimi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { ScreenId, AppState, CrewMember, CrewStatus } from '../types/domain';

interface MurettebatYonetimiProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
  onAddCrew: (member: CrewMember) => void;
  onUpdateCrew: (id: string, updates: Partial<CrewMember>) => void;
  onRemoveCrew: (id: string) => void;
}

export function MurettebatYonetimi({ currentScreen, onNavigate, state, onAddCrew, onUpdateCrew, onRemoveCrew }: MurettebatYonetimiProps) {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formStatus, setFormStatus] = useState<CrewStatus>('active');
  const [formError, setFormError] = useState('');

  const crew = state?.crew ?? [];
  const activeCount = crew.filter(c => c.status === 'active').length;

  const filteredCrew = crew.filter((member) => {
    const matchesSearch = search === '' || member.name.toLowerCase().includes(search.toLowerCase()) || member.id.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === '' || member.role.toLowerCase().includes(roleFilter.toLowerCase());
    const matchesStatus = statusFilter === '' || member.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleAddCrew = () => {
    if (!formName.trim() || !formRole.trim()) {
      setFormError('İsim ve rol alanları zorunludur.');
      return;
    }
    const newMember: CrewMember = {
      id: `crew-${Date.now()}`,
      name: formName.trim(),
      role: formRole.trim(),
      status: formStatus,
    };
    onAddCrew(newMember);
    setFormName('');
    setFormRole('');
    setFormStatus('active');
    setFormError('');
    setShowForm(false);
  };
  return (
    <>
      {/* TopNavBar */}
      <header className="bg-slate-950 flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md docked full-width top-0 border-b border-slate-800 shrink-0">
      <div className="flex items-center gap-6">
      <div className="text-xl font-black text-slate-100 tracking-widest">
                      HABİTAT KONTROL
                  </div>
      <nav className="hidden md:flex gap-4">
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">
                          O2: %98
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">
                          GÜÇ: %85
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-2 py-1 rounded">
                          GIDA: %92
                      </div>
      </nav>
      </div>
      <div className="flex items-center gap-4 text-blue-600 dark:text-blue-500">
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
      {/* SideNavBar */}
      <aside className="bg-slate-950 fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] flex flex-col py-4 space-y-2 z-40 top-16 pb-20">
      <div className="px-6 pb-6 border-b border-slate-800/50 mb-2">
      <div className="text-lg font-bold text-blue-500 mb-1">SEKTÖR-7</div>
      <div className="font-inter text-sm font-medium tracking-tight text-slate-400">Operasyonel Durum: Aktif</div>
      </div>
      <nav className="flex-1 flex flex-col space-y-1 font-inter text-sm font-medium tracking-tight">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined">assignment_late</span>
      <span>Görev Panosu</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined">architecture</span>
      <span>Habitat Tasarımı</span>
      </a>
      <a className="flex items-center gap-3 bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
      <span>Mürettebat</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined">timeline</span>
      <span>Kaynaklar</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined">warning</span>
      <span>Uyarılar</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined">settings</span>
      <span>Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto px-2 pt-4 border-t border-slate-800/50">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined">account_circle</span>
      <span>Profil</span>
      </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 ml-64 p-margin overflow-y-auto bg-surface relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="max-w-7xl mx-auto space-y-lg">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline-variant/30 pb-md">
      <div>
      <h1 className="font-headline-tr text-headline-tr text-on-surface mb-xs">Mürettebat Sicili</h1>
      <p className="font-body-tr text-body-tr text-on-surface-variant flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(180,197,255,0.8)]"></span>
                                  Aktif Personel: {activeCount} / {crew.length || 50}
                              </p>
      </div>
      <div className="flex gap-sm">
      <button className="bg-surface-container-high border border-outline-variant text-on-surface hover:bg-surface-bright px-md py-sm rounded flex items-center gap-2 transition-colors">
      <span className="material-symbols-outlined text-sm">download</span>
      <span className="font-label-tr text-label-tr uppercase">Rapor Çıktısı</span>
      </button>
      <button onClick={() => setShowForm(true)} className="bg-primary-container text-on-primary-container hover:bg-inverse-primary px-md py-sm rounded flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-sm">person_add</span>
      <span className="font-label-tr text-label-tr uppercase">Personel Ekle</span>
      </button>
      </div>
      </div>
      {/* Filters */}
      <div className="bg-surface-container border border-outline-variant/50 p-md rounded-lg flex flex-wrap gap-md items-center">
      <div className="flex-1 min-w-[200px] relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-surface-container-low border border-outline-variant text-on-surface placeholder:text-on-surface-variant/50 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-body-tr text-body-tr" placeholder="İsim veya ID numarası ile ara..." type="text" />
      </div>
      <div className="flex gap-sm items-center">
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider">Filtreler:</span>
      <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-3 py-2 focus:outline-none focus:border-primary font-body-tr text-body-tr appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d90a0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_8px_center] bg-[length:16px]">
      <option value="">Tüm Roller</option>
      <option value="mühendis">Mühendis</option>
      <option value="pilot">Pilot / Komuta</option>
      <option value="bilim">Bilim İnsanı</option>
      <option value="guvenlik">Güvenlik</option>
      </select>
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="bg-surface-container-low border border-outline-variant text-on-surface rounded-lg px-3 py-2 focus:outline-none focus:border-primary font-body-tr text-body-tr appearance-none pr-8 relative bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238d90a0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_8px_center] bg-[length:16px]">
      <option value="">Tüm Durumlar</option>
      <option value="active">Görevde</option>
      <option value="rest">İstirahatte</option>
      <option value="medical">Tıbbi Gözlem</option>
      <option value="mission">Görevde</option>
      </select>
      </div>
      </div>
      {/* Crew Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
      {showForm && (
        <article className="bg-surface-container-low border border-primary/50 rounded-xl p-md flex flex-col gap-4 relative overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.1)]">
        <h3 className="font-title-tr text-title-tr text-on-surface">Yeni Personel</h3>
        {formError && <p className="text-error text-sm">{formError}</p>}
        <div className="flex flex-col gap-2">
        <label className="text-xs text-on-surface-variant uppercase">İsim</label>
        <input value={formName} onChange={(e) => setFormName(e.target.value)} className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 text-on-surface focus:outline-none focus:border-primary" placeholder="Ad Soyad" />
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-xs text-on-surface-variant uppercase">Rol</label>
        <input value={formRole} onChange={(e) => setFormRole(e.target.value)} className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 text-on-surface focus:outline-none focus:border-primary" placeholder="Örn: Mühendis" />
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-xs text-on-surface-variant uppercase">Durum</label>
        <select value={formStatus} onChange={(e) => setFormStatus(e.target.value as CrewStatus)} className="bg-surface-container-lowest border border-outline-variant rounded px-3 py-2 text-on-surface focus:outline-none focus:border-primary">
        <option value="active">Görevde</option>
        <option value="rest">İstirahatte</option>
        <option value="medical">Tıbbi Gözlem</option>
        <option value="mission">Görevde</option>
        </select>
        </div>
        <div className="flex gap-2 mt-auto">
        <button onClick={() => { setShowForm(false); setFormError(''); }} className="flex-1 py-2 border border-outline-variant text-on-surface rounded hover:bg-surface-container transition-colors text-sm">İptal</button>
        <button onClick={handleAddCrew} className="flex-1 py-2 bg-primary-container text-on-primary-container rounded hover:bg-inverse-primary transition-colors text-sm">Kaydet</button>
        </div>
        </article>
      )}
      {filteredCrew.map((member) => (
        <article key={member.id} className={`bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-4 relative overflow-hidden group transition-colors duration-300 ${
          member.status === 'active' ? 'hover:border-primary/50' : member.status === 'medical' ? 'hover:border-error/50' : 'hover:border-primary/50'
        }`}>
        <div className={`absolute inset-0 bg-gradient-to-b ${
          member.status === 'active' ? 'from-primary/5' : member.status === 'medical' ? 'from-error/5' : 'from-primary/5'
        } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
        <div className="flex justify-between items-start z-10">
        <div className="w-16 h-16 rounded border-2 border-outline/30 overflow-hidden bg-surface-container-highest flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl text-outline">person</span>
        </div>
        <span className={`border font-mono-tr text-mono-tr px-2 py-1 rounded-sm flex items-center gap-1 shadow-[0_0_8px_${
          member.status === 'active' ? 'rgba(180,197,255,0.15)' : member.status === 'rest' ? 'transparent' : 'rgba(255,180,171,0.15)'
        }] ${
          member.status === 'active' ? 'bg-primary/10 border-primary/30 text-primary' :
          member.status === 'rest' ? 'bg-surface-variant border-outline text-on-surface-variant' :
          member.status === 'medical' ? 'bg-error/10 border-error/50 text-error' :
          'bg-primary/10 border-primary/30 text-primary'
        }`}>
        {member.status === 'active' && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>}
        {member.status === 'rest' && <span className="material-symbols-outlined text-[14px]">bed</span>}
        {member.status === 'medical' && <span className="material-symbols-outlined text-[14px]">warning</span>}
        {member.status === 'mission' && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>}
        {member.status === 'active' ? 'GÖREVDE' : member.status === 'rest' ? 'İSTİRAHATTE' : member.status === 'medical' ? 'ONAY BEKLİYOR' : 'GÖREVDE'}
        </span>
        </div>
        <div className="z-10">
        <h2 className="font-title-tr text-title-tr text-on-surface mb-xs">{member.name}</h2>
        <p className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest flex items-center gap-1">
        <span className="material-symbols-outlined text-[14px]">badge</span>
        {member.role}
        </p>
        </div>
        <div className="mt-auto pt-4 border-t border-outline-variant/30 flex flex-wrap gap-xs z-10 items-center justify-between">
        <span className="bg-surface-variant text-on-surface-variant font-mono-tr text-[11px] px-2 py-1 rounded">{member.id}</span>
        <button onClick={() => onRemoveCrew(member.id)} className="text-error hover:text-error-container transition-colors" aria-label="Personeli Kaldır">
        <span className="material-symbols-outlined text-[18px]">delete</span>
        </button>
        </div>
        </article>
      ))}
      {filteredCrew.length === 0 && !showForm && (
        <div className="col-span-full text-center text-on-surface-variant font-body-tr py-8">Personel bulunmuyor</div>
      )}
      {/* Add New Card Slot */}
      {!showForm && (
      <article onClick={() => setShowForm(true)} className="bg-surface-container-lowest border border-dashed border-outline-variant/50 rounded-xl p-md flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-surface-container hover:border-primary/50 transition-all duration-300 group min-h-[240px]">
      <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center group-hover:bg-primary-container/20 group-hover:text-primary transition-colors">
      <span className="material-symbols-outlined text-[24px]">person_add</span>
      </div>
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Yeni Personel Kaydı</span>
      </article>
      )}
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
