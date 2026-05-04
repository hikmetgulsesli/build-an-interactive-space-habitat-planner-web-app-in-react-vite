// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Modül Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect } from "react";
import type { ScreenId, AppState, HabitatModule, ModuleType, ModuleStatus } from '../types/domain';

interface ModulEkleduzenleProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
  onSaveModule: (module: HabitatModule) => void;
  onCancel: () => void;
}

export function ModulEkleduzenle({ currentScreen, onNavigate, state, onSaveModule, onCancel }: ModulEkleduzenleProps) {
  const editingModule = state?.selectedModuleId ? state.modules.find(m => m.id === state.selectedModuleId) : undefined;

  const [name, setName] = useState(editingModule?.name ?? '');
  const [type, setType] = useState<ModuleType>(editingModule?.type ?? 'living');
  const [status, setStatus] = useState<ModuleStatus>(editingModule?.status ?? 'active');
  const [capacity, setCapacity] = useState(editingModule?.capacity ?? 0);
  const [consumption, setConsumption] = useState(editingModule?.consumption ?? 0);
  const [output, setOutput] = useState(editingModule?.output ?? 0);
  const [error, setError] = useState('');

  const moduleId = editingModule?.id ?? `mod-${Date.now()}`;

  const handleSave = () => {
    if (!name.trim()) {
      setError('Modül ismi zorunludur.');
      return;
    }
    if (capacity <= 0) {
      setError('Kapasite değeri 0\'dan büyük olmalıdır.');
      return;
    }
    const module: HabitatModule = {
      id: moduleId,
      name: name.trim(),
      type,
      status,
      capacity,
      consumption,
      output,
      x: editingModule?.x ?? Math.floor(Math.random() * 500) + 50,
      y: editingModule?.y ?? Math.floor(Math.random() * 300) + 50,
    };
    onSaveModule(module);
  };

  const handleCancel = () => {
    setError('');
    onCancel();
  };
  return (
    <>
      {/* TopNavBar (JSON Controlled) */}
      <header className="bg-slate-950 flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md fixed w-full top-0 border-b border-slate-800">
      <div className="flex items-center gap-md">
      <span className="text-xl font-black text-slate-100 tracking-widest uppercase">HABİTAT KONTROL</span>
      </div>
      <div className="flex items-center gap-lg">
      <div className="flex gap-md">
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-sm py-xs rounded">O2: %98</span>
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-sm py-xs rounded">GÜÇ: %85</span>
      <span className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-sm py-xs rounded">GIDA: %92</span>
      </div>
      <div className="flex items-center gap-sm border-l border-slate-800 pl-lg">
      <button className="text-blue-600 dark:text-blue-500 hover:bg-slate-900/50 transition-colors duration-200 p-sm rounded-full active:scale-95 active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="text-blue-600 dark:text-blue-500 hover:bg-slate-900/50 transition-colors duration-200 p-sm rounded-full active:scale-95 active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      <div className="flex flex-1 pt-16">
      {/* SideNavBar (JSON Controlled) */}
      <nav className="bg-slate-950 fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] flex flex-col py-4 space-y-2 z-40 top-16">
      <div className="px-6 pb-6 mb-2 border-b border-slate-800">
      <div className="flex items-center gap-sm mb-xs">
      <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center border border-outline-variant" title="İstasyon Logosu">
      <span className="material-symbols-outlined text-primary text-sm">satellite_alt</span>
      </div>
      <span className="text-lg font-bold text-blue-500 tracking-tight">SEKTÖR-7</span>
      </div>
      <div className="font-inter text-xs font-medium tracking-tight text-slate-500">Operasyonel Durum: Aktif</div>
      </div>
      <div className="flex-1 flex flex-col space-y-1 px-2">
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined text-lg">assignment_late</span>
                          Görev Panosu
                      </a>
      {/* Active Nav Item */}
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 rounded-l active:translate-x-1" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined text-lg">architecture</span>
                          Habitat Tasarımı
                      </a>
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined text-lg">groups</span>
                          Mürettebat
                      </a>
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined text-lg">timeline</span>
                          Kaynaklar
                      </a>
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined text-lg">warning</span>
                          Uyarılar
                      </a>
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined text-lg">settings</span>
                          Ayarlar
                      </a>
      </div>
      <div className="px-2 pt-4 border-t border-slate-800 mt-auto mb-16">
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined text-lg">account_circle</span>
                          Profil
                      </a>
      <a className="flex items-center gap-md font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded active:translate-x-1" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined text-lg">logout</span>
                          Çıkış
                      </a>
      </div>
      </nav>
      {/* Main Canvas */}
      <main className="flex-1 ml-64 p-margin xl:p-xl flex flex-col">
      <header className="mb-lg flex justify-between items-end">
      <div>
      <h1 className="font-display-tr text-display-tr text-on-surface mb-xs">Modül Konfigürasyonu</h1>
      <p className="font-body-tr text-body-tr text-on-surface-variant">Habitat şebekesine yeni bir yaşam veya destek ünitesi ekleyin.</p>
      </div>
      <div className="font-mono-tr text-mono-tr text-outline px-md py-xs border border-outline-variant bg-surface-container rounded-DEFAULT">
                          ID: {moduleId}
                      </div>
      </header>
      {/* Grid Layout for Form and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter flex-1">
      {/* Left Column: The Form */}
      <div className="lg:col-span-8 flex flex-col gap-gutter">
      <div className="bg-surface border border-outline-variant rounded-lg p-lg shadow-sm">
      <h2 className="font-title-tr text-title-tr text-on-surface mb-lg flex items-center gap-sm">
      <span className="material-symbols-outlined text-primary">edit_document</span>
                                  Temel Parametreler
                              </h2>
      {error && (
        <p className="font-label-tr text-label-tr text-error mb-md flex items-center gap-xs">
        <span className="material-symbols-outlined text-[14px]">error</span>{error}
        </p>
      )}
      <form className="space-y-lg" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
      {/* Row 1: Name & Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider" htmlFor="module_name">Modül İsmi <span className="text-error">*</span></label>
      <input value={name} onChange={(e) => { setName(e.target.value); setError(''); }} className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-tr text-body-tr text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline" id="module_name" placeholder="Örn: Laboratuvar-A" type="text" />
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider" htmlFor="module_type">Modül Sınıfı <span className="text-error">*</span></label>
      <div className="relative">
      <select value={type} onChange={(e) => setType(e.target.value as ModuleType)} className="appearance-none w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-tr text-body-tr text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" id="module_type">
      <option value="living">Yaşam Modülü</option>
      <option value="power">Enerji Reaktörü</option>
      <option value="greenhouse">Sera</option>
      <option value="lab">Laboratuvar</option>
      <option value="core">Merkezi Çekirdek</option>
      <option value="medical">Tıbbi Ünite</option>
      <option value="storage">Depo</option>
      </select>
      <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
      </div>
      </div>
      </div>
      {/* Row 2: Capacity & Power */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-md border-t border-surface-variant">
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider flex justify-between" htmlFor="capacity">
      <span>Kapasite / Hacim <span className="text-error">*</span></span>
      </label>
      <div className="relative">
      <input value={capacity} onChange={(e) => setCapacity(parseInt(e.target.value) || 0)} className={`w-full bg-surface-container-lowest border rounded-DEFAULT pl-md pr-12 py-sm font-mono-tr text-mono-tr text-on-surface focus:outline-none focus:ring-1 transition-all ${capacity <= 0 ? 'border-error focus:border-error focus:ring-error' : 'border-outline-variant focus:border-primary focus:ring-primary'}`} id="capacity" type="number" min="1" />
      <span className="absolute right-sm top-1/2 -translate-y-1/2 font-mono-tr text-mono-tr text-outline border-l border-outline-variant pl-sm pointer-events-none">m³</span>
      </div>
      {capacity <= 0 && <p className="font-label-tr text-label-tr text-error mt-xs flex items-center gap-xs">
      <span className="material-symbols-outlined text-[14px]">error</span>
                                              Kapasite değeri 0'dan büyük olmalıdır.
                                          </p>}
      </div>
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider" htmlFor="power_draw">Nominal Enerji Tüketimi</label>
      <div className="relative">
      <input value={consumption} onChange={(e) => setConsumption(parseInt(e.target.value) || 0)} className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT pl-md pr-12 py-sm font-mono-tr text-mono-tr text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" id="power_draw" placeholder="150" type="number" />
      <span className="absolute right-sm top-1/2 -translate-y-1/2 font-mono-tr text-mono-tr text-outline border-l border-outline-variant pl-sm pointer-events-none">kW</span>
      </div>
      </div>
      </div>
      {/* Row 3: Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md pt-md border-t border-surface-variant">
      <div className="flex flex-col gap-xs">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider" htmlFor="output">Üretim / Çıkış</label>
      <div className="relative">
      <input value={output} onChange={(e) => setOutput(parseInt(e.target.value) || 0)} className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT pl-md pr-12 py-sm font-mono-tr text-mono-tr text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" id="output" placeholder="0" type="number" />
      <span className="absolute right-sm top-1/2 -translate-y-1/2 font-mono-tr text-mono-tr text-outline border-l border-outline-variant pl-sm pointer-events-none">kW</span>
      </div>
      </div>
      </div>
      {/* Row 4: Status */}
      <div className="pt-md border-t border-surface-variant">
      <label className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-wider block mb-sm">Ağ Durumu</label>
      <div className="flex gap-md">
      <label className="flex items-center gap-sm cursor-pointer p-sm border border-outline-variant rounded-DEFAULT bg-surface-container hover:bg-surface-container-high transition-colors flex-1 justify-center">
      <input checked={status === 'active'} onChange={() => setStatus('active')} className="text-primary bg-surface-container-lowest border-outline-variant focus:ring-primary" name="status" type="radio" value="active" />
      <span className="font-label-tr text-label-tr text-on-surface">Derhal Aktifleştir</span>
      </label>
      <label className="flex items-center gap-sm cursor-pointer p-sm border border-outline-variant rounded-DEFAULT bg-surface-container hover:bg-surface-container-high transition-colors flex-1 justify-center opacity-70">
      <input checked={status === 'offline'} onChange={() => setStatus('offline')} className="text-primary bg-surface-container-lowest border-outline-variant focus:ring-primary" name="status" type="radio" value="offline" />
      <span className="font-label-tr text-label-tr text-on-surface">Beklemeye Al (Standby)</span>
      </label>
      </div>
      </div>
      {/* Actions */}
      <div className="flex justify-end gap-md pt-lg border-t border-surface-variant mt-xl">
      <button onClick={handleCancel} className="px-lg py-sm font-label-tr text-label-tr uppercase tracking-wider text-on-surface border border-outline-variant rounded-DEFAULT hover:bg-surface-container transition-colors" type="button">
                                          İptal Et
                                      </button>
      <button onClick={handleSave} className="px-lg py-sm font-label-tr text-label-tr uppercase tracking-wider bg-primary-container text-on-primary-container rounded-DEFAULT hover:bg-inverse-primary transition-colors flex items-center gap-sm shadow-[0_0_10px_rgba(37,99,235,0.2)] hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]" type="button">
      <span className="material-symbols-outlined text-[18px]">memory</span>
                                          Sisteme Kaydet
                                      </button>
      </div>
      </form>
      </div>
      </div>
      {/* Right Column: Visual Preview / Schematics */}
      <div className="lg:col-span-4 flex flex-col gap-gutter">
      <div className="bg-surface border border-outline-variant rounded-lg p-md shadow-sm h-full flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-surface-variant via-primary to-surface-variant opacity-50"></div>
      <h3 className="font-label-tr text-label-tr text-outline uppercase tracking-widest mb-md">Topoloji Önizlemesi</h3>
      <div className="flex-1 bg-surface-container-lowest border border-outline-variant border-dashed rounded-DEFAULT flex items-center justify-center relative group min-h-[240px]">
      {/* Schematic Placeholder Image */}
      <div className="absolute inset-2 border border-primary/20 rounded z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-surface-container-lowest to-surface-container-lowest"></div>
      <img alt="Habitat Schematic" className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale contrast-125" data-alt="A highly detailed, wireframe-style blueprint of an aerospace habitat module displayed on a dark, high-contrast digital monitor. The aesthetic is strictly corporate minimalist sci-fi, utilizing a deep space background palette with crisp, luminous neon blue and slate grey lines indicating structural integrity and data nodes. The lighting simulates a sophisticated heads-up display (HUD) emitting a soft, precise glow without casting realistic shadows. The overall mood is authoritative, technological, and mission-critical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5GiYLYfvoP132fMGpB41GrtisqHb5ezGfYKaYmlTxH5VBFhadZtWs2l1YiSmHNxCUVa6BEFvHJ11Ue4Zd2gf38rGD36kj8V2o6uX7nNwb8etRibnuc8jK1qhRBWOv7-aPLjd6yIk_YkMV3xlMTHLsHTO5xALEWCR2n-7WqpIFQir6NHVcKknvp6r9HCrzfR8MK0FoNaFaNJpneqgzEY57frDdyO3mOowSPKBAUM-gkgELFTG4W1cSs0McIH8TZMsSbiEpKRsvjs" />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
      <span className="material-symbols-outlined text-4xl text-outline mb-sm group-hover:text-primary transition-colors">view_in_ar</span>
      <span className="font-mono-tr text-mono-tr text-outline-variant bg-surface-container-lowest/80 px-2 py-1 rounded">VARSAYILAN ŞEMA</span>
      </div>
      </div>
      <div className="mt-md space-y-xs bg-surface-container p-sm rounded-DEFAULT border border-surface-variant">
      <div className="flex justify-between items-center">
      <span className="font-mono-tr text-mono-tr text-outline">Bağlantı Portları:</span>
      <span className="font-mono-tr text-mono-tr text-on-surface">4 Adet</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-mono-tr text-mono-tr text-outline">Yapısal Bütünlük:</span>
      <span className="font-mono-tr text-mono-tr text-on-surface">%100</span>
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
