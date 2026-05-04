// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Habitat Tasarımı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { ScreenId, AppState, HabitatModule, ModuleType } from '../types/domain';

interface HabitatTasarimiProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
  onSelectModule: (id: string) => void;
  onAddModule: () => void;
}

export function HabitatTasarimi({ currentScreen, onNavigate, state, onSelectModule, onAddModule }: HabitatTasarimiProps) {
  const modules = state?.modules ?? [];
  const activeCount = modules.filter(m => m.status === 'active').length;
  const warningCount = modules.filter(m => m.status === 'warning').length;
  const totalCapacity = modules.reduce((sum, m) => sum + (m.capacity ?? 0), 0);
  const usagePercent = modules.length > 0 ? Math.round((modules.length / 12) * 100) : 0;
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <aside className="fixed left-0 h-full w-64 border-r border-slate-800 bg-slate-950 flex flex-col h-full py-4 space-y-2 z-40">
      <div className="px-6 mb-8 mt-20">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded bg-primary-container/20 border border-primary/30 flex items-center justify-center">
      <span className="material-symbols-outlined text-primary" data-icon="satellite_alt">satellite_alt</span>
      </div>
      <div>
      <h2 className="font-headline-tr text-title-tr text-slate-100">SEKTÖR-7</h2>
      <p className="font-mono-tr text-mono-tr text-emerald-500">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      </div>
      <nav className="flex-1 px-2 space-y-1">
      {/* Inactive */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined" data-icon="assignment_late">assignment_late</span>
                      Görev Panosu
                  </a>
      {/* Active (Habitat Tasarımı) */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-l translate-x-1" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined" data-icon="architecture" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
                      Habitat Tasarımı
                  </a>
      {/* Inactive */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined" data-icon="groups">groups</span>
                      Mürettebat
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined" data-icon="timeline">timeline</span>
                      Kaynaklar
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined" data-icon="warning">warning</span>
                      Uyarılar
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
                      Ayarlar
                  </a>
      </nav>
      <div className="mt-auto px-2 pt-4 border-t border-slate-800 space-y-1">
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
                      Profil
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined" data-icon="logout">logout</span>
                      Çıkış
                  </a>
      </div>
      </aside>
      {/* Shared Component: TopNavBar */}
      <header className="docked full-width top-0 border-b border-slate-800 flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md fixed">
      <div className="text-xl font-black text-slate-100 tracking-widest pl-64 ml-6">
                  HABİTAT KONTROL
              </div>
      <div className="flex items-center gap-8">
      <div className="flex gap-6 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400">
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> O2: %98</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span> GÜÇ: %85</span>
      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span> GIDA: %92</span>
      </div>
      <div className="flex items-center gap-4 text-blue-600 dark:text-blue-500">
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded relative">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      </button>
      <div className="h-6 w-px bg-slate-800"></div>
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded relative group">
      <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
      <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
      </button>
      <button className="hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="ml-64 mt-16 p-gutter w-full h-[calc(100vh-64px)] flex flex-col gap-gutter overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-end shrink-0">
      <div>
      <h1 className="font-display-tr text-display-tr text-on-surface">Habitat Builder</h1>
      <p className="font-body-tr text-body-tr text-on-surface-variant mt-1">Modüler mimari konfigürasyon arayüzü.</p>
      </div>
      <button onClick={onAddModule} className="bg-primary-container text-on-primary-container font-label-tr text-label-tr px-md py-sm rounded-lg flex items-center gap-sm shadow-[0_0_12px_rgba(37,99,235,0.4)] hover:bg-inverse-primary transition-colors border border-primary/50">
      <span className="material-symbols-outlined" data-icon="add" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                      Yeni Modül Ekle
                  </button>
      </div>
      {/* Builder Workspace */}
      <div className="grid grid-cols-12 gap-gutter flex-1 min-h-0">
      {/* Side Panel: Inventory */}
      <div className="col-span-12 lg:col-span-3 bg-surface-container border border-outline-variant rounded-xl flex flex-col overflow-hidden">
      <div className="p-md border-b border-outline-variant bg-surface-container-high">
      <h3 className="font-title-tr text-title-tr text-on-surface">Envanter</h3>
      <p className="font-mono-tr text-mono-tr text-outline mt-1 text-xs">Kullanılabilir yapı birimleri</p>
      </div>
      <div className="p-sm flex-1 overflow-y-auto space-y-sm">
      {/* Inventory items based on actual modules */}
      {modules.map((mod) => (
        <div key={mod.id} className="bg-surface border border-outline-variant rounded-lg p-sm flex items-center gap-md cursor-grab hover:border-primary-fixed-dim hover:bg-surface-container-highest transition-all group">
        <div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center border border-outline-variant group-hover:border-primary-fixed-dim">
        <span className="material-symbols-outlined text-outline group-hover:text-primary-fixed-dim">{getModuleIcon(mod.type)}</span>
        </div>
        <div className="flex-1">
        <h4 className="font-label-tr text-label-tr text-on-surface">{mod.name}</h4>
        <div className="font-mono-tr text-mono-tr text-[10px] text-outline mt-0.5 flex gap-2">
        {mod.capacity !== undefined && <span>Kapasite: {mod.capacity}</span>}
        {mod.consumption !== undefined && <span>Tüketim: {mod.consumption}kW</span>}
        {mod.output !== undefined && <span>Üretim: {mod.output}</span>}
        <span className={`capitalize ${mod.status === 'active' ? 'text-emerald-400' : mod.status === 'warning' ? 'text-amber-400' : 'text-error'}`}>{mod.status}</span>
        </div>
        </div>
        <span className="material-symbols-outlined text-outline-variant group-hover:text-primary opacity-50" data-icon="drag_indicator">drag_indicator</span>
        </div>
      ))}
      {modules.length === 0 && (
        <div className="text-center text-on-surface-variant font-body-tr text-sm py-4">Modül bulunmuyor</div>
      )}
      </div>
      <div className="p-sm bg-surface-container-low border-t border-outline-variant">
      <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary-container" style={{width: `${usagePercent}%`}}></div>
      </div>
      <div className="flex justify-between mt-2 font-mono-tr text-mono-tr text-[10px] text-outline">
      <span>Ağ Kapasitesi</span>
      <span>%{usagePercent} Kullanımda ({modules.length}/12)</span>
      </div>
      </div>
      </div>
      {/* Main Canvas: Grid View */}
      <div className="col-span-12 lg:col-span-9 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden relative flex items-center justify-center hud-grid-bg shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
      {/* Zoom/Pan Controls */}
      <div className="absolute bottom-4 right-4 flex bg-surface-container border border-outline-variant rounded-lg shadow-lg">
      <button className="p-2 text-outline hover:text-on-surface hover:bg-surface-container-highest border-r border-outline-variant transition-colors">
      <span className="material-symbols-outlined text-sm" data-icon="remove">remove</span>
      </button>
      <div className="px-3 py-2 font-mono-tr text-mono-tr text-xs text-on-surface flex items-center justify-center">100%</div>
      <button className="p-2 text-outline hover:text-on-surface hover:bg-surface-container-highest border-l border-outline-variant transition-colors">
      <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
      </button>
      </div>
      {/* Canvas Content Wrapper (Simulated Transform) */}
      <div className="relative w-[800px] h-[600px]">
      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: "0"}}>
      {modules.length > 1 && modules.map((mod, i) => (
        i > 0 ? <line key={`conn-${mod.id}`} x1={modules[0].x ?? 400} y1={modules[0].y ?? 300} x2={mod.x ?? 400} y2={mod.y ?? 300} stroke="#434655" strokeWidth="2" strokeDasharray="4 4" /> : null
      ))}
      </svg>
      {/* Dynamic Placed Modules */}
      {modules.map((mod) => (
        <div
          key={mod.id}
          className={`absolute w-[180px] bg-surface-container border-2 rounded-lg shadow-lg z-10 cursor-pointer ring-1 transition-all hover:scale-[1.02] ${
            mod.status === 'active' ? 'border-primary shadow-[0_0_20px_rgba(37,99,235,0.3)] ring-primary-container/50' :
            mod.status === 'warning' ? 'border-tertiary shadow-[0_0_15px_rgba(188,72,0,0.15)]' :
            'border-error shadow-[0_0_15px_rgba(255,0,0,0.15)]'
          }`}
          style={{ top: `${mod.y ?? 250}px`, left: `${mod.x ?? 300}px` }}
          onClick={() => onSelectModule(mod.id)}
        >
        <div className={`p-2 border-b flex items-center justify-between ${
          mod.status === 'active' ? 'border-primary/30 bg-primary-container/10' :
          mod.status === 'warning' ? 'border-tertiary/30' : 'border-error/30'
        }`}>
        <div className="flex items-center gap-2">
        <span className={`material-symbols-outlined text-sm ${
          mod.status === 'active' ? 'text-primary' : mod.status === 'warning' ? 'text-tertiary' : 'text-error'
        }`}>{getModuleIcon(mod.type)}</span>
        <span className={`font-label-tr text-label-tr font-bold text-[11px] ${
          mod.status === 'active' ? 'text-primary-fixed' : mod.status === 'warning' ? 'text-tertiary-fixed-dim' : 'text-error'
        }`}>{mod.name}</span>
        </div>
        <div className={`w-2 h-2 rounded-full shadow-[0_0_5px_${
          mod.status === 'active' ? '#34d399' : mod.status === 'warning' ? '#f59e0b' : '#ef4444'
        }]`} style={{backgroundColor: mod.status === 'active' ? '#34d399' : mod.status === 'warning' ? '#f59e0b' : '#ef4444'}}></div>
        </div>
        <div className="p-3 bg-surface/50 backdrop-blur">
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono-tr text-outline">
        <div>DURUM: <span className="text-on-surface uppercase">{mod.status}</span></div>
        {mod.consumption !== undefined && <div>YÜK: <span className="text-on-surface">%{mod.consumption}</span></div>}
        {mod.capacity !== undefined && <div>KAPASİTE: <span className="text-primary-fixed-dim">{mod.capacity}</span></div>}
        {mod.output !== undefined && <div>ÇIKIŞ: <span className="text-on-surface">{mod.output}</span></div>}
        </div>
        </div>
        </div>
      ))}
      {/* Empty Slot Drop Zone */}
      <div className="absolute top-[450px] left-[325px] w-[150px] h-[80px] border-2 border-dashed border-outline-variant rounded-lg flex items-center justify-center bg-surface-container-lowest/50 z-0">
      <span className="font-mono-tr text-[10px] text-outline-variant uppercase tracking-widest">Bağlantı Noktası</span>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

function getModuleIcon(type: ModuleType): string {
  const icons: Record<ModuleType, string> = {
    living: 'bed',
    power: 'bolt',
    greenhouse: 'eco',
    lab: 'science',
    core: 'hub',
    medical: 'medical_services',
    storage: 'inventory_2',
  };
  return icons[type] ?? 'help';
}
