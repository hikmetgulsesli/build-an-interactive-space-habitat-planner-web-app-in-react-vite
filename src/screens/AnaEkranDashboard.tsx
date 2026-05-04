// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Ekran (Dashboard)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from "react";
import type { ScreenId, AppState, Task, Alert } from '../types/domain';

interface AnaEkranDashboardProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
}

export function AnaEkranDashboard({ currentScreen, onNavigate, state }: AnaEkranDashboardProps) {
  return (
    <>
      {/* SideNavBar (from JSON) */}
      <nav className="hidden md:flex flex-col h-full py-4 space-y-2 fixed left-0 w-64 border-r bg-slate-950 border-slate-800 z-40 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
      {/* Header */}
      <div className="px-6 pb-6 border-b border-slate-800 flex flex-col gap-1 mt-2">
      <div className="text-lg font-bold text-blue-500 font-headline-tr tracking-tight">SEKTÖR-7</div>
      <div className="text-slate-500 font-mono-tr text-mono-tr text-[10px] uppercase tracking-wider">Operasyonel Durum: Aktif</div>
      </div>
      {/* Tabs */}
      <div className="flex-1 overflow-y-auto mt-4 flex flex-col space-y-1 w-full">
      {/* Active Navigation (Görev Panosu matches intent of "Ana Ekran/Dashboard") */}
      <a className="flex items-center gap-3 w-full bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150 translate-x-1" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>assignment_late</span>
      <span>Görev Panosu</span>
      </a>
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined text-[20px]">architecture</span>
      <span>Habitat Tasarımı</span>
      </a>
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined text-[20px]">groups</span>
      <span>Mürettebat</span>
      </a>
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined text-[20px]">timeline</span>
      <span>Kaynaklar</span>
      </a>
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined text-[20px]">warning</span>
      <span>Uyarılar</span>
      </a>
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined text-[20px]">settings</span>
      <span>Ayarlar</span>
      </a>
      </div>
      {/* Footer Tabs */}
      <div className="border-t border-slate-800 pt-2 flex flex-col space-y-1 w-full">
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
      <span>Profil</span>
      </a>
      <a className="flex items-center gap-3 w-full text-slate-500 hover:text-slate-300 font-inter text-sm font-medium tracking-tight px-6 py-3 hover:bg-slate-900 transition-all duration-150" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined text-[20px]">logout</span>
      <span>Çıkış</span>
      </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 h-full relative w-full">
      {/* TopNavBar (from JSON) */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md docked full-width top-0 border-b border-slate-800 flat no shadows relative flex-shrink-0">
      {/* Brand Logo */}
      <div className="text-xl font-black text-slate-100 tracking-widest font-inter uppercase">
                      HABİTAT KONTROL
                  </div>
      {/* Navigation Links (Data Telemetry) */}
      <div className="hidden md:flex space-x-6 items-center">
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                          O2: %{state?.resources.oxygen.toFixed(1) ?? '98.0'}
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)]"></div>
                          GÜÇ: %{state?.resources.power.toFixed(0) ?? '85'}
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
                          GIDA: %{state?.resources.food.toFixed(0) ?? '92'}
                      </div>
      </div>
      {/* Trailing Icon Actions */}
      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-500">
      <button className="p-2 rounded hover:bg-slate-900/50 transition-colors duration-200 flex items-center justify-center relative">
      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-slate-950"></span>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="p-2 rounded hover:bg-slate-900/50 transition-colors duration-200 flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas (Dashboard Content) */}
      <main className="flex-1 overflow-y-auto p-gutter bg-background w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-[1600px] mx-auto w-full pb-xl">
      {/* Page Header */}
      <div className="col-span-1 md:col-span-12 mb-sm flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-sm">
      <div>
      <h1 className="font-display-tr text-display-tr text-on-surface">Ana Sistem Özeti</h1>
      <p className="font-body-tr text-body-tr text-on-surface-variant mt-1">Sektör-7 yaşam destek ve operasyonel metrikleri canlı yayında.</p>
      </div>
      <div className="font-mono-tr text-mono-tr text-on-surface-variant flex items-center gap-2 px-3 py-1.5 bg-surface-container border border-outline-variant rounded">
      <span className="material-symbols-outlined text-[16px] text-primary">sync</span>
                              SON GÜNCELLEME: {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })} TZT
                          </div>
      </div>
      {/* Metrics Bento Grid */}
      {/* O2 Card */}
      <div className="col-span-1 md:col-span-3 bg-surface-container-low border border-outline-variant p-lg rounded-lg relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest">Atmosfer O2</span>
      <span className="material-symbols-outlined text-primary text-[20px]">air</span>
      </div>
      <div className="z-10 mt-auto">
      <div className="font-display-tr text-display-tr text-on-surface mb-2">%{state?.resources.oxygen.toFixed(1) ?? '98.2'}</div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary shadow-[0_0_8px_var(--tw-colors-primary)] rounded-full" style={{width: `${state?.resources.oxygen ?? 98.2}%`}}></div>
      </div>
      <div className="font-mono-tr text-[10px] text-primary mt-2 uppercase tracking-wider flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">check_circle</span> {state && state.resources.oxygen > 95 ? 'Optimal Seviye' : state && state.resources.oxygen > 80 ? 'Normal Seviye' : 'Düşük Seviye'}
                              </div>
      </div>
      </div>
      {/* Power Card */}
      <div className="col-span-1 md:col-span-3 bg-surface-container-low border border-outline-variant p-lg rounded-lg relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest">Ana Şebeke Gücü</span>
      <span className="material-symbols-outlined text-amber-500 text-[20px]">bolt</span>
      </div>
      <div className="z-10 mt-auto">
      <div className="font-display-tr text-display-tr text-on-surface mb-2">%{state?.resources.power.toFixed(1) ?? '85.0'}</div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)] rounded-full" style={{width: `${state?.resources.power ?? 85}%`}}></div>
      </div>
      <div className="font-mono-tr text-[10px] text-amber-500 mt-2 uppercase tracking-wider flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">trending_down</span> {state && state.resources.power > 80 ? 'Tüketim Yüksek' : 'Kritik Seviye'}
                              </div>
      </div>
      </div>
      {/* Water Card (User requested Su/Water, JSON had Gıda/Food. We show both for a complete dashboard) */}
      <div className="col-span-1 md:col-span-3 bg-surface-container-low border border-outline-variant p-lg rounded-lg relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest">Su Rezervi</span>
      <span className="material-symbols-outlined text-cyan-500 text-[20px]">water_drop</span>
      </div>
      <div className="z-10 mt-auto">
      <div className="font-display-tr text-display-tr text-on-surface mb-2">%{state?.resources.water.toFixed(1) ?? '92.4'}</div>
      <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)] rounded-full" style={{width: `${state?.resources.water ?? 92.4}%`}}></div>
      </div>
      <div className="font-mono-tr text-[10px] text-cyan-500 mt-2 uppercase tracking-wider flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">check_circle</span> Filtreleme Aktif
                              </div>
      </div>
      </div>
      {/* Thermal Card */}
      <div className="col-span-1 md:col-span-3 bg-surface-container-low border border-outline-variant p-lg rounded-lg relative overflow-hidden group flex flex-col justify-between min-h-[140px]">
      <div className="absolute inset-0 bg-gradient-to-br from-error/5 to-transparent pointer-events-none"></div>
      <div className="flex justify-between items-start z-10">
      <span className="font-label-tr text-label-tr text-on-surface-variant uppercase tracking-widest">İç Ortam Isısı</span>
      <span className="material-symbols-outlined text-error text-[20px]">thermostat</span>
      </div>
      <div className="z-10 mt-auto">
      <div className="font-display-tr text-display-tr text-on-surface mb-2">{state?.resources.temperature.toFixed(1) ?? '22.4'}°C</div>
      <div className="w-full flex gap-1 h-1">
      <div className="h-full w-1/4 bg-surface-container-highest rounded-full"></div>
      <div className="h-full w-1/2 bg-error shadow-[0_0_8px_var(--tw-colors-error)] rounded-full"></div>
      <div className="h-full w-1/4 bg-surface-container-highest rounded-full"></div>
      </div>
      <div className="font-mono-tr text-[10px] text-error mt-2 uppercase tracking-wider flex items-center gap-1">
      <span className="material-symbols-outlined text-[12px]">warning</span> {state && state.resources.temperature > 25 ? 'Sıcaklık Yüksek' : state && state.resources.temperature < 18 ? 'Sıcaklık Düşük' : 'Regülasyon Gerekli'}
                              </div>
      </div>
      </div>
      {/* Alerts Column */}
      <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-md h-full flex flex-col">
      <div className="flex justify-between items-center mb-md pb-sm border-b border-outline-variant/50">
      <h2 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-error text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
                                      Aktif Uyarılar
                                  </h2>
      <span className="px-2 py-0.5 bg-error-container text-on-error-container font-mono-tr text-[10px] rounded">{state?.alerts.filter(a => a.level === 'critical').length ?? 0} KRİTİK</span>
      </div>
      <div className="flex-1 flex flex-col gap-2 overflow-y-auto pr-1">
      {(state?.alerts ?? []).slice(0, 3).map((alert) => (
        <div key={alert.id} className={`p-3 bg-surface/50 border rounded hover:border-opacity-50 transition-colors group cursor-pointer ${
          alert.level === 'critical' ? 'border-error/20 hover:border-error/50' : alert.level === 'warning' ? 'border-amber-500/20 hover:border-amber-500/50' : 'border-outline-variant/50 hover:border-primary/50'
        }`} onClick={() => onNavigate('alerts')}>
        <div className="flex justify-between items-start mb-1">
        <span className={`font-label-tr text-label-tr font-bold tracking-wider ${
          alert.level === 'critical' ? 'text-error' : alert.level === 'warning' ? 'text-amber-500' : 'text-primary'
        }`}>{alert.code}</span>
        <span className="font-mono-tr text-[10px] text-on-surface-variant group-hover:text-on-surface">
          {Math.floor((Date.now() - new Date(alert.timestamp).getTime()) / 60000)} dk önce
        </span>
        </div>
        <p className="font-body-tr text-[13px] text-on-surface-variant leading-tight">{alert.message}</p>
        </div>
      ))}
      {(!state?.alerts || state.alerts.length === 0) && (
        <div className="p-3 text-center text-on-surface-variant font-body-tr text-sm">Aktif uyarı bulunmuyor</div>
      )}
      </div>
      <button className="w-full mt-md py-2 border border-outline-variant text-on-surface-variant font-label-tr text-label-tr uppercase tracking-widest rounded hover:bg-surface-container-highest transition-colors" onClick={() => onNavigate('alerts')}>Tüm Logları Gör</button>
      </div>
      </div>
      {/* Main Chart Area */}
      <div className="col-span-1 md:col-span-8 flex flex-col gap-gutter">
      <div className="bg-surface-container-low border border-outline-variant rounded-lg p-md h-[400px] flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-center mb-md z-10 relative">
      <div>
      <h2 className="font-title-tr text-title-tr text-on-surface">Kaynak Kullanım Grafiği</h2>
      <p className="font-mono-tr text-[11px] text-on-surface-variant uppercase mt-1">Son 24 Saatlik Döngü (O2 vs Güç)</p>
      </div>
      <div className="flex gap-2 bg-surface-container-highest p-1 rounded">
      <button className="px-3 py-1 text-[11px] font-label-tr uppercase tracking-widest bg-surface-container-low text-primary rounded shadow-sm border border-outline-variant/30">O2</button>
      <button className="px-3 py-1 text-[11px] font-label-tr uppercase tracking-widest text-on-surface-variant hover:text-on-surface rounded">GÜÇ</button>
      <button className="px-3 py-1 text-[11px] font-label-tr uppercase tracking-widest text-on-surface-variant hover:text-on-surface rounded">SU</button>
      </div>
      </div>
      {/* Stylized Data Visualization (CSS Based) */}
      <div className="flex-1 w-full relative flex items-end justify-between px-4 pb-8 z-10">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between border-t border-b border-outline-variant/20 py-8 pointer-events-none">
      <div className="w-full border-t border-dashed border-outline-variant/10"></div>
      <div className="w-full border-t border-dashed border-outline-variant/10"></div>
      <div className="w-full border-t border-dashed border-outline-variant/10"></div>
      <div className="w-full border-t border-dashed border-outline-variant/10"></div>
      </div>
      {/* Graph Bars */}
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[30%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[45%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[40%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[60%] relative group"><div className="absolute inset-0 bg-primary/30 shadow-[0_0_15px_var(--tw-colors-primary)] group-hover:bg-primary/50 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[55%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[75%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[70%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[85%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[90%] relative group"><div className="absolute inset-0 bg-primary/40 shadow-[0_0_20px_var(--tw-colors-primary)] group-hover:bg-primary/60 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[65%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[50%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      <div className="w-8 bg-surface-container border border-outline-variant/50 h-[40%] relative group"><div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div></div>
      </div>
      {/* Graph X-Axis Labels */}
      <div className="absolute bottom-2 left-0 w-full flex justify-between px-6 font-mono-tr text-[10px] text-on-surface-variant z-10">
      <span>00:00</span>
      <span>04:00</span>
      <span>08:00</span>
      <span>12:00</span>
      <span>16:00</span>
      <span>20:00</span>
      </div>
      </div>
      </div>
      {/* Recent Tasks / Telemetry List */}
      <div className="col-span-1 md:col-span-12 bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest/50">
      <h2 className="font-title-tr text-title-tr text-on-surface">Son Görevler ve Protokoller</h2>
      <button className="flex items-center gap-1 font-label-tr text-[11px] text-primary hover:text-primary-fixed uppercase tracking-widest transition-colors">
                                  Tam Liste <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
      </button>
      </div>
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="font-mono-tr text-[11px] uppercase tracking-wider text-on-surface-variant bg-surface-container">
      <th className="p-3 border-b border-outline-variant/50 font-medium">Görev ID</th>
      <th className="p-3 border-b border-outline-variant/50 font-medium">Modül</th>
      <th className="p-3 border-b border-outline-variant/50 font-medium">Açıklama</th>
      <th className="p-3 border-b border-outline-variant/50 font-medium">Sorumlu</th>
      <th className="p-3 border-b border-outline-variant/50 font-medium text-right">Durum</th>
      </tr>
      </thead>
      <tbody className="font-body-tr text-sm text-on-surface divide-y divide-outline-variant/30">
      {(state?.tasks ?? []).slice(0, 5).map((task) => (
        <tr key={task.id} className="hover:bg-surface-container-highest/50 transition-colors group">
        <td className="p-3 font-mono-tr text-primary group-hover:text-primary-fixed transition-colors">{task.id}</td>
        <td className="p-3 text-on-surface-variant">{task.module}</td>
        <td className="p-3">{task.title}</td>
        <td className="p-3 text-on-surface-variant">{task.assignee}</td>
        <td className="p-3 text-right">
        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded font-mono-tr text-[10px] uppercase border ${
          task.status === 'in-progress' ? 'bg-primary/10 text-primary border-primary/20' :
          task.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
          'bg-surface-variant text-on-surface-variant border-outline-variant'
        }`}>
        {task.status === 'in-progress' && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>}
        {task.status === 'completed' && <span className="material-symbols-outlined text-[12px]">check</span>}
        {task.status === 'pending' && <span className="material-symbols-outlined text-[12px]">schedule</span>}
        {task.status === 'in-progress' ? 'Devam Ediyor' : task.status === 'completed' ? 'Tamamlandı' : 'Beklemede'}
        </span>
        </td>
        </tr>
      ))}
      {(!state?.tasks || state.tasks.length === 0) && (
        <tr><td colSpan={5} className="p-3 text-center text-on-surface-variant">Görev bulunmuyor</td></tr>
      )}
      </tbody>
      </table>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
