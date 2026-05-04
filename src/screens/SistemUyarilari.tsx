// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sistem Uyarıları
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SistemUyarilariProps {
  currentScreen: import('../types/domain').ScreenId;
  onNavigate: (screen: import('../types/domain').ScreenId) => void;
  state?: import('../types/domain').AppState;
  onDismissAlert?: (id: string) => void;
}

export function SistemUyarilari({ currentScreen, onNavigate, state, onDismissAlert }: SistemUyarilariProps) {
  const alerts = state?.alerts ?? [];
  const criticalCount = alerts.filter(a => a.level === 'critical').length;
  const warningCount = alerts.filter(a => a.level === 'warning').length;
  const infoCount = alerts.filter(a => a.level === 'info').length;
  return (
    <>
      {/* SideNavBar (Shared Component JSON) */}
      <nav className="hidden md:flex flex-col bg-slate-950 fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] py-4 space-y-2 z-50">
      {/* Header */}
      <div className="px-6 pb-6 border-b border-slate-800 mb-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/50 flex items-center justify-center text-blue-400">
      <span className="material-symbols-outlined">satellite_alt</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-blue-500 tracking-wider">SEKTÖR-7</h1>
      <p className="font-inter text-[10px] font-medium tracking-tight text-emerald-400 uppercase">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col space-y-1 px-2 font-inter text-sm font-medium tracking-tight">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined">assignment_late</span>
                      Görev Panosu
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined">architecture</span>
                      Habitat Tasarımı
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined">groups</span>
                      Mürettebat
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined">timeline</span>
                      Kaynaklar
                  </a>
      {/* Active Tab */}
      <a className="flex items-center gap-3 bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-l-DEFAULT" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                      Uyarılar
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined">settings</span>
                      Ayarlar
                  </a>
      </div>
      {/* Footer */}
      <div className="px-2 pt-4 border-t border-slate-800 space-y-1 font-inter text-sm font-medium tracking-tight mt-auto">
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined">account_circle</span>
                      Profil
                  </a>
      <a className="flex items-center gap-3 text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-DEFAULT text-red-400 hover:text-red-300" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined">logout</span>
                      Çıkış
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:ml-64 h-screen">
      {/* TopNavBar (Shared Component JSON) */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950 border-b border-slate-800">
      {/* Brand Mobile (Hidden on Desktop as SideNav has it, but JSON mandates brand logo style) */}
      <div className="md:hidden text-xl font-black text-slate-100 tracking-widest flex items-center gap-2">
      <span className="material-symbols-outlined text-blue-500">satellite_alt</span>
                      HABİTAT KONTROL
                  </div>
      {/* Empty div to push nav to right if needed, or hold telemetry */}
      <div className="hidden md:flex gap-6 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400">
      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> O2: %98</div>
      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> GÜÇ: %85</div>
      <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> GIDA: %92</div>
      </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4 text-blue-600 dark:text-blue-500">
      <button className="p-2 rounded-full hover:bg-slate-900/50 transition-colors duration-200 active:scale-95 active:opacity-80 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-950"></span>
      </button>
      <button className="p-2 rounded-full hover:bg-slate-900/50 transition-colors duration-200 active:scale-95 active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Alerts Canvas (Design System Applied) */}
      <div className="flex-1 overflow-y-auto p-gutter md:p-margin bg-background relative">
      {/* Atmospheric Background Texture (Fulfilling data-alt constraint via pseudo/bg-image approach) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-cover bg-center" data-alt="A highly detailed satellite view of a dark, alien planet surface illuminated by faint, glowing blue atmospheric grids and technological nodes. The scene evokes a deep-space, high-tech operational command center aesthetic. The lighting is extremely low-key, utilizing the deep blacks and slate grays of a minimalist SaaS dashboard, pierced only by sharp, luminescent cyan and electric blue data pathways. The mood is precise, vast, and utilitarian." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFR7qQF4nU3sJof4g5QaTX6bK4LM0RYKz4I8vY7cI3urp_FYpNIRyoZTVbpdBpSW-8YrFBcLoyZwS_OobnYUxINXaGySckzxbHOAIr90mYX0t2Y4As-Dqn0UoSBH6rCPhzlnqj0blVBd4QvLLd1sEbh1ZdZPg9Q7HudR7fhn-HSe-dn4yi3sP7dEXHXNeXp2iIh45B-ciPMwvjnTivrcwqPmTkaf7BnKMK16CuKfhsc6hnc8szxGgB0Gv1nY03mgLwAfPE0nLZ3JQ')"}}></div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-lg">
      {/* Page Header */}
      <div className="flex flex-col gap-xs">
      <h2 className="font-display-tr text-display-tr text-on-surface flex items-center gap-sm">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                              Sistem Uyarıları
                          </h2>
      <p className="font-mono-tr text-mono-tr text-on-surface-variant uppercase tracking-widest">
                              Protokol: Aktif İzleme // UTC 14:02:45
                          </p>
      </div>
      {/* Telemetry Summary Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Critical Stats */}
      <div className="bg-error-container border border-error/50 rounded-lg p-md flex items-center justify-between shadow-[0_0_15px_rgba(255,180,171,0.05)]">
      <div>
      <p className="font-label-tr text-label-tr text-on-error-container/80 uppercase">Kritik Arızalar</p>
      <p className="font-display-tr text-[32px] font-bold text-on-error-container leading-none mt-1">{String(criticalCount).padStart(2, '0')}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error">
      <span className="material-symbols-outlined text-[28px]">crisis_alert</span>
      </div>
      </div>
      {/* Moderate Stats */}
      <div className="bg-surface-container border border-tertiary/30 rounded-lg p-md flex items-center justify-between">
      <div>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase">Orta Seviye</p>
      <p className="font-display-tr text-[32px] font-bold text-tertiary leading-none mt-1">{String(warningCount).padStart(2, '0')}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined text-[28px]">error</span>
      </div>
      </div>
      {/* Low Stats */}
      <div className="bg-surface-container border border-outline-variant rounded-lg p-md flex items-center justify-between">
      <div>
      <p className="font-label-tr text-label-tr text-on-surface-variant uppercase">Düşük Seviye / Bilgi</p>
      <p className="font-display-tr text-[32px] font-bold text-secondary leading-none mt-1">{String(infoCount).padStart(2, '0')}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined text-[28px]">info</span>
      </div>
      </div>
      </div>
      {/* Alerts List/Grid */}
      <div className="flex flex-col gap-sm">
      <h3 className="font-label-tr text-label-tr text-outline uppercase border-b border-outline-variant pb-xs mb-xs">Aktif Bildirim Logu</h3>
      {alerts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 gap-md">
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
            <span className="material-symbols-outlined text-[32px] text-outline">check_circle</span>
          </div>
          <div className="text-center">
            <p className="font-title-tr text-title-tr text-on-surface-variant mb-1">Sistem Stabil</p>
            <p className="font-body-tr text-body-tr text-on-surface-variant/60 max-w-sm">Aktif uyarı bulunmuyor. Tüm sistemler nominal çalışma aralığında.</p>
          </div>
        </div>
      )}
      {alerts.map((alert) => {
        const isCritical = alert.level === 'critical';
        const isWarning = alert.level === 'warning';
        const accentColor = isCritical ? 'error' : isWarning ? 'tertiary' : 'secondary';
        const icon = isCritical ? 'emergency' : isWarning ? 'warning' : 'info';
        const label = isCritical ? 'KRİTİK' : isWarning ? 'ORTA' : 'DÜŞÜK';
        return (
          <div key={alert.id} className={`bg-surface-container-high rounded-lg border border-${accentColor}/40 p-0 flex flex-col sm:flex-row relative overflow-hidden group shadow-[0_0_12px_rgba(255,180,171,0.08)]`}>
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${accentColor} shadow-[0_0_8px_${isCritical ? 'rgba(255,180,171,0.8)' : 'transparent'}]`}></div>
            <div className="p-md flex-1 flex flex-col gap-xs pl-lg">
              <div className={`flex items-center gap-sm font-mono-tr text-mono-tr text-${accentColor}`}>
                <span className={`material-symbols-outlined text-[16px] ${isCritical ? 'animate-pulse' : ''}`}>{icon}</span>
                <span>{label}</span>
                <span className="text-on-surface-variant">•</span>
                <span className="text-on-surface-variant">Kod: {alert.code}</span>
                <span className="ml-auto text-on-surface-variant">{new Date(alert.timestamp).toLocaleString('tr-TR')}</span>
              </div>
              <h4 className="font-title-tr text-title-tr text-on-surface">{alert.message}</h4>
              {alert.moduleId && <p className="font-body-tr text-body-tr text-on-surface-variant">Modül ID: {alert.moduleId}</p>}
            </div>
            <div className="p-md bg-surface-container-highest border-l border-outline-variant flex sm:flex-col items-center justify-center gap-sm">
              {onDismissAlert && (
                <button onClick={() => onDismissAlert(alert.id)} className={`w-full sm:w-auto px-lg py-sm ${isCritical ? 'bg-error text-on-error' : isWarning ? 'bg-tertiary-container text-on-tertiary-container' : 'border border-outline text-on-surface'} rounded-DEFAULT font-label-tr text-label-tr uppercase tracking-widest hover:bg-surface-variant transition-colors`}>
                  Çözüldü
                </button>
              )}
            </div>
          </div>
        );
      })}
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
