// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Kaynak Takibi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";
import type { ScreenId, AppState } from '../types/domain';

interface KaynakTakibiProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  state?: AppState;
}

export function KaynakTakibi({ currentScreen, onNavigate, state }: KaynakTakibiProps) {
  const resources = state?.resources ?? { oxygen: 98.2, power: 85.0, water: 92.4, food: 92.0, temperature: 22.4 };
  const [timeRange, setTimeRange] = useState<'24s' | '72s' | '7g'>('24s');
  return (
    <>
      {/* SideNavBar (from JSON) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-64 border-r border-slate-800 bg-slate-950 flex-col py-4 space-y-2 z-40 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
      {/* Header */}
      <div className="px-6 pb-6 pt-2 border-b border-slate-800 mb-4">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant shadow-[0_0_8px_#2563eb]">
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>hub</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-blue-500 tracking-tight">SEKTÖR-7</h1>
      <p className="font-label-tr text-label-tr text-slate-400">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col space-y-1 px-2">
      {/* Görev Panosu */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=tasks" onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}>
      <span className="material-symbols-outlined text-[20px]">assignment_late</span>
                      Görev Panosu
                  </a>
      {/* Habitat Tasarımı */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=habitat" onClick={(e) => { e.preventDefault(); onNavigate('habitat'); }}>
      <span className="material-symbols-outlined text-[20px]">architecture</span>
                      Habitat Tasarımı
                  </a>
      {/* Mürettebat */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=crew" onClick={(e) => { e.preventDefault(); onNavigate('crew'); }}>
      <span className="material-symbols-outlined text-[20px]">groups</span>
                      Mürettebat
                  </a>
      {/* Kaynaklar (ACTIVE STATE) */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-l-lg translate-x-1" href="?screen=resources" onClick={(e) => { e.preventDefault(); onNavigate('resources'); }}>
      <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>timeline</span>
                      Kaynaklar
                  </a>
      {/* Uyarılar */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=stats" onClick={(e) => { e.preventDefault(); onNavigate('stats'); }}>
      <span className="material-symbols-outlined text-[20px]">bar_chart</span>
                      İstatistikler
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=alerts" onClick={(e) => { e.preventDefault(); onNavigate('alerts'); }}>
      <span className="material-symbols-outlined text-[20px]">warning</span>
                      Uyarılar
                  </a>
      {/* Ayarlar */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=settings" onClick={(e) => { e.preventDefault(); onNavigate('settings'); }}>
      <span className="material-symbols-outlined text-[20px]">settings</span>
                      Ayarlar
                  </a>
      </div>
      {/* Footer */}
      <div className="mt-auto px-2 pt-4 border-t border-slate-800">
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="?screen=profile" onClick={(e) => { e.preventDefault(); onNavigate('profile'); }}>
      <span className="material-symbols-outlined text-[20px]">account_circle</span>
                      Profil
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg text-error" href="?screen=dashboard" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
      <span className="material-symbols-outlined text-[20px]">logout</span>
                      Çıkış
                  </a>
      </div>
      </nav>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 h-full bg-background relative">
      {/* TopNavBar (from JSON) */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 absolute top-0 left-0 right-0">
      <div className="flex items-center gap-6">
      {/* Mobile Menu Trigger */}
      <button className="md:hidden text-slate-400 hover:text-slate-200">
      <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="text-xl font-black text-slate-100 tracking-widest hidden md:block">
                          HABİTAT KONTROL
                      </div>
      </div>
      {/* Navigation Links (Status Indicators) */}
      <div className="hidden lg:flex items-center gap-8">
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 cursor-default flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                          O2: %{resources.oxygen.toFixed(0)}
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-blue-400 border-b-2 border-blue-500 pb-1 cursor-default flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                          GÜÇ: %{resources.power.toFixed(0)}
                      </div>
      <div className="font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 cursor-default flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                          GIDA: %{resources.food.toFixed(0)}
                      </div>
      </div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-4">
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full relative active:scale-95 active:opacity-80">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-error shadow-[0_0_4px_#ffb4ab]"></span>
      </button>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full active:scale-95 active:opacity-80">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Canvas (Bento Grid Layout) */}
      <main className="flex-1 overflow-y-auto p-gutter md:p-margin mt-16 pb-24 md:pb-margin">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-margin">
      <div>
      <h2 className="font-headline-tr text-headline-tr text-on-background flex items-center gap-3">
                              Kaynak Zaman Çizelgesi
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-primary-container/20 text-primary border border-primary/30 tracking-widest">Canlı Veri</span>
      </h2>
      <p className="font-body-tr text-body-tr text-on-surface-variant mt-1">Sektör-7 ana habitat modülleri 72 saatlik tüketim ve projeksiyon verileri.</p>
      </div>
      <div className="flex items-center gap-3">
      <div className="flex items-center bg-surface-container border border-outline-variant rounded-lg p-1">
      <button onClick={() => setTimeRange('24s')} className={`px-3 py-1.5 text-xs font-medium rounded-md ${timeRange === '24s' ? 'bg-surface-variant text-on-background shadow-sm' : 'text-on-surface-variant hover:text-on-background'}`}>24S</button>
      <button onClick={() => setTimeRange('72s')} className={`px-3 py-1.5 text-xs font-medium rounded-md ${timeRange === '72s' ? 'bg-surface-variant text-on-background shadow-sm' : 'text-on-surface-variant hover:text-on-background'}`}>72S</button>
      <button onClick={() => setTimeRange('7g')} className={`px-3 py-1.5 text-xs font-medium rounded-md ${timeRange === '7g' ? 'bg-surface-variant text-on-background shadow-sm' : 'text-on-surface-variant hover:text-on-background'}`}>7G</button>
      </div>
      <button className="flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-tr text-label-tr hover:brightness-110 transition-all shadow-[0_0_10px_rgba(37,99,235,0.3)]">
      <span className="material-symbols-outlined text-[18px]">download</span>
                              Raporu Aktar
                          </button>
      </div>
      </div>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(200px,auto)]">
      {/* Card 1: Master Timeline (Large Span) */}
      <div className="md:col-span-12 row-span-2 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="flex justify-between items-start mb-6 z-10">
      <div>
      <h3 className="font-title-tr text-title-tr text-on-background flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">monitoring</span>
                                      Konsolide Tüketim Matrisi
                                  </h3>
      <p className="font-label-tr text-label-tr text-on-surface-variant mt-1">Tüm birimlerin eşzamanlı izlemi</p>
      </div>
      <div className="flex gap-4">
      <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400"></span><span className="text-xs text-on-surface-variant">O2</span></div>
      <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span><span className="text-xs text-on-surface-variant">Su</span></div>
      <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="text-xs text-on-surface-variant">Güç</span></div>
      </div>
      </div>
      {/* Abstract Chart Simulation */}
      <div className="flex-1 relative w-full mt-4 min-h-[240px]">
      <div className="absolute inset-0 chart-grid"></div>
      {/* Y Axis labels */}
      <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-outline-variant pr-2 border-r border-outline-variant/30">
      <span>100%</span>
      <span>75%</span>
      <span>50%</span>
      <span>25%</span>
      </div>
      {/* X Axis labels */}
      <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-outline-variant pt-2 border-t border-outline-variant/30">
      <span>T-72</span>
      <span>T-48</span>
      <span>T-24</span>
      <span className="text-primary font-bold shadow-[0_0_8px_#2563eb]">ŞİMDİ</span>
      <span>T+24</span>
      </div>
      {/* Lines (Simulated with SVG inside HTML context for structural accuracy without external images) */}
      <div className="absolute left-8 right-0 top-4 bottom-8 overflow-hidden">
      {/* Critical Threshold Line */}
      <div className="absolute top-[75%] left-0 right-0 h-px border-b border-dashed border-error/50 z-0">
      <span className="absolute -top-4 right-0 text-[9px] text-error">Kritik Eşik (25%)</span>
      </div>
      {/* O2 Line */}
      <svg className="w-full h-full absolute inset-0 z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path className="drop-shadow-[0_0_3px_#60a5fa]" d="M0,10 C20,15 40,5 60,20 C80,10 90,25 100,20" fill="none" stroke="#60a5fa" strokeWidth="1.5"></path>
      <path d="M0,10 C20,15 40,5 60,20 C80,10 90,25 100,20 L100,100 L0,100 Z" fill="url(#o2-grad)" opacity="0.1"></path>
      <defs>
      <linearGradient id="o2-grad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#60a5fa"></stop><stop offset="100%" stopColor="transparent"></stop></linearGradient>
      </defs>
      </svg>
      {/* Power Line */}
      <svg className="w-full h-full absolute inset-0 z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path d="M0,40 C15,35 30,50 50,45 C70,60 85,30 100,50" fill="none" stroke="#fbbf24" strokeDasharray="4 2" strokeWidth="1.5"></path>
      </svg>
      {/* Current Time Marker */}
      <div className="absolute top-0 bottom-0 left-[75%] w-px bg-primary/40 shadow-[0_0_5px_#2563eb]"></div>
      </div>
      </div>
      </div>
      {/* Card 2: Energy Projection & Warnings (Medium Left) */}
      <div className="md:col-span-8 row-span-2 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col relative">
      <div className="flex justify-between items-start mb-6">
      <div>
      <h3 className="font-title-tr text-title-tr text-on-background flex items-center gap-2">
      <span className="material-symbols-outlined text-amber-500">bolt</span>
                                      Enerji Rezerve Projeksiyonu
                                  </h3>
      </div>
      <div className="bg-error-container/20 border border-error/30 text-error px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold animate-pulse">
      <span className="material-symbols-outlined text-[14px]">warning</span>
                                  Kritik Uyarı: Reaktör 2
                              </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-surface-container-high rounded-lg p-4 border border-outline-variant/50">
      <div className="text-xs text-on-surface-variant mb-1">Mevcut Çıkış</div>
      <div className="text-2xl font-display-tr text-on-background">{resources.power.toFixed(1)} <span className="text-sm text-outline">%</span></div>
      </div>
      <div className="bg-surface-container-high rounded-lg p-4 border border-outline-variant/50">
      <div className="text-xs text-on-surface-variant mb-1">Kalan Süre (Tam Yük)</div>
      <div className="text-2xl font-display-tr text-amber-400">{Math.max(1, Math.floor(resources.power / 10))}<span className="text-sm text-outline">S</span> {Math.floor((resources.power % 10) * 6)}<span className="text-sm text-outline">D</span></div>
      </div>
      <div className="bg-surface-container-high rounded-lg p-4 border border-outline-variant/50">
      <div className="text-xs text-on-surface-variant mb-1">Tüketim Trendi</div>
      <div className="text-2xl font-display-tr text-error flex items-center gap-1">
      <span className="material-symbols-outlined text-[20px]">trending_up</span> +{((100 - resources.power) / 10).toFixed(1)}%
                                  </div>
      </div>
      </div>
      <div className="flex-1 bg-surface-container-lowest rounded-lg border border-outline-variant/30 p-4 relative overflow-hidden">
      {/* Projection visual */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')]"></div>
      <div className="relative h-full flex flex-col justify-end gap-2 z-10">
      <div className="flex items-end h-3/4 gap-1">
      {/* Bars representing hours */}
      <div className="flex-1 bg-amber-500/20 rounded-t h-[80%] border-t border-amber-500/50"></div>
      <div className="flex-1 bg-amber-500/20 rounded-t h-[75%] border-t border-amber-500/50"></div>
      <div className="flex-1 bg-amber-500/40 rounded-t h-[85%] border-t border-amber-500 relative">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-surface px-1 rounded text-amber-400">ŞİMDİ</div>
      </div>
      <div className="flex-1 bg-error/20 rounded-t h-[95%] border-t border-error/50"></div>
      <div className="flex-1 bg-error/20 rounded-t h-[100%] border-t border-error/50"></div>
      </div>
      <div className="text-xs text-center text-on-surface-variant mt-2 border-t border-outline-variant/30 pt-2">
                                      Sonraki 12 Saat İçin Yük Aşımı Bekleniyor. Yaşam Destek dışı sistemleri kapatın.
                                  </div>
      </div>
      </div>
      </div>
      {/* Card 3: Oxygen Generation (Medium Right) */}
      <div className="md:col-span-4 row-span-2 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col">
      <div className="flex justify-between items-start mb-6">
      <h3 className="font-title-tr text-title-tr text-on-background flex items-center gap-2">
      <span className="material-symbols-outlined text-blue-400">air</span>
                                  O2 Döngüsü
                              </h3>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center relative">
      {/* Circular Progress Simulation */}
      <div className="w-40 h-40 rounded-full border-[8px] border-surface-container-high flex items-center justify-center relative shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 rounded-full border-[8px] border-blue-500 border-t-transparent border-r-transparent -rotate-45" style={{boxShadow: "0 0 15px #3b82f6"}}></div>
      <div className="text-center">
      <div className="text-4xl font-display-tr text-on-background">{resources.oxygen.toFixed(0)}<span className="text-xl text-outline">%</span></div>
      <div className="text-[10px] text-blue-400 uppercase tracking-widest mt-1">{resources.oxygen > 95 ? 'Optimum' : resources.oxygen > 80 ? 'Normal' : 'Kritik'}</div>
      </div>
      </div>
      </div>
      <div className="mt-6 space-y-3">
      <div className="flex justify-between items-center text-sm">
      <span className="text-on-surface-variant">Üretim Hızı</span>
      <span className="text-on-background font-mono-tr">+{(resources.oxygen / 80).toFixed(1)}% / S</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
      <div className="bg-blue-400 h-1.5 rounded-full" style={{width: `${Math.min(100, resources.oxygen)}%`}}></div>
      </div>
      <div className="flex justify-between items-center text-sm pt-2">
      <span className="text-on-surface-variant">Tüketim Hızı</span>
      <span className="text-on-background font-mono-tr">-{((100 - resources.oxygen) / 50).toFixed(1)}% / S</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-1.5">
      <div className="bg-slate-400 h-1.5 rounded-full" style={{width: `${Math.min(100, 100 - resources.oxygen)}%`}}></div>
      </div>
      </div>
      </div>
      {/* Card 4: Water Recycling (Small) */}
      <div className="md:col-span-6 row-span-1 bg-surface-container rounded-xl border border-outline-variant p-md flex items-center gap-6">
      <div className="w-14 h-14 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
      <span className="material-symbols-outlined text-cyan-400 text-[28px]">water_drop</span>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-end mb-2">
      <h3 className="font-title-tr text-title-tr text-on-background">Su Geri Kazanım</h3>
      <span className="text-sm font-bold text-cyan-400">{resources.water.toFixed(0)}% Verim</span>
      </div>
      <div className="w-full bg-surface-container-highest rounded-full h-2 shadow-inner">
      <div className="bg-cyan-500 h-2 rounded-full relative" style={{width: `${resources.water}%`}}>
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 rounded-full blur-[2px]"></div>
      </div>
      </div>
      <p className="text-[11px] text-on-surface-variant mt-2">Günlük kayıp oranı tolerans sınırları içerisinde (&lt; 2L/Gün).</p>
      </div>
      </div>
      {/* Card 5: Food Supply (Small) */}
      <div className="md:col-span-6 row-span-1 bg-surface-container rounded-xl border border-outline-variant p-md flex items-center gap-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-900/20 to-transparent"></div>
      <div className="w-14 h-14 rounded-full bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30 z-10">
      <span className="material-symbols-outlined text-emerald-400 text-[28px]">eco</span>
      </div>
      <div className="flex-1 z-10">
      <div className="flex justify-between items-end mb-1">
      <h3 className="font-title-tr text-title-tr text-on-background">Biyolojik Stok</h3>
      <span className="text-xl font-display-tr text-on-background">{resources.food.toFixed(0)}<span className="text-sm text-outline">G</span></span>
      </div>
      <p className="text-[11px] text-on-surface-variant mb-2">Tahmini tükenme süresi.</p>
      <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`h-1 flex-1 rounded-full ${i < Math.ceil(resources.food / 20) ? 'bg-emerald-500' : 'bg-surface-container-high'}`}></div>
      ))}
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
