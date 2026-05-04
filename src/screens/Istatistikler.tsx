// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: İstatistikler
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface IstatistiklerProps {}

export function Istatistikler(props: IstatistiklerProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <aside className="fixed left-0 h-full w-64 border-r border-slate-800 shadow-[0_0_15px_rgba(37,99,235,0.1)] bg-slate-950 flex flex-col py-4 space-y-2 z-40">
      {/* Brand / Header */}
      <div className="px-6 pb-6 border-b border-slate-800 mb-2">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.2)]">
      <span className="material-symbols-outlined text-blue-400" style={{fontVariationSettings: "'FILL' 1"}}>domain</span>
      </div>
      <div>
      <h1 className="text-lg font-bold text-blue-500 tracking-tight">SEKTÖR-7</h1>
      <p className="font-inter text-xs text-slate-400">Operasyonel Durum: Aktif</p>
      </div>
      </div>
      </div>
      {/* Navigation Tabs */}
      <nav className="flex-1 px-2 space-y-1">
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">assignment_late</span>
                      Görev Panosu
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">architecture</span>
                      Habitat Tasarımı
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">groups</span>
                      Mürettebat
                  </a>
      {/* Active Tab: Kaynaklar (Resources aligns with Insights/Sustainability) */}
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight bg-blue-600/10 text-blue-400 border-r-4 border-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.3)] px-4 py-3 rounded-l-lg translate-x-1" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>timeline</span>
                      Kaynaklar
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">warning</span>
                      Uyarılar
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg group" href="#">
      <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                      Ayarlar
                  </a>
      </nav>
      {/* Footer Tabs */}
      <div className="px-2 pt-4 border-t border-slate-800 space-y-1">
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg" href="#">
      <span className="material-symbols-outlined">account_circle</span>
                      Profil
                  </a>
      <a className="flex items-center gap-3 font-inter text-sm font-medium tracking-tight text-slate-500 hover:text-slate-300 px-4 py-3 hover:bg-slate-900 transition-all duration-150 rounded-lg text-error hover:text-error-container" href="#">
      <span className="material-symbols-outlined">logout</span>
                      Çıkış
                  </a>
      </div>
      </aside>
      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col ml-64 min-h-screen bg-background relative">
      {/* TopNavBar Component */}
      <header className="flex justify-between items-center w-full h-16 px-6 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 sticky top-0">
      {/* Brand */}
      <div className="text-xl font-black text-slate-100 tracking-widest flex items-center gap-2">
                      HABİTAT KONTROL
                      <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] rounded border border-blue-500/30 uppercase tracking-wider ml-2">İstatistik AğI</span>
      </div>
      {/* Navigation Links (Telemetry) */}
      <nav className="hidden md:flex items-center gap-6">
      <div className="flex items-center gap-1.5 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></span>
                          O2: %98
                      </div>
      <div className="flex items-center gap-1.5 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)]"></span>
                          GÜÇ: %85
                      </div>
      <div className="flex items-center gap-1.5 font-inter tracking-tighter text-xs font-bold uppercase text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 px-3 py-1.5 rounded cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
                          GIDA: %92
                      </div>
      </nav>
      {/* Search & Actions */}
      <div className="flex items-center gap-4">
      <div className="relative hidden lg:block">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
      <input className="bg-surface-container-high border border-outline-variant rounded-full py-1.5 pl-9 pr-4 text-sm font-body-tr text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-[0_0_10px_rgba(37,99,235,0)] focus:shadow-[0_0_10px_rgba(37,99,235,0.15)] transition-all w-64" placeholder="Sistem Ara..." type="text" />
      </div>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-tertiary shadow-[0_0_5px_rgba(255,181,150,0.8)]"></span>
      </button>
      <button className="text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 transition-colors duration-200 p-2 rounded-full">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content: Insights Canvas */}
      <main className="flex-1 overflow-y-auto p-gutter custom-scrollbar">
      {/* Page Header */}
      <div className="mb-gutter flex justify-between items-end">
      <div>
      <h2 className="font-display-tr text-display-tr text-on-surface">İstatistikler ve Öngörüler</h2>
      <p className="font-body-tr text-body-tr text-on-surface-variant mt-1">Yapay zeka destekli habitat verimlilik analizi ve iyileştirme tavsiyeleri.</p>
      </div>
      <div className="flex gap-2">
      <button className="px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg font-label-tr text-label-tr text-on-surface hover:bg-surface-variant transition-colors flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px]">download</span>
                              Raporu İndir
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter auto-rows-min">
      {/* 1. Sürdürülebilirlik Puanı (Sustainability Score) - Span 4 */}
      <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col justify-between relative overflow-hidden group">
      {/* Subtle BG Glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
      <div className="flex justify-between items-start z-10">
      <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-primary">eco</span>
                                  Sürdürülebilirlik Endeksi
                              </h3>
      <span className="px-2.5 py-1 bg-primary/20 text-primary rounded text-xs font-bold border border-primary/30">İSTİKRARLI</span>
      </div>
      <div className="flex flex-col items-center justify-center py-8 z-10">
      <div className="relative flex items-center justify-center">
      {/* SVG Circle Progress */}
      <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
      <circle className="text-surface-container-highest" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="6"></circle>
      <circle className="text-primary drop-shadow-[0_0_8px_rgba(180,197,255,0.6)]" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="33" strokeLinecap="round" strokeWidth="6"></circle>
      </svg>
      <div className="absolute flex flex-col items-center">
      <span className="text-5xl font-display-tr font-black text-on-surface drop-shadow-[0_0_10px_rgba(225,226,237,0.3)]">88<span className="text-2xl text-on-surface-variant">%</span></span>
      <span className="font-label-tr text-label-tr text-primary mt-1 flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +2.4%
                                      </span>
      </div>
      </div>
      </div>
      <div className="z-10 grid grid-cols-2 gap-4 mt-4">
      <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/50">
      <div className="font-label-tr text-[10px] text-on-surface-variant uppercase mb-1">Hedef Puan</div>
      <div className="font-mono-tr text-mono-tr text-on-surface">95.0%</div>
      </div>
      <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/50">
      <div className="font-label-tr text-[10px] text-on-surface-variant uppercase mb-1">Kritik Eşik</div>
      <div className="font-mono-tr text-mono-tr text-error">60.0%</div>
      </div>
      </div>
      </div>
      {/* 2. Haftalık Kaynak Verimliliği Trendleri (Resource Trends) - Span 8 */}
      <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl border border-outline-variant p-lg flex flex-col">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-secondary">bar_chart</span>
                                  Haftalık Kaynak Tüketim Trendleri
                              </h3>
      <div className="flex gap-2 bg-surface-container-lowest rounded-lg p-1 border border-outline-variant/50">
      <button className="px-3 py-1 text-xs font-medium bg-surface-variant text-on-surface rounded shadow-sm">O2</button>
      <button className="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-on-surface rounded">GÜÇ</button>
      <button className="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-on-surface rounded">SU</button>
      </div>
      </div>
      {/* CSS Bar Chart Representation */}
      <div className="flex-1 flex items-end gap-2 sm:gap-4 mt-4 pt-4 border-l border-b border-outline-variant relative">
      {/* Y-Axis Labels */}
      <div className="absolute -left-8 bottom-0 top-0 flex flex-col justify-between text-[10px] text-on-surface-variant pb-6">
      <span>%100</span>
      <span>%50</span>
      <span>%0</span>
      </div>
      {/* Horizontal Grid Lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-outline-variant/30"></div>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-outline-variant/30"></div>
      {/* Bars */}
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      {/* Tooltip simulation */}
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Pzt: %75</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[75%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-primary h-[80%] rounded-t-sm shadow-[0_0_10px_rgba(180,197,255,0.3)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant">Pzt</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Sal: %82</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[82%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-primary h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(180,197,255,0.3)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant">Sal</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Çar: %65</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[65%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-primary h-[70%] rounded-t-sm shadow-[0_0_10px_rgba(180,197,255,0.3)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant font-bold text-on-surface">Çar</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Per: %90</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[90%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-error h-[95%] rounded-t-sm shadow-[0_0_10px_rgba(255,180,171,0.5)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant">Per</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Cum: %70</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[70%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-primary h-[75%] rounded-t-sm shadow-[0_0_10px_rgba(180,197,255,0.3)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant">Cum</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Cmt: %60</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[60%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-primary h-[65%] rounded-t-sm shadow-[0_0_10px_rgba(180,197,255,0.3)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant">Cmt</span>
      </div>
      <div className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
      <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded whitespace-nowrap pointer-events-none z-10">Paz: %55</div>
      <div className="w-full bg-primary-container/20 rounded-t-sm h-[55%] relative overflow-hidden group-hover:bg-primary-container/40 transition-colors">
      <div className="absolute bottom-0 w-full bg-primary h-[60%] rounded-t-sm shadow-[0_0_10px_rgba(180,197,255,0.3)]"></div>
      </div>
      <span className="text-xs text-on-surface-variant">Paz</span>
      </div>
      </div>
      </div>
      {/* 3. Yapay Zeka Önerileri (AI Suggestions) - Span 12 */}
      <div className="col-span-12 bg-surface-container rounded-xl border border-outline-variant overflow-hidden">
      <div className="p-lg border-b border-outline-variant bg-surface-container-highest/30 flex justify-between items-center">
      <div>
      <h3 className="font-title-tr text-title-tr text-on-surface flex items-center gap-2">
      <span className="material-symbols-outlined text-tertiary">psychology</span>
                                      AI İyileştirme Modülü
                                  </h3>
      <p className="font-body-tr text-[13px] text-on-surface-variant mt-1">Sistem algoritmaları tarafından belirlenen proaktif eylem planları.</p>
      </div>
      <span className="flex h-3 w-3 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
      </span>
      </div>
      <div className="p-lg grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* AI Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-5 hover:border-tertiary/50 hover:shadow-[0_0_15px_rgba(255,181,150,0.1)] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded bg-tertiary/10 flex items-center justify-center border border-tertiary/20">
      <span className="material-symbols-outlined text-tertiary">thermostat</span>
      </div>
      <span className="px-2 py-0.5 bg-error/10 text-error rounded text-[10px] font-bold border border-error/20">YÜKSEK ÖNCELİK</span>
      </div>
      <h4 className="font-headline-tr text-[16px] text-on-surface mb-2">Termal Regülasyon Optimizasyonu</h4>
      <p className="font-body-tr text-sm text-on-surface-variant mb-4 line-clamp-3">Sektör-4 laboratuvarlarında gece döngüsünde gereksiz termal yük tespit edildi. Isıtıcı modüllerin uyku moduna alınması %4 enerji tasarrufu sağlayacaktır.</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-mono-tr text-xs text-primary">+ %4 Güç</span>
      <button className="px-3 py-1.5 bg-tertiary-container text-on-tertiary-container hover:brightness-110 rounded text-xs font-bold transition-all shadow-[0_0_10px_rgba(188,72,0,0.4)]">UYGULA</button>
      </div>
      </div>
      {/* AI Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-5 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(180,197,255,0.1)] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
      <span className="material-symbols-outlined text-primary">water_drop</span>
      </div>
      <span className="px-2 py-0.5 bg-secondary/10 text-secondary rounded text-[10px] font-bold border border-secondary/20">ORTA ÖNCELİK</span>
      </div>
      <h4 className="font-headline-tr text-[16px] text-on-surface mb-2">Su Geri Dönüşüm Filtresi</h4>
      <p className="font-body-tr text-sm text-on-surface-variant mb-4 line-clamp-3">Hidroponik tarım alanındaki 2 numaralı filtrenin verimliliği %85'e düştü. Ters yıkama döngüsünün başlatılması su kaybını önleyecektir.</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-mono-tr text-xs text-primary">+ 12L/Gün</span>
      <button className="px-3 py-1.5 border border-primary text-primary hover:bg-primary/10 rounded text-xs font-bold transition-all">PROGRAMLA</button>
      </div>
      </div>
      {/* AI Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-5 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(180,197,255,0.1)] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
      <span className="material-symbols-outlined text-primary">air</span>
      </div>
      <span className="px-2 py-0.5 bg-surface-variant text-on-surface rounded text-[10px] font-bold border border-outline-variant/50">DÜŞÜK ÖNCELİK</span>
      </div>
      <h4 className="font-headline-tr text-[16px] text-on-surface mb-2">Oksijen Dağıtım Dengelemesi</h4>
      <p className="font-body-tr text-sm text-on-surface-variant mb-4 line-clamp-3">Mürettebatın büyük kısmı Ortak Alan'da. O2 akışının uyku kabinlerinden bu alana yönlendirilmesi hava kalitesini artıracaktır.</p>
      <div className="flex items-center justify-between mt-auto">
      <span className="font-mono-tr text-xs text-primary">Kalite Artışı</span>
      <button className="px-3 py-1.5 border border-primary text-primary hover:bg-primary/10 rounded text-xs font-bold transition-all">ONAYLA</button>
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
